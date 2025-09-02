'use client'

import { useState } from 'react'
import { ArrowRight, Star, Menu } from 'lucide-react'

export default function Wholesale() {
  const [activeCategory, setActiveCategory] = useState('All Product')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const categories = [
    'All Product',
    'Smart Phone',
    'Laptop',
    'Headphone',
    'TV'
  ]

  const products = [
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds Bluetooth...",
      price: "$70",
      image: "/images/wholesale/TOZO-t6.png",
      badge: "HOT",
      badgeColor: "red",
      rating: 5,
      reviews: 738,
      originalPrice: null
    },
    {
      id: 2,
      name: "Samsung Electronics Samsung Galaxy S21 5G",
      price: "$2,300",
      image: "/images/wholesale/Samsung_Electronics.png",
      badge: null,
      rating: 5,
      reviews: 536,
      originalPrice: null
    },
    {
      id: 3,
      name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      price: "$360",
      image: "/images/wholesale/Aamzon_speed HDMT cable.png",
      badge: "BEST DEALS",
      badgeColor: "blue",
      rating: 5,
      reviews: 423,
      originalPrice: null
    },
    {
      id: 4,
      name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
      price: "$80",
      image: "/images/wholesale/wshing_machine.png",
      badge: null,
      rating: 4.5,
      reviews: 816,
      originalPrice: null
    },
    {
      id: 5,
      name: "Wired Over-Ear Gaming Headphones with USB",
      price: "$1,500",
      image: "/images/wholesale/ear gaming headphones.png",
      badge: null,
      rating: 5,
      reviews: 647,
      originalPrice: null
    },
    {
      id: 6,
      name: "Polaroid 57-Inch Photo/Video Tripod with Deluxe ..",
      price: "$1,200",
      originalPrice: "$1600",
      image: "/images/wholesale/Polaroid 57.png",
      badge: "25% OFF",
      badgeColor: "yellow",
      rating: 4.5,
      reviews: 877
    },
    {
      id: 7,
      name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      price: "$250",
      image: "/images/wholesale/Dell_optiplex.png",
      badge: null,
      rating: 5,
      reviews: 426,
      originalPrice: null
    },
    {
      id: 8,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: "$220",
      image: "/images/wholesale/LED_smart TV.png",
      badge: "SALE",
      badgeColor: "green",
      rating: 5,
      reviews: 583,
      originalPrice: null
    }
  ]

  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-[#EE5858] text-white'
      case 'blue':
        return 'bg-[#2DA5F3] text-white'
      case 'yellow':
        return 'bg-[#EFD33D] text-black'
      case 'green':
        return 'bg-[#2DB224] text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Header and Navigation */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-6 mb-6 lg:mb-8">
          {/* Left Column - Computer & Accessories Banner */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <div className="h-auto lg:h-full flex flex-col justify-between pt-8 lg:pt-[80px] w-full lg:w-[312px]" style={{
              backgroundColor: '#F3DE6D',
              borderRadius: '3px',
              gap: '24px'
            }}>
              {/* Top Banner Content */}
              <div className="flex flex-col items-center justify-center text-center px-4 lg:px-6">
                <p className="text-[#BE4646] font-semibold text-[12px] lg:text-[14px] mb-2 lg:mb-[8px]">COMPUTER & ACCESSORIES</p>
                <h3 className="text-[24px] lg:text-[32px] font-semibold text-[#191C1F] mb-2 lg:mb-[12px]">32% Discount</h3>
                <p className="text-[#475156] text-sm lg:text-base mb-4 lg:mb-[24px]">For all electronics products</p>
                <button className="bg-white text-[#08B564] flex justify-center items-center rounded-lg font-bold hover:bg-[#08B564] hover:text-white transition-colors flex items-center space-x-2 w-full lg:w-[191px] h-[48px] lg:h-[56px] rounded-[3px]">
                  <span>SHOP NOW</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Lower Div - Image without Padding */}
              <div className="w-full relative">
                <img
                  src="/images/wholesale/computers.png"
                  alt="Computer & Accessories"
                  className="w-full h-auto"
                />
                {/* Carousel Dots */}
                <div className="absolute bottom-[21px] left-1/2 transform -translate-x-1/2 flex space-x-2" style={{ zIndex: 10 }}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className='flex flex-col gap-4 lg:gap-6 w-full lg:flex-1'>
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center justify-between">
              <h2 className="text-[20px] lg:text-[24px] font-semibold text-[#191C1F]">WHOLESALE</h2>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 border border-gray-300 rounded-lg"
              >
                <Menu size={20} />
              </button>
            </div>

            {/* Navigation and Categories */}
            <div className='flex flex-col lg:flex-row justify-between h-auto lg:h-[48px] border-b-[0.5px] border-[#8A8A8A]'>
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <h2 className="text-[24px] font-semibold text-[#191C1F]">WHOLESALE</h2>
                <nav className="flex items-center space-x-6 h-full">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`text-[#555555] hover:text-primary-600 font-medium h-full transition-colors ${activeCategory === category
                        ? 'text-black border-b-[3px] border-[#FA8232]'
                        : ''
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </nav>
                <a href="#" className="text-[#0F8F46] hover:text-primary-700 font-medium flex items-center space-x-2 transition-colors text-[14px]">
                  <span>Browse All Product</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Mobile Navigation */}
              {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border border-gray-200 rounded-lg p-4 shadow-lg">
                  <nav className="flex flex-col space-y-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category)
                          setIsMobileMenuOpen(false)
                        }}
                        className={`text-left py-2 px-3 rounded-lg transition-colors ${
                          activeCategory === category
                            ? 'bg-[#FA8232] text-white'
                            : 'text-[#555555] hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                    <a href="#" className="text-[#0F8F46] hover:text-primary-700 font-medium flex items-center space-x-2 transition-colors text-[14px] py-2 px-3 rounded-lg hover:bg-gray-100">
                      <span>Browse All Product</span>
                      <ArrowRight size={16} />
                    </a>
                  </nav>
                </div>
              )}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-white hover:shadow-lg transition-shadow" style={{
                  height: 'auto',
                  minHeight: '280px',
                  border: '1px solid #E4E7E9',
                  padding: '12px',
                  borderRadius: '3px'
                }}>
                  {/* Product Image and Badges */}
                  <div className="relative mb-3 lg:mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-24 sm:h-28 lg:h-32 object-contain mb-2"
                    />
                    {product.badge && (
                      <div className="absolute top-2 left-2">
                        <span className={`text-[10px] lg:text-[12px] h-[20px] lg:h-[26px] font-semibold px-2 lg:px-[10px] py-1 lg:py-[5px] rounded-[2px] ${getBadgeColor(product.badgeColor)}`}>
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(Math.floor(product.rating))].map((_, i) => (
                        <Star key={i} size={14} className="text-[#FA8232] fill-current" />
                      ))}
                      {product.rating % 1 !== 0 && (
                        <div className="relative">
                          <Star size={14} className="text-gray-300" />
                          <div
                            className="absolute top-0 left-0 overflow-hidden"
                            style={{ width: `${(product.rating % 1) * 100}%` }}
                          >
                            <Star size={14} className="text-[#FA8232] fill-current" />
                          </div>
                        </div>
                      )}
                      <span className="text-[10px] lg:text-[12px] text-[#77878F]">({product.reviews})</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-[#191C1F] text-[12px] lg:text-[14px] line-clamp-2 leading-tight">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      {product.originalPrice && (
                        <span className="text-xs lg:text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                      <span className='font-semibold' style={{
                        color: '#2DA5F3',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '24px'
                      }}>
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 