import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Clock, Send, ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen gradient-iitb-light py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-iitb-navy mb-4">Contact Information</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch for research collaborations, academic inquiries, or professional consultations in
            transportation engineering and smart city systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="card-enhanced border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-iitb-navy">
                  <Mail className="w-6 h-6 text-iitb-navy" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-iitb-light-blue rounded-lg">
                  <Mail className="w-5 h-5 text-iitb-navy mt-1" />
                  <div>
                    <h3 className="font-semibold text-iitb-navy mb-1">Email</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">archak@iitb.ac.in</p>
                      <p className="text-gray-600">archak@civil.iitb.ac.in</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
                  <Phone className="w-5 h-5 text-iitb-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-iitb-navy mb-1">Phone</h3>
                    <p className="text-gray-600">+91-22-2576-7132</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-iitb-light-blue rounded-lg">
                  <Calendar className="w-5 h-5 text-iitb-navy mt-1" />
                  <div>
                    <h3 className="font-semibold text-iitb-navy mb-1">Schedule Appointment</h3>
                    <p className="text-gray-600 mb-2">Book a meeting using my calendar</p>
                    <Button asChild variant="outline" size="sm" className="btn-iitb-outline bg-transparent">
                      <Link
                        href="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Asia/Kolkata&title=Archak Mittal&showCalendars=0&mode=WEEK&src=YXJjaGFrbWl0dGFsQGdtYWlsLmNvbQ&src=YTZlMDJjYjdhNTM3NmUwYjQxZWRkZmI0NWMxOWEwNGU0NTgzNGMwYzA2MzMxZmNlMjE0ZjFlZjg4YjZhNTZjM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=#AD1457&color=#F09300"
                        target="_blank"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        View Calendar
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
                  <Clock className="w-5 h-5 text-iitb-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-iitb-navy mb-1">Office Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="card-enhanced border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-iitb-navy">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild variant="outline" className="w-full justify-start btn-iitb-outline bg-transparent">
                  <Link href="https://scholar.google.com/citations?user=nM_oGqQAAAAJ&hl=en" target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Google Scholar Profile
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start btn-iitb-outline bg-transparent">
                  <Link href="https://www.civil.iitb.ac.in/faculty/details/prof-archak-mittal" target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    IIT Bombay Faculty Page
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start btn-iitb-outline bg-transparent">
                  <Link href="https://linkedin.com/in/archak-mittal" target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-enhanced border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-iitb-navy">
                <Send className="w-6 h-6 text-iitb-navy" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" className="admin-input" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" className="admin-input" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" className="admin-input" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization/Institution</Label>
                  <Input
                    id="organization"
                    placeholder="Enter your organization or institution"
                    className="admin-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Enter the subject of your inquiry" className="admin-input" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your inquiry, research collaboration proposal, or any questions you may have..."
                    rows={6}
                    className="admin-input"
                  />
                </div>

                <Button type="submit" className="w-full btn-iitb text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Research Opportunities */}
        <Card className="card-enhanced mt-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-iitb-navy">Join My Team - Research Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-iitb-navy pl-6 py-4 bg-iitb-light-blue rounded-r-lg">
                <h3 className="text-lg font-semibold text-iitb-navy mb-2">Postdoctoral Opportunities</h3>
                <p className="text-gray-600 mb-3">
                  If you have recently completed or are close to completing your PhD and are looking to further your
                  research in the field of transportation engineering, please consider joining our team. I currently
                  have openings for postdoctoral researchers with a strong interest in this field.
                </p>
              </div>

              <div className="border-l-4 border-iitb-accent pl-6 py-4 bg-gray-100 rounded-r-lg">
                <h3 className="text-lg font-semibold text-iitb-navy mb-2">PhD Opening</h3>
                <p className="text-gray-600 mb-3">
                  I am inviting applications from dedicated individuals interested in pursuing doctoral research in
                  transportation systems engineering.
                </p>
              </div>

              <div className="border-l-4 border-gray-400 pl-6 py-4 bg-gray-100 rounded-r-lg">
                <h3 className="text-lg font-semibold text-iitb-navy mb-2">Internship Program</h3>
                <p className="text-gray-600 mb-3">
                  If you're an enthusiastic undergraduate student keen to learn more about transportation engineering, I
                  invite you to apply for an internship with us. A minimum commitment of 8 weeks is required.
                </p>
                <Button asChild variant="outline" size="sm" className="btn-iitb-outline bg-transparent">
                  <Link href="http://www.iitb.ac.in/newacadhome/toTraining.jsp" target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Internship Details at IIT Bombay
                  </Link>
                </Button>
              </div>

              <div className="border-l-4 border-iitb-accent pl-6 py-4 bg-iitb-light-blue rounded-r-lg">
                <h3 className="text-lg font-semibold text-iitb-navy mb-2">Industrial Collaboration</h3>
                <p className="text-gray-600 mb-3">
                  If your organization is interested in exploring a potential collaboration, or if you have a new idea
                  or a different topic you'd like to explore, please do not hesitate to contact us. I look forward to
                  the possibility of working together to create smarter and safer cities.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 text-center">
                If you're interested, feel free to reach out for more information at{" "}
                <Link href="mailto:archak@iitb.ac.in" className="text-iitb-navy hover:underline">
                  archak@iitb.ac.in
                </Link>{" "}
                or{" "}
                <Link href="mailto:archak@civil.iitb.ac.in" className="text-iitb-navy hover:underline">
                  archak@civil.iitb.ac.in
                </Link>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
