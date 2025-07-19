"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Car, Building2, Shield, Network, Zap, Users, Eye } from "lucide-react"
import { useState } from "react"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const currentProjects = [
    {
      title: "Development of a Simulation Framework for Connected Vehicles in Urban Environments",
      description:
        "A comprehensive project to model vehicle interactions in dense city settings, focusing on V2V and V2I communications to optimize traffic flow and enhance safety.",
      status: "Ongoing",
      duration: "2024 - 2026",
      funding: "₹50 Lakhs",
      agency: "Department of Science and Technology, India",
      icon: Car,
      color: "iitb",
      technologies: ["SUMO", "Python", "Machine Learning", "IoT"],
      objectives: [
        "Develop realistic simulation models for connected vehicle environments",
        "Optimize traffic flow through intelligent vehicle coordination",
        "Enhance safety protocols for mixed traffic scenarios",
      ],
      teamMembers: [
        { name: "Aaditi Kumari", role: "PhD Candidate", expertise: "V2X Communication" },
        { name: "Angshuman Baruah", role: "PhD Candidate", expertise: "V2X Communication in Adverse Weather" },
      ],
    },
    {
      title: "Smart City Traffic Management Using Real-Time Data Analytics",
      description:
        "Research on optimizing traffic flow with live data from various sources including sensors, cameras, and connected vehicles to create adaptive traffic management systems.",
      status: "Ongoing",
      duration: "2023 - 2025",
      funding: "₹35 Lakhs",
      agency: "Ministry of Electronics and Information Technology",
      icon: Building2,
      color: "accent",
      technologies: ["Big Data", "AI/ML", "Cloud Computing", "Edge Computing"],
      objectives: [
        "Implement real-time traffic monitoring systems",
        "Develop predictive traffic management algorithms",
        "Create adaptive signal control mechanisms",
      ],
      teamMembers: [
        { name: "Bharti", role: "Postdoctoral Fellow", expertise: "Traffic Flow Prediction, AI" },
        { name: "Parth Loya", role: "PhD Candidate", expertise: "Motorcycle Behaviour Analysis" },
      ],
    },
    {
      title: "Safety Enhancements for Vulnerable Road Users Through ITS",
      description:
        "Focus on pedestrian and cyclist safety using technology, developing intelligent systems to detect and protect vulnerable road users in urban environments.",
      status: "Ongoing",
      duration: "2024 - 2027",
      funding: "₹40 Lakhs",
      agency: "Indian Council of Medical Research",
      icon: Shield,
      color: "gray",
      technologies: ["Computer Vision", "Deep Learning", "Sensor Fusion", "5G"],
      objectives: [
        "Develop VRU detection and tracking systems",
        "Create predictive safety algorithms",
        "Implement emergency response protocols",
      ],
      teamMembers: [
        { name: "Aaditi Kumari", role: "PhD Candidate", expertise: "Transport Safety and Sustainability" },
        { name: "Angshuman Baruah", role: "PhD Candidate", expertise: "Road Safety in Adverse Weather" },
      ],
    },
  ]

  const completedProjects = [
    {
      title: "Optimization of Traffic Signal Control in Connected Environments",
      description: "Developed advanced algorithms for traffic signal optimization using connected vehicle data.",
      duration: "2022 - 2023",
      outcome: "Published 3 papers, Filed 1 patent",
      icon: Network,
    },
    {
      title: "Machine Learning for Traffic Flow Prediction",
      description: "Applied ML techniques to predict traffic patterns and congestion in urban networks.",
      duration: "2021 - 2022",
      outcome: "Improved prediction accuracy by 35%",
      icon: Zap,
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      iitb: "bg-iitb-light-blue text-iitb-navy border-iitb-navy",
      accent: "bg-iitb-light-blue text-iitb-accent border-iitb-accent",
      gray: "bg-gray-100 text-gray-600 border-gray-300",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.iitb
  }

  return (
    <div className="min-h-screen gradient-iitb-light py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-iitb-navy mb-4">Research Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive overview of current and completed research projects in transportation engineering, connected
            vehicles, and smart city systems.
          </p>
        </div>

        {/* Project Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="card-enhanced text-center p-6 border-0 shadow-lg bg-white">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-iitb-navy mb-2">3</div>
              <div className="text-gray-600">Active Projects</div>
            </CardContent>
          </Card>
          <Card className="card-enhanced text-center p-6 border-0 shadow-lg bg-white">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-iitb-accent mb-2">₹1.25Cr</div>
              <div className="text-gray-600">Total Funding</div>
            </CardContent>
          </Card>
          <Card className="card-enhanced text-center p-6 border-0 shadow-lg bg-white">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-iitb-navy mb-2">5</div>
              <div className="text-gray-600">Completed Projects</div>
            </CardContent>
          </Card>
          <Card className="card-enhanced text-center p-6 border-0 shadow-lg bg-white">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-iitb-accent mb-2">15+</div>
              <div className="text-gray-600">Collaborators</div>
            </CardContent>
          </Card>
        </div>

        {/* Current Projects */}
        <Card className="card-enhanced mb-12 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-iitb-navy">
              <Zap className="w-6 h-6 text-iitb-navy" />
              Current Research Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {currentProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm card-enhanced">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(project.color)}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                        <h3 className="text-xl font-bold text-iitb-navy mb-2 lg:mb-0">{project.title}</h3>
                        <Badge className="w-fit bg-iitb-accent text-white hover:bg-iitb-accent">{project.status}</Badge>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-iitb-navy">Duration:</span>
                        <span className="text-gray-600">{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-iitb-navy">Funding:</span>
                        <span className="text-gray-600">{project.funding}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-iitb-navy">Agency:</span>
                        <span className="text-gray-600">{project.agency}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-iitb-navy block mb-2">Technologies:</span>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="font-semibold text-iitb-navy block">Key Objectives:</span>
                    <ul className="space-y-1 mb-4">
                      {project.objectives.map((objective, objIndex) => (
                        <li key={objIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-iitb-navy rounded-full mt-2 flex-shrink-0"></div>
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Team Members Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full border-iitb-navy text-iitb-navy hover:bg-iitb-navy hover:text-white">
                          <Users className="w-4 h-4 mr-2" />
                          View Team Members ({project.teamMembers?.length || 0})
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-iitb-navy">Team Members - {project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          {project.teamMembers?.map((member, memberIndex) => (
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
                                <span className="font-medium">Expertise:</span> {member.expertise}
                              </p>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Completed Projects */}
        <Card className="card-enhanced mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-iitb-navy">
              <Users className="w-6 h-6 text-iitb-navy" />
              Completed Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {completedProjects.map((project, index) => {
                const IconComponent = project.icon
                return (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm card-enhanced">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-iitb-navy mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{project.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="font-medium text-iitb-navy">Duration:</span>
                            <span className="text-gray-600">{project.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="font-medium text-iitb-navy">Outcome:</span>
                            <span className="text-gray-600">{project.outcome}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Collaboration */}
        <Card className="card-enhanced border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-iitb-navy">Research Collaboration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-iitb-navy">Industry Partners</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-navy rounded-full"></div>
                    <span>Ford Motor Company</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-accent rounded-full"></div>
                    <span>Leidos Corporation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-navy rounded-full"></div>
                    <span>Tata Consultancy Services</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-iitb-navy">Academic Collaborators</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-navy rounded-full"></div>
                    <span>Northwestern University</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-accent rounded-full"></div>
                    <span>Leibniz University Hannover</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-navy rounded-full"></div>
                    <span>Roma Tre University</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
