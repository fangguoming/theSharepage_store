'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Monitor } from 'lucide-react'

export default function BusinessOpportunity() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [currentDealIndex, setCurrentDealIndex] = useState(0)

  const leadingProducts = [
    {
      id: 1,
      name: "Solar Panel",
      title: "4 Solar Panels",
      subtitle: "Make full use of solar energy, fast charging",
      features: ["High Efficiency", "Portable"],
      image: "/images/business/solar_panel.png"
    },
    {
      id: 2,
      name: "Portable Solar Charger",
      title: "Reliable Mobile Charging Experience",
      subtitle: "36W Portable Solar Powered Charge",
      features: ["USB-C", "USB 3.0"],
      image: "/images/business/solar_charger.png"
    },
    {
      id: 3,
      name: "Solar Panel",
      title: "4 Solar Panels",
      subtitle: "Make full use of solar energy, fast charging",
      features: ["High Efficiency", "Portable"],
      image: "/images/business/solar_panel.png"
    }
  ]

  const latestArrivals = [
    { id: 1, name: "Fitness Tracker", image: "/images/business/clock.png" },
    { id: 2, name: "Smart Watch", image: "/images/business/phone_clock.png" },
    { id: 3, name: "Wireless Earbuds", image: "/images/business/earphone.png" },
    { id: 4, name: "Ergonomic Chair", image: "/images/business/chair.png" }
  ]

  const exclusiveDeals = [
    {
      id: 1,
      name: "Noise-Canceling Headphones",
      image: "/images/business/headphones.png",
      price: "$199"
    },
    {
      id: 2,
      name: "Electric Standing Desk",
      image: "/images/business/standing_desk.png",
      price: "$599"
    },
    {
      id: 3,
      name: "Premium Leather Laptop",
      image: "/images/business/leather_laptop.png",
      price: "$299"
    }
  ]

  const featuredDeal = {
    name: "Multi-Purpose Kitchen Blender",
    discount: "10% Off",
    image: "/images/business/kitchen_blender.png",
    price: "$89"
  }

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % leadingProducts.length)
  }

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + leadingProducts.length) % leadingProducts.length)
  }

  const nextDeal = () => {
    setCurrentDealIndex((prev) => (prev + 1) % exclusiveDeals.length)
  }

  const prevDeal = () => {
    setCurrentDealIndex((prev) => (prev - 1 + exclusiveDeals.length) % exclusiveDeals.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Main Heading */}
        <div className="mb-12">
          <h2 className="text-[32px] font-semibold text-[#222222] mb-[10px]">
            Uncover your next business opportunity with:
          </h2>
          <p className="text-black font-medium">
            Explore top-ranked products, latest arrivals, and exclusive deals to seize your next business opportunity.
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leading Rankings Card */}
          <div style={{
            paddingBlock: '24px',
            borderRadius: '4px',
            gap: '24px',
            backgroundColor: '#F8F8F8'
          }} className="rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-black text-[24px]">
                Leading Rankings
              </h3>
              <a href="#"className="text-[#0F8F46] text-[10px] hover:text-gray-800">
                View All Top Products
              </a>
            </div>
            
            <p className="mb-[24px] text-[10px] text-[#555555]">
              Explore Our Top-Performing Products Trusted By Businesses Worldwide.
            </p>

            {/* Featured Product */}
            <div className="relative mb-6">
              {/* Product Category */}
              <h4 className="font-semibold text-black mb-[10px] text-[14px]">
                {leadingProducts[currentProductIndex].name}
              </h4>
              
              {/* Main Product Display */}
              <div className="border border-[#FA8232] rounded-[4px] p-4 mb-4 bg-white">
                {/* Product Image */}
                <div className="mb-[10px]">
                  <img
                    src="/images/business/solar_charger.png"
                    alt="Portable Solar Charger"
                    className="w-full h-64 object-contain"
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={prevProduct}
                  className="rounded-full bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    filter: 'drop-shadow(0px 4px 4px rgba(12, 12, 13, 0.05))'
                  }}
                >
                  <ArrowLeft size={16} className="text-gray-600" />
                </button>
                
                <div className="flex space-x-2">
                  {leadingProducts.map((product, index) => (
                    <div
                      key={index}
                      className={`rounded-lg overflow-hidden ${
                        index === currentProductIndex ? 'border-2 border-orange-500' : 'border-2'
                      }`}
                      style={{
                        width: '80px',
                        height: '80px',
                        borderColor: '#E4E7E9'
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={nextProduct}
                  className="rounded-full bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    filter: 'drop-shadow(0px 4px 4px rgba(12, 12, 13, 0.05))'
                  }}
                >
                  <ArrowRight size={16} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Latest Arrivals Card */}
          <div className="rounded-lg p-6 shadow-sm bg-[#FFF3F3] rounded-[4px] py-[24px] gap-[24px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-black text-[24px]">
                Latest Arrivals
              </h3>
              <a href="#"className="text-[#555555] text-[10px] hover:text-gray-800">
                Explore New Arrivals
              </a>
            </div>
            
            <p className="mb-[24px] text-[10px] text-[#555555]">
              Stay Ahead With The Newest Additions Across Categories. Fresh Opportunities Updated Daily.
            </p>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {latestArrivals.map((product) => (
                <div key={product.id} className="text-center bg-white rounded-[10px] p-3 sm:p-4 w-full sm:w-[160px] md:w-[170px] lg:w-[180.67px] h-[120px] sm:h-[130px] md:h-[140px] lg:h-[150px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain mx-auto mb-auto w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px]"
                  />
                </div>
              ))}
            </div>

            {/* Fresh Stock Banner */}
            <div className="bg-white rounded-lg flex items-center w-full sm:w-[320px] md:w-[350px] lg:w-[385.55px] h-[60px] sm:h-[70px] md:h-[80px] py-2 sm:py-[7px] px-3 sm:px-[15px] gap-2 sm:gap-[10px]">
              <div className="w-[50px] h-[40px] sm:w-[60px] sm:h-[50px] md:w-[70px] md:h-[60px] lg:w-[74px] lg:h-[62px] flex-shrink-0 border-[1px] border-[#E4E7E9]">
                <img
                  src="/images/business/smart_TV.png"
                  alt="Monitor"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <span className="font-semibold text-gray-900 text-xs sm:text-sm md:text-[14px]">Fresh Stock:</span> <br />
                <span className="text-gray-600 ml-1 font-light text-xs sm:text-sm md:text-[14px]">Curated From Verified Suppliers</span>
              </div>
            </div>
          </div>

          {/* Exclusive Deals Card */}
          <div className="rounded-xl p-6 shadow-sm border-[1px] border-[#EBEDF0] bg-[#F9F9F9]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-black text-[24px]">Exclusive Deals</h3>
              <a href="#"className="hover:text-orange-700 text-[#FA8232] text-[10px] hover:text-gray-800">
                Shop Deals Now
              </a>
            </div>
            
            <p className="mb-[24px] text-[10px] text-[#555555]">
              Take Advantage Of Unbeatable Prices On High-Demand Products.
            </p>

            {/* Top Product Carousel */}
            <div className="mb-6">
              <div className="flex space-x-4 mb-4">
                {exclusiveDeals.map((deal, index) => (
                  <div key={deal.id} className="flex-1 bg-white rounded-lg flex flex-col border-[1px] border-[#E4E7E9] p-[8px] gap-[16px]">
                    {/* Upper Section - Product Image */}
                    <div className="flex-1 flex items-center justify-center">
                      <img
                        src={deal.image}
                        alt={deal.name}
                        className="object-contain"
                        style={{
                          width: '122px',
                          height: '80px'
                        }}
                      />
                    </div>
                    
                    {/* Lower Section - Product Title */}
                    <div className="flex-shrink-0">
                      <p style={{
                        color: '#555555',
                        fontSize: '10px',
                        fontWeight: 400
                      }} className="text-center">{deal.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Carousel Navigation Dots */}
              <div className="flex justify-center space-x-2">
                {exclusiveDeals.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === 0 ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                    style={{
                      backgroundColor: index === 0 ? '#0F8F46' : '#D1D5DB'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Promotional Banner */}
            <div className="relative bg-white rounded-[10px] border-[1px] border-[#E4E7E9] w-full sm:w-[320px] md:w-[350px] lg:w-full h-[180px] sm:h-[200px] md:h-[210px] p-4 sm:p-5 md:p-6">
              {/* Discount Badge */}
              <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6">
                <span className='w-[45px] sm:w-[50px] md:w-[55px] h-[12px] sm:h-[14px] md:h-[15px] px-2 sm:px-[8px] md:px-[10px] bg-[#FF00001A] text-[#FF0000] text-[8px] sm:text-[9px] md:text-[10px] rounded-[4px] flex justify-center items-center font-normal'>
                  10% Off
                </span>
              </div>
              
              {/* Product Title */}
              <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-[15px] md:text-[16px]">
                Multi-Purpose Kitchen Blender
              </h4>
              
              {/* Product Image */}
              <div className="relative h-[70px] sm:h-[80px] md:h-[100px]">
                <img
                  src="/images/business/kitchen_blender.png"
                  alt="Multi-Purpose Kitchen Blender"
                  className="object-contain w-full h-full max-w-full"
                />
              </div>
              
              {/* Limited-Time Deals Strip */}
              <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-[#EBC80C] py-1.5 sm:py-2 md:py-2">
                <span className="text-gray-900 text-center block px-2 sm:px-3 md:px-4 font-normal text-[10px] sm:text-[11px] md:text-[12px]">
                  Limited-Time Deals: Shop From Trusted Suppliers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 