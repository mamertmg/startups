import React, {useState, useEffect} from 'react'
import Approach from '@/sections/Approach'
import Hero from '@/sections/Hero'
import Footer from '@/sections/Footer'
import Startups from '@/sections/Startups'
import News from '@/sections/News'
import Header from '@/sections/Header'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import emailjs from "@emailjs/browser";


interface MailData extends Record<string, unknown> {
  name: string;
  startup: string;
  email: string;
  message?: string;
}

emailjs.init({
  publicKey: 'g4Vgg5K2yu2XXtqXO',
});


const LandingPage: React.FC = () => {

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
      <Header/>      
      <main className="flex-1">
        <Hero/>
        <Startups/>
        <News/>
        <Approach/>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-100 to-pink-100">
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
      <Footer/>
    </div>
  )
}

export default LandingPage