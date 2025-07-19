"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Trash2,
  Edit,
  Plus,
  LogOut,
  Users,
  BookOpen,
  FileText,
  Briefcase,
  Globe,
  Settings,
  MessageSquare,
} from "lucide-react"

interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  image: string
  category: "current" | "past"
  subcategory: "postdoc" | "phd" | "mtech" | "btech" | "staff"
  joinDate?: string
  graduationDate?: string
  currentPosition?: string // For past members
}

interface Publication {
  id: string
  title: string
  year: string
  journal: string
  abstract: string
  citations: number
}

interface AdminAward {
  id: string
  title: string
  organization: string
  year: string
  description: string
  type: string
}

interface Opening {
  id: string
  position: string
  description: string
  requirements: string[]
  duration: string
  funding: string
  type: string
}

interface ResearchArea {
  id: string
  title: string
  description: string
  keyPoints: string[]
  publications: number
  projects: number
}

interface Collaboration {
  id: string
  type: string
  name: string
  role: string
  location: string
}

interface SiteSettings {
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  aboutSummary: string
  contactEmail: string
  contactPhone: string
  officeHours: string
  officeLocation: string
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: "", password: "" })
  const [activeTab, setActiveTab] = useState("team")

  // Team Members State
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null)
  const [showAddMemberForm, setShowAddMemberForm] = useState(false)
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    description: "",
    image: "",
    category: "current" as "current" | "past",
    subcategory: "phd" as "postdoc" | "phd" | "mtech" | "btech" | "staff",
    joinDate: "",
    graduationDate: "",
    currentPosition: "",
  })

  // Publications State
  const [publications, setPublications] = useState<Publication[]>([])
  const [editingPublication, setEditingPublication] = useState<Publication | null>(null)
  const [showAddPublicationForm, setShowAddPublicationForm] = useState(false)
  const [newPublication, setNewPublication] = useState({
    title: "",
    year: "",
    journal: "",
    abstract: "",
    citations: 0,
  })

  // Awards State
  const [awards, setAwards] = useState<AdminAward[]>([])
  const [editingAward, setEditingAward] = useState<AdminAward | null>(null)
  const [showAddAwardForm, setShowAddAwardForm] = useState(false)
  const [newAward, setNewAward] = useState({
    title: "",
    organization: "",
    year: "",
    description: "",
    type: "",
  })

  // Openings State
  const [openings, setOpenings] = useState<Opening[]>([])
  const [editingOpening, setEditingOpening] = useState<Opening | null>(null)
  const [showAddOpeningForm, setShowAddOpeningForm] = useState(false)
  const [newOpening, setNewOpening] = useState({
    position: "",
    description: "",
    requirements: [""],
    duration: "",
    funding: "",
    type: "",
  })

  // Research Areas State
  const [researchAreas, setResearchAreas] = useState<ResearchArea[]>([])
  const [editingResearchArea, setEditingResearchArea] = useState<ResearchArea | null>(null)
  const [showAddResearchAreaForm, setShowAddResearchAreaForm] = useState(false)
  const [newResearchArea, setNewResearchArea] = useState({
    title: "",
    description: "",
    keyPoints: [""],
    publications: 0,
    projects: 0,
  })

  // Collaborations State
  const [collaborations, setCollaborations] = useState<Collaboration[]>([])
  const [editingCollaboration, setEditingCollaboration] = useState<Collaboration | null>(null)
  const [showAddCollaborationForm, setShowAddCollaborationForm] = useState(false)
  const [newCollaboration, setNewCollaboration] = useState({
    type: "",
    name: "",
    role: "",
    location: "",
  })

  // Site Settings State
  const [siteSettings, setSiteSettings] = useState<SiteSettings>({
    heroTitle: "Professor Archak Mittal",
    heroSubtitle: "Assistant Professor, Department of Civil Engineering",
    heroDescription:
      "Advancing transportation engineering through connected vehicles, intelligent systems, and data-driven solutions for safer, more efficient urban mobility.",
    aboutSummary:
      "Professor Archak Mittal is an Assistant Professor in the Department of Civil Engineering at the Indian Institute of Technology Bombay.",
    contactEmail: "archak@iitb.ac.in",
    contactPhone: "+91-22-2576-7132",
    officeHours: "Monday - Friday: 9:00 AM - 6:00 PM",
    officeLocation: "Department of Civil Engineering, IIT Bombay",
  })

  // Hardcoded credentials
  const ADMIN_EMAIL = "archak@iitb.ac.in"
  const ADMIN_PASSWORD = "iitb2024"

  useEffect(() => {
    // Check if already logged in
    const loggedIn = localStorage.getItem("adminLoggedIn")
    if (loggedIn === "true") {
      setIsLoggedIn(true)
    }

    // Load data
    const savedMembers = localStorage.getItem("teamMembers")
    if (savedMembers) {
      setTeamMembers(JSON.parse(savedMembers))
    }

    const savedPublications = localStorage.getItem("publications")
    if (savedPublications) {
      setPublications(JSON.parse(savedPublications))
    }

    const savedAwards = localStorage.getItem("awards")
    if (savedAwards) {
      setAwards(JSON.parse(savedAwards))
    }

    const savedOpenings = localStorage.getItem("openings")
    if (savedOpenings) {
      setOpenings(JSON.parse(savedOpenings))
    }

    const savedResearchAreas = localStorage.getItem("researchAreas")
    if (savedResearchAreas) {
      setResearchAreas(JSON.parse(savedResearchAreas))
    }

    const savedCollaborations = localStorage.getItem("collaborations")
    if (savedCollaborations) {
      setCollaborations(JSON.parse(savedCollaborations))
    }

    const savedSettings = localStorage.getItem("siteSettings")
    if (savedSettings) {
      setSiteSettings(JSON.parse(savedSettings))
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginForm.email === ADMIN_EMAIL && loginForm.password === ADMIN_PASSWORD) {
      setIsLoggedIn(true)
      localStorage.setItem("adminLoggedIn", "true")
    } else {
      alert("Invalid credentials")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem("adminLoggedIn")
    setLoginForm({ email: "", password: "" })
  }

  // Team Members Functions
  const saveTeamMembers = (members: TeamMember[]) => {
    localStorage.setItem("teamMembers", JSON.stringify(members))
    setTeamMembers(members)
  }

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault()
    const member: TeamMember = {
      id: Date.now().toString(),
      ...newMember,
    }
    const updatedMembers = [...teamMembers, member]
    saveTeamMembers(updatedMembers)
    setNewMember({
      name: "",
      role: "",
      description: "",
      image: "",
      category: "current",
      subcategory: "phd",
      joinDate: "",
      graduationDate: "",
      currentPosition: "",
    })
    setShowAddMemberForm(false)
  }

  const handleUpdateMember = (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingMember) return

    const updatedMembers = teamMembers.map((member) => (member.id === editingMember.id ? editingMember : member))
    saveTeamMembers(updatedMembers)
    setEditingMember(null)
  }

  const handleDeleteMember = (id: string) => {
    if (confirm("Are you sure you want to delete this team member?")) {
      const updatedMembers = teamMembers.filter((member) => member.id !== id)
      saveTeamMembers(updatedMembers)
    }
  }

  // Publications Functions
  const savePublications = (pubs: Publication[]) => {
    localStorage.setItem("publications", JSON.stringify(pubs))
    setPublications(pubs)
  }

  const handleAddPublication = (e: React.FormEvent) => {
    e.preventDefault()
    const publication: Publication = {
      id: Date.now().toString(),
      ...newPublication,
    }
    const updatedPublications = [...publications, publication]
    savePublications(updatedPublications)
    setNewPublication({ title: "", year: "", journal: "", abstract: "", citations: 0 })
    setShowAddPublicationForm(false)
  }

  const handleUpdatePublication = (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingPublication) return

    const updatedPublications = publications.map((pub) => (pub.id === editingPublication.id ? editingPublication : pub))
    savePublications(updatedPublications)
    setEditingPublication(null)
  }

  const handleDeletePublication = (id: string) => {
    if (confirm("Are you sure you want to delete this publication?")) {
      const updatedPublications = publications.filter((pub) => pub.id !== id)
      savePublications(updatedPublications)
    }
  }

  // Awards Functions
  const saveAwards = (awardsList: AdminAward[]) => {
    localStorage.setItem("awards", JSON.stringify(awardsList))
    setAwards(awardsList)
  }

  const handleAddAward = (e: React.FormEvent) => {
    e.preventDefault()
    const award: AdminAward = {
      id: Date.now().toString(),
      ...newAward,
    }
    const updatedAwards = [...awards, award]
    saveAwards(updatedAwards)
    setNewAward({ title: "", organization: "", year: "", description: "", type: "" })
    setShowAddAwardForm(false)
  }

  const handleUpdateAward = (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingAward) return

    const updatedAwards = awards.map((award) => (award.id === editingAward.id ? editingAward : award))
    saveAwards(updatedAwards)
    setEditingAward(null)
  }

  const handleDeleteAward = (id: string) => {
    if (confirm("Are you sure you want to delete this award?")) {
      const updatedAwards = awards.filter((award) => award.id !== id)
      saveAwards(updatedAwards)
    }
  }

  // Openings Functions
  const saveOpenings = (openingsList: Opening[]) => {
    localStorage.setItem("openings", JSON.stringify(openingsList))
    setOpenings(openingsList)
  }

  const handleAddOpening = (e: React.FormEvent) => {
    e.preventDefault()
    const opening: Opening = {
      id: Date.now().toString(),
      ...newOpening,
      requirements: newOpening.requirements.filter((req) => req.trim() !== ""),
    }
    const updatedOpenings = [...openings, opening]
    saveOpenings(updatedOpenings)
    setNewOpening({ position: "", description: "", requirements: [""], duration: "", funding: "", type: "" })
    setShowAddOpeningForm(false)
  }

  const handleUpdateOpening = (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingOpening) return

    const updatedOpenings = openings.map((opening) => (opening.id === editingOpening.id ? editingOpening : opening))
    saveOpenings(updatedOpenings)
    setEditingOpening(null)
  }

  const handleDeleteOpening = (id: string) => {
    if (confirm("Are you sure you want to delete this opening?")) {
      const updatedOpenings = openings.filter((opening) => opening.id !== id)
      saveOpenings(updatedOpenings)
    }
  }

  // Research Areas Functions
  const saveResearchAreas = (areas: ResearchArea[]) => {
    localStorage.setItem("researchAreas", JSON.stringify(areas))
    setResearchAreas(areas)
  }

  const handleAddResearchArea = (e: React.FormEvent) => {
    e.preventDefault()
    const area: ResearchArea = {
      id: Date.now().toString(),
      ...newResearchArea,
      keyPoints: newResearchArea.keyPoints.filter((point) => point.trim() !== ""),
    }
    const updatedAreas = [...researchAreas, area]
    saveResearchAreas(updatedAreas)
    setNewResearchArea({ title: "", description: "", keyPoints: [""], publications: 0, projects: 0 })
    setShowAddResearchAreaForm(false)
  }

  // Collaborations Functions
  const saveCollaborations = (collabs: Collaboration[]) => {
    localStorage.setItem("collaborations", JSON.stringify(collabs))
    setCollaborations(collabs)
  }

  const handleAddCollaboration = (e: React.FormEvent) => {
    e.preventDefault()
    const collaboration: Collaboration = {
      id: Date.now().toString(),
      ...newCollaboration,
    }
    const updatedCollaborations = [...collaborations, collaboration]
    saveCollaborations(updatedCollaborations)
    setNewCollaboration({ type: "", name: "", role: "", location: "" })
    setShowAddCollaborationForm(false)
  }

  // Site Settings Functions
  const saveSiteSettings = (settings: SiteSettings) => {
    localStorage.setItem("siteSettings", JSON.stringify(settings))
    setSiteSettings(settings)
  }

  const handleUpdateSiteSettings = (e: React.FormEvent) => {
    e.preventDefault()
    saveSiteSettings(siteSettings)
    alert("Site settings updated successfully!")
  }

  // Helper functions for dynamic form fields
  const addRequirement = (isEditing = false) => {
    if (isEditing && editingOpening) {
      setEditingOpening({
        ...editingOpening,
        requirements: [...editingOpening.requirements, ""],
      })
    } else {
      setNewOpening({
        ...newOpening,
        requirements: [...newOpening.requirements, ""],
      })
    }
  }

  const removeRequirement = (index: number, isEditing = false) => {
    if (isEditing && editingOpening) {
      const newReqs = editingOpening.requirements.filter((_, i) => i !== index)
      setEditingOpening({
        ...editingOpening,
        requirements: newReqs,
      })
    } else {
      const newReqs = newOpening.requirements.filter((_, i) => i !== index)
      setNewOpening({
        ...newOpening,
        requirements: newReqs,
      })
    }
  }

  const updateRequirement = (index: number, value: string, isEditing = false) => {
    if (isEditing && editingOpening) {
      const newReqs = [...editingOpening.requirements]
      newReqs[index] = value
      setEditingOpening({
        ...editingOpening,
        requirements: newReqs,
      })
    } else {
      const newReqs = [...newOpening.requirements]
      newReqs[index] = value
      setNewOpening({
        ...newOpening,
        requirements: newReqs,
      })
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="admin-container flex items-center justify-center p-4">
        <Card className="admin-card w-full max-w-md card-enhanced">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-iitb-navy">Admin Login</CardTitle>
            <p className="text-gray-600">Access the content management dashboard</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  className="admin-input"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="admin-input"
                  required
                />
              </div>
              <Button type="submit" className="btn-iitb w-full text-white">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="admin-container p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-iitb-navy">Admin Dashboard</h1>
            <p className="text-gray-600">Manage website content and information</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="btn-iitb-outline bg-transparent">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-6 gap-4 mb-8">
          <Card className="admin-card card-enhanced">
            <CardContent className="p-4 text-center">
              <Users className="w-6 h-6 text-iitb-navy mx-auto mb-1" />
              <div className="text-xl font-bold text-iitb-navy">{teamMembers.length}</div>
              <div className="text-xs text-gray-600">Team Members</div>
            </CardContent>
          </Card>
          <Card className="admin-card card-enhanced">
            <CardContent className="p-4 text-center">
              <BookOpen className="w-6 h-6 text-iitb-navy mx-auto mb-1" />
              <div className="text-xl font-bold text-iitb-navy">{publications.length}</div>
              <div className="text-xs text-gray-600">Publications</div>
            </CardContent>
          </Card>
          <Card className="admin-card card-enhanced">
            <CardContent className="p-4 text-center">
              <FileText className="w-6 h-6 text-iitb-navy mx-auto mb-1" />
              <div className="text-xl font-bold text-iitb-navy">{awards.length}</div>
              <div className="text-xs text-gray-600">Awards</div>
            </CardContent>
          </Card>
          <Card className="admin-card card-enhanced">
            <CardContent className="p-4 text-center">
              <Briefcase className="w-6 h-6 text-iitb-navy mx-auto mb-1" />
              <div className="text-xl font-bold text-iitb-navy">{openings.length}</div>
              <div className="text-xs text-gray-600">Openings</div>
            </CardContent>
          </Card>
          <Card className="admin-card card-enhanced">
            <CardContent className="p-4 text-center">
              <MessageSquare className="w-6 h-6 text-iitb-navy mx-auto mb-1" />
              <div className="text-xl font-bold text-iitb-navy">{researchAreas.length}</div>
              <div className="text-xs text-gray-600">Research Areas</div>
            </CardContent>
          </Card>
          <Card className="admin-card card-enhanced">
            <CardContent className="p-4 text-center">
              <Globe className="w-6 h-6 text-iitb-navy mx-auto mb-1" />
              <div className="text-xl font-bold text-iitb-navy">{collaborations.length}</div>
              <div className="text-xs text-gray-600">Collaborations</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="tabs-enhanced mb-8">
          <div className="flex flex-wrap justify-center">
            {[
              { id: "team", label: "Team Members", icon: Users },
              { id: "publications", label: "Publications", icon: BookOpen },
              { id: "awards", label: "Awards & Honors", icon: FileText },
              { id: "openings", label: "Current Openings", icon: Briefcase },
              { id: "research", label: "Research Areas", icon: MessageSquare },
              { id: "collaborations", label: "Collaborations", icon: Globe },
              { id: "settings", label: "Site Settings", icon: Settings },
            ].map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-enhanced flex items-center gap-2 ${activeTab === tab.id ? "active" : ""}`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Team Members Tab */}
        {activeTab === "team" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-iitb-navy">Team Members</h2>
              <Button onClick={() => setShowAddMemberForm(true)} className="btn-iitb text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Team Member
              </Button>
            </div>

            {/* Add Member Form */}
            {showAddMemberForm && (
              <Card className="admin-card card-enhanced">
                <CardHeader>
                  <CardTitle className="text-iitb-navy">Add New Team Member</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddMember} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={newMember.name}
                          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                          className="admin-input"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="role">Role/Position</Label>
                        <Input
                          id="role"
                          value={newMember.role}
                          onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                          className="admin-input"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category">Status</Label>
                        <select
                          id="category"
                          value={newMember.category}
                          onChange={(e) =>
                            setNewMember({ ...newMember, category: e.target.value as "current" | "past" })
                          }
                          className="admin-input"
                          required
                        >
                          <option value="current">Current Member</option>
                          <option value="past">Past Member</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="subcategory">Category</Label>
                        <select
                          id="subcategory"
                          value={newMember.subcategory}
                          onChange={(e) =>
                            setNewMember({
                              ...newMember,
                              subcategory: e.target.value as "postdoc" | "phd" | "mtech" | "btech" | "staff",
                            })
                          }
                          className="admin-input"
                          required
                        >
                          <option value="postdoc">Post-Doctoral Fellow</option>
                          <option value="phd">PhD Candidate</option>
                          <option value="mtech">M.Tech Student</option>
                          <option value="btech">B.Tech Student</option>
                          <option value="staff">Project Staff</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="joinDate">Join Date</Label>
                        <Input
                          id="joinDate"
                          type="date"
                          value={newMember.joinDate}
                          onChange={(e) => setNewMember({ ...newMember, joinDate: e.target.value })}
                          className="admin-input"
                        />
                      </div>
                      {newMember.category === "past" && (
                        <div>
                          <Label htmlFor="graduationDate">Graduation/End Date</Label>
                          <Input
                            id="graduationDate"
                            type="date"
                            value={newMember.graduationDate}
                            onChange={(e) => setNewMember({ ...newMember, graduationDate: e.target.value })}
                            className="admin-input"
                          />
                        </div>
                      )}
                    </div>

                    {newMember.category === "past" && (
                      <div>
                        <Label htmlFor="currentPosition">Current Position (for past members)</Label>
                        <Input
                          id="currentPosition"
                          value={newMember.currentPosition}
                          onChange={(e) => setNewMember({ ...newMember, currentPosition: e.target.value })}
                          className="admin-input"
                          placeholder="e.g., Software Engineer at Google, PhD at MIT"
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newMember.description}
                        onChange={(e) => setNewMember({ ...newMember, description: e.target.value })}
                        className="admin-input"
                        rows={3}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="image">Image URL</Label>
                      <Input
                        id="image"
                        type="url"
                        value={newMember.image}
                        onChange={(e) => setNewMember({ ...newMember, image: e.target.value })}
                        className="admin-input"
                        placeholder="https://example.com/image.jpg"
                      />
                      <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
                        <p className="text-sm text-blue-800 font-medium mb-2">How to get an image URL:</p>
                        <ol className="text-xs text-blue-700 space-y-1 list-decimal list-inside">
                          <li>Upload your image to Google Drive and make it publicly viewable</li>
                          <li>Right-click the image → "Get link" → Change to "Anyone with the link"</li>
                          <li>Copy the link and replace "/view?usp=sharing" with "/preview"</li>
                          <li>Or use free services like imgur.com, postimg.cc, or imgbb.com</li>
                          <li>For best results, use images that are 300x300 pixels or larger</li>
                        </ol>
                        <p className="text-xs text-blue-600 mt-2 italic">
                          Example: https://drive.google.com/file/d/1ABC123.../preview
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="btn-iitb text-white">
                        Add Member
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          setShowAddMemberForm(false)
                          setNewMember({
                            name: "",
                            role: "",
                            description: "",
                            image: "",
                            category: "current",
                            subcategory: "phd",
                            joinDate: "",
                            graduationDate: "",
                            currentPosition: "",
                          })
                        }}
                        variant="outline"
                        className="btn-iitb-outline"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Edit Member Form */}
            {editingMember && (
              <Card className="admin-card card-enhanced">
                <CardHeader>
                  <CardTitle className="text-iitb-navy">Edit Team Member</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateMember} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="edit-name">Name</Label>
                        <Input
                          id="edit-name"
                          value={editingMember.name}
                          onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                          className="admin-input"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="edit-role">Role/Position</Label>
                        <Input
                          id="edit-role"
                          value={editingMember.role}
                          onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
                          className="admin-input"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="edit-description">Description</Label>
                      <Textarea
                        id="edit-description"
                        value={editingMember.description}
                        onChange={(e) => setEditingMember({ ...editingMember, description: e.target.value })}
                        className="admin-input"
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-image">Image URL</Label>
                      <Input
                        id="edit-image"
                        type="url"
                        value={editingMember.image}
                        onChange={(e) => setEditingMember({ ...editingMember, image: e.target.value })}
                        className="admin-input"
                        placeholder="https://example.com/image.jpg"
                      />
                      <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
                        <p className="text-sm text-blue-800 font-medium mb-2">How to get an image URL:</p>
                        <ol className="text-xs text-blue-700 space-y-1 list-decimal list-inside">
                          <li>Upload your image to Google Drive and make it publicly viewable</li>
                          <li>Right-click the image → "Get link" → Change to "Anyone with the link"</li>
                          <li>Copy the link and replace "/view?usp=sharing" with "/preview"</li>
                          <li>Or use free services like imgur.com, postimg.cc, or imgbb.com</li>
                          <li>For best results, use images that are 300x300 pixels or larger</li>
                        </ol>
                        <p className="text-xs text-blue-600 mt-2 italic">
                          Example: https://drive.google.com/file/d/1ABC123.../preview
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button type="submit" className="btn-iitb text-white">
                        Update Member
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setEditingMember(null)}
                        variant="outline"
                        className="btn-iitb-outline"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Team Members List */}
            <Card className="admin-card card-enhanced">
              <CardContent>
                {teamMembers.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No team members added yet. Click "Add Team Member" to get started.
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* Current Members */}
                    <div>
                      <h3 className="text-lg font-semibold text-iitb-navy mb-4">Current Members</h3>
                      {["postdoc", "phd", "mtech", "btech", "staff"].map((subcat) => {
                        const subcatMembers = teamMembers.filter(
                          (m) => m.category === "current" && m.subcategory === subcat,
                        )
                        if (subcatMembers.length === 0) return null

                        const subcatNames = {
                          postdoc: "Post-Doctoral Fellows",
                          phd: "PhD Candidates",
                          mtech: "M.Tech Students",
                          btech: "B.Tech Students",
                          staff: "Project Staff",
                        }

                        return (
                          <div key={subcat} className="mb-6">
                            <h4 className="text-md font-medium text-iitb-accent mb-3">
                              {subcatNames[subcat as keyof typeof subcatNames]}
                            </h4>
                            <div className="space-y-3">
                              {subcatMembers.map((member) => (
                                <div
                                  key={member.id}
                                  className="flex items-center gap-4 p-3 border rounded-lg bg-green-50"
                                >
                                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                                    {member.image ? (
                                      <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <Users className="w-6 h-6 text-gray-400" />
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="font-semibold text-iitb-navy">{member.name}</h5>
                                    <p className="text-iitb-accent text-sm">{member.role}</p>
                                    <p className="text-gray-600 text-xs">{member.description}</p>
                                    {member.joinDate && (
                                      <p className="text-gray-500 text-xs">
                                        Joined: {new Date(member.joinDate).toLocaleDateString()}
                                      </p>
                                    )}
                                  </div>
                                  <div className="flex gap-2">
                                    <Button
                                      onClick={() => setEditingMember(member)}
                                      variant="outline"
                                      size="sm"
                                      className="btn-iitb-outline"
                                    >
                                      <Edit className="w-4 h-4" />
                                    </Button>
                                    <Button
                                      onClick={() => handleDeleteMember(member.id)}
                                      variant="outline"
                                      size="sm"
                                      className="text-red-600 border-red-600 hover:bg-red-50"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Past Members */}
                    <div>
                      <h3 className="text-lg font-semibold text-iitb-navy mb-4">Past Members</h3>
                      {["postdoc", "phd", "mtech", "btech", "staff"].map((subcat) => {
                        const subcatMembers = teamMembers.filter(
                          (m) => m.category === "past" && m.subcategory === subcat,
                        )
                        if (subcatMembers.length === 0) return null

                        const subcatNames = {
                          postdoc: "Post-Doctoral Fellows",
                          phd: "PhD Candidates",
                          mtech: "M.Tech Students",
                          btech: "B.Tech Students",
                          staff: "Project Staff",
                        }

                        return (
                          <div key={subcat} className="mb-6">
                            <h4 className="text-md font-medium text-iitb-accent mb-3">
                              {subcatNames[subcat as keyof typeof subcatNames]}
                            </h4>
                            <div className="space-y-3">
                              {subcatMembers.map((member) => (
                                <div
                                  key={member.id}
                                  className="flex items-center gap-4 p-3 border rounded-lg bg-gray-50"
                                >
                                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                                    {member.image ? (
                                      <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <Users className="w-6 h-6 text-gray-400" />
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="font-semibold text-iitb-navy">{member.name}</h5>
                                    <p className="text-iitb-accent text-sm">{member.role}</p>
                                    <p className="text-gray-600 text-xs">{member.description}</p>
                                    <div className="flex gap-4 text-xs text-gray-500 mt-1">
                                      {member.joinDate && (
                                        <span>Joined: {new Date(member.joinDate).toLocaleDateString()}</span>
                                      )}
                                      {member.graduationDate && (
                                        <span>Left: {new Date(member.graduationDate).toLocaleDateString()}</span>
                                      )}
                                    </div>
                                    {member.currentPosition && (
                                      <p className="text-green-600 text-xs mt-1">Now: {member.currentPosition}</p>
                                    )}
                                  </div>
                                  <div className="flex gap-2">
                                    <Button
                                      onClick={() => setEditingMember(member)}
                                      variant="outline"
                                      size="sm"
                                      className="btn-iitb-outline"
                                    >
                                      <Edit className="w-4 h-4" />
                                    </Button>
                                    <Button
                                      onClick={() => handleDeleteMember(member.id)}
                                      variant="outline"
                                      size="sm"
                                      className="text-red-600 border-red-600 hover:bg-red-50"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Publications Tab */}
        {activeTab === "publications" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-iitb-navy">Publications</h2>
              <Button onClick={() => setShowAddPublicationForm(true)} className="btn-iitb text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Publication
              </Button>
            </div>

            {/* Add Publication Form */}
            {showAddPublicationForm && (
              <Card className="admin-card card-enhanced">
                <CardHeader>
                  <CardTitle className="text-iitb-navy">Add New Publication</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddPublication} className="space-y-4">
                    <div>
                      <Label htmlFor="pub-title">Title</Label>
                      <Input
                        id="pub-title"
                        value={newPublication.title}
                        onChange={(e) => setNewPublication({ ...newPublication, title: e.target.value })}
                        className="admin-input"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="pub-year">Year</Label>
                        <Input
                          id="pub-year"
                          value={newPublication.year}
                          onChange={(e) => setNewPublication({ ...newPublication, year: e.target.value })}
                          className="admin-input"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="pub-journal">Journal</Label>
                        <Input
                          id="pub-journal"
                          value={newPublication.journal}
                          onChange={(e) => setNewPublication({ ...newPublication, journal: e.target.value })}
                          className="admin-input"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="pub-citations">Citations</Label>
                        <Input
                          id="pub-citations"
                          type="number"
                          value={newPublication.citations}
                          onChange={(e) =>
                            setNewPublication({ ...newPublication, citations: Number.parseInt(e.target.value) || 0 })
                          }
                          className="admin-input"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="pub-abstract">Abstract</Label>
                      <Textarea
                        id="pub-abstract"
                        value={newPublication.abstract}
                        onChange={(e) => setNewPublication({ ...newPublication, abstract: e.target.value })}
                        className="admin-input"
                        rows={4}
                        required
                      />
                    </div>
                    <div className="flex gap-4">
                      <Button type="submit" className="btn-iitb text-white">
                        Add Publication
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setShowAddPublicationForm(false)}
                        variant="outline"
                        className="btn-iitb-outline"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Publications List */}
            <Card className="admin-card card-enhanced">
              <CardContent>
                {publications.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No publications added yet. Click "Add Publication" to get started.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {publications.map((pub) => (
                      <div key={pub.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-iitb-navy flex-1 pr-4">{pub.title}</h3>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => setEditingPublication(pub)}
                              variant="outline"
                              size="sm"
                              className="btn-iitb-outline"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              onClick={() => handleDeletePublication(pub.id)}
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-iitb-accent text-sm mb-1">
                          {pub.journal} • {pub.year}
                        </p>
                        <p className="text-gray-600 text-sm mb-2">{pub.abstract}</p>
                        <p className="text-xs text-gray-500">{pub.citations} citations</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Awards Tab */}
        {activeTab === "awards" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-iitb-navy">Awards & Honors</h2>
              <Button onClick={() => setShowAddAwardForm(true)} className="btn-iitb text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Award
              </Button>
            </div>

            {/* Add Award Form */}
            {showAddAwardForm && (
              <Card className="admin-card card-enhanced">
                <CardHeader>
                  <CardTitle className="text-iitb-navy">Add New Award</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddAward} className="space-y-4">
                    <div>
                      <Label htmlFor="award-title">Title</Label>
                      <Input
                        id="award-title"
                        value={newAward.title}
                        onChange={(e) => setNewAward({ ...newAward, title: e.target.value })}
                        className="admin-input"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="award-organization">Organization</Label>
                        <Input
                          id="award-organization"
                          value={newAward.organization}
                          onChange={(e) => setNewAward({ ...newAward, organization: e.target.value })}
                          className="admin-input"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="award-year">Year</Label>
                        <Input
                          id="award-year"
                          value={newAward.year}
                          onChange={(e) => setNewAward({ ...newAward, year: e.target.value })}
                          className="admin-input"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="award-type">Type</Label>
                        <Input
                          id="award-type"
                          value={newAward.type}
                          onChange={(e) => setNewAward({ ...newAward, type: e.target.value })}
                          className="admin-input"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="award-description">Description</Label>
                      <Textarea
                        id="award-description"
                        value={newAward.description}
                        onChange={(e) => setNewAward({ ...newAward, description: e.target.value })}
                        className="admin-input"
                        rows={3}
                        required
                      />
                    </div>
                    <div className="flex gap-4">
                      <Button type="submit" className="btn-iitb text-white">
                        Add Award
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setShowAddAwardForm(false)}
                        variant="outline"
                        className="btn-iitb-outline"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Awards List */}
            <Card className="admin-card card-enhanced">
              <CardContent>
                {awards.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No awards added yet. Click "Add Award" to get started.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {awards.map((award) => (
                      <div key={award.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-iitb-navy flex-1 pr-4">{award.title}</h3>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => setEditingAward(award)}
                              variant="outline"
                              size="sm"
                              className="btn-iitb-outline"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              onClick={() => handleDeleteAward(award.id)}
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-iitb-accent text-sm mb-1">
                          {award.organization} • {award.year}
                        </p>
                        <p className="text-gray-600 text-sm mb-2">{award.description}</p>
                        <p className="text-xs text-gray-500">{award.type}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Current Openings Tab */}
        {activeTab === "openings" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-iitb-navy">Current Openings</h2>
              <Button onClick={() => setShowAddOpeningForm(true)} className="btn-iitb text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Opening
              </Button>
            </div>

            {/* Add Opening Form */}
            {showAddOpeningForm && (
              <Card className="admin-card card-enhanced">
                <CardHeader>
                  <CardTitle className="text-iitb-navy">Add New Opening</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddOpening} className="space-y-4">
                    <div>
                      <Label htmlFor="opening-position">Position Title</Label>
                      <Input
                        id="opening-position"
                        value={newOpening.position}
                        onChange={(e) => setNewOpening({ ...newOpening, position: e.target.value })}
                        className="admin-input"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="opening-type">Type</Label>
                        <Input
                          id="opening-type"
                          value={newOpening.type}
                          onChange={(e) => setNewOpening({ ...newOpening, type: e.target.value })}
                          className="admin-input"
                          placeholder="e.g., Full-time, Part-time, Internship"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="opening-duration">Duration</Label>
                        <Input
                          id="opening-duration"
                          value={newOpening.duration}
                          onChange={(e) => setNewOpening({ ...newOpening, duration: e.target.value })}
                          className="admin-input"
                          placeholder="e.g., 2 years, 6 months"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="opening-funding">Funding Status</Label>
                        <Input
                          id="opening-funding"
                          value={newOpening.funding}
                          onChange={(e) => setNewOpening({ ...newOpening, funding: e.target.value })}
                          className="admin-input"
                          placeholder="e.g., Funded, Fellowship available"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="opening-description">Description</Label>
                      <Textarea
                        id="opening-description"
                        value={newOpening.description}
                        onChange={(e) => setNewOpening({ ...newOpening, description: e.target.value })}
                        className="admin-input"
                        rows={4}
                        required
                      />
                    </div>
                    <div>
                      <Label>Requirements</Label>
                      {newOpening.requirements.map((req, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <Input
                            value={req}
                            onChange={(e) => updateRequirement(index, e.target.value)}
                            className="admin-input"
                            placeholder="Enter requirement"
                          />
                          <Button
                            type="button"
                            onClick={() => removeRequirement(index)}
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        onClick={() => addRequirement()}
                        variant="outline"
                        size="sm"
                        className="btn-iitb-outline"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Requirement
                      </Button>
                    </div>
                    <div className="flex gap-4">
                      <Button type="submit" className="btn-iitb text-white">
                        Add Opening
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setShowAddOpeningForm(false)}
                        variant="outline"
                        className="btn-iitb-outline"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Openings List */}
            <Card className="admin-card card-enhanced">
              <CardContent>
                {openings.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No openings added yet. Click "Add Opening" to get started.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {openings.map((opening) => (
                      <div key={opening.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-iitb-navy flex-1 pr-4">{opening.position}</h3>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => setEditingOpening(opening)}
                              variant="outline"
                              size="sm"
                              className="btn-iitb-outline"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              onClick={() => handleDeleteOpening(opening.id)}
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-iitb-accent text-sm mb-1">
                          {opening.type} • {opening.duration} • {opening.funding}
                        </p>
                        <p className="text-gray-600 text-sm mb-2">{opening.description}</p>
                        <div className="text-xs text-gray-500">
                          <strong>Requirements:</strong> {opening.requirements.join(", ")}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Research Areas Tab */}
        {activeTab === "research" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-iitb-navy">Research Areas</h2>
              <Button onClick={() => setShowAddResearchAreaForm(true)} className="btn-iitb text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Research Area
              </Button>
            </div>

            {/* Add Research Area Form */}
            {showAddResearchAreaForm && (
              <Card className="admin-card card-enhanced">
                <CardHeader>
                  <CardTitle className="text-iitb-navy">Add New Research Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddResearchArea} className="space-y-4">
                    <div>
                      <Label htmlFor="research-title">Title</Label>
                      <Input
                        id="research-title"
                        value={newResearchArea.title}
                        onChange={(e) => setNewResearchArea({ ...newResearchArea, title: e.target.value })}
                        className="admin-input"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="research-description">Description</Label>
                      <Textarea
                        id="research-description"
                        value={newResearchArea.description}
                        onChange={(e) => setNewResearchArea({ ...newResearchArea, description: e.target.value })}
                        className="admin-input"
                        rows={4}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="research-publications">Publications Count</Label>
                        <Input
                          id="research-publications"
                          type="number"
                          value={newResearchArea.publications}
                          onChange={(e) =>
                            setNewResearchArea({
                              ...newResearchArea,
                              publications: Number.parseInt(e.target.value) || 0,
                            })
                          }
                          className="admin-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="research-projects">Projects Count</Label>
                        <Input
                          id="research-projects"
                          type="number"
                          value={newResearchArea.projects}
                          onChange={(e) =>
                            setNewResearchArea({ ...newResearchArea, projects: Number.parseInt(e.target.value) || 0 })
                          }
                          className="admin-input"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Key Points</Label>
                      {newResearchArea.keyPoints.map((point, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <Input
                            value={point}
                            onChange={(e) => {
                              const newPoints = [...newResearchArea.keyPoints]
                              newPoints[index] = e.target.value
                              setNewResearchArea({ ...newResearchArea, keyPoints: newPoints })
                            }}
                            className="admin-input"
                            placeholder="Enter key point"
                          />
                          <Button
                            type="button"
                            onClick={() => {
                              const newPoints = newResearchArea.keyPoints.filter((_, i) => i !== index)
                              setNewResearchArea({ ...newResearchArea, keyPoints: newPoints })
                            }}
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        onClick={() =>
                          setNewResearchArea({ ...newResearchArea, keyPoints: [...newResearchArea.keyPoints, ""] })
                        }
                        variant="outline"
                        size="sm"
                        className="btn-iitb-outline"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Key Point
                      </Button>
                    </div>
                    <div className="flex gap-4">
                      <Button type="submit" className="btn-iitb text-white">
                        Add Research Area
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setShowAddResearchAreaForm(false)}
                        variant="outline"
                        className="btn-iitb-outline"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Research Areas List */}
            <Card className="admin-card card-enhanced">
              <CardContent>
                {researchAreas.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No research areas added yet. Click "Add Research Area" to get started.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {researchAreas.map((area) => (
                      <div key={area.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-iitb-navy flex-1 pr-4">{area.title}</h3>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => setEditingResearchArea(area)}
                              variant="outline"
                              size="sm"
                              className="btn-iitb-outline"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              onClick={() => {
                                if (confirm("Are you sure you want to delete this research area?")) {
                                  const updatedAreas = researchAreas.filter((a) => a.id !== area.id)
                                  saveResearchAreas(updatedAreas)
                                }
                              }}
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{area.description}</p>
                        <div className="text-xs text-gray-500 mb-2">
                          <strong>Key Points:</strong> {area.keyPoints.join(", ")}
                        </div>
                        <div className="text-xs text-gray-500">
                          {area.publications} Publications • {area.projects} Projects
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Collaborations Tab */}
        {activeTab === "collaborations" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-iitb-navy">Collaborations</h2>
              <Button onClick={() => setShowAddCollaborationForm(true)} className="btn-iitb text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Collaboration
              </Button>
            </div>

            {/* Add Collaboration Form */}
            {showAddCollaborationForm && (
              <Card className="admin-card card-enhanced">
                <CardHeader>
                  <CardTitle className="text-iitb-navy">Add New Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddCollaboration} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="collab-type">Type</Label>
                        <Input
                          id="collab-type"
                          value={newCollaboration.type}
                          onChange={(e) => setNewCollaboration({ ...newCollaboration, type: e.target.value })}
                          className="admin-input"
                          placeholder="e.g., Industry Partners, Academic Institutions"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="collab-name">Organization Name</Label>
                        <Input
                          id="collab-name"
                          value={newCollaboration.name}
                          onChange={(e) => setNewCollaboration({ ...newCollaboration, name: e.target.value })}
                          className="admin-input"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="collab-role">Role/Project</Label>
                        <Input
                          id="collab-role"
                          value={newCollaboration.role}
                          onChange={(e) => setNewCollaboration({ ...newCollaboration, role: e.target.value })}
                          className="admin-input"
                          placeholder="e.g., Connected Vehicle Research"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="collab-location">Location</Label>
                        <Input
                          id="collab-location"
                          value={newCollaboration.location}
                          onChange={(e) => setNewCollaboration({ ...newCollaboration, location: e.target.value })}
                          className="admin-input"
                          placeholder="e.g., USA, India, Germany"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button type="submit" className="btn-iitb text-white">
                        Add Collaboration
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setShowAddCollaborationForm(false)}
                        variant="outline"
                        className="btn-iitb-outline"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Collaborations List */}
            <Card className="admin-card card-enhanced">
              <CardContent>
                {collaborations.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No collaborations added yet. Click "Add Collaboration" to get started.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {collaborations.map((collab) => (
                      <div key={collab.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-iitb-navy flex-1 pr-4">{collab.name}</h3>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => setEditingCollaboration(collab)}
                              variant="outline"
                              size="sm"
                              className="btn-iitb-outline"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              onClick={() => {
                                if (confirm("Are you sure you want to delete this collaboration?")) {
                                  const updatedCollaborations = collaborations.filter((c) => c.id !== collab.id)
                                  saveCollaborations(updatedCollaborations)
                                }
                              }}
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-iitb-accent text-sm mb-1">
                          {collab.type} • {collab.location}
                        </p>
                        <p className="text-gray-600 text-sm">{collab.role}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Site Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-iitb-navy">Site Settings</h2>
            </div>

            <Card className="admin-card card-enhanced">
              <CardHeader>
                <CardTitle className="text-iitb-navy">Website Content Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdateSiteSettings} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-iitb-navy">Homepage Hero Section</h3>
                    <div>
                      <Label htmlFor="hero-title">Hero Title</Label>
                      <Input
                        id="hero-title"
                        value={siteSettings.heroTitle}
                        onChange={(e) => setSiteSettings({ ...siteSettings, heroTitle: e.target.value })}
                        className="admin-input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                      <Input
                        id="hero-subtitle"
                        value={siteSettings.heroSubtitle}
                        onChange={(e) => setSiteSettings({ ...siteSettings, heroSubtitle: e.target.value })}
                        className="admin-input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="hero-description">Hero Description</Label>
                      <Textarea
                        id="hero-description"
                        value={siteSettings.heroDescription}
                        onChange={(e) => setSiteSettings({ ...siteSettings, heroDescription: e.target.value })}
                        className="admin-input"
                        rows={3}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-iitb-navy">About Section</h3>
                    <div>
                      <Label htmlFor="about-summary">About Summary</Label>
                      <Textarea
                        id="about-summary"
                        value={siteSettings.aboutSummary}
                        onChange={(e) => setSiteSettings({ ...siteSettings, aboutSummary: e.target.value })}
                        className="admin-input"
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-iitb-navy">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-email">Primary Email</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          value={siteSettings.contactEmail}
                          onChange={(e) => setSiteSettings({ ...siteSettings, contactEmail: e.target.value })}
                          className="admin-input"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-phone">Phone Number</Label>
                        <Input
                          id="contact-phone"
                          value={siteSettings.contactPhone}
                          onChange={(e) => setSiteSettings({ ...siteSettings, contactPhone: e.target.value })}
                          className="admin-input"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="office-hours">Office Hours</Label>
                      <Input
                        id="office-hours"
                        value={siteSettings.officeHours}
                        onChange={(e) => setSiteSettings({ ...siteSettings, officeHours: e.target.value })}
                        className="admin-input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="office-location">Office Location</Label>
                      <Input
                        id="office-location"
                        value={siteSettings.officeLocation}
                        onChange={(e) => setSiteSettings({ ...siteSettings, officeLocation: e.target.value })}
                        className="admin-input"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="btn-iitb text-white">
                      Update Settings
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
