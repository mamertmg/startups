import React from 'react'
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface Startup {
  name: string;
  website: string;
  phase: string;
  logo: string;
}

const startups = [
    { name: 'Bcas', description: 'Unlocking access to quality education through student finance', website: 'https://bcasapp.com/' , phase: 'active' ,logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/bcas-logo.png' },
    { name: 'HR Bot Factory', description: 'Recruitment software powered by AI generative', website: 'https://www.hrbotfactory.com/', phase: 'active', logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/hr-bot-factory-logo.png' },
    { name: 'Incapto Coffee', description: 'Buy freshly roasted specialty coffee beans', website: 'https://incapto.com/', phase: 'active', logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/incapto-coffee-logo.png' },
    { name: 'Simplr', description: 'All-in-one platform to streamline your operations', website: 'https://www.simplr.io/es-es', phase: 'inactive', logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/simplr-logo.png' },
    { name: 'Nester', description: 'Simplify the management of your rental properties', website: 'https://www.nestersoftware.com/', phase: 'active', logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/nester.png' },
    { name: 'Turiscool', description: 'Online hospitality school', website: 'https://turiscool.com/', phase: 'active', logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/turiscool.svg' },
    { name: 'Panggea', description: 'Sales virtual assistant for FMCG', website: 'https://www.hrbotfactory.com/', phase: 'active',logo: 'https://startups-marqueza.s3.eu-central-1.amazonaws.com/panggea.png' },
  ]

const Startups = () => {
  return (
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
  )
}

export default Startups