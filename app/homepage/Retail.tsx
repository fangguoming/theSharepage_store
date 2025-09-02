'use client'

import { useState } from 'react'
import { ArrowRight, Heart, Eye, Star, ShoppingCart, Menu } from 'lucide-react'

export default function Retail() {
  const [activeCategory, setActiveCategory] = useState('All Product')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const categories = [
    'All Product',
    'Headphone',
    'Smart Phone',
    'TV',
    'Laptop'
  ]

  const products = [
    {
      id: 1,
      name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      price: "$2,300",
      image: "/images/retail/sport_earbuds.png",
      discount: null,
      hot: false,
      rating: null,
      originalPrice: null,
      description: null
    },
    {
      id: 2,
      name: "Simple Mobile 4G LTE Prepaid Smartphone",
      price: "$220",
      image: "/images/retail/mobile_LTE.png",
      discount: null,
      hot: false,
      rating: null,
      originalPrice: null,
      description: null
    },
    {
      id: 3,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: "$1,50",
      originalPrice: "$865",
      image: "/images/retail/LED_smart.png",
      discount: "19% OFF",
      hot: false,
      rating: null,
      description: null
    },
    {
      id: 4,
      name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
      price: "$1,200",
      image: "/images/retail/sony_DSCHX8.png",
      discount: null,
      hot: false,
      rating: null,
      originalPrice: null,
      description: null
    },
    {
      id: 5,
      name: "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...",
      price: "$442.12",
      originalPrice: "$865.99",
      image: "/images/retail/xbox_series.png",
      discount: "32% OFF",
      hot: true,
      rating: 5,
      reviews: 52677,
      description: "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals."
    },
    {
      id: 6,
      name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      price: "$299",
      image: "/images/retail/mobile_Dell.png",
      discount: null,
      hot: false,
      rating: null,
      originalPrice: null,
      description: null
    },
    {
      id: 7,
      name: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
      price: "$70",
      originalPrice: "$865.99",
      image: "/images/retail/wshing_machine.png",
      discount: null,
      hot: false,
      rating: null,
      description: null
    },
    {
      id: 8,
      name: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
      price: "$160",
      image: "/images/retail/barrel_carb.png",
      discount: null,
      hot: true,
      rating: null,
      originalPrice: null,
      description: null
    },
    {
      id: 9,
      name: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker ...",
      price: "$250",
      originalPrice: "$360",
      image: "/images/retail/JBL-filp.png",
      discount: null,
      hot: false,
      rating: null,
      description: null
    }
  ]

  return (
    <section className="py-8 md:py-16" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Header and Navigation */}
        <div className="flex flex-col md:flex-row items-start border-b-[0.5px] border-[#888888] h-auto md:h-[48px] md:items-center justify-between mb-6 md:mb-8 space-y-4 md:space-y-0">
          {/* Mobile Header with Menu Button */}
          <div className="flex items-center justify-between w-full md:hidden pb-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#191C1F]">RETAIL</h2>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border border-gray-300 rounded-lg"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:block">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#191C1F]">RETAIL</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row items-center space-x-8">
            <nav className="flex items-center space-x-6 h-[48px]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-gray-700 hover:text-primary-600 h-full font-medium transition-colors text-base ${activeCategory === category
                    ? 'font-medium border-b-[3px] border-[#FA8232]'
                    : ''
                    }`}
                >
                  {category}
                </button>
              ))}
            </nav>
            <a href="#" className="text-[#0F8F46] hover:text-primary-700 font-medium flex items-center space-x-2 transition-colors text-base">
              <span>Browse All Product</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border border-gray-200 rounded-lg p-4 shadow-lg w-full">
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
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
                <a href="#" className="text-[#0F8F46] hover:text-primary-700 font-medium flex items-center space-x-2 transition-colors text-sm py-2 px-3 rounded-lg hover:bg-gray-100">
                  <span>Browse All Product</span>
                  <ArrowRight size={14} />
                </a>
              </nav>
            </div>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Left and Middle Columns - 8 smaller cards */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {products.filter(product => product.id !== 5).map((product) => (
                <div key={product.id} className="bg-white p-[12px] hover:shadow-lg transition-shadow" style={{
                  height: '308px',
                  border: '1px solid #E4E7E9',
                }}>
                  {/* Product Image and Badges */}
                  <div className="relative mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-contain mb-2"
                    />
                    <div className="absolute top-2 left-2 flex flex-col space-y-1">
                      {product.discount && (
                        <span className="bg-[#EFD33D] text-[#191C1F] text-[12px] font-bold px-[10px] py-[5px] rounded-[2px] h-[26px]">
                          {product.discount}
                        </span>
                      )}
                      {product.hot && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          HOT
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    {product.rating && (
                      <div className="flex items-center space-x-1">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-600">({product.reviews?.toLocaleString()})</span>
                      </div>
                    )}

                    <h3 className="font-medium text-[#191C1F] text-[14px] line-clamp-[20px]">
                      {product.name}
                    </h3>


                    {product.description && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                    )}
                    <div className="flex items-center space-x-2">
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                      <span style={{
                        color: '#2DA5F3',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                        fontSize: '20px',
                        lineHeight: '32px'
                      }}>
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons - Only for featured product */}
                  {product.id === 5 && (
                    <div className="flex items-center justify-end space-x-2 mt-4 pt-4 border-t border-gray-200">
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Heart size={16} />
                      </button>
                      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                        <ShoppingCart size={16} />
                        <span>ADD TO CARD</span>
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Eye size={16} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Xbox Series S featured product */}
          <div className="lg:col-span-1">
            {products.filter(product => product.id === 5).map((product) => (
              <div key={product.id} className="bg-white hover:shadow-lg transition-shadow" style={{
                height: '616px', // Double height to span 2 rows
                border: '1px solid #E4E7E9',
                padding: '12px'
              }}>
                {/* Product Image and Badges */}
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain mb-2"
                  />
                  <div className="absolute top-2 left-2 flex flex-col space-y-2">
                    {product.discount && (
                      <span className="bg-[#EFD33D] text-[#191C1F] text-[12px] font-bold px-[10px] py-[5px] rounded-[2px] h-[26px]">
                        {product.discount}
                      </span>
                    )}
                    {product.hot && (
                      <span className="bg-[#EE5858] text-white text-[12px] font-semibold px-2 py-1 rounded-[2px] w-[46px] text-center">
                        HOT
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  {product.rating && (
                    <div className="flex items-center space-x-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-600">({product.reviews?.toLocaleString()})</span>
                    </div>
                  )}

                  <h3 className="font-medium text-gray-900 text-sm line-clamp-2">
                    {product.name}
                  </h3>

                  

                  <div className="flex items-center space-x-2">
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                    <span style={{
                      color: '#2DA5F3',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '32px'
                    }}>
                      {product.price}
                    </span>
                  </div>
                  {product.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                  )}
                </div>

                {/* Action Buttons - Only for featured product */}
                <div className="flex items-center justify-center space-x-2 mt-4 pt-4 border-t border-gray-200">
                  <button className="bg-[#FFE7D6] w-[48px] h-[48px] rounded-[2px] flex justify-center items-center text-black text-center hover:text-red-500 transition-colors">
                    <Heart size={16} />
                  </button>
                  <button className="bg-[#FA8232] text-white font-bold h-[48px] w-[174px] rounded-[2px] font-[14px] hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                    <ShoppingCart size={16} />
                    <span>ADD TO CARD</span>
                  </button>
                  <button className="bg-[#FFE7D6] w-[48px] h-[48px] rounded-[2px] flex justify-center items-center text-black text-center hover:text-gray-600 transition-colors">
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 