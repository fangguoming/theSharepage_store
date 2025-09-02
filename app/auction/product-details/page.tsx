"use client"

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { ArrowRight, ArrowLeft, Star, Heart, MapPin, Share2, Facebook, Twitter, Instagram, Clock } from 'lucide-react'
import { useState } from 'react'
import { text } from 'stream/consumers'

export default function AuctionProductDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const productImages = [
    "/images/auction/image 90.svg",
    "/images/auction/image 91.svg",
    "/images/auction/image 92.svg",
    "/images/auction/image 93.svg",
    "/images/auction/image 94.svg"
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Product Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex gap-[56px]">
            {/* Left Section - Product Images */}
            <div className="space-y-6 w-[664px] flex flex-col items-center">
              {/* Main Image */}
              <div className="relative border border-[#E4E7E9] p-8 w-[616px]">
                <img
                  src={productImages[selectedImage]}
                  alt="Handmade Wooden Jewelry Box"
                  className="w-full h-96 object-contain"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex items-center space-x-4 w-auto">
                <button className="rounded-full bg-[#0F8F46] hover:bg-gray-200 transition-colors w-[48px] h-[48px] flex flex-row-reverse justify-center items-center">
                  <ArrowLeft className="w-[24px] h-[24px] text-white" />
                </button>

                <div className="flex items-center gap-[17px]">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-[90px] h-[90px] rounded-lg border-2 transition-colors ${selectedImage === index
                        ? 'border-orange-500'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <img
                        src={image}
                        alt={`Product view ${index + 1}`}
                        className="w-full h-full object-cover rounded"
                      />
                    </button>
                  ))}
                </div>

                <button className="rounded-full bg-[#0F8F46] hover:bg-gray-200 transition-colors w-[48px] h-[48px] flex justify-center items-center">
                  <ArrowRight className="w-[24px] h-[24px] text-white" />
                </button>
              </div>
            </div>

            {/* Right Section - Product Details */}
            <div className="w-[648px] flex flex-col">
              <div className='flex flex-col pb-[24px] border-b-[1px] border-[#E4E7E9]'>
                {/* Product Title */}
                <h1 className="text-[24px] text-[#191C1F] mb-[16px]" style={{ lineHeight: '36px' }}>
                  Handmade Wooden Jewelry Box - Vintage Carved Design for Storage & Decor
                </h1>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-[24px]">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < 4 ? 'text-[#FA8232] fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[14px] font-semibold text-[#191C1F]" style={{ lineHeight: '20px' }}>4.7 Star Rating</span>
                  <span className="text-[14px] text-[#5F6C72]" style={{ lineHeight: '20px' }}>(21,671 User feedback)</span>
                </div>

                {/* Bidding Information */}
                <div className="flex flex-col gap-[16px] text-[14px] text-[#11111177]">
                  <p>Bids: <span className='text-black'>7 bids</span></p>
                  <p>Condition: <span className='text-black'>Brand New</span></p>
                </div>
              </div>

              <div className='flex flex-col pl-[16px] border-b-[1px] border-[#E4E7E9]'>
                <div className='flex flex-col pt-[16px] pb-[24px] border-b-[1px] border-[#E4E7E9]'>
                  {/* Location */}
                  <div className="flex items-center space-x-2 text-[#2DA5F3] h-[40px] mb-[16px]">
                    <MapPin size={16} className='text-[#444444]' />
                    <span style={{ lineHeight: '20px' }}>Ajax, Ontario, Canada</span>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2 mb-[12px]">
                    <span className="bg-[#FF0000] text-white w-[144px] h-[30px] rounded-[2px] flex justify-center items-center text-[14px] mb-[12px]" style={{ lineHeight: '20px' }}>
                      Limited time deal
                    </span>
                    <div className="flex items-center gap-[16px] h-[54px]">
                      <span className="text-[36px] font-semibold text-[#2DA5F3]">$5.50</span>
                      <span className="text-[24px] text-[#77878F] line-through">$7.00</span>
                    </div>
                  </div>

                  {/* Seller Information */}
                  <div className="h-[30px]">
                    <p className='text-[#666666] text-[14px]' style={{ lineHeight: '20px', fontWeight: '300' }}>Seller: artisan_creations (1,254 ratings, 99.2% positive feedback)</p>
                  </div>
                </div>

                {/* Shipping Details */}
                <div className="flex flex-col pt-[24px] pb-[16px]">
                  <h4 className='text-[#222222] font-medium h-[34px] mb-[4px]' style={{ lineHeight: '24px' }}>Shipping Details</h4>
                  <ul className='h-[106px] mb-[10px] list-disc'>
                    <li style={{ lineHeight: '32px' }}>
                      <p><span className='font-semibold'>Shipping</span>: Free Standard Shipping (within the United States).</p>
                    </li>
                    <li style={{ lineHeight: '32px' }}>
                      <p><span className='font-semibold'>Location</span>: Los Angeles, California, USA.</p>
                    </li>
                    <li style={{ lineHeight: '32px' }}>
                      <p><span className='font-semibold'>Delivery Estimate</span>: Between Fri, Jan 5 and Mon, Jan 8.</p>
                    </li>
                  </ul>
                  <p className='text-[#222222]' style={{ lineHeight: '24px' }}>Returns: 30-day return policy. Buyer pays return shipping.</p>
                </div>
              </div>

              <div className='flex flex-col gap-[24px] pt-[24px] pb-[40px]'>
                {/* Action Buttons */}
                <div className="flex items-center gap-[16px]">
                  <button className="w-[184px] h-[40px] bg-[#FF8C00] text-[#191C1F] rounded-[100px] text-[14px] hover:bg-orange-600 transition-colors" style={{ lineHeight: '20px' }}>
                    Place Bid
                  </button>
                  <button className="w-[184px] h-[40px] border border-[#FB8308] text-[#191C1F] rounded-[100px] font-[14px] hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                    <Heart size={16} />
                    <span>Add to Watchlist</span>
                  </button>
                </div>

                {/* Share Options */}
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700">Share</span>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      <Facebook size={16} />
                    </button>
                    <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                      <Twitter size={16} />
                    </button>
                    <button className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                      <Instagram size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About This Item Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4">

          {/* Content Area */}
          <div className='flex flex-col border border-[#E4E7E9]'>
            <div className='w-full h-[42px] bg-[#F3F3F3]'>
              <div className='bg-white w-[153px] h-full flex justify-center items-center'><h3 className='text-[#222222] font-medium text-[15px]' style={{ lineHeight: '18px' }}>About this item</h3></div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div className="space-y-2 text-[15px] text-[#222222]" style={{ lineHeight: '32px' }}>
                  <p>Material: Premium quality wood with intricate carved design</p>
                  <p>Features:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Perfect for storing jewelry, trinkets, and keepsakes</li>
                    <li>Vintage design, ideal for home decor or as a gift</li>
                  </ul>
                  <p>Dimensions: 8 x 5 x 3 inches</p>
                  <p>Condition: Brand New</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 