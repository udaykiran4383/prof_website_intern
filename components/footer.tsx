import Link from "next/link"
import { Mail, Phone, MapPin, ExternalLink, GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-iitb-navy text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-serif">Professor Archak Mittal</h3>
                <p className="text-blue-200 text-sm font-academic">Assistant Professor, IIT Bombay</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed text-sm font-academic">
              Department of Civil Engineering, Indian Institute of Technology Bombay. Specializing in transportation
              engineering, connected vehicles, and intelligent transportation systems for smarter, safer cities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-blue-100">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium font-academic">archak@civil.iitb.ac.in</p>
                  <p className="text-xs text-blue-200 font-academic">archak@iitb.ac.in</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-academic">+91-22-2576-7132</span>
              </div>
              <div className="flex items-start gap-3 text-blue-100">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-sm font-academic">
                  <p className="font-medium">Department of Civil Engineering</p>
                  <p className="text-blue-200">IIT Bombay, Powai, Mumbai - 400076</p>
                  <p className="text-blue-200">Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white font-serif">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 transition-transform font-academic"
                >
                  <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 transition-transform font-academic"
                >
                  <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                  Research Interests
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 transition-transform font-academic"
                >
                  <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 transition-transform font-academic"
                >
                  <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                  Research Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/patents"
                  className="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 transition-transform font-academic"
                >
                  <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                  Patents
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 transition-transform font-academic"
                >
                  <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                  Contact & Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white font-serif">External Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://scholar.google.com/citations?user=nM_oGqQAAAAJ&hl=en"
                  target="_blank"
                  className="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 transition-transform font-academic"
                >
                  <ExternalLink className="w-3 h-3" />
                  Google Scholar Profile
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.civil.iitb.ac.in/faculty/details/prof-archak-mittal"
                  target="_blank"
                  className="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 transition-transform font-academic"
                >
                  <ExternalLink className="w-3 h-3" />
                  IIT Bombay Faculty Page
                </Link>
              </li>
              <li>
                <Link
                  href="https://homepages.iitb.ac.in/~archak/"
                  target="_blank"
                  className="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 transition-transform font-academic"
                >
                  <ExternalLink className="w-3 h-3" />
                  Personal Homepage
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/archak-mittal"
                  target="_blank"
                  className="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 transition-transform font-academic"
                >
                  <ExternalLink className="w-3 h-3" />
                  LinkedIn Profile
                </Link>
              </li>
              <li>
                <Link
                  href="https://fellows.ias.ac.in/profile/v/AS2024015"
                  target="_blank"
                  className="text-blue-100 hover:text-white transition-colors text-sm flex items-center gap-2 hover:translate-x-1 transition-transform font-academic"
                >
                  <ExternalLink className="w-3 h-3" />
                  Indian Academy of Sciences
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm font-academic">
                <p className="text-white font-medium">Indian Institute of Technology Bombay</p>
                <p className="text-blue-200">Department of Civil Engineering</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-200 text-sm font-academic">
                © {new Date().getFullYear()} Professor Archak Mittal. All rights reserved.
              </p>
              <p className="text-blue-300 text-xs mt-1 font-academic">
                Transportation Systems Engineering • Connected Vehicles • Smart Cities
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
