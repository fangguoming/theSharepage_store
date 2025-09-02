"use client"

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ArrowRight, Star } from 'lucide-react'
import { useState } from 'react'

export default function LatestArrivalsPage() {
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

  const products = [
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds",
      price: "$70",
      rating: 5,
      reviews: 738,
      minOrder: "1 unit",
      image: "/images/auction/TOZO_keyboard.png",
      isHot: true
    },
    {
      id: 2,
      name: "Samsung Galaxy S21 5G",
      price: "$2,300",
      rating: 5,
      reviews: 536,
      minOrder: "1 unit",
      image: "/images/retail/mobile_Dell.png"
    },
    {
      id: 3,
      name: "Amazon Basics High-Speed HDMI Cable",
      price: "$360",
      rating: 5,
      reviews: 423,
      minOrder: "1 unit",
      image: "/images/auction/Amazon_speed HDMI cable.png"
    },
    {
      id: 4,
      name: "Portable Washing Machine (White)",
      price: "$80",
      rating: 4,
      reviews: 816,
      minOrder: "1 unit",
      image: "/images/retail/wshing_machine.png"
    },
    {
      id: 5,
      name: "Portable Washing Machine (Blue)",
      price: "$80",
      rating: 4,
      reviews: 816,
      minOrder: "5 pieces",
      image: "/images/retail/wshing_machine.png"
    },
    {
      id: 6,
      name: "2025 Jetour Dashing SUV",
      price: "$4570",
      rating: 4,
      reviews: 455,
      minOrder: "120 pieces",
      image: "/images/retail/mobile_Dell.png"
    },
    {
      id: 7,
      name: "Cheap Price Smart Cargo Cart Pickup Truck",
      price: "$2,300",
      rating: 3,
      reviews: 536,
      minOrder: "500 pieces",
      image: "/images/retail/mobile_Dell.png"
    },
    {
      id: 8,
      name: "Seater Electric Mini Car G Wagon",
      price: "$360",
      rating: 5,
      reviews: 423,
      minOrder: "5 pieces",
      image: "/images/retail/mobile_Dell.png"
    },
    {
      id: 9,
      name: "Yamaha YZF R6 Motorcycle",
      price: "$4000",
      rating: 3,
      reviews: 816,
      minOrder: "1 piece",
      image: "/images/retail/mobile_Dell.png"
    },
    {
      id: 10,
      name: "250cc/400cc Gasoline Motor Cycles",
      price: "$500",
      rating: 4,
      reviews: 816,
      minOrder: "54 pieces",
      image: "/images/retail/mobile_Dell.png"
    },
    {
      id: 11,
      name: "Ew Bio-Collagen Peptide Face Mask",
      price: "$70",
      rating: 5,
      reviews: 738,
      minOrder: "24 pieces",
      image: "/images/retail/mobile_Dell.png"
    },
    {
      id: 12,
      name: "Bpa Free Rambire 36oz Sports Tumbler",
      price: "$2,300",
      rating: 5,
      reviews: 536,
      minOrder: "2 pieces",
      image: "/images/retail/mobile_Dell.png"
    },
    {
      id: 13,
      name: "High Quality Custom Halloween Party Novelties",
      price: "$360",
      rating: 3,
      reviews: 423,
      minOrder: "1 unit",
      image: "/images/retail/mobile_Dell.png"
    },
    {
      id: 14,
      name: "Custom Womens Activewear Seamless Sport",
      price: "$80",
      rating: 4,
      reviews: 816,
      minOrder: "5 packs",
      image: "/images/retail/mobile_Dell.png"
    },
    {
      id: 15,
      name: "Portable Wshing Machine, 11lbs Capacity Model 18NMF...",
      price: "$80",
      rating: 4,
      reviews: 816,
      minOrder: "1 unit",
      image: "/images/retail/mobile_Dell.png"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Category Navigation */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap pb-2 px-1 border-b-2 transition-colors ${
                    category.active
                      ? 'border-orange-500 text-orange-500 font-medium'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
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
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {/* Product Image */}
                <div className="relative h-48 bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                  {product.isHot && (
                    <div className="absolute top-2 left-2 bg-[#EE5858] text-white px-2 py-1 rounded text-xs font-semibold">
                      HOT
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < product.rating ? 'text-[#FA8232] fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <p className="text-xl font-bold text-[#2DA5F3] mb-2">
                    {product.price}
                  </p>

                  {/* Min Order */}
                  <p className="text-xs text-[#777777]">
                    Min. order: {product.minOrder}
                  </p>
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