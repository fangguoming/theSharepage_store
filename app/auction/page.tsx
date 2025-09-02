"use client"

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ArrowRight, Heart, Clock } from 'lucide-react'
import { useState } from 'react'

export default function AuctionPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All', active: true },
    { id: 'home-garden', name: 'Home & Garden' },
    { id: 'pet-supplies', name: 'Pet Supplies' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'tools-hardware', name: 'Tools & Hardware' },
    { id: 'business-services', name: 'Business Services' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'environment', name: 'Environment' },
    { id: 'food-beverage', name: 'Food & Beverage' }
  ]

  const auctionProducts = [
    {
      id: 1,
      name: "Samsung Electronics",
      price: "$5",
      timeLeft: "2193d 13h 9m 18s",
      image: "/images/auction/image 24.png"
    },
    {
      id: 2,
      name: "Amazon Basics High-Speed HDMI Cable...",
      price: "$70",
      timeLeft: "2193d 13h 9m 18s",
      image: "/images/auction/image 25.png"
    },
    {
      id: 3,
      name: "Handmade Wooden Jewelry Box - Vintage Carved ..",
      price: "$5",
      timeLeft: "2193d 13h 9m 18s",
      image: "/images/auction/image 89.png"
    },
    {
      id: 4,
      name: "TOZO T6 True Wireless Earbuds Bluetooth",
      price: "$5",
      timeLeft: "2193d 13h 9m 18s",
      image: "/images/auction/image 23.png"
    },
    {
      id: 5,
      name: "Portable Wshing Machine, 11lbs capacity Model.",
      price: "$5",
      timeLeft: "2193d 13h 9m 18s",
      image: "/images/auction/image 27.png"
    },
    {
      id: 6,
      name: "Amazon Basics High-Speed HDMI Cable..",
      price: "$5",
      timeLeft: "2193d 13h 9m 18s",
      image: "/images/auction/image 25.png"
    },
    {
      id: 7,
      name: "Portable Wshing Machine, 11lbs capacity....",
      price: "$5",
      timeLeft: "2193d 13h 9m 18s",
      image: "/images/auction/image 26.png"
    },
    {
      id: 8,
      name: "Samsung adfikjds haaj sdghsdgnjg",
      price: "$5",
      timeLeft: "2193d 13h 9m 18s",
      image: "/images/auction/image 24.png"
    },
    {
      id: 9,
      name: "Portable Wshing Machine, 11lbs capacity Model...",
      price: "$5",
      timeLeft: "2193d 13h 9m 18s",
      image: "/images/auction/image 27.png"
    },
    {
      id: 10,
      name: "TOZO T6 True Wireless Earbuds Bluetooth",
      price: "$5",
      timeLeft: "2193d 13h 9m 18s",
      image: "/images/auction/image 23.png"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner Section */}
      <section className="max-w-[1440px] mx-auto rounded-[4px] px-[81px] flex justify-between items-center h-[368px]" style={{ background: 'linear-gradient(to bottom, #0F8F46, #04411E)' }}>
        {/* Left Content */}
        <div className="text-white w-1/2">
          <h1 className="text-4xl font-bold mb-4">Xiaomi Mi 11 Ultra <br />12GB+256GB</h1>
          <p className="text-sm mb-6 opacity-80">*Data provided by internal laboratories. Industry measurement.</p>
          <button className="bg-white text-[#08B564] w-[191px] h-[56px] rounded-[3px] font-bold hover:bg-gray-100 transition-colors flex justify-center items-center gap-[12px]">
            <span>SHOP NOW</span>
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Content - Product Image */}
        <div className='relative w-1/2 h-full overflow-hidden'>
          <div className='absolute bottom-0 right-[36px]'>
            <div className="relative">
              <img
                src="/images/auction/xiaomi_lg.png"
                alt="Xiaomi Mi 11 Ultra"
                className="w-[408px] max-w-md bottom-0 right-[36px] z-[10000]"
              />
              {/* Price Tag Overlay */}
              <span className="absolute top-1/3 left-[-90px] bg-[#FB8308] text-white rounded-[10px] font-semibold text-[36px] flex items-center pl-[10px] py-[10px] w-[195px] z-[1]">
                $590
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap pb-2 px-1 border-b-2 transition-colors ${category.active
                  ? 'border-green-500 text-green-500 font-medium'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Auction Products Grid */}
      <section className="py-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {auctionProducts.map((product) => (
              <div key={product.id} className="flex flex-col bg-white border border-[#E4E7E9] rounded-[6px] overflow-hidden hover:shadow-lg transition-shadow">
                {/* Product Image */}
                <div className='flex justify-center items-center w-full h-[172px] p-[24px]'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='h-full'
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Product Name */}
                  <h3 className="font-medium text-gray-900 text-[14px] mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <p className="text-[14px] text-[#2DA5F3] mb-[8px]">
                    Starts At {product.price}
                  </p>

                  {/* Time Left */}
                  <div className="flex items-center space-x-2 mb-[24px] text-[10px] text-[#7E7E7E]">
                    <span>{product.timeLeft}</span>
                  </div>

                  {/* Action Button */}
                  <div className='flex items-center gap-[16px]'>
                    <button
                      onClick={() => window.location.href = '/auction/product-details'}
                      className="w-full bg-white text-[#191C1F] w-[184px] h-[40px] rounded-[100px] border-[#191C1F] border-[0.3px] text-sm font-medium"
                    >
                      Place bid
                    </button>
                    <button>
                      <Heart size={20} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 