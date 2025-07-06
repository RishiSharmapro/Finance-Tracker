import React from 'react'
import Link from 'next/link';

import { DollarSign } from "lucide-react";

const Footer = () => {
  return (
    <div> 
        <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <DollarSign className="h-6 w-6" />
            <span className="text-xl font-bold">Finance Tracker</span>
          </div>
          <p className="text-gray-400 mb-4">Full-stack expense management made simple and powerful</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default Footer