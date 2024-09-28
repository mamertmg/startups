import React from 'react'

const contact = () => {
  return (
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
  )
}

export default contact