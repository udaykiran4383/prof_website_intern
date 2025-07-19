import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Star, Calendar } from "lucide-react"

export default function AwardsPage() {
  const awards = [
    {
      title: "Associate, Indian Academy of Sciences",
      organization: "Indian Academy of Sciences, Bengaluru, India",
      year: "2024",
      description:
        "Elected as an Associate of the prestigious Indian Academy of Sciences in recognition of outstanding contributions to transportation engineering research.",
      type: "Fellowship",
      color: "iitb",
    },
    {
      title: "Young Faculty Award in Engineering",
      organization: "Venus International Foundation, Chennai, India",
      year: "2024",
      description:
        "Recognized for exceptional research contributions and academic excellence in the field of civil and transportation engineering.",
      type: "Research Award",
      color: "accent",
    },
    {
      title: "Young Faculty Award",
      organization: "Indian Institute of Technology Bombay, India",
      year: "2024",
      description:
        "Recognition for outstanding research contributions and academic excellence as a young faculty member at IIT Bombay.",
      type: "Institutional Award",
      color: "iitb",
    },
    {
      title: "Dissertation Fellowship",
      organization: "Northwestern University, USA",
      year: "2018",
      description: "Fellowship awarded for outstanding doctoral research in transportation engineering.",
      type: "Fellowship",
      color: "accent",
    },
    {
      title: "Walter P. Murphy Fellowship",
      organization: "Northwestern University, USA",
      year: "2014",
      description: "Prestigious fellowship for graduate studies at Northwestern University.",
      type: "Fellowship",
      color: "accent",
    },
    {
      title: "DAAD-WISE Fellowship",
      organization: "Germany",
      year: "2013",
      description: "German Academic Exchange Service fellowship for research collaboration.",
      type: "International Fellowship",
      color: "gray",
    },
    {
      title: "MITACS Fellowship",
      organization: "Canada",
      year: "2012",
      description: "Research fellowship for international collaboration in Canada.",
      type: "International Fellowship",
      color: "gray",
    },
    {
      title: "Undergraduate Research Award",
      organization: "IIT Bombay, India",
      year: "2012",
      description: "Recognition for outstanding undergraduate research contributions.",
      type: "Research Award",
      color: "iitb",
    },
  ]

  const recognitions = [
    {
      title: "Best Paper Award",
      event: "International Conference on Transportation Systems",
      year: "2023",
      description: "For outstanding research on connected vehicle optimization in urban environments.",
    },
    {
      title: "Outstanding Reviewer",
      event: "Transportation Research Part C",
      year: "2022",
      description: "Recognized for exceptional peer review contributions to the journal.",
    },
    {
      title: "Early Career Researcher Award",
      event: "Transportation Research Board",
      year: "2021",
      description: "Acknowledgment of significant early-career contributions to transportation research.",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      iitb: "border-gray-300 bg-white",
      accent: "border-gray-300 bg-white", 
      gray: "border-gray-400 bg-gray-50",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.iitb
  }

  return (
    <div className="min-h-screen gradient-iitb-light py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-iitb-navy mb-4">Awards and Honors</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recognition of research excellence and contributions to the field of transportation engineering and smart
            city systems.
          </p>
        </div>

        {/* Major Awards */}
        <Card className="card-enhanced mb-12 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-iitb-navy">
              <Trophy className="w-6 h-6 text-iitb-navy" />
              Major Awards and Honors
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {awards.map((award, index) => (
              <div key={index} className={`border-l-4 pl-6 py-6 rounded-r-lg ${getColorClasses(award.color)}`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-iitb-navy">{award.title}</h3>
                      <Badge className="bg-iitb-navy hover:bg-iitb-dark-navy text-white">{award.year}</Badge>
                    </div>
                    <p className="text-iitb-accent font-semibold mb-3">{award.organization}</p>
                    <p className="text-gray-700 leading-relaxed mb-3">{award.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs border-iitb-navy text-iitb-navy">
                    {award.type}
                  </Badge>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{award.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Professional Recognition */}
        <Card className="card-enhanced mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-iitb-navy">
              <Star className="w-6 h-6 text-iitb-navy" />
              Professional Recognition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {recognitions.map((recognition, index) => (
              <div key={index} className="border-l-4 border-gray-300 pl-6 py-4 bg-white rounded-r-lg shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-iitb-navy">{recognition.title}</h3>
                  <Badge variant="outline" className="border-iitb-accent text-iitb-accent">
                    {recognition.year}
                  </Badge>
                </div>
                <p className="text-iitb-accent font-medium mb-2">{recognition.event}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{recognition.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Impact and Recognition */}
        <Card className="card-enhanced border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-iitb-navy">
              <Award className="w-6 h-6 text-iitb-navy" />
              Research Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-iitb-navy">Academic Recognition</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-navy rounded-full"></div>
                    <span>Associate Member, Indian Academy of Sciences (2024)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-accent rounded-full"></div>
                    <span>Young Faculty Award in Engineering (2024)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-navy rounded-full"></div>
                    <span>50+ peer-reviewed publications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-accent rounded-full"></div>
                    <span>800+ total citations</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-iitb-navy">Professional Service</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-navy rounded-full"></div>
                    <span>Editorial Board Member, Transportation Journals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-accent rounded-full"></div>
                    <span>Reviewer for Top-tier Transportation Journals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-navy rounded-full"></div>
                    <span>Conference Session Chair and Organizer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-iitb-accent rounded-full"></div>
                    <span>Grant Review Panel Member</span>
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
