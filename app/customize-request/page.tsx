"use client"

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ArrowRight, Send, Heart } from 'lucide-react'
import { useState } from 'react'

export default function CustomizeRequestPage() {
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

  const customizeRequests = [
    {
      id: 1,
      title: "Customized Jacket",
      image: "/images/customize request/jacket.png", // Using available image as placeholder
      budget: "$150-$200",
      details: "Logo On Right Side, Size 6",
      quantity: "10",
      deadline: "Jan 10, 2024",
      location: "New York, USA",
      isPrimary: true
    },
    {
      id: 2,
      title: "Personalized Mug with Text",
      image: "/images/customize request/mug.png", // Using available image as placeholder
      budget: "$150-$200",
      details: "Logo On Right Side, Size 6",
      quantity: "10",
      deadline: "Jan 10, 2024",
      location: "New York, USA",
      isPrimary: false
    },
    {
      id: 3,
      title: "Custom Leather Wallet",
      image: "/images/customize request/leather_wallet.png", // Using available image as placeholder
      budget: "$150-$200",
      details: "Logo On Right Side, Size 6",
      quantity: "10",
      deadline: "Jan 10, 2024",
      location: "New York, USA",
      isPrimary: false
    },
    {
      id: 4,
      title: "Personalized Phone Case",
      image: "/images/customize request/phone case.png", // Using available image as placeholder
      budget: "$150-$200",
      details: "Logo On Right Side, Size 6",
      quantity: "10",
      deadline: "Jan 10, 2024",
      location: "New York, USA",
      isPrimary: false
    },
    {
      id: 5,
      title: "Custom Hoodie with Text",
      image: "/images/customize request/hoodie.png", // Using available image as placeholder
      budget: "$150-$200",
      details: "Logo On Right Side, Size 6",
      quantity: "10",
      deadline: "Jan 10, 2024",
      location: "New York, USA",
      isPrimary: false
    },
    {
      id: 6,
      title: "Embroidered Baseball Cap",
      image: "/images/customize request/baseball_cap.png", // Using available image as placeholder
      budget: "$150-$200",
      details: "Logo On Right Side, Size 6",
      quantity: "10",
      deadline: "Jan 10, 2024",
      location: "New York, USA",
      isPrimary: false
    },
    {
      id: 7,
      title: "Engraved Wooden Pen",
      image: "/images/customize request/wooden pen.png", // Using available image as placeholder
      budget: "$150-$200",
      details: "Logo On Right Side, Size 6",
      quantity: "10",
      deadline: "Jan 10, 2024",
      location: "New York, USA",
      isPrimary: false
    },
    {
      id: 8,
      title: "Custom Sports Jersey",
      image: "/images/customize request/sports_jersey.png", // Using available image as placeholder
      budget: "$150-$200",
      details: "Logo On Right Side, Size 6",
      quantity: "10",
      deadline: "Jan 10, 2024",
      location: "New York, USA",
      isPrimary: false
    },
    {
      id: 9,
      title: "Personalized Stainless Steel Flask",
      image: "/images/customize request/steel_flask.png", // Using available image as placeholder
      budget: "$150-$200",
      details: "Logo On Right Side, Size 6",
      quantity: "10",
      deadline: "Jan 10, 2024",
      location: "New York, USA",
      isPrimary: false
    },
    {
      id: 10,
      title: "Custom Canvas Tote Bag",
      image: "/images/customize request/tote_bag.png", // Using available image as placeholder
      budget: "$150-$200",
      details: "Logo On Right Side, Size 6",
      quantity: "10",
      deadline: "Jan 10, 2024",
      location: "New York, USA",
      isPrimary: false
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Category Navigation */}
      <div className="flex items-center justify-between max-w-[1440px] mx-auto px-[40px] h-[40px]">
        <div className="flex space-x-8 overflow-hidden">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`whitespace-nowrap pt-[4px] px-[16px] border-b-[2px] transition-colors ${activeCategory === category.id
                  ? 'border-[#FA8232] text-[#222222] font-medium'
                  : 'border-transparent text-[#666666] hover:text-gray-900'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Customize Requests Grid */}
      <section className="py-8 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {customizeRequests.map((request) => (
              <div key={request.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {/* Product Image */}
                <div className="relative h-48">
                  <img
                    src={request.image}
                    alt={request.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  {/* Product Title */}
                  <h3 className="font-medium text-[#191C1F] text-[14px] line-clamp-2">
                    {request.title}
                  </h3>

                  {/* Budget */}
                  <div className="text-[#2DA5F3]">
                    <span className="text-[12px]">Budget: </span>
                    <span className="font-bold text-[14px]">{request.budget}</span>
                  </div>

                  <ul className='list-disc'>
                    <li className='border-b-[0.3px] border-[#555555] flex h-[24px] items-center'>
                      <p className='text-[10px] font-medium text-[#191C1F]' style={{ lineHeight: '20px' }}><span className='text-[#5F6C72]'>Details: </span>{request.details}</p>
                    </li>
                    <li className='border-b-[0.3px] border-[#555555] flex h-[24px] items-center'>
                      <p className='text-[10px] font-medium text-[#191C1F]' style={{ lineHeight: '20px' }}><span className='text-[#5F6C72]'>Quantity: </span>{request.quantity}</p>
                    </li>
                    <li className='border-b-[0.3px] border-[#555555] flex h-[24px] items-center'>
                      <p className='text-[10px] font-medium text-[#191C1F]' style={{ lineHeight: '20px' }}><span className='text-[#5F6C72]'>Deadline: </span>{request.deadline}</p>
                    </li>
                    <li className='border-b-[0.3px] border-[#555555] flex h-[24px] items-center'>
                      <p className='text-[10px] font-medium text-[#191C1F]' style={{ lineHeight: '20px' }}><span className='text-[#5F6C72]'>Location: </span>{request.location}</p>
                    </li>
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-[10px]">
                    <button
                      className={`w-full h-[40px] rounded-[100px] text-[14px] transition-colors flex items-center justify-center gap-[8px] ${request.isPrimary
                          ? 'bg-[#FF8C00] text-[#191C1F] hover:bg-orange-600'
                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                      <Send size={14} />
                      <span>Message Customer</span>
                    </button>
                    <button className="w-full h-[40px] rounded-[100px] text-[14px] transition-colors flex items-center justify-center gap-[8px] bg-white border-[0.3px] border-[#191C1F] text-[#191C1F] hover:bg-orange-600">
                      <Heart size={14} />
                      <span>Save for Later</span>
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