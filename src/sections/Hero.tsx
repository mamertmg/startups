import React from 'react'

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center text-white">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Investing in the Next Generation of Startups in Spain
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
  )
}

export default Hero
