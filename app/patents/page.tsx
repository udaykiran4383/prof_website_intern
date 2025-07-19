import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, FileText, Calendar, Users } from "lucide-react"

export default function PatentsPage() {
  const patents = [
    {
      title:
        "A Novel Cellular Automata-Based Virtual Traffic Environment to Evaluate the Impacts of Connected and Automated Vehicles",
      patentNumber: "IN 202141057849 A",
      status: "Published",
      filingDate: "December 2021",
      publicationDate: "June 2022",
      inventors: ["Archak Mittal", "Co-Inventor 1", "Co-Inventor 2"],
      description:
        "This patent describes an innovative cellular automata-based simulation framework for creating virtual traffic environments to evaluate the impacts of connected and automated vehicles on traffic flow and safety.",
      technicalField: "Traffic Simulation and Connected Vehicles",
      applications: [
        "Connected and automated vehicle impact assessment",
        "Traffic flow optimization in mixed environments",
        "Virtual testing of CAV technologies",
        "Transportation planning and policy evaluation",
      ],
      keyFeatures: [
        "Cellular automata-based simulation framework",
        "Connected vehicle impact evaluation",
        "Automated vehicle behavior modeling",
        "Mixed traffic scenario analysis",
      ],
    },
    {
      title:
        "A Novel Simulation-Based Approach for Designing Corridors with Dedicated Lanes for Connected and Automated Vehicles",
      patentNumber: "IN 202241045123 A",
      status: "Published",
      filingDate: "August 2022",
      publicationDate: "February 2023",
      inventors: ["Archak Mittal", "Research Team Member 1", "Research Team Member 2"],
      description:
        "A comprehensive simulation-based methodology for designing dedicated transportation corridors optimized for connected and automated vehicles, addressing infrastructure planning challenges.",
      technicalField: "Transportation Infrastructure Design",
      applications: [
        "Highway corridor design for CAVs",
        "Dedicated lane optimization",
        "Infrastructure planning for autonomous vehicles",
        "Mixed traffic management systems",
      ],
      keyFeatures: [
        "Simulation-based design approach",
        "Dedicated lane optimization algorithms",
        "Connected vehicle integration",
        "Corridor performance evaluation",
      ],
    },
    {
      title:
        "Novel System and Method to Improve Traffic Flow by Reducing Vehicle Speed Variability with Dynamic Speed Limit",
      patentNumber: "Patent Pending",
      status: "Filed",
      filingDate: "2023",
      publicationDate: "Under Review",
      inventors: ["Archak Mittal", "Co-Inventor"],
      description:
        "An innovative system for improving traffic flow through dynamic speed limit control that reduces vehicle speed variability and enhances overall traffic efficiency.",
      technicalField: "Traffic Control Systems",
      applications: [
        "Dynamic speed limit implementation",
        "Traffic flow optimization",
        "Speed variability reduction",
        "Intelligent traffic management",
      ],
      keyFeatures: [
        "Dynamic speed limit algorithms",
        "Real-time traffic monitoring",
        "Speed variability analysis",
        "Traffic flow improvement",
      ],
    },
    {
      title: "Models to Simulate Light Personal Electric Vehicles (LPEVs) Mode in a Virtual Environment",
      patentNumber: "Patent Pending",
      status: "Filed",
      filingDate: "2023",
      publicationDate: "Under Review",
      inventors: ["Archak Mittal", "Research Team"],
      description:
        "Simulation models specifically designed for light personal electric vehicles in virtual environments, enabling comprehensive testing and evaluation of LPEV integration in urban transportation.",
      technicalField: "Electric Vehicle Simulation",
      applications: [
        "LPEV behavior modeling",
        "Urban mobility simulation",
        "Electric vehicle integration",
        "Sustainable transportation planning",
      ],
      keyFeatures: [
        "LPEV-specific simulation models",
        "Virtual environment integration",
        "Electric vehicle behavior analysis",
        "Urban mobility assessment",
      ],
    },
  ]

  const additionalPatents = [
    {
      title: "Blockchain System to Aid Vehicle Actions",
      collaborators: "with Mitra, P., et al.",
      description:
        "Blockchain-based system for secure and efficient vehicle action coordination in connected environments.",
    },
    {
      title:
        "Novel Method and Process that Combine Experimental Design and Transportation Simulation for Assessing Market Performances of New Mobility Solutions",
      collaborators: "with Twumasi-Boakye, R., et al.",
      description:
        "Integrated approach combining experimental design with transportation simulation for mobility solution assessment.",
    },
    {
      title: "Method and System for Providing Safe CAV Navigation Routes based on Roadway Infrastructure Conditions",
      collaborators: "with Twumasi-Boakye, R., et al.",
      description:
        "Safety-focused navigation system for connected and automated vehicles based on infrastructure conditions.",
    },
    {
      title:
        "Analytical Method to Identify Expected Demand for New Mobility Services Using Existing Travel Demand Patterns",
      collaborators: "with Fishelson, J., et al.",
      description:
        "Analytical framework for predicting demand for new mobility services using historical travel patterns.",
    },
  ]

  const patentApplications = [
    {
      title: "Real-Time Traffic Signal Optimization Using Connected Vehicle Data",
      status: "Under Review",
      filingDate: "March 2024",
      description:
        "Advanced algorithms for dynamic traffic signal control using real-time data from connected vehicles.",
    },
    {
      title: "Machine Learning Framework for Vulnerable Road User Safety",
      status: "Filed",
      filingDate: "January 2024",
      description: "AI-powered system for detecting and protecting pedestrians and cyclists in urban environments.",
    },
  ]

  return (
    <div className="min-h-screen gradient-iitb-light py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-iitb-navy mb-4">Patents and Intellectual Property</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative solutions and intellectual property contributions in transportation engineering, connected
            vehicles, and intelligent transportation systems.
          </p>
        </div>

        {/* Patent Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="card-enhanced text-center p-6 border-0 shadow-md bg-white">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-iitb-navy mb-2">8</div>
              <div className="text-gray-600">Total Patents</div>
            </CardContent>
          </Card>
          <Card className="card-enhanced text-center p-6 border-0 shadow-md bg-white">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-iitb-accent mb-2">2</div>
              <div className="text-gray-600">Pending Applications</div>
            </CardContent>
          </Card>
          <Card className="card-enhanced text-center p-6 border-0 shadow-md bg-white">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-iitb-navy mb-2">3</div>
              <div className="text-gray-600">Technology Areas</div>
            </CardContent>
          </Card>
          <Card className="card-enhanced text-center p-6 border-0 shadow-md bg-white">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-iitb-accent mb-2">6</div>
              <div className="text-gray-600">Co-Inventors</div>
            </CardContent>
          </Card>
        </div>

        {/* Published Patents */}
        <Card className="card-enhanced mb-12 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-iitb-navy">
              <Lightbulb className="w-6 h-6 text-iitb-navy" />
              Published Patents
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {patents.map((patent, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm card-enhanced">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1 lg:pr-6">
                    <h3 className="text-xl font-bold text-iitb-navy mb-2">{patent.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <Badge className="bg-iitb-navy text-white hover:bg-iitb-dark-navy">{patent.status}</Badge>
                      <Badge variant="outline" className="border-iitb-accent text-iitb-accent">
                        Patent No: {patent.patentNumber}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {patent.technicalField}
                      </Badge>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{patent.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="font-semibold text-iitb-navy">Filing Date:</span>
                      <span className="text-gray-600">{patent.filingDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span className="font-semibold text-iitb-navy">Publication Date:</span>
                      <span className="text-gray-600">{patent.publicationDate}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-gray-500 mt-1" />
                      <div>
                        <span className="font-semibold text-iitb-navy block mb-1">Inventors:</span>
                        <div className="space-y-1">
                          {patent.inventors.map((inventor, invIndex) => (
                            <span key={invIndex} className="text-gray-600 text-sm block">
                              {inventor}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold text-iitb-navy block mb-2">Key Features:</span>
                      <ul className="space-y-1">
                        {patent.keyFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                            <div className="w-1.5 h-1.5 bg-iitb-navy rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="font-semibold text-iitb-navy block">Applications:</span>
                  <div className="grid md:grid-cols-2 gap-2">
                    {patent.applications.map((application, appIndex) => (
                      <div key={appIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-iitb-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{application}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Additional Patents */}
        <Card className="card-enhanced mb-8 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-iitb-navy">
              <FileText className="w-6 h-6 text-iitb-navy" />
              Additional Patent Collaborations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalPatents.map((patent, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm card-enhanced">
                  <h3 className="text-lg font-semibold text-iitb-navy mb-2">{patent.title}</h3>
                  <p className="text-iitb-accent text-sm font-medium mb-2">{patent.collaborators}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{patent.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Patent Applications */}
        <Card className="card-enhanced mb-8 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-iitb-navy">
              <FileText className="w-6 h-6 text-iitb-navy" />
              Patent Applications Under Review
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {patentApplications.map((application, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm card-enhanced">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-iitb-navy flex-1 pr-4">{application.title}</h3>
                    <Badge variant="outline" className="text-xs border-iitb-accent text-iitb-accent">
                      {application.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{application.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-iitb-navy">Filed:</span>
                    <span className="text-gray-600">{application.filingDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Innovation Areas */}
        <Card className="card-enhanced border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-iitb-navy">Innovation Focus Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-iitb-light-blue rounded-lg">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-iitb-navy" />
                </div>
                <h3 className="text-lg font-semibold text-iitb-navy mb-2">Traffic Simulation</h3>
                <p className="text-gray-600 text-sm">
                  Advanced simulation frameworks for modeling complex traffic scenarios and vehicle interactions.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-100 rounded-lg">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-iitb-navy mb-2">Infrastructure Design</h3>
                <p className="text-gray-600 text-sm">
                  Novel approaches to designing transportation infrastructure for connected and automated vehicles.
                </p>
              </div>

              <div className="text-center p-6 bg-iitb-light-blue rounded-lg">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-iitb-navy" />
                </div>
                <h3 className="text-lg font-semibold text-iitb-navy mb-2">Safety Systems</h3>
                <p className="text-gray-600 text-sm">
                  Intelligent systems for enhancing road safety and protecting vulnerable road users.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
