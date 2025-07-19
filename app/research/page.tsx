"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Users, ExternalLink, Mail, Linkedin } from "lucide-react"
import Link from "next/link"

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
  currentPosition?: string
}

export default function ResearchPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  const defaultTeamMembers: TeamMember[] = [
    {
      id: "aaditi-kumari",
      name: "Aaditi Kumari",
      role: "PhD Candidate",
      description: "Research Topic: V2X Communication, Transport Safety and Sustainability. Started July 2024.",
      image: "/placeholder-user.jpg",
      category: "current",
      subcategory: "phd",
      joinDate: "July 2024",
    },
    {
      id: "parth-loya",
      name: "Parth Loya",
      role: "PhD Candidate", 
      description: "Research Topic: Effect of Drunken Ride on Motorcycle Behaviour. Started July 2024.",
      image: "/placeholder-user.jpg",
      category: "current",
      subcategory: "phd",
      joinDate: "July 2024",
    },
    {
      id: "angshuman-baruah",
      name: "Angshuman Baruah",
      role: "PhD Candidate",
      description: "Research Topic: Enhancing Road Safety in Adverse Weather using V2X Communication. Started July 2024.",
      image: "/placeholder-user.jpg", 
      category: "current",
      subcategory: "phd",
      joinDate: "July 2024",
    },
    {
      id: "nasir-khaleel",
      name: "Nasir Khaleel",
      role: "PhD Candidate",
      description: "Research Topic: Assessment of the Indian Market Demand for Connected Autonomous Vehicles. Started July 2024.",
      image: "/placeholder-user.jpg",
      category: "current", 
      subcategory: "phd",
      joinDate: "July 2024",
    },
    {
      id: "bharti",
      name: "Bharti",
      role: "Postdoctoral Fellow",
      description: "Research Topic: Traffic Flow Prediction, Artificial Intelligence, Numerical Analysis. Started July 2024.",
      image: "/placeholder-user.jpg",
      category: "current",
      subcategory: "postdoc", 
      joinDate: "July 2024",
    },
  ]

  useEffect(() => {
    // Load team members from localStorage or use defaults
    const savedMembers = localStorage.getItem("teamMembers")
    if (savedMembers) {
      setTeamMembers(JSON.parse(savedMembers))
    } else {
      setTeamMembers(defaultTeamMembers)
      localStorage.setItem("teamMembers", JSON.stringify(defaultTeamMembers))
    }
  }, [])

  const researchAreas = [
    {
      title: "Connected and Automated Vehicles",
      description:
        "Development of simulation frameworks and optimization algorithms for connected and automated vehicle systems in complex urban environments.",
      keyPoints: [
        "Vehicle-to-Vehicle (V2V) Communication",
        "Vehicle-to-Infrastructure (V2I) Integration",
        "Mixed Traffic Flow Optimization",
        "Autonomous Vehicle Behavior Modeling",
      ],
      publications: 15,
      projects: 3,
      teamMembers: [
        { name: "Aaditi Kumari", role: "PhD Candidate", focus: "V2X Communication, Transport Safety" },
        { name: "Angshuman Baruah", role: "PhD Candidate", focus: "V2X Communication in Adverse Weather" },
        { name: "Nasir Khaleel", role: "PhD Candidate", focus: "Market Demand for Connected Autonomous Vehicles" },
      ],
    },
    {
      title: "Smart City Transportation Systems",
      description:
        "Integration of intelligent transportation systems within smart city frameworks using real-time data analytics and adaptive control mechanisms.",
      keyPoints: [
        "Real-time Traffic Management",
        "Adaptive Signal Control Systems",
        "Urban Mobility Planning",
        "Data-Driven Decision Making",
      ],
      publications: 12,
      projects: 2,
      teamMembers: [
        { name: "Bharti", role: "Postdoctoral Fellow", focus: "Traffic Flow Prediction, AI, Numerical Analysis" },
        { name: "Parth Loya", role: "PhD Candidate", focus: "Motorcycle Behaviour in Urban Systems" },
      ],
    },
    {
      title: "Traffic Safety and Vulnerable Road Users",
      description:
        "Advanced safety solutions for pedestrians and cyclists through intelligent detection systems and predictive modeling approaches.",
      keyPoints: [
        "Pedestrian Safety Systems",
        "Cyclist Protection Technologies",
        "Emergency Response Protocols",
        "Predictive Safety Analytics",
      ],
      publications: 8,
      projects: 2,
      teamMembers: [
        { name: "Aaditi Kumari", role: "PhD Candidate", focus: "Transport Safety and Sustainability" },
        { name: "Angshuman Baruah", role: "PhD Candidate", focus: "Road Safety in Adverse Weather" },
      ],
    },
    {
      title: "Machine Learning in Transportation",
      description:
        "Application of artificial intelligence and machine learning techniques to solve complex transportation engineering problems.",
      keyPoints: [
        "Traffic Pattern Recognition",
        "Predictive Modeling",
        "Deep Learning Applications",
        "Real-time Decision Systems",
      ],
      publications: 10,
      projects: 1,
    },
  ]

  const currentOpenings = [
    {
      position: "Postdoctoral Researcher",
      description:
        "Seeking a postdoctoral researcher with expertise in transportation engineering and connected vehicle technologies.",
      requirements: [
        "PhD in Civil Engineering, Transportation Engineering, or related field",
        "Experience with traffic simulation software (SUMO, VISSIM, etc.)",
        "Strong programming skills in Python/MATLAB",
        "Publications in peer-reviewed journals",
      ],
      duration: "2 years",
      funding: "Available",
    },
    {
      position: "PhD Student",
      description:
        "PhD position available for research in smart city transportation systems and connected vehicle technologies.",
      requirements: [
        "Master's degree in Civil Engineering or related field",
        "Strong analytical and programming skills",
        "Interest in transportation systems research",
        "Good communication skills in English",
      ],
      duration: "4-5 years",
      funding: "Fellowship available",
    },
    {
      position: "Research Intern",
      description: "Summer internship opportunities for undergraduate students interested in transportation research.",
      requirements: [
        "Undergraduate student in Civil/Computer Engineering",
        "Basic programming knowledge",
        "Minimum 8-week commitment",
        "Strong academic record",
      ],
      duration: "8-12 weeks",
      funding: "Stipend provided",
    },
  ]

  const collaborations = [
    {
      type: "Industry Partners",
      partners: [
        { name: "Ford Motor Company", role: "Connected Vehicle Research", location: "USA" },
        { name: "Leidos Corporation", role: "Autonomous Systems", location: "USA" },
        { name: "Tata Consultancy Services", role: "Smart City Solutions", location: "India" },
      ],
    },
    {
      type: "Academic Institutions",
      partners: [
        { name: "Northwestern University", role: "Traffic Flow Modeling", location: "USA" },
        { name: "Leibniz University Hannover", role: "Urban Planning", location: "Germany" },
        { name: "Roma Tre University", role: "Transportation Systems", location: "Italy" },
      ],
    },
    {
      type: "Government Agencies",
      partners: [
        { name: "Department of Science and Technology", role: "Research Funding", location: "India" },
        { name: "Ministry of Electronics and IT", role: "Smart City Projects", location: "India" },
        { name: "Indian Council of Medical Research", role: "Safety Research", location: "India" },
      ],
    },
  ]

  return (
    <div className="min-h-screen gradient-iitb-light py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-iitb-navy mb-4">Research</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advancing transportation engineering through innovative research in connected vehicles, smart cities, and
            intelligent transportation systems.
          </p>
        </div>

        {/* Research Areas */}
        <Card className="card-enhanced mb-12 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-iitb-navy">Research Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm card-enhanced">
                  <h3 className="text-xl font-bold text-iitb-navy mb-3">{area.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{area.description}</p>
                  <div className="space-y-2 mb-4">
                    {area.keyPoints.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-iitb-navy rounded-full"></div>
                        <span className="text-gray-600 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className="border-iitb-navy text-iitb-navy">
                        {area.publications} Publications
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className="border-iitb-accent text-iitb-accent">
                        {area.projects} Active Projects
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Team Members Button for Research Area */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full border-iitb-navy text-iitb-navy hover:bg-iitb-navy hover:text-white">
                        <Users className="w-4 h-4 mr-2" />
                        View Research Team ({area.teamMembers?.length || 0})
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-iitb-navy">Research Team - {area.title}</DialogTitle>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {area.teamMembers?.map((member, memberIndex) => (
                          <div key={memberIndex} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 bg-iitb-light-blue rounded-full flex items-center justify-center">
                                <Users className="w-5 h-5 text-iitb-navy" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-iitb-navy">{member.name}</h4>
                                <p className="text-sm text-iitb-accent">{member.role}</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Research Focus:</span> {member.focus}
                            </p>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs for different sections */}
        <Tabs defaultValue="team" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white border border-gray-200 rounded-lg p-1">
            <TabsTrigger
              value="team"
              className="data-[state=active]:bg-iitb-navy data-[state=active]:text-white rounded-md"
            >
              Research Team
            </TabsTrigger>
            <TabsTrigger
              value="openings"
              className="data-[state=active]:bg-iitb-navy data-[state=active]:text-white rounded-md"
            >
              Current Openings
            </TabsTrigger>
            <TabsTrigger
              value="collaborations"
              className="data-[state=active]:bg-iitb-navy data-[state=active]:text-white rounded-md"
            >
              Collaborations
            </TabsTrigger>
          </TabsList>

          {/* Research Team Tab */}
          <TabsContent value="team">
            <Card className="card-enhanced border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-iitb-navy">
                  <Users className="w-6 h-6 text-iitb-navy" />
                  Research Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                {teamMembers.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Building Our Team</h3>
                    <p className="text-gray-500 mb-6">
                      We are actively recruiting talented researchers to join our team. Check out our current openings
                      or contact us to discuss opportunities.
                    </p>
                    <Button asChild className="btn-iitb text-white">
                      <Link href="/contact">
                        <Mail className="w-4 h-4 mr-2" />
                        Get in Touch
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-12">
                    {/* Current Members */}
                    <div>
                      <h3 className="text-2xl font-bold text-iitb-navy mb-8 text-center">Current Members</h3>

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
                          <div key={subcat} className="mb-10">
                            <h4 className="text-xl font-semibold text-iitb-accent mb-6 border-b border-iitb-light-blue pb-2">
                              {subcatNames[subcat as keyof typeof subcatNames]}
                            </h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {subcatMembers.map((member) => (
                                <div
                                  key={member.id}
                                  className="text-center p-6 bg-white rounded-lg shadow-sm border card-enhanced"
                                >
                                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                                    {member.image ? (
                                      <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center">
                                        <Users className="w-12 h-12 text-gray-400" />
                                      </div>
                                    )}
                                  </div>
                                  <h5 className="text-lg font-semibold text-iitb-navy mb-1">{member.name}</h5>
                                  <p className="text-iitb-accent text-sm font-medium mb-2">{member.role}</p>
                                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{member.description}</p>
                                  {member.joinDate && (
                                    <p className="text-gray-500 text-xs mb-4">
                                      Joined: {new Date(member.joinDate).toLocaleDateString()}
                                    </p>
                                  )}
                                  <div className="flex justify-center gap-2">
                                    <Button variant="outline" size="sm" className="btn-iitb-outline bg-transparent">
                                      <Mail className="w-3 h-3" />
                                    </Button>
                                    <Button variant="outline" size="sm" className="btn-iitb-outline bg-transparent">
                                      <Linkedin className="w-3 h-3" />
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
                    {teamMembers.some((m) => m.category === "past") && (
                      <div>
                        <h3 className="text-2xl font-bold text-iitb-navy mb-8 text-center">Past Members</h3>

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
                            <div key={subcat} className="mb-10">
                              <h4 className="text-xl font-semibold text-gray-600 mb-6 border-b border-gray-200 pb-2">
                                {subcatNames[subcat as keyof typeof subcatNames]}
                              </h4>
                              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {subcatMembers.map((member) => (
                                  <div key={member.id} className="p-4 bg-gray-50 rounded-lg border card-enhanced">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden">
                                      {member.image ? (
                                        <img
                                          src={member.image || "/placeholder.svg"}
                                          alt={member.name}
                                          className="w-full h-full object-cover"
                                        />
                                      ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                          <Users className="w-8 h-8 text-gray-400" />
                                        </div>
                                      )}
                                    </div>
                                    <h5 className="text-sm font-semibold text-iitb-navy mb-1 text-center">
                                      {member.name}
                                    </h5>
                                    <p className="text-gray-600 text-xs text-center mb-2">{member.role}</p>
                                    <div className="text-xs text-gray-500 text-center space-y-1">
                                      {member.joinDate && member.graduationDate && (
                                        <p>
                                          {new Date(member.joinDate).getFullYear()} -{" "}
                                          {new Date(member.graduationDate).getFullYear()}
                                        </p>
                                      )}
                                      {member.currentPosition && (
                                        <p className="text-green-600 font-medium">Now: {member.currentPosition}</p>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Current Openings Tab */}
          <TabsContent value="openings">
            <Card className="card-enhanced border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-iitb-navy">Current Openings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {currentOpenings.map((opening, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm card-enhanced">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-iitb-navy mb-2">{opening.position}</h3>
                          <p className="text-gray-700 leading-relaxed mb-4">{opening.description}</p>
                        </div>
                        <div className="flex gap-2 text-sm">
                          <Badge className="bg-iitb-navy text-white hover:bg-iitb-dark-navy">{opening.duration}</Badge>
                          <Badge variant="outline" className="border-iitb-accent text-iitb-accent">
                            {opening.funding}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-iitb-navy">Requirements:</h4>
                        <ul className="space-y-1">
                          {opening.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                              <div className="w-1.5 h-1.5 bg-iitb-navy rounded-full mt-2 flex-shrink-0"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <Button asChild className="btn-iitb text-white">
                          <Link href="/contact">
                            <Mail className="w-4 h-4 mr-2" />
                            Apply Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Collaborations Tab */}
          <TabsContent value="collaborations">
            <Card className="card-enhanced border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-iitb-navy">Research Collaborations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {collaborations.map((collab, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold text-iitb-navy mb-4">{collab.type}</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {collab.partners.map((partner, partnerIndex) => (
                          <div
                            key={partnerIndex}
                            className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 card-enhanced"
                          >
                            <h4 className="font-semibold text-iitb-navy mb-1">{partner.name}</h4>
                            <p className="text-iitb-accent text-sm mb-1">{partner.role}</p>
                            <p className="text-gray-500 text-xs">{partner.location}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="card-enhanced mt-8 border-0 shadow-lg bg-iitb-light-blue">
          <CardContent className="text-center p-8">
            <h2 className="text-2xl font-bold text-iitb-navy mb-4">Interested in Collaboration?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Whether you're a researcher, industry professional, or student interested in transportation engineering,
              we welcome opportunities for collaboration and knowledge exchange.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-iitb text-white">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-iitb-outline bg-transparent">
                <Link href="/publications">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Publications
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
