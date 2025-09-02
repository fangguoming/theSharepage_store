"use client"

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { ArrowRight, Star, Heart, ShoppingCart, MapPin, Share2, Facebook, Twitter, Instagram, Search } from 'lucide-react'
import { useState } from 'react'

export default function ProductDetailsPage() {
  const [selectedColor, setSelectedColor] = useState('space-gray')
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('tc')

  const productImages = [
    "/images/monitor.png", // Main MacBook Pro image
    "/images/retail/mobile_Dell.png", // Side profile
    "/images/retail/LED_smart.png", // Open with keyboard
    "/images/retail/sport_earbuds.png", // Open with screen
    "/images/retail/mobile_LTE.png" // Closed top-down view
  ]

  const colors = [
    { id: 'space-gray', name: 'Space Gray', color: '#4A4A4A', selected: true },
    { id: 'silver', name: 'Silver', color: '#C0C0C0', selected: false },
    { id: 'dark-gray', name: 'Dark Gray', color: '#2D2D2D', selected: false },
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

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Product Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Section - Product Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative bg-gray-50 rounded-lg p-8">
                <img 
                  src={productImages[selectedImage]} 
                  alt="MacBook Pro" 
                  className="w-full h-96 object-contain"
                />
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
                
                <div className="flex space-x-2">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 rounded-lg border-2 transition-colors ${
                        selectedImage === index 
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

                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Section - Product Details */}
            <div className="space-y-6">
              {/* Product Title */}
              <h1 className="text-2xl font-bold text-gray-900">
                2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.7 Star Rating</span>
                <span className="text-sm text-gray-500">(21,671 User feedback)</span>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-6 py-4 border-t border-b border-gray-200">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Brand:</span>
                    <span className="font-medium">Apple</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processor:</span>
                    <span className="font-medium">Apple M1 Chip</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Display:</span>
                    <span className="font-medium">13-inch Retina Display</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Storage:</span>
                    <span className="font-medium">256GB SSD</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Model:</span>
                    <span className="font-medium">MacBook Pro 2020</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-medium text-green-600">In Stock</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Memory:</span>
                    <span className="font-medium">8GB RAM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Battery Life:</span>
                    <span className="font-medium">Up to 20 hours</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin size={16} />
                <span>Ajax, Ontario, Canada</span>
              </div>

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                    Limited time deal
                  </span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-blue-600">$1699</span>
                  <span className="text-lg text-gray-500 line-through">$1999.00</span>
                </div>
                <p className="text-sm text-gray-600">
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
              <div className="space-y-2 text-sm text-gray-600">
                <div>Ships From: The SharePage</div>
                <div>Sold By: The SharePage</div>
                <div>Returns: Returnable until January 31, 2025</div>
                <div>Payment: Secure transaction available</div>
              </div>

              {/* Shipping & Availability */}
              <div className="space-y-2 text-sm">
                <div className="text-green-600 font-medium">
                  Monday, December 23 (Order within 2 hours!)
                </div>
                <div className="text-gray-600">No Import Charges (Shipping to Pakistan)</div>
                <div className="text-gray-600">Ships from and sold by Apple Authorized Store</div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <button className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  Buy now
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart size={16} />
                  <span>Add to card</span>
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart size={20} className="text-gray-600" />
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
      </section>

      {/* Product Information Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4">
          {/* Top Bar */}
          <div className="flex justify-end space-x-6 mb-6">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Search size={16} />
              <span>Enquiry</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="mt-6 bg-white rounded-lg p-6 shadow-sm">
            {activeTab === 'tc' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Question</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Can Cancel ?</td>
                      <td className="py-3 px-4 text-red-600 font-medium">No</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">Can Refund ?</td>
                      <td className="py-3 px-4 text-red-600 font-medium">No</td>
                    </tr>
                  </tbody>
                </table>
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

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* RELATED PRODUCT */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">RELATED PRODUCT</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Bose Sport Earbuds - Wireless Earphone...",
                    price: "$1,500",
                    image: "/images/retail/sport_earbuds.png"
                  },
                  {
                    name: "Simple Mobile 4G LTE Prepaid Smartphone",
                    price: "$1,500",
                    image: "/images/retail/mobile_LTE.png"
                  },
                  {
                    name: "4K UHD LED Smart TV with Chromecast Built-in",
                    price: "$1,500",
                    image: "/images/retail/LED_smart.png"
                  }
                ].map((product, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow w-[312px]">
                    <div className="flex p-4">
                      <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded mr-4 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-lg font-bold text-blue-600">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PRODUCT ACCESSORIES */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">PRODUCT ACCESSORIES</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Samsung Electronics Samsung Galexy S21 5G",
                    price: "$1,500",
                    image: "/images/retail/mobile_Dell.png"
                  },
                  {
                    name: "Simple Mobile 5G LTE Galexy 12 Mini 512GB...",
                    price: "$1,500",
                    image: "/images/retail/mobile_LTE.png"
                  },
                  {
                    name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
                    price: "$1,500",
                    image: "/images/retail/sony_DSCHX8.png"
                  }
                ].map((product, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow w-[312px]">
                    <div className="flex p-4">
                      <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded mr-4 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-lg font-bold text-blue-600">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* APPLE PRODUCT */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">APPLE PRODUCT</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "TOZO T6 True Wireless Earbuds Bluetooth...",
                    price: "$1,500",
                    image: "/images/auction/TOZO_keyboard.png"
                  },
                  {
                    name: "JBL FLIP 4 - Waterproof Portable Bluetooth...",
                    price: "$1,500",
                    image: "/images/retail/JBL-filp.png"
                  },
                  {
                    name: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...",
                    price: "$1,500",
                    image: "/images/retail/mobile_Dell.png"
                  }
                ].map((product, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow w-[312px]">
                    <div className="flex p-4">
                      <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded mr-4 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-lg font-bold text-blue-600">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FEATURED PRODUCTS */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">FEATURED PRODUCTS</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
                    price: "$1,500",
                    image: "/images/retail/wshing_machine.png"
                  },
                  {
                    name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
                    price: "$1,500",
                    image: "/images/retail/sony_DSCHX8.png"
                  },
                  {
                    name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
                    price: "$1,500",
                    image: "/images/retail/mobile_Dell.png"
                  }
                ].map((product, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow w-[312px]">
                    <div className="flex p-4">
                      <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded mr-4 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-lg font-bold text-blue-600">
                          {product.price}
                        </p>
                      </div>
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