import React, {useState} from 'react'
import { Rocket, Menu, X } from "lucide-react"
import Link from 'next/link'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
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
              <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#news">
              News
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
            <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#news" onClick={toggleMenu}>
              News
            </Link>
            <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#approach" onClick={toggleMenu}>
              Approach
            </Link>
            <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#contact" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
      )}
    </>
  )
}

export default Header