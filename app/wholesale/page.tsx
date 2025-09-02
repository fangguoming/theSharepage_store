"use client"

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ArrowRight, Star, Truck, Users, TrendingUp, Package, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { 
  FaBriefcase, 
  FaLeaf, 
  FaTshirt, 
  FaMicrochip, 
  FaHome, 
  FaLightbulb, 
  FaTools, 
  FaHeartbeat, 
  FaBath, 
  FaShoppingBag, 
  FaFlask, 
  FaWrench, 
  FaPaw, 
  FaGift 
} from 'react-icons/fa'

export default function WholesalePage() {
  const [selectedCategory, setSelectedCategory] = useState('apparel')

  const categories = [
    { id: 'business-services', name: 'Business Services', icon: FaBriefcase },
    { id: 'environment', name: 'Environment', icon: FaLeaf },
    { id: 'apparel', name: 'Apparel & Accessories', icon: FaTshirt, selected: true },
    { id: 'electronics', name: 'Consumer Electronics', icon: FaMicrochip },
    { id: 'home-garden', name: 'Home & Garden', icon: FaHome },
    { id: 'furniture', name: 'Furniture', icon: FaLightbulb },
    { id: 'tools', name: 'Tools & Hardware', icon: FaTools },
    { id: 'healthcare', name: 'Health Care', icon: FaHeartbeat },
    { id: 'appliances', name: 'Home Appliances', icon: FaBath },
    { id: 'luggage', name: 'Luggage, Bags...', icon: FaShoppingBag },
    { id: 'chemicals', name: 'Chemicals', icon: FaFlask },
    { id: 'electronics-tools', name: 'Electronics & Tools', icon: FaWrench },
    { id: 'pet-supplies', name: 'Pet Supplies', icon: FaPaw },
    { id: 'gifts-crafts', name: 'Gifts & Crafts', icon: FaGift }
  ]

  const countries = [
    { name: 'Japan', flag: '/images/flags/japan.png' },
    { name: 'Italy', flag: '/images/flags/italy.png' },
    { name: 'Turkey', flag: '/images/flags/turkey.png' },
    { name: 'Malaysia', flag: '/images/flags/malaysia.png' },
    { name: 'Vietnam', flag: '/images/flags/vietnam.png' },
    { name: 'China', flag: '/images/flags/china.png' }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* All Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Categories</h2>
          
          <div className="relative">
            <button className="w-12 h-12 flex items-center justify-center absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50">
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            
            <div className="grid grid-cols-7 gap-4 px-12">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-6 rounded-lg border-2 transition-all text-center ${
                      category.selected 
                        ? 'border-orange-500 bg-orange-50' 
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="text-4xl mb-3 flex justify-center items-center">
                      <IconComponent 
                        className={category.selected ? 'text-orange-500' : 'text-gray-600'} 
                        size={48}
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700 leading-tight">
                      {category.name}
                    </p>
                  </button>
                )
              })}
            </div>
            
            <button className="w-12 h-12 flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50">
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex items-center gap-12">
            {/* Left Section - Text */}
            <div className="flex-1">
              <h2 className="text-[32px] font-semibold text-[#222222] leading-tight">
                Discover countless solutions customized to meet your business requirements.
              </h2>
            </div>
            
            {/* Right Section - Statistics Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-6">
                {/* Top Left - Green Background */}
                <div className="bg-[#EBFFEE] rounded p-6 text-center">
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-black">Over</span>
                    <h3 className="text-4xl font-bold text-[#0F8F46]">200</h3>
                  </div>
                  <p className="text-black">Million Products</p>
                </div>
                
                {/* Top Right - White Background */}
                <div className="bg-white border border-gray-200 rounded p-6 text-center">
                  <h3 className="text-4xl font-bold text-[#0F8F46] mb-2">200,000</h3>
                  <p className="text-black">Suppliers</p>
                </div>
                
                {/* Bottom Left - White Background */}
                <div className="bg-white border border-gray-200 rounded p-6 text-center">
                  <h3 className="text-4xl font-bold text-[#0F8F46] mb-2">5,900</h3>
                  <p className="text-black">Product Categories</p>
                </div>
                
                {/* Bottom Right - Green Background */}
                <div className="bg-green-100 rounded p-6 text-center">
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-black">Presence In</span>
                    <h3 className="text-4xl font-bold text-[#0F8F46]">200+</h3>
                  </div>
                  <p className="text-black">Countries & Regions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Opportunity Section */}
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
                  Solar Panel
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
                    className="rounded-full bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      filter: 'drop-shadow(0px 4px 4px rgba(12, 12, 13, 0.05))'
                    }}
                  >
                    <ChevronLeft size={16} className="text-gray-600" />
                  </button>
                  
                  <div className="flex space-x-2">
                    <div
                      className="rounded-lg overflow-hidden border-2 border-orange-500"
                      style={{
                        width: '80px',
                        height: '80px',
                        borderColor: '#E4E7E9'
                      }}
                    >
                      <img
                        src="/images/business/solar_panel.png"
                        alt="Solar Panel"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className="rounded-lg overflow-hidden border-2"
                      style={{
                        width: '80px',
                        height: '80px',
                        borderColor: '#E4E7E9'
                      }}
                    >
                      <img
                        src="/images/business/solar_charger.png"
                        alt="Solar Charger"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className="rounded-lg overflow-hidden border-2"
                      style={{
                        width: '80px',
                        height: '80px',
                        borderColor: '#E4E7E9'
                      }}
                    >
                      <img
                        src="/images/business/solar_panel.png"
                        alt="Solar Panel"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <button 
                    className="rounded-full bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      filter: 'drop-shadow(0px 4px 4px rgba(12, 12, 13, 0.05))'
                    }}
                  >
                    <ChevronRight size={16} className="text-gray-600" />
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
                <a href="/latest-arrivals" className="text-[#555555] text-[10px] hover:text-gray-800">
                  Explore New Arrivals
                </a>
              </div>
              
              <p className="mb-[24px] text-[10px] text-[#555555]">
                Stay Ahead With The Newest Additions Across Categories. Fresh Opportunities Updated Daily.
              </p>

              {/* Product Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center bg-white rounded-[10px] p-4" style={{
                  width: '180.67px',
                  height: '150px',
                }}>
                  <img
                    src="/images/business/clock.png"
                    alt="Fitness Tracker"
                    className="object-contain mx-auto mb-auto"
                    style={{
                      width: '120px',
                      height: '120px'
                    }}
                  />
                </div>
                <div className="text-center bg-white rounded-[10px] p-4" style={{
                  width: '180.67px',
                  height: '150px',
                }}>
                  <img
                    src="/images/business/phone_clock.png"
                    alt="Smart Watch"
                    className="object-contain mx-auto mb-auto"
                    style={{
                      width: '120px',
                      height: '120px'
                    }}
                  />
                </div>
                <div className="text-center bg-white rounded-[10px] p-4" style={{
                  width: '180.67px',
                  height: '150px',
                }}>
                  <img
                    src="/images/business/earphone.png"
                    alt="Wireless Earbuds"
                    className="object-contain mx-auto mb-auto"
                    style={{
                      width: '120px',
                      height: '120px'
                    }}
                  />
                </div>
                <div className="text-center bg-white rounded-[10px] p-4" style={{
                  width: '180.67px',
                  height: '150px',
                }}>
                  <img
                    src="/images/business/chair.png"
                    alt="Ergonomic Chair"
                    className="object-contain mx-auto mb-auto"
                    style={{
                      width: '120px',
                      height: '120px'
                    }}
                  />
                </div>
              </div>

              {/* Fresh Stock Banner */}
              <div className="bg-white rounded-lg flex items-center" style={{
                width: '385.55px',
                height: '80px',
                paddingBlock: '7px',
                paddingInline: '15px',
                gap: '10px'
              }}>
                <div className="w-[74px] h-[62px] flex-shrink-0 border-[1px] border-[#E4E7E9]">
                  <img
                    src="/images/business/smart_TV.png"
                    alt="Monitor"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <span style={{
                    fontWeight: 600,
                    fontSize: '14px'
                  }} className="font-semibold text-gray-900">Fresh Stock:</span> <br />
                  <span style={{
                    fontWeight: 300,
                    fontSize: '14px'
                  }} className="text-gray-600 ml-1">Curated From Verified Suppliers</span>
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
                  <div className="flex-1 bg-white rounded-lg flex flex-col border-[1px] border-[#E4E7E9] p-[8px] gap-[16px]">
                    {/* Upper Section - Product Image */}
                    <div className="flex-1 flex items-center justify-center">
                      <img
                        src="/images/business/headphones.png"
                        alt="Noise-Canceling Headphones"
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
                      }} className="text-center">Noise-Canceling Headphones</p>
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg flex flex-col border-[1px] border-[#E4E7E9] p-[8px] gap-[16px]">
                    {/* Upper Section - Product Image */}
                    <div className="flex-1 flex items-center justify-center">
                      <img
                        src="/images/business/standing_desk.png"
                        alt="Electric Standing Desk"
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
                      }} className="text-center">Electric Standing Desk</p>
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg flex flex-col border-[1px] border-[#E4E7E9] p-[8px] gap-[16px]">
                    {/* Upper Section - Product Image */}
                    <div className="flex-1 flex items-center justify-center">
                      <img
                        src="/images/business/leather_laptop.png"
                        alt="Premium Leather Laptop"
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
                      }} className="text-center">Premium Leather Laptop</p>
                    </div>
                  </div>
                </div>
                
                {/* Carousel Navigation Dots */}
                <div className="flex justify-center space-x-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: '#0F8F46'
                    }}
                  />
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: '#D1D5DB'
                    }}
                  />
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: '#D1D5DB'
                    }}
                  />
                </div>
              </div>

              {/* Bottom Promotional Banner */}
              <div className="relative bg-white rounded-[10px] border-[1px] border-[#E4E7E9]" style={{
                width: '385.33px',
                height: '210px',
                paddingTop: '24px',
                paddingLeft: '24px',
                paddingRight: '24px',
              }}>
                {/* Discount Badge */}
                <div className="absolute top-6 right-6">
                  <span className='w-[55px] h-[15px] px-[10px] bg-[#FF00001A] text-[#FF0000] text-[10px] rounded-[4px] flex justify-center items-center' style={{
                    fontWeight: 400,
                  }}>
                    10% Off
                  </span>
                </div>
                
                {/* Product Title */}
                <h4 className="font-bold text-gray-900 mb-6" style={{ fontSize: '16px' }}>
                  Multi-Purpose Kitchen Blender
                </h4>
                
                {/* Product Image */}
                <div className="relative" style={{ height: '100px' }}>
                  <img
                    src="/images/business/kitchen_blender.png"
                    alt="Multi-Purpose Kitchen Blender"
                    className="object-contain"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxWidth: '320px'
                    }}
                  />
                </div>
                
                {/* Limited-Time Deals Strip */}
                <div className="absolute bottom-0 left-0 right-0 rounded-b-lg " style={{
                  backgroundColor: '#EBC80C',
                  paddingTop: '8px',
                  paddingBottom: '8px'
                }}>
                  <span className="text-gray-900 text-center block" style={{
                    fontWeight: 400,
                    fontSize: '12px'
                  }}>
                    Limited-Time Deals: Shop From Trusted Suppliers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Suppliers Section */}
      <section className="py-16 bg-[#F5F9FC]">
        <div className="max-w-[1440px] mx-auto px-4">
          <h2 className="text-[32px] font-semibold text-[#222222] mb-8 text-center">
            Browse Suppliers by Country or Region:
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {countries.map((country) => (
              <div key={country.name} className="text-center">
                {/* Circular Flag Icon */}
                <div className="w-16 h-16 mx-auto mb-3 rounded-full border border-gray-200 shadow-sm flex items-center justify-center bg-white overflow-hidden">
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Country Name */}
                <p className="font-semibold text-gray-900 mb-2">{country.name}</p>
                
                {/* Orange Underline */}
                <div className="w-12 h-0.5 bg-orange-500 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 