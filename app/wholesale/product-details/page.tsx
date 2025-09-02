"use client"

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { ArrowRight, Star, Heart, ShoppingCart, MapPin, Share2, Facebook, Twitter, Copy, Search, ArrowLeft, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function WholesaleProductDetailsPage() {
  const [selectedColor, setSelectedColor] = useState('space-gray')
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('tc') // Default active tab

  const productImages = [
    "/images/wholesale/product-details/image 83.svg",
    "/images/wholesale/product-details/image 84.svg",
    "/images/wholesale/product-details/image 86.svg",
    "/images/wholesale/product-details/image 87.svg",
    "/images/wholesale/product-details/image 88.svg"
  ]

  const colors = [
    { id: 'space-gray', name: 'Space Gray', color: '#4A4A4A', selected: true },
    { id: 'silver', name: 'Silver', color: '#C0C0C0', selected: false },
    { id: 'dark-gray', name: '#2D2D2D', color: '#2D2D2D', selected: false },
    { id: 'black', name: 'Black', color: '#000000', selected: false }
  ]

  const tabs = [
    { id: 'reviews', label: 'Reviews' },
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'seller', label: 'Seller' },
    { id: 'tc', label: 'T&C' },
    { id: 'shipping', label: 'Shipping Charges' }
  ]

  const relatedProducts = [
    {
      name: "Bose Sport Earbuds - Wireless Earphone...",
      image: "/images/retail/sport_earbuds.png",
      price: 1500
    },
    {
      name: "Simple Mobile 4G LTE Prepaid Smartphone",
      image: "/images/retail/mobile_LTE.png",
      price: 1500
    },
    {
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      image: "/images/retail/LED_smart.png",
      price: 1500
    }
  ]

  const accessories = [
    {
      name: "Samsung Electronics Samsung Galaxy S21 5G",
      image: "/images/retail/mobile_Dell.png",
      price: 1500
    },
    {
      name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB...",
      image: "/images/retail/mobile_LTE.png",
      price: 1500
    },
    {
      name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
      image: "/images/retail/sony_DSCHX8.png",
      price: 1500
    }
  ]

  const appleProducts = [
    {
      name: "T020 T6 True Wireless Earbuds Bluetooth...",
      image: "/images/retail/sport_earbuds.png",
      price: 1600
    },
    {
      name: "JBL FLIP 4 - Waterproof Portable Bluetooth...",
      image: "/images/retail/JBL-filp.png",
      price: 1500
    },
    {
      name: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...",
      image: "/images/retail/LED_smart.png",
      price: 1500
    }
  ]

  const featuredProducts = [
    {
      name: "Portable Wishing Machine, lbs capacity Model 18NMF...",
      image: "/images/retail/wshing_machine.png",
      price: 1500
    },
    {
      name: "Sony DSCHXB High Zoom Point & Shoot Camera",
      image: "/images/retail/sony_DSCHX8.png",
      price: 1500
    },
    {
      name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      image: "/images/retail/mobile_Dell.png",
      price: 1500
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Product Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section - Product Images */}
            <div className="space-y-6 w-[664px] flex flex-col items-center">
              {/* Main Image */}
              <div className="relative border border-[#E4E7E9] p-8 w-[616px]">
                <img
                  src={productImages[selectedImage]}
                  alt="TOZO T6 True Wireless Earbuds"
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
            <div className="space-y-6">
              {/* Product Title */}
              <h1 className="text-[24px] leading-[36px] text-[#191C1F]">
                TOZO T6 True Wireless Earbuds Bluetooth 5.3 Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear Built-in Mic Headset Premium Deep Bass
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < 4 ? 'text-[#FA8232] fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-[#191C1F]">4.7 Star Rating</span>
                <span className="text-sm text-[#5F6C72]">(20,071 User feedback)</span>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-6 py-4 border-t border-b border-gray-200">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#11111177]">Brand:</span>
                    <span className="text-sm font-medium">TOZO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#11111177]">Model:</span>
                    <span className="text-sm font-medium">T6 True Wireless</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#11111177]">Connectivity:</span>
                    <span className="text-sm font-medium">Bluetooth 5.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#11111177]">Waterproof:</span>
                    <span className="text-sm font-medium">IPX8</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#11111177]">Type:</span>
                    <span className="text-sm font-medium">In-Ear Wireless</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#11111177]">Availability:</span>
                    <span className="text-sm font-medium text-[#0F8F46]">In Stock</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#11111177]">Battery Life:</span>
                    <span className="text-sm font-medium">Up to 8 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#11111177]">Charging:</span>
                    <span className="text-sm font-medium">Wireless Case</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className='text-sm  text-[#2DA5F3]'>Ajax, Ontario, Canada</span>
              </div>

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="bg-[#FF0000] text-white px-2 py-1 rounded text-sm font-semibold">
                    Limited time deal
                  </span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-[#2DA5F3]">$70</span>
                  <span className="text-lg text-[#77878F] line-through">$99.00</span>
                </div>
                <p className="text-sm text-[#666666]">
                  Lower prices may be available from other sellers (free shipping not guaranteed).
                </p>
              </div>

              {/* Color Options */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Color</label>
                <div className="flex space-x-2">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`w-8 h-8 rounded-full border-2 transition-colors ${
                        selectedColor === color.id
                          ? 'border-orange-500'
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.color }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Shipping & Seller Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#222222]">Shipping & Seller Information</h3>
                <div className="space-y-2 text-sm text-[#222222]">
                  <div><span className="font-semibold">Ships From:</span> The SharePage</div>
                  <div><span className="font-semibold">Sold By:</span> The SharePage</div>
                  <div><span className="font-semibold">Returns:</span> Returnable until January 31, 2025</div>
                  <div><span className="font-semibold">Payment:</span> Secure transaction available</div>
                </div>
              </div>

              {/* Shipping & Availability */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#222222]">Shipping & Availability</h3>
                <div className="space-y-2 text-sm text-[#222222]">
                  <div><span className="font-semibold">Delivery Date:</span> Monday, December 23 (Order within 2 hours!)</div>
                  <div><span className="font-semibold">No Import Charges:</span> (Shipping to Pakistan)</div>
                  <div><span className="font-semibold">Ships from and sold by:</span> TOZO Authorized Store</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <button className="bg-[#FF8C00] text-[#191C1F] py-3 px-6 rounded-full font-medium hover:bg-orange-600 transition-colors">
                  Contact to seller
                </button>
                <button className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Share Options */}
              <div className="bg-[#F1F1F1] py-2 px-4 flex items-center space-x-4 rounded">
                <span className="text-sm font-medium text-gray-700">Share</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    className="p-2 text-[#5F6C72] rounded-full"
                    title="Copy Link"
                  >
                    <Copy size={16} />
                  </button>
                  <button className="p-2 bg-[#FA8232] text-white rounded-full hover:bg-orange-600 transition-colors">
                    <img src="/images/Facebook.svg" alt="Facebook" className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-[#5F6C72] rounded-full hover:bg-gray-700 transition-colors">
                    <img src="/images/Twitter.svg" alt="Twitter" className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-[#5F6C72] rounded-full hover:bg-gray-700 transition-colors">
                    <img src="/images/Pinterest.svg" alt="Pinterest" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Information Section */}
      <section className="py-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          {/* Top Bar */}
          <div className="flex justify-start space-x-6">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
              <MessageCircle size={16} />
              <span>Enquiry</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#0F8F46] text-white'
                    : 'text-gray-700 bg-transparent hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-white p-6 shadow-sm">
            {activeTab === 'tc' && (
              <div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Can Cancel ?</span>
                  <span className="text-red-600 font-medium">No</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Can Refund ?</span>
                  <span className="text-red-600 font-medium">No</span>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="text-gray-600">
                <p>Customer reviews will be displayed here.</p>
              </div>
            )}
            {activeTab === 'description' && (
              <div className="text-gray-600">
                <p>Product description will be displayed here.</p>
              </div>
            )}
            {activeTab === 'specifications' && (
              <div className="text-gray-600">
                <p>Product specifications will be displayed here.</p>
              </div>
            )}
            {activeTab === 'seller' && (
              <div className="text-gray-600">
                <p>Seller information will be displayed here.</p>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div className="text-gray-600">
                <p>Shipping charges information will be displayed here.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Product Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Related Products */}
            <div>
              <h3 className="font-semibold text-[#191C1F] mb-4">RELATED PRODUCT</h3>
              <div className="space-y-4">
                {relatedProducts.map((product, index) => (
                  <div key={index} className="flex items-center p-3 gap-3 rounded-[3px] border border-[#E4E7E9]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-[#191C1F] line-clamp-2">{product.name}</h4>
                      <p className="text-[#2DA5F3] font-semibold text-sm">${product.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Accessories */}
            <div>
              <h3 className="font-semibold text-[#191C1F] mb-4">PRODUCT ACCESSORIES</h3>
              <div className="space-y-4">
                {accessories.map((product, index) => (
                  <div key={index} className="flex items-center p-3 gap-3 rounded-[3px] border border-[#E4E7E9]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-[#191C1F] line-clamp-2">{product.name}</h4>
                      <p className="text-[#2DA5F3] font-semibold text-sm">${product.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Apple Products */}
            <div>
              <h3 className="font-semibold text-[#191C1F] mb-4">APPLE PRODUCT</h3>
              <div className="space-y-4">
                {appleProducts.map((product, index) => (
                  <div key={index} className="flex items-center p-3 gap-3 rounded-[3px] border border-[#E4E7E9]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-[#191C1F] line-clamp-2">{product.name}</h4>
                      <p className="text-[#2DA5F3] font-semibold text-sm">${product.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Products */}
            <div>
              <h3 className="font-semibold text-[#191C1F] mb-4">FEATURED PRODUCTS</h3>
              <div className="space-y-4">
                {featuredProducts.map((product, index) => (
                  <div key={index} className="flex items-center p-3 gap-3 rounded-[3px] border border-[#E4E7E9]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-[#191C1F] line-clamp-2">{product.name}</h4>
                      <p className="text-[#2DA5F3] font-semibold text-sm">${product.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 