import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart2, Briefcase} from "lucide-react"

const approach = () => {
  return (
    <section id="approach" className="w-full py-12 md:py-24 lg:py-32 bg-white">
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
  )
}

export default approach