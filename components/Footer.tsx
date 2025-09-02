'use client'

import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const footerColumns = [
    {
      title: "THE SHAREPAGE",
      type: "description",
      content: "Discover The SharePage - offering unparalleled privacy in data and content sharing and exciting earning opportunities!",
      socialIcons: true
    },
    {
      title: "THE SHAREPAGE",
      type: "links",
      links: [
        "Contact Us",
        "The SharePage",
        "Investment Opportunities",
        "Subscription Benefits",
        "Our Commitment"
      ]
    },
    {
      title: "GUIDE",
      type: "links",
      links: [
        "Sharepage Navigation",
        "Business Profile",
        "Knowledge Base"
      ]
    },
    {
      title: "OUR POLICIES",
      type: "links",
      links: [
        "Copyrights",
        "Privacy Policy",
        "Terms and Conditions"
      ]
    },
    {
      title: "OFFERINGS",
      type: "links",
      links: [
        "Referral Commissions",
        "Extra Ordinary Features",
        "Earning Opportunities",
        "GIVE AWAYS"
      ]
    }
  ]

  return (
    <footer className="bg-[#282440] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerColumns.map((column, index) => (
            <div key={index} className="space-y-4">
              {/* Column Title */}
              <h3 className="text-lg font-bold uppercase tracking-wide">
                {column.title}
              </h3>
              
              {/* Column Content */}
              {column.type === "description" ? (
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {column.content}
                  </p>
                  {column.socialIcons && (
                    <div className="flex space-x-3">
                      <div className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                        <Facebook size={20} />
                      </div>
                      <div className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                        <Twitter size={20} />
                      </div>
                      <div className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                        <Instagram size={20} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#212030] py-6">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              © The SharePage, 2024 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 