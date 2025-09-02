'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Minus, Plus, Heart, Trash2, Share2, BarChart3 } from 'lucide-react'

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Jeasona Wool Socks for Women Warm Winter Thermal Thick Socks Gifts for Women Mom",
      image: "/images/shopping cart/socks.png",
      status: "In Stock",
      color: "Multicolored Dark",
      currentPrice: 5.50,
      originalPrice: 7.00,
      quantity: 1,
      isLimitedDeal: true
    },
    {
      id: 2,
      name: "JBL Tune Flex - True Wireless Noise Cancelling Earbuds (Black), Small",
      image: "/images/shopping cart/image 95.png",
      status: "In Stock",
      color: "Dark",
      size: "Large",
      pattern: "Pattern: Earbuds",
      currentPrice: 5.50,
      originalPrice: 7.00,
      quantity: 1
    }
  ])

  const [recommendedProducts] = useState([
    {
      id: 1,
      name: "Portable Wshing Machine, 11lbs capacity Model..",
      image: "/images/Frame 1000006530.png",
      price: 5.50
    },
    {
      id: 2,
      name: "Portable Wshing Machine, 11lbs capacity Model..",
      image: "/images/Frame 1000006530.png",
      price: 5.50
    },
    {
      id: 3,
      name: "Portable Wshing Machine, 11lbs capacity Model..",
      image: "/images/Frame 1000006530.png",
      price: 5.50
    },
    {
      id: 4,
      name: "Portable Wshing Machine, 11lbs capacity Model..",
      image: "/images/Frame 1000006530.png",
      price: 5.50
    }
  ])

  const [relatedProducts] = useState([
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
  ])

  const [accessories] = useState([
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
  ])

  const [appleProducts] = useState([
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
  ])

  const [featuredProducts] = useState([
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
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cartItems.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0)
  const discount = 4.00
  const taxShipping = 1.50
  const finalTotal = subtotal - discount + taxShipping

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

        <div className="flex gap-6">
          {/* Main Cart Items - Left Column */}
          <div className="flex-1 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex bg-white border border-gray-200 rounded-[4px] p-10">
                {/* Product Image - Fixed width 259px */}
                <div className="w-[259px] flex-shrink-0 flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[165px] h-[165px] object-cover rounded-lg"
                  />
                </div>

                {/* Product Details - Takes remaining space */}
                <div className="flex-1 ml-12">
                  <div className='flex gap-16'>
                    <div>
                      {/* Product Name */}
                      <div className="mb-6">
                        <h3 className="font-medium text-[#191C1F] text-[20px] leading-[150%]">
                          {item.name}
                        </h3>
                      </div>

                      {/* Product Attributes */}
                      <div className="flex flex-col gap-4 mb-6">
                        <p className="text-sm text-[#11111177]">Stock Status: <span className="text-[#00BB4E]">{item.status}</span></p>
                        <p className="text-sm text-[#11111177]">Color: <span className="font-semibold text-black">{item.color}</span></p>
                        {item.size && <p className="text-sm text-[#11111177]">Size: <span className="font-semibold text-black">{item.size}</span></p>}
                        {item.pattern && <p className="text-sm text-[#11111177]">{item.pattern.split(':')[0]}: <span className="font-semibold text-black">{item.pattern.split(':')[1]}</span></p>}
                      </div>
                    </div>

                    {/* Pricing and Deal - Right aligned */}
                    <div className="mb-6 flex justify-end">
                      <div className="text-right min-w-[120px]">
                        {item.isLimitedDeal && (
                          <span className="px-[10px] py-[5px] bg-[#FF0000] text-white text-sm rounded-[2px] whitespace-nowrap">
                            Limited time deal
                          </span>
                        )}
                        <div className="flex flex-col items-end space-y-1">
                          <span className="text-[36px] font-semibold text-[#2DA5F3]">${item.currentPrice.toFixed(2)}</span>
                          <span className="text-[24px] text-[#77878F] line-through">${item.originalPrice.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="pt-6 border-t border-[#E4E7E9]">
                    <div className="flex items-center justify-between bg-[#F4F5F582] py-2 px-5 rounded">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium mx-2">{item.quantity.toString().padStart(2, '0')}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#2DA5F3] text-[14px] hover:text-blue-800 border border-[#ADB7BC] px-3 py-1 rounded bg-white"
                        >
                          Delete
                        </button>
                        <button className="text-[#2DA5F3] text-[14px] hover:text-blue-800 border border-[#ADB7BC] px-3 py-1 rounded bg-white">
                          Save For Later
                        </button>
                        <button className="text-[#2DA5F3] text-[14px] hover:text-blue-800 border border-[#ADB7BC] px-3 py-1 rounded bg-white">
                          Compare
                        </button>
                        <button className="text-[#2DA5F3] text-[14px] hover:text-blue-800 border border-[#ADB7BC] px-3 py-1 rounded bg-white">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Order Summary & Recommended */}
          <div className="space-y-6 w-[368px] flex-shrink-0">
            {/* Order Summary */}
            <div className="bg-white border border-gray-200 p-6">
              <div className="space-y-3">
                <div className="flex gap-4 border-b border-[#E4E7E9]">
                  <span className="text-[#555555]">Total items:</span>
                  <span className="font-medium">{totalItems} items in Cart</span>
                </div>
                <div className="flex gap-4 border-b border-[#E4E7E9]">
                  <span className='text-[#555555]'>Discount Applied:</span>
                  <span>${discount.toFixed(2)} off</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#555555]">Tax/Shipping:</span>
                  <span className="font-medium">${taxShipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-center border-t py-4">
                  <div className="flex gap-4">
                    <span className="text-sm text-[#222222]">Final Total:</span>
                    <span className="text-[36px] font-semibold text-[#2DA5F3]">${finalTotal.toFixed(1)}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button className="w-full bg-[#FF8C00] text-[#191C1F] py-3 px-4 rounded-[100px] font-medium hover:bg-orange-600 transition-colors">
                  Proceed to Checkout
                </button>
                <button className="w-full border border-[#FF8C00] text-[#191C1F] py-3 px-4 rounded-[100px] font-medium hover:bg-gray-50 transition-colors">
                  Continue Shopping
                </button>
              </div>
            </div>

            {/* Recommended Products */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-[20px] font-semibold text-[#191C1F] mb-4">Recommended based on your shopping trends</h3>
              <div className="space-y-4">
                {recommendedProducts.map((product, index) => (
                  <div key={index} className="flex flex-col gap-4 bg-white border border-[#E4E7E9] rounded-[6px] p-6">
                    <div className="flex items-center space-x-3 border-b border-[#E4E7E9]">
                      <div className='w-[100px] h-[100px]'>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="space-y-1 mb-3">
                          <h4 className="text-sm text-[#191C1F]" style={{ lineHeight: '22px' }}>Portable Wshing</h4>
                          <h4 className="text-sm text-[#191C1F]" style={{ lineHeight: '22px' }}>Machine, 11lbs</h4>
                          <h4 className="text-sm text-[#191C1F]" style={{ lineHeight: '22px' }}>capacity Model..</h4>
                        </div>
                        <p className="text-[#2DA5F3] font-semibold mb-">${product.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="w-[226px] text-sm border border-[#FB8308] text-[#191C1F] py-2 rounded-[100px] bg-white hover:bg-gray-50">
                        Add to cart
                      </button>
                      <button className="text-[#475156] hover:text-red-500">
                        <Heart size={16} className='border-[1.5px]' />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Product Sections */}
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
      <Footer />
    </main>
  )
} 