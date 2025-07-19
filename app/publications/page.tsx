import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, BookOpen, Quote } from "lucide-react"
import Link from "next/link"

export default function PublicationsPage() {
  const featuredPublications = [
    {
      title: "Network flow relations and travel time reliability in a connected environment",
      year: "2017",
      citations: 32,
      journal: "Transportation Research Part C",
      abstract:
        "This study explores the relationship between network flow patterns and travel time reliability in connected vehicle environments.",
    },
    {
      title: "Game theory-based framework for modeling human–vehicle interactions on the road",
      year: "2020",
      citations: 30,
      journal: "Transportation Research Part B",
      abstract:
        "A comprehensive framework using game theory to model complex interactions between human drivers and automated vehicles.",
    },
    {
      title: "Incentive design and profit sharing in multi-modal transportation networks",
      year: "2022",
      citations: 27,
      journal: "Transportation Research Part A",
      abstract:
        "Novel approaches to incentive mechanisms and profit distribution in integrated multi-modal transportation systems.",
    },
    {
      title: "RIde-hail vehicle routing (RIVER) as a congestion game",
      year: "2023",
      citations: 19,
      journal: "Transportation Science",
      abstract: "Modeling ride-hail vehicle routing decisions as a congestion game to optimize urban mobility systems.",
    },
    {
      title:
        "Predictive dynamic speed limit in a connected environment for a weather affected traffic network: A case study of Chicago",
      year: "2018",
      citations: 19,
      journal: "Transportation Research Part C",
      abstract:
        "Implementation of predictive speed limit systems using connected vehicle data for weather-affected traffic conditions.",
    },
  ]

  const recentPublications = [
    {
      title: "Machine learning approaches for traffic signal optimization in smart cities",
      year: "2024",
      journal: "IEEE Transactions on Intelligent Transportation Systems",
    },
    {
      title: "Safety analysis of vulnerable road users in connected vehicle environments",
      year: "2024",
      journal: "Accident Analysis & Prevention",
    },
    {
      title: "Real-time traffic management using connected vehicle data",
      year: "2023",
      journal: "Transportation Research Part C",
    },
    {
      title: "Optimization of dedicated lanes for connected and automated vehicles",
      year: "2023",
      journal: "Transportation Research Part B",
    },
  ]

  return (
    <div className="min-h-screen gradient-iitb-light py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-iitb-navy mb-4">Publications</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            A comprehensive list of research publications in transportation engineering, connected vehicles, and smart
            city systems.
          </p>
          <Button asChild className="btn-iitb text-white">
            <Link href="https://scholar.google.com/citations?user=nM_oGqQAAAAJ&hl=en" target="_blank">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Publication List on Google Scholar
            </Link>
          </Button>
        </div>

        {/* Publication Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="card-enhanced text-center p-6 border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-iitb-navy mb-2">50+</div>
              <div className="text-gray-600">Total Publications</div>
            </CardContent>
          </Card>
          <Card className="card-enhanced text-center p-6 border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-iitb-accent mb-2">800+</div>
              <div className="text-gray-600">Total Citations</div>
            </CardContent>
          </Card>
          <Card className="card-enhanced text-center p-6 border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-iitb-navy mb-2">15</div>
              <div className="text-gray-600">H-Index</div>
            </CardContent>
          </Card>
          <Card className="card-enhanced text-center p-6 border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-iitb-accent mb-2">2024</div>
              <div className="text-gray-600">Latest Publication</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Publications */}
        <Card className="card-enhanced mb-12 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-iitb-navy">
              <BookOpen className="w-6 h-6 text-iitb-navy" />
              Featured Publications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {featuredPublications.map((pub, index) => (
              <div key={index} className="border-l-4 border-iitb-navy pl-6 py-4 bg-white rounded-r-lg shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-iitb-navy mb-2 lg:mb-0 lg:flex-1 lg:pr-4">{pub.title}</h3>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="border-iitb-accent text-iitb-accent">
                      {pub.year}
                    </Badge>
                    <Badge className="bg-iitb-light-blue text-iitb-navy hover:bg-iitb-light-blue">
                      <Quote className="w-3 h-3 mr-1" />
                      {pub.citations} citations
                    </Badge>
                  </div>
                </div>
                <p className="text-iitb-accent font-medium mb-2">{pub.journal}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{pub.abstract}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Publications */}
        <Card className="card-enhanced border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-iitb-navy">Recent Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {recentPublications.map((pub, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 card-enhanced">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="mb-2 border-iitb-accent text-iitb-accent">
                      {pub.year}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-iitb-navy mb-2 leading-tight">{pub.title}</h3>
                  <p className="text-iitb-accent text-sm">{pub.journal}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Research Areas */}
        <Card className="card-enhanced mt-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-iitb-navy">Publication Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-iitb-light-blue text-iitb-navy hover:bg-iitb-light-blue">Connected Vehicles</Badge>
              <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Traffic Flow Modeling</Badge>
              <Badge className="bg-iitb-light-blue text-iitb-navy hover:bg-iitb-light-blue">Game Theory</Badge>
              <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Smart Cities</Badge>
              <Badge className="bg-iitb-light-blue text-iitb-navy hover:bg-iitb-light-blue">Road Safety</Badge>
              <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Transportation Networks</Badge>
              <Badge className="bg-iitb-light-blue text-iitb-navy hover:bg-iitb-light-blue">Traffic Signals</Badge>
              <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Machine Learning</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
