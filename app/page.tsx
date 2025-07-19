import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ArrowRight, Award, BookOpen, Users, Calendar, Mail, Phone, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-enhanced py-24 px-4 text-white relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-light mb-6 font-serif leading-tight text-shadow">
            Professor Archak Mittal
          </h1>
          <p className="text-xl font-light font-academic max-w-3xl mx-auto leading-relaxed mb-8 text-gray-100">
            Assistant Professor, Department of Civil Engineering
          </p>
          <p className="text-lg font-light font-academic max-w-3xl mx-auto leading-relaxed mb-12 text-gray-200">
            Advancing transportation engineering through connected vehicles, intelligent systems, and data-driven
            solutions for safer, more efficient urban mobility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="btn-iitb-outline bg-white/10 border-white/30 text-white hover:bg-white hover:text-iitb-navy font-academic px-8 py-3"
            >
              <Link href="/research">
                Explore Research
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              className="btn-iitb-outline bg-white/10 border-white/30 text-white hover:bg-white hover:text-iitb-navy font-academic px-8 py-3"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="card-enhanced text-center p-6 border border-gray-200">
              <CardContent className="p-0">
                <BookOpen className="w-8 h-8 text-iitb-navy mx-auto mb-3" />
                <div className="text-3xl font-bold text-iitb-navy mb-2 font-serif">50+</div>
                <div className="text-gray-600 font-academic">Publications</div>
              </CardContent>
            </Card>
            <Card className="card-enhanced text-center p-6 border border-gray-200">
              <CardContent className="p-0">
                <Award className="w-8 h-8 text-iitb-navy mx-auto mb-3" />
                <div className="text-3xl font-bold text-iitb-navy mb-2 font-serif">8</div>
                <div className="text-gray-600 font-academic">Awards & Honors</div>
              </CardContent>
            </Card>
            <Card className="card-enhanced text-center p-6 border border-gray-200">
              <CardContent className="p-0">
                <Users className="w-8 h-8 text-iitb-navy mx-auto mb-3" />
                <div className="text-3xl font-bold text-iitb-navy mb-2 font-serif">800+</div>
                <div className="text-gray-600 font-academic">Citations</div>
              </CardContent>
            </Card>
            <Card className="card-enhanced text-center p-6 border border-gray-200">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-iitb-navy mb-2 font-serif">2024</div>
                <div className="text-gray-600 font-academic">IAS Associate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-enhanced">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-iitb-gray rounded-lg overflow-hidden card-enhanced">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Professor Archak Mittal"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-iitb-navy mb-6 font-serif">About Professor Mittal</h2>
              <div className="space-y-6 text-gray-700 font-academic leading-relaxed">
                <p>
                  Professor Archak Mittal is an Assistant Professor in the Department of Civil Engineering at the Indian
                  Institute of Technology Bombay. He brings extensive industry experience from his tenure at Ford Motor
                  Company and Leidos Corporation, where he worked on cutting-edge connected and automated vehicle
                  technologies.
                </p>
                <p>
                  His research focuses on developing innovative solutions for modern transportation challenges,
                  particularly in the areas of connected vehicles, traffic flow optimization, and intelligent
                  transportation systems. He combines advanced simulation modeling, machine learning, and real-world
                  data analysis to create practical solutions for urban mobility.
                </p>
                <p>
                  Dr. Mittal earned his Ph.D. in Civil Engineering from Northwestern University and has been recognized
                  with several prestigious awards, including being elected as an Associate of the Indian Academy of
                  Sciences in 2024.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="btn-iitb font-academic">
                  <Link href="/about">
                    Read Full Biography
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="section-enhanced bg-iitb-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-iitb-navy mb-4 font-serif">Research Highlights</h2>
            <p className="text-lg text-gray-600 font-academic max-w-3xl mx-auto">
              Pioneering research in transportation engineering with focus on connected vehicles and smart city
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-enhanced p-8 border-0">
              <CardContent className="p-0">
                <h3 className="text-xl font-medium text-iitb-navy mb-4 font-serif">Connected Vehicles</h3>
                <p className="text-gray-600 font-academic leading-relaxed mb-6">
                  Development of simulation frameworks and optimization algorithms for connected and automated vehicle
                  systems in complex urban environments.
                </p>
                <div className="space-y-2 text-sm text-gray-600 font-academic">
                  <div>• Vehicle-to-Vehicle Communication</div>
                  <div>• Traffic Flow Optimization</div>
                  <div>• Mixed Traffic Scenarios</div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-8 border-0">
              <CardContent className="p-0">
                <h3 className="text-xl font-medium text-iitb-navy mb-4 font-serif">Smart Cities</h3>
                <p className="text-gray-600 font-academic leading-relaxed mb-6">
                  Integration of intelligent transportation systems within smart city frameworks using real-time data
                  analytics and adaptive control mechanisms.
                </p>
                <div className="space-y-2 text-sm text-gray-600 font-academic">
                  <div>• Real-time Traffic Management</div>
                  <div>• Adaptive Signal Control</div>
                  <div>• Urban Mobility Planning</div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-8 border-0">
              <CardContent className="p-0">
                <h3 className="text-xl font-medium text-iitb-navy mb-4 font-serif">Safety Systems</h3>
                <p className="text-gray-600 font-academic leading-relaxed mb-6">
                  Advanced safety solutions for vulnerable road users through intelligent detection systems and
                  predictive modeling approaches.
                </p>
                <div className="space-y-2 text-sm text-gray-600 font-academic">
                  <div>• Pedestrian Safety Systems</div>
                  <div>• Cyclist Protection</div>
                  <div>• Emergency Response</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="section-enhanced">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-light text-iitb-navy font-serif">Recent Publications</h2>
            <Button asChild variant="ghost" className="text-gray-600 hover:text-iitb-navy font-academic">
              <Link href="/publications">
                View All Publications
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-enhanced p-6 border-0">
              <CardContent className="p-0">
                <div className="text-sm text-gray-600 font-academic mb-2">Transportation Research Part C • 2024</div>
                <h3 className="text-lg font-medium text-iitb-navy mb-3 font-serif leading-tight">
                  Machine Learning Approaches for Real-Time Traffic Signal Optimization in Connected Vehicle
                  Environments
                </h3>
                <p className="text-gray-600 font-academic text-sm leading-relaxed mb-4">
                  This study presents novel machine learning algorithms for dynamic traffic signal control using
                  real-time connected vehicle data to optimize urban traffic flow.
                </p>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-iitb-navy p-0 h-auto">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  Read Paper
                </Button>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6 border-0">
              <CardContent className="p-0">
                <div className="text-sm text-gray-600 font-academic mb-2">Accident Analysis & Prevention • 2024</div>
                <h3 className="text-lg font-medium text-iitb-navy mb-3 font-serif leading-tight">
                  Safety Analysis of Vulnerable Road Users in Connected Vehicle Environments
                </h3>
                <p className="text-gray-600 font-academic text-sm leading-relaxed mb-4">
                  Comprehensive analysis of pedestrian and cyclist safety improvements through connected vehicle
                  technologies and intelligent infrastructure systems.
                </p>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-iitb-navy p-0 h-auto">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  Read Paper
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-enhanced bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-iitb-navy mb-4 font-serif">Awards & Recognition</h2>
            <p className="text-lg text-gray-600 font-academic max-w-3xl mx-auto">
              Recognition for excellence in research and contributions to transportation engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-enhanced p-6 border-0">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-iitb-light-blue rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-iitb-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-iitb-navy mb-1 font-serif">
                      Associate, Indian Academy of Sciences
                    </h3>
                    <p className="text-iitb-accent text-sm mb-2 font-academic">2024</p>
                    <p className="text-gray-600 text-sm font-academic">
                      Elected as an Associate of the prestigious Indian Academy of Sciences in recognition of
                      outstanding contributions to transportation engineering research.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6 border-0">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-iitb-light-blue rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-iitb-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-iitb-navy mb-1 font-serif">
                      Young Faculty Award in Engineering
                    </h3>
                    <p className="text-iitb-accent text-sm mb-2 font-academic">2024</p>
                    <p className="text-gray-600 text-sm font-academic">
                      Recognized for exceptional research contributions and academic excellence in the field of civil
                      and transportation engineering.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="btn-iitb-outline font-academic bg-transparent">
              <Link href="/awards">
                View All Awards
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="section-enhanced bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-iitb-navy mb-4 font-serif">My Calendar</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6 font-academic">
              View my schedule and availability for meetings, office hours, and academic events.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Asia/Kolkata&title=Archak%20Mittal&showCalendars=0&mode=WEEK&src=YXJjaGFrbWl0dGFsQGdtYWlsLmNvbQ&src=YTZlMDJjYjdhNTM3NmUwYjQxZWRkZmI0NWMxOWEwNGU0NTgzNGMwYzA2MzMxZmNlMjE0ZjFlZjg4YjZhNTZjM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457&color=%23F09300"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="Archak Mittal Calendar"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-enhanced">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-iitb-navy mb-4 font-serif">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6 font-academic">
              Interested in research collaborations, academic opportunities, or consultations? I'd be happy to discuss
              how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-enhanced p-6 border-0 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-iitb-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-iitb-navy" />
                </div>
                <h3 className="text-lg font-semibold text-iitb-navy mb-2 font-serif">Email</h3>
                <p className="text-gray-600 text-sm mb-2 font-academic">archak@civil.iitb.ac.in</p>
                <p className="text-gray-600 text-sm font-academic">archak@iitb.ac.in</p>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6 border-0 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-iitb-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-iitb-navy" />
                </div>
                <h3 className="text-lg font-semibold text-iitb-navy mb-2 font-serif">Phone</h3>
                <p className="text-gray-600 text-sm font-academic">+91-22-2576-7132</p>
              </CardContent>
            </Card>

            <Card className="card-enhanced p-6 border-0 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-iitb-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-iitb-navy" />
                </div>
                <h3 className="text-lg font-semibold text-iitb-navy mb-2 font-serif">Office</h3>
                <p className="text-gray-600 text-sm font-academic">Department of Civil Engineering</p>
                <p className="text-gray-600 text-sm font-academic">IIT Bombay, Mumbai</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild className="btn-iitb font-academic">
              <Link href="/contact">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Meeting
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
