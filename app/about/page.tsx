import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Building, MapPin, Calendar, BookOpen, Users } from "lucide-react"

export default function AboutPage() {
  const education = [
    {
      degree: "Ph.D. in Civil and Environmental Engineering",
      institution: "Northwestern University",
      location: "Evanston, IL, USA",
      year: "2018",
      focus: "Transportation Systems Analysis and Planning",
      description:
        "Dissertation focused on assessing the impact of connected vehicles at freeway, arterial, and path level through characterization, modeling and active management.",
    },
    {
      degree: "M.S. in Civil and Environmental Engineering",
      institution: "Northwestern University",
      location: "Evanston, IL, USA",
      year: "2016",
      focus: "Transportation Systems Analysis and Planning",
      description: "Specialized in traffic flow theory, intelligent transportation systems, and connected vehicle technologies.",
    },
    {
      degree: "B.Tech with Honors in Civil Engineering",
      institution: "Indian Institute of Technology Bombay",
      location: "Mumbai, India",
      year: "2014",
      focus: "Civil Engineering with Minor in Management",
      description: "Graduated with honors specializing in transportation and infrastructure engineering. Completed minor from Shailesh J. Mehta School of Management, IIT Bombay.",
    },
  ]

  const experience = [
    {
      position: "Assistant Professor",
      organization: "Department of Civil Engineering, IIT Bombay",
      location: "Mumbai, India",
      period: "2024 - Present",
      type: "Academic",
      description:
        "Leading research in transportation systems engineering, V2X technologies, and intelligent transportation systems. Specializing in connected and autonomous vehicles, smart infrastructure, and big data analytics in traffic management.",
    },
    {
      position: "Associate Professor",
      organization: "IIT Bombay-FedEx ALFA, Centre for Advanced Logistics and Focused Analytics, IIT Bombay",
      location: "Mumbai, India",
      period: "2024 - Present",
      type: "Academic",
      description:
        "Associate Professor role focusing on advanced logistics research and analytics applications in transportation and supply chain management.",
    },
    {
      position: "Professor In-Charge",
      organization: "SeDriCa, Urban Autonomous Vehicle Team, IIT Bombay",
      location: "Mumbai, India",
      period: "2024 - Present",
      type: "Academic",
      description:
        "Leading the urban autonomous vehicle team, overseeing research and development of autonomous vehicle technologies tailored for Indian road conditions.",
    },
    {
      position: "Connected Autonomous Vehicle Research Engineer",
      organization: "Leidos Corporation",
      location: "Washington DC, USA",
      period: "2023 - 2024",
      type: "Industry",
      description:
        "Conducted advanced research on connected autonomous vehicle systems for government and commercial applications, focusing on V2X communication technologies and intelligent transportation infrastructure.",
    },
    {
      position: "Senior Transportation Modeling Research Engineer",
      organization: "Ford Motor Company",
      location: "Michigan, USA",
      period: "2018 - 2023",
      type: "Industry",
      description:
        "Led transportation modeling research initiatives, developed algorithms for connected vehicle applications, and contributed to Ford's autonomous driving and smart mobility technologies.",
    },
    {
      position: "Visiting Scholar",
      organization: "Leibniz University Hannover (under Prof. Dr.-Ing. habil. Peter Wriggers)",
      location: "Hannover, Germany",
      period: "2013",
      type: "Academic",
      description:
        "Conducted collaborative research in computational mechanics and transportation engineering applications during visiting scholar program.",
    },
    {
      position: "Visiting Scholar",
      organization: "University Roma Tre (under Prof. Nicola L. Rizzi)",
      location: "Rome, Italy",
      period: "2012",
      type: "Academic",
      description:
        "Participated in international research collaboration focusing on structural mechanics and transportation infrastructure analysis.",
    },
  ]

  const researchInterests = [
    {
      area: "Connected and Automated Vehicles",
      description:
        "Development of algorithms and systems for vehicle-to-vehicle and vehicle-to-infrastructure communication",
      keywords: ["V2V Communication", "Autonomous Driving", "Mixed Traffic", "Safety Systems"],
    },
    {
      area: "Intelligent Transportation Systems",
      description: "Smart traffic management and optimization using real-time data and adaptive control",
      keywords: ["Traffic Signal Control", "Dynamic Routing", "Real-time Optimization", "Smart Cities"],
    },
    {
      area: "Urban Mobility and Planning",
      description: "Sustainable transportation solutions for urban environments and mobility-as-a-service platforms",
      keywords: ["Urban Planning", "Mobility-as-a-Service", "Sustainable Transport", "Public Transit"],
    },
    {
      area: "Transportation Safety",
      description: "Safety analysis and improvement strategies for vulnerable road users in mixed traffic environments",
      keywords: ["Pedestrian Safety", "Cyclist Protection", "Accident Analysis", "Safety Modeling"],
    },
  ]

  const teachingPhilosophy = {
    approach:
      "I believe in combining theoretical foundations with practical applications to prepare students for real-world challenges in transportation engineering.",
    methods: [
      "Interactive lectures with real-world case studies",
      "Hands-on laboratory experiences with simulation tools",
      "Industry guest lectures and site visits",
      "Research-based project assignments",
      "Collaborative learning and peer discussions",
    ],
    courses: [
      "Transportation Engineering Fundamentals",
      "Traffic Flow Theory and Applications",
      "Intelligent Transportation Systems",
      "Connected and Automated Vehicles",
      "Transportation Planning and Policy",
      "Advanced Transportation Modeling",
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-enhanced py-24 px-4 text-white relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-light mb-6 font-serif leading-tight text-shadow">
            About Professor Mittal
          </h1>
          <p className="text-xl font-light font-academic max-w-3xl mx-auto leading-relaxed mb-12 text-gray-100">
            Bridging the gap between academic research and industry innovation in transportation engineering
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-enhanced">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="aspect-[4/3] bg-iitb-gray rounded-lg overflow-hidden card-enhanced mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Professor Archak Mittal"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <Card className="card-enhanced p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-iitb-navy mb-4 font-serif">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Building className="w-4 h-4 text-iitb-navy" />
                      <span className="font-academic">Assistant Professor, IIT Bombay</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-4 h-4 text-iitb-navy" />
                      <span className="font-academic">Ph.D., Northwestern University</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-4 h-4 text-iitb-navy" />
                      <span className="font-academic">IAS Associate (2024)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-iitb-navy" />
                      <span className="font-academic">Mumbai, India</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-light text-iitb-navy mb-6 font-serif">Biography</h2>
              <div className="space-y-6 text-gray-700 font-academic leading-relaxed">
                <p>
                  I am an Assistant Professor in the Department of Civil Engineering at IIT Bombay, specializing in transportation systems engineering, V2X technologies, and intelligent transportation systems. My academic and research pursuits are aimed at transforming the landscape of transportation engineering through innovative research and sustainable technology.
                </p>
                <p>
                  My research primarily revolves around the development and implementation of advanced transportation systems. These include but are not limited to connected and autonomous vehicles, smart infrastructure, and the application of big data analytics in traffic management and control systems.
                </p>
                <p>
                  Currently, I hold multiple roles at IIT Bombay including Associate Professor at the IIT Bombay-FedEx ALFA Centre for Advanced Logistics and Focused Analytics, and Professor In-Charge of SeDriCa, the Urban Autonomous Vehicle Team. Prior to joining IIT Bombay in 2024, I gained extensive industry experience as a Connected Autonomous Vehicle Research Engineer at Leidos in Washington DC (2023-2024) and as a Senior Transportation Modeling Research Engineer at Ford Motor Company in Michigan (2018-2023).
                </p>
                <p>
                  My academic journey began at IIT Bombay itself, where I completed my B.Tech with Honors in Civil Engineering (2014) along with a Minor in Management from the Shailesh J. Mehta School of Management. I then pursued graduate studies at Northwestern University, earning both my M.S. (2016) and Ph.D. (2018) in Civil and Environmental Engineering with a focus on Transportation Systems Analysis and Planning.
                </p>
                <p>
                  During my doctoral studies, I also had the privilege of being a Visiting Scholar at Leibniz University Hannover under Prof. Dr.-Ing. habil. Peter Wriggers (2013) and at University Roma Tre under Prof. Nicola L. Rizzi (2012). These international collaborations enriched my research perspective and strengthened my global research network.
                </p>
                <p>
                  Throughout my career, I have been committed to bridging the gap between academic research and practical applications. My work has been recognized with several prestigious awards, including being elected as an Associate of the Indian Academy of Sciences in 2024, receiving the Young Faculty Award in Engineering from Venus International Foundation, and the Young Faculty Award from IIT Bombay, all in 2024.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section-enhanced bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-iitb-navy mb-4 font-serif">Educational Background</h2>
            <p className="text-lg text-gray-600 font-academic max-w-3xl mx-auto">
              A strong foundation in civil and transportation engineering from leading institutions
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="card-enhanced">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <Badge className="bg-iitb-navy text-white mb-3">{edu.year}</Badge>
                      <h3 className="text-xl font-semibold text-iitb-navy mb-2 font-serif">{edu.degree}</h3>
                      <p className="text-gray-600 font-academic">{edu.focus}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-iitb-navy mb-2 font-academic">{edu.institution}</h4>
                      <p className="text-gray-600 text-sm font-academic flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm font-academic leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="section-enhanced">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-iitb-navy mb-4 font-serif">Professional Experience</h2>
            <p className="text-lg text-gray-600 font-academic max-w-3xl mx-auto">
              Combining academic excellence with industry expertise in transportation engineering
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="card-enhanced">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div>
                      <Badge
                        variant={exp.type === "Academic" ? "default" : "secondary"}
                        className={exp.type === "Academic" ? "bg-iitb-navy text-white" : "bg-gray-200 text-gray-700"}
                      >
                        {exp.type}
                      </Badge>
                      <p className="text-sm text-gray-600 font-academic mt-2">{exp.period}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-iitb-navy mb-2 font-serif">{exp.position}</h3>
                      <h4 className="font-semibold text-gray-700 font-academic">{exp.organization}</h4>
                      <p className="text-gray-600 text-sm font-academic flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </p>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-gray-700 font-academic leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="section-enhanced bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-iitb-navy mb-4 font-serif">Research Interests</h2>
            <p className="text-lg text-gray-600 font-academic max-w-3xl mx-auto">
              Interdisciplinary research at the intersection of technology, transportation, and urban planning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchInterests.map((interest, index) => (
              <Card key={index} className="card-enhanced p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-iitb-navy mb-4 font-serif">{interest.area}</h3>
                  <p className="text-gray-700 font-academic leading-relaxed mb-4">{interest.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {interest.keywords.map((keyword, keyIndex) => (
                      <Badge key={keyIndex} variant="outline" className="text-xs border-iitb-accent text-iitb-accent">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="section-enhanced">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-iitb-navy mb-4 font-serif">Teaching Philosophy</h2>
            <p className="text-lg text-gray-600 font-academic max-w-3xl mx-auto">
              Fostering critical thinking and practical problem-solving skills in the next generation of engineers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Card className="card-enhanced p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-iitb-navy mb-6 font-serif">Approach & Methods</h3>
                  <blockquote className="text-lg font-medium text-gray-700 font-academic italic mb-6 border-l-4 border-iitb-navy pl-4">
                    "{teachingPhilosophy.approach}"
                  </blockquote>
                  <h4 className="font-semibold text-iitb-navy mb-4 font-academic">Teaching Methods:</h4>
                  <ul className="space-y-3">
                    {teachingPhilosophy.methods.map((method, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700 font-academic">
                        <div className="w-2 h-2 bg-iitb-navy rounded-full mt-2 flex-shrink-0"></div>
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="card-enhanced p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-iitb-navy mb-6 font-serif">Courses Taught</h3>
                  <div className="space-y-4">
                    {teachingPhilosophy.courses.map((course, index) => (
                      <div key={index} className="p-4 bg-iitb-light-blue rounded-lg">
                        <h4 className="font-semibold text-iitb-navy font-academic">{course}</h4>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button asChild className="btn-iitb font-academic w-full">
                      <Link href="/contact">
                        <Users className="w-4 h-4 mr-2" />
                        Join Our Research Group
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-enhanced bg-iitb-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">Interested in Collaboration?</h2>
          <p className="text-lg font-academic mb-8 text-blue-100">
            Whether you're a student, researcher, or industry professional, I'm always open to discussing new
            opportunities for collaboration and innovation in transportation engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-iitb-navy font-academic"
            >
              <Link href="/research">
                <BookOpen className="w-4 h-4 mr-2" />
                Explore Research
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-iitb-navy font-academic"
            >
              <Link href="/contact">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Meeting
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
