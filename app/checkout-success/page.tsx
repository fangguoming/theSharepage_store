'use client'

import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Check, ArrowRight, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutSuccess() {
  const [orderNumber, setOrderNumber] = useState('005101')

  // Generate a random order number on component mount
  useEffect(() => {
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString()
    setOrderNumber(randomOrderNumber)
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 py-16">
        {/* Success Content */}
        <div className="bg-white flex justify-center items-center flex-col gap-[32px] rounded-lg shadow-lg p-12 w-full h-[524px] text-center">

          {/* Success Icon */}
          <div className="w-16 h-16 bg-green-100 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto">
            <Check size={32} className="text-green-500" />
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Your order#{orderNumber} is successfully place
          </h1>

          {/* Descriptive Text */}
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* GO TO DASHBOARD Button */}
            <Link href="/dashboard">
              <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-orange-300 text-orange-500 bg-white rounded-full font-medium hover:bg-orange-50 transition-colors w-full sm:w-auto">
                <LayoutDashboard size={20} />
                <span>GO TO DASHBOARD</span>
              </button>
            </Link>

                          {/* VIEW ORDER Button */}
              <Link href="/mystore/orders">
                <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors w-full sm:w-auto">
                  <span>VIEW ORDER</span>
                  <ArrowRight size={20} />
                </button>
              </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 