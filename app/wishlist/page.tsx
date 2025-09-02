'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Minus, Plus, Trash2 } from 'lucide-react'

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Razer BlackShark V2 X Gaming Headset",
      image: "/images/wholesale/ear gaming headphones.png",
      addedDate: "16/12/2024",
      quantity: 1,
      stock: "In Stock"
    },
    {
      id: 2,
      name: "Bose Sport Earbuds - Wireless Earphone...",
      image: "/images/retail/sport_earbuds.png",
      addedDate: "16/11/2024",
      quantity: 20,
      stock: "In Stock"
    },
    {
      id: 3,
      name: "Samsung Electronics Samsung Galexy S21",
      image: "/images/retail/xbox_series.png",
      addedDate: "16/02/2024",
      quantity: 2,
      stock: "In Stock"
    },
    {
      id: 4,
      name: "JBL FLIP 4 - Waterproof Portable Bluetooth...",
      image: "/images/retail/LED_smart.png",
      addedDate: "16/05/2024",
      quantity: 10,
      stock: "Out Of In Stock"
    },
    {
      id: 5,
      name: "Dell Optiplex 7000x7480 All-In-One Computer Monitor",
      image: "/images/wholesale/Dell_optiplex.png",
      addedDate: "16/04/2024",
      quantity: 20,
      stock: "In Stock"
    }
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setWishlistItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id))
  }

  const addToCart = (id: number) => {
    const item = wishlistItems.find(item => item.id === id)
    if (item && item.stock === "In Stock") {
      alert(`Added ${item.name} to cart!`)
    }
  }

  const isInStock = (stock: string) => {
    return stock === "In Stock"
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Wishlist</h1>

        {/* Main Content Card */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Added Date
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {wishlistItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    {/* Image */}
                    <td className="px-6 py-4 text-center">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded mx-auto"
                      />
                    </td>

                    {/* Product Name */}
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-[#475156] max-w-xs truncate">
                        {item.name}
                      </div>
                    </td>

                    {/* Added Date */}
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-[#475156]">
                        {item.addedDate}
                      </div>
                    </td>

                    {/* Quantity */}
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-1 border-[0.3px] border-[#ADB7BC] rounded-[6px] px-2 py-1 w-20 mx-auto">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-gray-50 rounded"
                        >
                          <Minus size={14} className='text-[#191C1F]' />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold text-[#475156]">
                          {item.quantity.toString().padStart(2, '0')}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-gray-50 rounded"
                        >
                          <Plus size={14} className='text-[#191C1F]' />
                        </button>
                      </div>
                    </td>

                    {/* Stock */}
                    <td className="px-6 py-4 text-center">
                      <span className={`text-sm ${
                        isInStock(item.stock) 
                          ? 'text-[#08B564]' 
                          : 'text-[#ADB7BC]'
                      }`}>
                        {item.stock}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <button 
                          onClick={() => addToCart(item.id)}
                          disabled={!isInStock(item.stock)}
                          className={`w-[241px] h-[44px] flex items-center justify-center rounded-full text-sm transition-colors ${
                            isInStock(item.stock)
                              ? 'bg-[#FF8C00] text-[#191C1F] hover:bg-orange-600'
                              : 'bg-[#ADB7BC] text-[#191C1F] cursor-not-allowed'
                          }`}
                        >
                          Add To Cart
                        </button>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-[#555555] hover:text-red-600 transition-colors"
                          title="Remove from wishlist"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 