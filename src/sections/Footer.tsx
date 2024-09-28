import React from 'react'
import Link from "next/link"

const Footer = () => {
  return (
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
  )
}

export default Footer