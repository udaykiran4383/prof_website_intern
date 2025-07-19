"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  ArrowLeft,
  Car,
  Globe,
  Users,
  Zap,
  Target,
  Building,
  Cpu,
  FlaskConical,
  Network,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Facilities", href: "#facilities" },
  { name: "Research", href: "#research" },
  { name: "Collaboration", href: "#collaboration" },
  { name: "Contact", href: "#contact" },
]

export default function CAVPage() {
  const [activeSection, setActiveSection] = useState("home")
  const [expandedFacility, setExpandedFacility] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const toggleFacility = (facilityId: string) => {
    setExpandedFacility(expandedFacility === facilityId ? null : facilityId)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* CAV Page Header */}
      <div className="bg-iitb-navy text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold font-serif mb-4">Connected & Automated Vehicles Research</h1>
          <p className="text-xl text-blue-200 font-academic">IIT Bombay Transportation Systems Lab</p>
          <p className="text-lg text-blue-300 font-academic mt-2">Led by Professor Archak Mittal</p>
        </div>
      </div>

      {/* CAV Page Navigation */}
      <nav className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-14">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`px-4 py-2 text-sm font-medium transition-colors font-academic rounded-md ${
                    activeSection === item.href.substring(1)
                      ? "text-iitb-navy bg-iitb-light-blue border-b-2 border-iitb-navy"
                      : "text-gray-600 hover:text-iitb-navy hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-enhanced text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-light mb-6 font-serif leading-tight">
            Driving the Future of Mobility from India to the World
          </h1>
          <p className="text-xl font-light font-academic max-w-4xl mx-auto leading-relaxed mb-12">
            A Global R&D Centre for Connected and Autonomous Vehicles, led by IIT Bombay
          </p>
          <Button
            onClick={() => scrollToSection("about")}
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-iitb-navy font-academic px-8 py-3"
          >
            Explore the Vision
          </Button>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-16 px-4 bg-iitb-gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="card-enhanced text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-iitb-navy mb-2 font-serif">5+</div>
                <div className="text-gray-600 font-academic">Global Collaborators</div>
              </CardContent>
            </Card>
            <Card className="card-enhanced text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-iitb-navy mb-2 font-serif">3</div>
                <div className="text-gray-600 font-academic">Patents Filed</div>
              </CardContent>
            </Card>
            <Card className="card-enhanced text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-iitb-navy mb-2 font-serif">AV</div>
                <div className="text-gray-600 font-academic">Simulators Operational</div>
              </CardContent>
            </Card>
            <Card className="card-enhanced text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-iitb-navy mb-2 font-serif">Partners</div>
                <div className="text-gray-600 font-academic">Tata, Bosch, DST</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-gray-600 font-academic">Trusted by Leading Organizations</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {["Tata", "Bosch", "DST", "UC Berkeley", "Mahindra", "CDAC"].map((partner) => (
              <div key={partner} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-sm font-medium text-gray-600 font-academic">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-iitb-navy mb-8 font-serif">Vision, Mission & Objectives</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-iitb-navy mb-4 font-serif">Vision</h3>
                  <p className="text-gray-700 font-academic leading-relaxed">
                    To create a world-class, nationally significant research centre focused on Connected and Autonomous
                    Vehicle (CAV) technologies that address India's unique urban and rural mobility challenges through
                    innovation, sustainability, and scalable deployment.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-iitb-navy mb-4 font-serif">Mission</h3>
                  <p className="text-gray-700 font-academic leading-relaxed">
                    To bridge the gap between industry, academia, and policy by building a robust ecosystem for advanced
                    R&D, prototyping, testing, and commercialization of transportation technologies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-iitb-navy mb-4 font-serif">Core Objectives</h3>
                  <ul className="space-y-3 text-gray-700 font-academic">
                    <li className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-iitb-navy mt-0.5 flex-shrink-0" />
                      <span>Drive technology transfer and global collaboration through partnerships</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-iitb-navy mt-0.5 flex-shrink-0" />
                      <span>Enable joint ventures with global OEMs, suppliers, and academic institutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-iitb-navy mt-0.5 flex-shrink-0" />
                      <span>Create India-specific, scalable, deployable mobility solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-iitb-navy mt-0.5 flex-shrink-0" />
                      <span>Deliver training, certification & skill-building programs in ITS and Autonomous Tech</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-iitb-light-blue rounded-lg border-l-4 border-iitb-navy">
                <blockquote className="text-lg font-medium text-iitb-navy font-serif italic">
                  "Creating scalable, India-centric AV innovation through global collaboration."
                </blockquote>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-iitb-navy mb-6 font-serif">Development Timeline</h3>
              <div className="space-y-6">
                <div className="timeline-item">
                  <h4 className="font-medium text-iitb-navy font-academic">Concept & Planning</h4>
                  <p className="text-sm text-gray-600 font-academic mt-1">
                    Research needs assessment, stakeholder alignment, and strategic planning phase
                  </p>
                </div>
                <div className="timeline-item">
                  <h4 className="font-medium text-iitb-navy font-academic">Simulation Development</h4>
                  <p className="text-sm text-gray-600 font-academic mt-1">
                    Advanced simulation platforms for CAV testing and validation
                  </p>
                </div>
                <div className="timeline-item">
                  <h4 className="font-medium text-iitb-navy font-academic">Testbed Construction</h4>
                  <p className="text-sm text-gray-600 font-academic mt-1">
                    Physical infrastructure development for real-world testing
                  </p>
                </div>
                <div className="timeline-item">
                  <h4 className="font-medium text-iitb-navy font-academic">Deployment & Scale</h4>
                  <p className="text-sm text-gray-600 font-academic mt-1">
                    Commercial deployment and nationwide scaling of solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 px-4 bg-iitb-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-iitb-navy mb-4 font-serif">World-Class Facilities</h2>
            <p className="text-lg text-gray-600 font-academic max-w-3xl mx-auto">
              State-of-the-art infrastructure designed to support the complete CAV development lifecycle
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                id: "test-track",
                icon: Car,
                title: "State-of-the-Art Test Track",
                summary:
                  "Mixed-mode traffic simulation with realistic Indian transport patterns and scaled deployment zones",
                details: [
                  "Facilities simulate real-world road conditions and mixed traffic behavior",
                  "Rural and urban interface testing capabilities",
                  "Scaled-down and full-scale deployment zones",
                  "Weather and terrain variation simulation",
                ],
              },
              {
                id: "cpm-lab",
                icon: Cpu,
                title: "Cyber-Physical Mobility Lab",
                summary:
                  "AI-powered intelligence with V2X communication and sensor fusion for adaptive traffic management",
                details: [
                  "Digital nervous system for AV control and optimization",
                  "Real-time AV decision making capabilities",
                  "Edge computing infrastructure for low-latency processing",
                  "Integrated hardware and software testing environment",
                ],
              },
              {
                id: "simulation",
                icon: Network,
                title: "Advanced Simulation Platform",
                summary: "Comprehensive simulation tools for edge-case testing and multi-agent scenario modeling",
                details: [
                  "Car, two-wheeler, and truck simulators operational",
                  "Edge-case and high-risk scenario testing",
                  "Multi-agent vehicle, pedestrian, and infrastructure interaction",
                  "Algorithm testing for collision avoidance and decision logic",
                ],
              },
              {
                id: "prototype-lab",
                icon: FlaskConical,
                title: "Prototype & Hardware Development Labs",
                summary: "End-to-end prototyping infrastructure from concept to deployment with integrated systems",
                details: [
                  "Rapid prototyping and early validation capabilities",
                  "Hardware-in-loop testing and validation",
                  "Integration of sensors, ECUs, and control stacks",
                  "Concept-to-deployment system development",
                ],
              },
              {
                id: "open-source",
                icon: Building,
                title: "Open-Source AV Logic Layer",
                summary: "Unified platform where all AVs are built and tested on common, open infrastructure",
                details: [
                  "Shared AV logic layer for ecosystem consistency",
                  "Common open-source software platform",
                  "Freely extendable to startups, academia, and SMEs",
                  "Standardized development and testing framework",
                ],
              },
            ].map((facility) => {
              const IconComponent = facility.icon
              const isExpanded = expandedFacility === facility.id

              return (
                <Card key={facility.id} className="card-enhanced">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-iitb-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-iitb-navy" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-medium text-iitb-navy font-serif">{facility.title}</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleFacility(facility.id)}
                            className="text-gray-600 hover:text-iitb-navy"
                          >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </Button>
                        </div>
                        <p className="text-gray-700 font-academic leading-relaxed mb-4">{facility.summary}</p>
                        {isExpanded && (
                          <ul className="space-y-2">
                            {facility.details.map((detail, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-gray-700 font-academic">
                                <div className="w-1.5 h-1.5 bg-iitb-navy rounded-full mt-2 flex-shrink-0"></div>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-iitb-navy mb-4 font-serif">Research & Innovation</h2>
            <p className="text-lg text-gray-600 font-academic max-w-3xl mx-auto">
              Comprehensive research pipeline from concept to deployment, addressing India-specific challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-medium text-iitb-navy mb-6 font-serif">
                Technology Readiness Levels (TRL 1-9)
              </h3>
              <div className="space-y-4">
                {[
                  {
                    level: "TRL 1-3",
                    title: "Ideation & Early Validation",
                    desc: "Concept development and feasibility studies",
                  },
                  {
                    level: "TRL 4-6",
                    title: "Proof of Concept & System Validation",
                    desc: "Prototype development and testing",
                  },
                  {
                    level: "TRL 7-8",
                    title: "Late-stage Validation",
                    desc: "Pre-commercialization and system integration",
                  },
                  {
                    level: "TRL 9",
                    title: "Commercial Deployment",
                    desc: "Full-scale deployment and market readiness",
                  },
                ].map((stage, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-iitb-gray rounded-lg">
                    <div className="w-16 h-16 bg-iitb-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-iitb-navy font-academic">{stage.level}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-iitb-navy font-academic">{stage.title}</h4>
                      <p className="text-sm text-gray-600 font-academic mt-1">{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-iitb-navy mb-6 font-serif">Key Use Cases & Applications</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-iitb-navy font-academic mb-3">Primary Applications</h4>
                  <ul className="space-y-2">
                    {[
                      "ADAS Feature Validation",
                      "EV Integration & Powertrain Testing",
                      "Urban Mobility Solutions",
                      "V2X Communication Systems",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700 font-academic">
                        <div className="w-2 h-2 bg-iitb-navy rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-iitb-navy font-academic mb-3">India-Specific Challenges</h4>
                  <ul className="space-y-2">
                    {[
                      "Jaywalking & Pedestrian Behavior",
                      "2W/3W Mixed Traffic Modeling",
                      "Rural Testing Scenarios",
                      "Dynamic Traffic Rule Compliance",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700 font-academic">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-iitb-light-blue rounded-lg">
                  <h4 className="font-medium text-iitb-navy font-academic mb-2">Development Pipeline</h4>
                  <div className="text-sm text-gray-700 font-academic">
                    Concept → Simulation → Small Scale → Real AV → Deployment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collaboration" className="py-20 px-4 bg-iitb-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-iitb-navy mb-4 font-serif">Collaboration Opportunities</h2>
            <p className="text-lg text-gray-600 font-academic max-w-3xl mx-auto">
              Partner with us to co-create the future of autonomous mobility in India
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-medium text-iitb-navy mb-6 font-serif">Why Collaborate</h3>
              <div className="space-y-4">
                {[
                  "Co-development of cutting-edge CAV technologies",
                  "CSR alignment with national mobility initiatives",
                  "Exclusive access to world-class testbed facilities",
                  "Joint IP development and commercialization",
                  "Access to top-tier talent and research expertise",
                  "Government co-funding opportunities (DST, MeitY)",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-academic">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-iitb-navy mb-6 font-serif">Engagement Models</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "OEMs & Automotive Companies",
                    desc: "Joint R&D, technology validation, and market deployment partnerships",
                  },
                  {
                    title: "Government Agencies",
                    desc: "Policy development, regulatory frameworks, and public infrastructure integration",
                  },
                  {
                    title: "Startups & SMEs",
                    desc: "Technology incubation, prototype development, and market access support",
                  },
                  {
                    title: "Academic Institutions",
                    desc: "Research collaboration, student exchange, and joint publication opportunities",
                  },
                ].map((model, index) => (
                  <Card key={index} className="card-enhanced p-4">
                    <CardContent className="p-0">
                      <h4 className="font-medium text-iitb-navy font-academic mb-2">{model.title}</h4>
                      <p className="text-sm text-gray-700 font-academic">{model.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Button className="btn-iitb font-academic w-full">Contact to Collaborate</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-iitb-navy mb-4 font-serif">Get in Touch</h2>
            <p className="text-lg text-gray-600 font-academic max-w-3xl mx-auto">
              Ready to collaborate on the future of autonomous mobility? Contact us to explore partnership
              opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="card-enhanced p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-medium text-iitb-navy mb-6 font-serif">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-iitb-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-iitb-navy" />
                    </div>
                    <div>
                      <h4 className="font-medium text-iitb-navy font-academic">Email</h4>
                      <p className="text-gray-700 font-academic">archak@iitb.ac.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-iitb-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-iitb-navy" />
                    </div>
                    <div>
                      <h4 className="font-medium text-iitb-navy font-academic">Phone</h4>
                      <p className="text-gray-700 font-academic">+91 78499 87203</p>
                      <p className="text-sm text-gray-600 font-academic">Call, Message, WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-iitb-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-iitb-navy" />
                    </div>
                    <div>
                      <h4 className="font-medium text-iitb-navy font-academic">Address</h4>
                      <p className="text-gray-700 font-academic">
                        Prof. Archak Mittal
                        <br />
                        Department of Civil Engineering
                        <br />
                        IIT Bombay, Powai
                        <br />
                        Mumbai - 400076, India
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-medium text-iitb-navy mb-6 font-serif">Send a Message</h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-academic">
                        Name
                      </Label>
                      <Input id="name" placeholder="Your full name" className="font-academic" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-academic">
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="font-academic" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="affiliation" className="font-academic">
                      Organization/Affiliation
                    </Label>
                    <Input id="affiliation" placeholder="Your organization or institution" className="font-academic" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-academic">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your collaboration interests, research goals, or partnership proposals..."
                      rows={6}
                      className="font-academic"
                    />
                  </div>

                  <Button type="submit" className="btn-iitb font-academic w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Optional Google Maps Embed */}
          <div className="mt-16">
            <Card className="card-enhanced overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-academic">IIT Bombay Campus Map</p>
                    <p className="text-sm text-gray-600 font-academic">Interactive map would be embedded here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
