'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Search,
  Menu,
  Users,
  Gem,
  HelpCircle,
  Bell,
  ShoppingCart,
  Settings,
  ChevronDown,
  ChevronRight,
  User
} from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Personal store')
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
  const [selectedMainCategory, setSelectedMainCategory] = useState('electronics')
  const [selectedSubCategory, setSelectedSubCategory] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCategoryDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const mainCategories = [
    {
      id: 'homesense',
      name: 'Homesense',
      subCategories: [
        { id: 'kitchenware', name: 'Kitchenware' },
        { id: 'home-decor', name: 'Home Décor' },
        { id: 'furniture', name: 'Furniture' },
        { id: 'bedding-linens', name: 'Bedding & Linens' },
        { id: 'cleaning-supplies', name: 'Cleaning Supplies' },
        { id: 'storage-organization', name: 'Storage & Organization' }
      ]
    },
    {
      id: 'fashion',
      name: 'Fashion',
      subCategories: [
        { id: 'clothing', name: 'Clothing' },
        { id: 'accessories', name: 'Accessories' },
        { id: 'footwear', name: 'Footwear' },
        { id: 'jewelry', name: 'Jewelry' },
        { id: 'bags', name: 'Bags' },
        { id: 'watches', name: 'Watches' }
      ]
    },
    {
      id: 'health-wellness',
      name: 'Health & Wellness',
      subCategories: [
        { id: 'vitamins', name: 'Vitamins' },
        { id: 'supplements', name: 'Supplements' },
        { id: 'fitness', name: 'Fitness' },
        { id: 'personal-care', name: 'Personal Care' },
        { id: 'medical', name: 'Medical' },
        { id: 'wellness', name: 'Wellness' }
      ]
    },
    {
      id: 'electronics',
      name: 'Electronics',
      subCategories: [
        { id: 'kitchenware', name: 'Kitchenware' },
        { id: 'home-decor', name: 'Home Décor' },
        { id: 'furniture', name: 'Furniture' },
        { id: 'bedding-linens', name: 'Bedding & Linens' },
        { id: 'cleaning-supplies', name: 'Cleaning Supplies' },
        { id: 'storage-organization', name: 'Storage & Organization' }
      ]
    },
    {
      id: 'construction',
      name: 'Construction',
      subCategories: [
        { id: 'tools', name: 'Tools' },
        { id: 'materials', name: 'Materials' },
        { id: 'equipment', name: 'Equipment' },
        { id: 'safety', name: 'Safety' },
        { id: 'hardware', name: 'Hardware' },
        { id: 'supplies', name: 'Supplies' }
      ]
    },
    {
      id: 'garden',
      name: 'Garden',
      subCategories: [
        { id: 'plants', name: 'Plants' },
        { id: 'tools', name: 'Tools' },
        { id: 'decorations', name: 'Decorations' },
        { id: 'furniture', name: 'Furniture' },
        { id: 'irrigation', name: 'Irrigation' },
        { id: 'supplies', name: 'Supplies' }
      ]
    },
    {
      id: 'misc',
      name: 'Misc',
      subCategories: [
        { id: 'office', name: 'Office' },
        { id: 'automotive', name: 'Automotive' },
        { id: 'sports', name: 'Sports' },
        { id: 'toys', name: 'Toys' },
        { id: 'books', name: 'Books' },
        { id: 'other', name: 'Other' }
      ]
    }
  ]

  return (
    <div className="w-full">
      {/* Top Green Header */}
      <div className="bg-primary-600 text-white px-4 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Left Section - Logo and Menu */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <img src="/images/logo.svg" alt="The SharePage Logo" className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="font-semibold text-sm md:text-lg hidden sm:block">The SharePage</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-primary-700 rounded-md transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Center Section - Search */}
          <div className="flex-1 max-w-2xl mx-2 md:mx-8">
            <div className="relative">
              <div className="flex items-center bg-white rounded-[52.5px] overflow-hidden w-full max-w-[487.5px] h-[27px]">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-2 md:px-3 py-2 bg-gray-100 text-gray-700 text-xs md:text-sm border-r border-gray-200 focus:outline-none font-['Poppins']"
                >
                  <option value="Personal store" className="font-['Poppins'] font-medium text-xs leading-[15px] text-[#1F1216]">Personal store</option>
                  <option value="All stores" className="font-['Poppins'] font-medium text-xs leading-[15px] text-[#1F1216]">All stores</option>
                  <option value="Featured" className="font-['Poppins'] font-medium text-xs leading-[15px] text-[#1F1216]">Featured</option>
                </select>
                <input
                  type="text"
                  placeholder="Search in share page"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-2 md:px-4 py-2 text-gray-900 focus:outline-none font-['Poppins'] text-xs md:text-sm"
                />
                <button className="w-6 h-6 md:w-7 md:h-7 bg-accent-500 hover:bg-accent-600 transition-colors rounded-full flex items-center justify-center">
                  <Search size={14} className="text-white md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Icons and Profile */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Icons - Hidden on mobile, visible on tablet+ */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="relative">
                <img src="/images/icon/deal.svg" alt="Handshake" className="w-[26.26px] h-[15px]" />
              </div>
              <div className="relative">
                <img src="/images/icon/user.svg" alt="Chat" className="w-[14.94px] h-[15px]" />
              </div>
              <img src="/images/icon/question.svg" alt="Question" className="w-[16.5px] h-[16.5px]" />
              <div className="relative">
                <img src="/images/icon/alarm.svg" alt="Bell" className="w-[12.75px] h-[15px]" />
              </div>
              <img src="/images/icon/cart.svg" alt="Shopping Cart" className="w-[16.81px] h-[15px]" />
              <img src="/images/icon/gear.svg" alt="Settings" className="w-[15.68px] h-[16.5px]" />
            </div>

            {/* Vertical Separator - Hidden on mobile */}
            <div className="hidden md:block w-px h-6 bg-white"></div>

            {/* Profile Section */}
            <div className="flex items-center space-x-1 md:space-x-2">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden border-[2.25px] border-white">
                <img src="/images/Amelia.svg" alt="Amelia Joseph Profile" className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-xs md:text-sm hidden lg:block">
                <div className="font-medium text-white">Amelia Joseph</div>
                <div className="text-white text-xs">Personal Profile</div>
              </div>
              <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[4px] md:border-l-[6px] border-l-transparent border-r-[4px] md:border-r-[6px] border-r-transparent border-t-[6px] md:border-t-[8px] border-t-[#4A0080]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="bg-white px-4 py-3">
        <div className="max-w-[1440px] mx-auto rounded-[8px] bg-white border-[0.3px] border-[#CCCCCC] px-4 py-[10px] drop-shadow-[0px_8px_10px_rgba(52,52,52,0.1)] font-['Poppins'] font-medium text-xs leading-[20px] text-[#5F6C72]">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full bg-[#08B564] text-white font-semibold px-3 py-2 rounded flex items-center justify-between"
            >
              <span>Menu</span>
              <Menu size={20} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className={`md:flex items-center justify-between ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
            {/* Navigation Links */}
            <nav className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
              <Link
                href="/"
                className={`font-['Poppins'] font-medium text-xs leading-[20px] px-3 py-2 rounded no-underline w-full md:w-auto text-center transition-colors ${pathname === '/'
                    ? 'bg-[#08B564] text-white'
                    : 'text-[#5F6C72] hover:bg-[#08B564] hover:text-white'
                  }`}
              >
                HOME
              </Link>
              <Link
                href="/retail"
                className={`font-['Poppins'] font-medium text-xs leading-[20px] px-3 py-2 rounded no-underline w-full md:w-auto text-center transition-colors ${pathname === '/retail'
                    ? 'bg-[#08B564] text-white'
                    : 'text-[#5F6C72] hover:bg-[#08B564] hover:text-white'
                  }`}
              >
                RETAIL
              </Link>

              <Link
                href="/wholesale"
                className={`font-['Poppins'] font-medium text-xs leading-[20px] px-3 py-2 rounded no-underline w-full md:w-auto text-center transition-colors ${pathname === '/wholesale'
                    ? 'bg-[#08B564] text-white'
                    : 'text-[#5F6C72] hover:bg-[#08B564] hover:text-white'
                  }`}
              >
                WHOLESALE
              </Link>
              <Link
                href="/auction"
                className={`font-['Poppins'] font-medium text-xs leading-[20px] px-3 py-2 rounded no-underline w-full md:w-auto text-center transition-colors ${pathname === '/auction'
                    ? 'bg-[#08B564] text-white'
                    : 'text-[#5F6C72] hover:bg-[#08B564] hover:text-white'
                  }`}
              >
                AUCTION
              </Link>
              <Link
                href="/customize-request"
                className={`font-['Poppins'] font-medium text-xs leading-[20px] px-3 py-2 rounded no-underline w-full md:w-auto text-center transition-colors ${pathname === '/customize-request'
                    ? 'bg-[#08B564] text-white'
                    : 'text-[#5F6C72] hover:bg-[#08B564] hover:text-white'
                  }`}
              >
                CUSTOMIZE REQUEST
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center space-y-2 md:space-y-0 md:space-x-[10px]">
              <Link href="/dashboard" className="px-4 py-2 text-[#555555] hover:text-white hover:bg-[#28A745] font-['Poppins'] font-normal text-base leading-[24px] transition-colors w-full md:w-auto text-center border border-[#28A745] rounded bg-white">
                Dashboard
              </Link>
              <Link href="/mystore/orders" className="px-4 py-2 text-[#555555] hover:text-white hover:bg-[#28A745] font-['Poppins'] font-normal text-base leading-[24px] transition-colors w-full md:w-auto text-center border border-[#28A745] rounded bg-white">
                My Store
              </Link>
              <button className="px-4 py-2 bg-[#28A745] text-white hover:bg-[#218838] font-['Poppins'] font-normal text-base leading-[24px] rounded transition-colors w-full md:w-auto text-center border border-[#28A745]">
                Sell Product
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="px-4 py-4 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-white flex flex-col md:flex-row items-stretch md:items-center space-y-3 md:space-y-0 md:space-x-4 rounded-[8px] px-4 py-4 bg-white border-[0.3px] border-[#77878F] drop-shadow-[0px_8px_10px_rgba(0,0,0,0.05)]">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors min-w-[140px]"
              >
                <span>All Categories</span>
                <ChevronDown size={16} />
              </button>

              {/* Category Dropdown */}
              {showCategoryDropdown && (
                <div className="absolute top-full left-0 mt-1 border border-gray-200 rounded-lg shadow-lg min-w-[400px] bg-white min-h-[300px] z-[9999999]">
                  <div className="flex bg-white min-h-[300px]">
                    {/* Left Column - Main Categories */}
                    <div className="w-1/2 border-r border-gray-200 bg-white min-h-[300px]">
                      {mainCategories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => {
                            setSelectedMainCategory(category.id)
                            setShowCategoryDropdown(false)
                            window.location.href = '/wholesale/products'
                          }}
                          className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors bg-white ${selectedMainCategory === category.id ? 'bg-gray-100' : ''
                            }`}
                        >
                          <span>{category.name}</span>
                          <ChevronRight size={16} />
                        </button>
                      ))}
                    </div>

                    {/* Right Column - Sub Categories */}
                    <div className="w-1/2 bg-white min-h-[300px]">
                      {selectedMainCategory && mainCategories.find(c => c.id === selectedMainCategory)?.subCategories.map((subCategory) => (
                        <button
                          key={subCategory.id}
                          onClick={() => {
                            setSelectedSubCategory(subCategory.id)
                            setShowCategoryDropdown(false)
                            window.location.href = '/wholesale/products'
                          }}
                          className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors bg-white"
                        >
                          <span>{subCategory.name}</span>
                          <ChevronRight size={16} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search for Products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
              />
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2 text-sm">
                <Search size={16} />
                <span>Search</span>
              </button>

              <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm">
                Reset
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <span className="text-gray-700 text-sm whitespace-nowrap">Filter by Country:</span>
              <select className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm">
                <option>Select Country</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 