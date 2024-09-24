import React, {useState, useEffect} from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart2, Briefcase, Rocket, ExternalLink, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import emailjs from "@emailjs/browser";

interface Startup {
  name: string;
  website: string;
  phase: string;
  logo: string;
}

interface MailData extends Record<string, unknown> {
  name: string;
  startup: string;
  email: string;
  message?: string;
}

emailjs.init({
  publicKey: 'g4Vgg5K2yu2XXtqXO',
});

const startups = [
  { name: 'Bcas', description: 'Unlocking access to quality education through student finance', website: 'https://bcasapp.com/' , phase: 'active' ,logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/bcas-logo.png' },
  { name: 'HR Bot Factory', description: 'Recruitment software powered by AI generative', website: 'https://www.hrbotfactory.com/', phase: 'active', logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/hr-bot-factory-logo.png' },
  { name: 'Incapto Coffee', description: 'Buy freshly roasted specialty coffee beans', website: 'https://incapto.com/', phase: 'active', logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/incapto-coffee-logo.png' },
  { name: 'Simplr', description: 'All-in-one platform to streamline your operations', website: 'https://www.simplr.io/es-es', phase: 'inactive', logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/simplr-logo.png' },
  { name: 'Nester', description: 'Simplify the management of your rental properties', website: 'https://www.nestersoftware.com/', phase: 'active', logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/nester.png' },
  { name: 'Turiscool', description: 'Online hospitality school', website: 'https://turiscool.com/', phase: 'active', logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/turiscool.svg' },
  { name: 'Panggea', description: 'Sales virtual assistant for FMCG', website: 'https://www.hrbotfactory.com/', phase: 'active',logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/panggea.png' },
]


const LandingPage: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for burger menu

  const [mailData, setMailData] = useState<MailData>({
    name: "",
    startup: "",
    email: "",
  });

  useEffect(() => {
    // Set initial mail data once when the component mounts
    setMailData({ name: "", email: "", startup: "" });
  }, []); // The empty array ensures this runs only once on mount

  const { name, startup, email } = mailData;

  const [error, setError] = useState<boolean | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, startup, email } = mailData;

    if (name.length === 0 || startup.length === 0 || email.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_pjudn05", // service id
          "portfolio", // template id
          mailData as Record<string, unknown>, // Type assertion
           // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", startup: "" });
          },
          (err) => {
            console.error(err.text);
          }
        );
    }
  };
  
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow-sm">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6 text-purple-600" />
          <span className="ml-2 text-sm lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Alberto Márquez</span>
        </Link>
        <div className="ml-auto flex items-center">
          {/* Burger Icon for small screens */}
          <button className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6 text-purple-600" /> : <Menu className="h-6 w-6 text-purple-600" />}
          </button>
          {/* Full menu for larger screens */}
          <nav className="hidden lg:flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#portfolio">
              Portfolio
            </Link>
            <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#approach">
              Approach
            </Link>
            <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Conditional rendering for the menu on small screens */}
      {isMenuOpen && (
        <nav className="lg:hidden flex flex-col items-center gap-4 py-4 bg-white shadow-md">
          <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#portfolio" onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#approach" onClick={toggleMenu}>
            Approach
          </Link>
          <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#contact" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      )}
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Investing in the Next Generation of Startups
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                  Early-stage investments in innovative technology companies.
                </p>
                <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                  Building the future, one startup at a time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">My Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {startups.map((startup, i) => (
                <Card key={i} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 mx-auto mb-4 relative flex justify-center items-center">
                      <Image
                        src={startup.logo}
                        alt={`${startup.name} logo`}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30"></div>
                    </div>

                    <h3 className="text-xl font-bold text-center mb-2 text-gray-800">{startup.name}</h3>
                    <div className="flex justify-center items-center mb-2">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        {startup.phase}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {startup.description}
                    </p>
                    <div className="text-center">
                      <Link 
                        href={startup.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-purple-600 hover:text-purple-800 transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="approach" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-100 to-pink-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Briefcase className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Early-Stage Focus</h3>
                  <p className="text-sm text-gray-600">
                    I invest in pre-seed and seed-stage startups with high growth potential in Spain.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <BarChart2 className="h-12 w-12 text-pink-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Added value</h3>
                  <p className="text-sm text-gray-600">
                    Beyond capital, I provide mentorship, network access and guidance.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <ArrowRight className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Long-Term Vision</h3>
                  <p className="text-sm text-gray-600">
                    I am committed to supporting our portfolio companies through their journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Get in Touch</h2>
            <div className="max-w-md mx-auto">
              <form 
                className="space-y-4"
                id="contact_form"
                onSubmit={(e)=>onSubmit(e)}
              >
                <Input 
                  name="name"
                  onChange={(e)=> onChange(e)}
                  id="name"
                  value={name}
                  type="text"
                  placeholder="Your Name" 
                  className="border-purple-200 focus:border-purple-400" 
                />
                <Input
                  name="email"
                  value={email}
                  type="email" 
                  placeholder="Your Email" 
                  onChange={(e)=>onChange(e)}
                  className="border-purple-200 focus:border-purple-400" 
                />
                <Input
                  name="startup"
                  id="startup"
                  value={startup}
                  type="text"
                  onChange={(e)=>onChange(e)}
                  placeholder="Your Startup" 
                  className="border-purple-200 focus:border-purple-400"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Alberto Márquez. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-purple-600 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-purple-600 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default LandingPage