'use client'

import { useState } from 'react'
import { ArrowRight, Star, Menu } from 'lucide-react'

export default function Auction() {
  const [activeCategory, setActiveCategory] = useState('All Product')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const categories = [
    'All Product',
    'Fashion & Jewellery',
    'Collectibles',
    'Home & Furniture',
    'Vehicles & Parts'
  ]

  const products = [
    {
      id: 1,
      name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      price: "$360",
      image: "/images/auction/Amazon_speed HDMI cable.png",
      badge: "BEST DEALS",
      badgeColor: "blue",
      rating: 4.5,
      reviews: 994,
      originalPrice: null
    },
    {
      id: 2,
      name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
      price: "$80",
      image: "/images/auction/wshing_machine.png",
      badge: null,
      rating: 5,
      reviews: 798,
      originalPrice: null
    },
    {
      id: 3,
      name: "TOZO T6 True Wireless Earbuds Bluetooth ...",
      price: "$70",
      image: "/images/auction/TOZO_keyboard.png",
      badge: "HOT",
      badgeColor: "red",
      rating: 5,
      reviews: 600,
      originalPrice: null
    },
    {
      id: 4,
      name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      price: "$250",
      image: "/images/auction/Dell_optiplex.png",
      badge: null,
      rating: 5,
      reviews: 492,
      originalPrice: null
    },
    {
      id: 5,
      name: "Samsung Electronics Samsung Galexy S21 5G",
      price: "$2,300",
      image: "/images/auction/Samsung_electronics.png",
      badge: null,
      rating: 4.5,
      reviews: 740,
      originalPrice: null
    },
    {
      id: 6,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: "$220",
      image: "/images/auction/LED_smart TV.png",
      badge: null,
      rating: 4.5,
      reviews: 556,
      originalPrice: null
    },
    {
      id: 7,
      name: "Wired Over-Ear Gaming Headphones with USB",
      price: "$1,500",
      image: "/images/auction/Ear Gaming Headphones.png",
      badge: null,
      rating: 4.5,
      reviews: 536,
      originalPrice: null
    },
    {
      id: 8,
      name: "Polaroid 57-Inch Photo/Video Tripod with Deluxe....",
      price: "$1,200",
      originalPrice: "$1600",
      image: "/images/auction/Polaroid.png",
      badge: "25% OFF",
      badgeColor: "yellow",
      rating: 4.5,
      reviews: 423
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
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-[24px]">
          <div className='flex flex-col w-full lg:flex-1'>
            {/* Header and Navigation */}
            <div className="flex flex-col md:flex-row md:items-center h-auto md:h-[48px] justify-between mb-6 md:mb-8 border-b-[0.5px] border-[#8A8A8A]">
              {/* Mobile Menu Button */}
              <div className="flex items-center justify-between md:hidden mb-4">
                <h2 className="text-[20px] md:text-[24px] font-semibold text-[#191C1F]">AUCTION</h2>
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 border border-gray-300 rounded-lg"
                >
                  <Menu size={20} />
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center h-[48px] justify-between w-full">
                <h2 className="text-[24px] font-semibold text-[#191C1F]">AUCTION</h2>
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <nav className="flex items-center space-x-4 lg:space-x-6 h-[48px]">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`text-[#5F6C72] text-[12px] lg:text-[14px] hover:text-primary-600 font-medium transition-colors h-full ${activeCategory === category
                          ? 'text-black border-b-[3px] border-[#FA8232]'
                          : ''
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </nav>
                  <a href="#" className="text-[#0F8F46] text-[12px] lg:text-[14px] hover:text-primary-700 font-medium flex items-center space-x-2 transition-colors">
                    <span>Browse All Product</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Mobile Navigation */}
              {isMobileMenuOpen && (
                <div className="md:hidden bg-white border border-gray-200 rounded-lg p-4 shadow-lg mb-4">
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
                            : 'text-[#5F6C72] hover:bg-gray-100'
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

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {/* Product Grid - Takes full width on mobile/tablet, 3 columns on desktop */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  {products.map((product) => (
                    <div key={product.id} className="bg-white hover:shadow-lg transition-shadow" style={{
                      width: '100%',
                      height: 'auto',
                      minHeight: '280px',
                      maxHeight: '332px',
                      borderRadius: '3px',
                      border: '1px solid #E4E7E9',
                      padding: '12px',
                      gap: '24px'
                    }}>
                      {/* Product Image and Badges */}
                      <div className="relative mb-3 md:mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-24 sm:h-28 lg:h-32 object-contain mb-2"
                        />
                        {product.badge && (
                          <div className="absolute top-2 left-2">
                            <span className={`text-[10px] lg:text-[12px] font-semibold px-2 lg:px-[10px] py-1 lg:py-[5px] rounded-[2px] gap-[10px] ${getBadgeColor(product.badgeColor)}`}>
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
                            <Star key={i} size={16} className="text-[#FA8232] fill-current" />
                          ))}
                          {product.rating % 1 !== 0 && (
                            <div className="relative">
                              <Star size={16} className="text-[#ADB7BC]" />
                              <div
                                className="absolute top-0 left-0 overflow-hidden"
                                style={{ width: `${(product.rating % 1) * 100}%` }}
                              >
                                <Star size={16} className="text-[#FA8232] fill-current" />
                              </div>
                            </div>
                          )}
                          <span className="text-[10px] lg:text-[12px] text-[#77878F]">({product.reviews})</span>
                        </div>

                        {/* Product Name */}
                        <h3 className="font-medium text-[#191C1F] text-[12px] lg:text-[14px] line-clamp-2 leading-tight">
                          {product.name}
                        </h3>

                        {/* Price */}
                        <div className="flex items-center space-x-2">
                          {product.originalPrice && (
                            <span className="text-[16px] lg:text-[20px] text-[#2DA5F3] line-through">
                              {product.originalPrice}
                            </span>
                          )}
                          <span style={{
                            color: '#2DA5F3',
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

          {/* Right Side Promotional Banners - Hidden on mobile, visible on tablet/desktop */}
          <div className="hidden md:block lg:col-span-1 space-y-4 md:space-y-6">
            {/* Top Banner - Xiaomi Earbuds */}
            <div className="flex flex-col justify-between" style={{
              height: '400px',
              width: '312px',
              borderRadius: '4px',
              padding: '24px',
              backgroundColor: '#F7E99E'
            }}>
              <div className="text-center flex flex-col items-center justify-center">
                <img
                  src="/images/wireless_earbuds.png"
                  alt="Wireless Earbuds"
                  className="object-contain mb-4"
                  style={{
                    width: '80px',
                    height: '80px',
                    filter: 'drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.24))'
                  }}
                />
                <h3 className="mb-2 text-[20px] text-[#191C1F]" style={{
                  fontWeight: 600,
                  lineHeight: '1.2',
                }}>
                  Xiaomi True Wireless Earbuds
                </h3>
                <p className="mb-4 text-sm" style={{
                  color: '#475156',
                  lineHeight: '1.5',
                  fontWeight: 400
                }}>
                  Escape the noise, It's time to hear the magic with Xiaomi Earbuds.
                </p>
                <div className="flex items-center">
                  <span className="text-[12px] text-[#475156]">
                    Only for:
                  </span>
                  <span className="w-[80px] h-[32px] font-semibold text-[#191C1F] bg-white flex justify-center items-center rounded-[3px] ml-2 text-sm">
                    $299 USD
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="bg-white hover:bg-green-50 transition-colors flex items-center justify-center" style={{
                  width: '191px',
                  height: '48px',
                  borderRadius: '3px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  gap: '8px',
                  color: '#08B564',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '1',
                  letterSpacing: '1.2%',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  <span>SHOP NOW</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Bottom Banner - Summer Sales */}
            <div className="flex flex-col justify-between gap-5" style={{
              width: '312px',
              height: '240px',
              borderRadius: '4px',
              paddingTop: '32px',
              paddingBottom: '32px',
              paddingLeft: '20px',
              paddingRight: '20px',
              background: 'linear-gradient(to bottom, #0F8F46, #054621)'
            }}>
              <div className="flex flex-col items-center">
                <div className="bg-[#FFFFFF1F] w-[120px] h-[28px] rounded-[2px] flex justify-center items-center mb-[12px]">
                  <h3 className="text-[12px] font-semibold text-white">
                    SUMMER SALES
                  </h3>
                </div>
                <div className="text-[20px] font-semibold text-white mb-[12px] text-center">
                  37% DISCOUNT
                </div>
                <p className="text-white font-semibold text-[12px] text-center" style={{
                  lineHeight: '1.5'
                }}>
                  Only For <span style={{ color: '#EBC80C' }}>SmartPhone</span> Product.
                </p>
              </div>
              <button className="bg-white hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 w-full" style={{
                height: '48px',
                borderRadius: '3px',
                paddingLeft: '16px',
                paddingRight: '16px',
                color: '#08B564',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '1',
                letterSpacing: '1.2%'
              }}>
                <span>SHOP NOW</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 