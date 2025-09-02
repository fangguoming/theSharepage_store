'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
  LayoutDashboard,
  History,
  Bell,
  ShoppingBag,
  Heart,
  Flag,
  CreditCard,
  Settings,
  LogOut,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Star,
  Edit,
  Trash2,
  Package,
  Users,
  BarChart3,
  FileText,
  Tag,
  Copy,
  MoreHorizontal
} from 'lucide-react'

export default function Dashboard() {
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveCard(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const recentOrders = [
    { id: '#96459761', status: 'IN PROGRESS', date: 'Dec 30, 2019 05:18', total: '$1,500', products: 5 },
    { id: '#71667107', status: 'COMPLETED', date: 'Feb 2, 2018 19:28', total: '$80', products: 11 },
    { id: '#96214362', status: 'CANCELED', date: 'Mar 20, 2019 23:14', total: '$160', products: 3 },
    { id: '#71667167', status: 'COMPLETED', date: 'Feb 2, 2019 19:28', total: '$80', products: 1 },
    { id: '#51746385', status: 'COMPLETED', date: 'Feb 2, 2019 19:28', total: '$2,300', products: 2 },
    { id: '#51746385', status: 'CANCELED', date: 'Dec 30, 2019 07:52', total: '$70', products: 1 },
    { id: '#673971743', status: 'COMPLETED', date: 'Dec 7, 2019 23:26', total: '$220', products: 1 },
  ]

  const browsingHistory = [
    { name: 'DELL 21.5 inch Full HD Monitor (E2216HV)', price: '$442.12', rating: 4.5, reviews: 56787, sale: true },
    { name: 'DELL 21.5 inch Full HD Monitor (E2216HV)', price: '$442.12', rating: 4.5, reviews: 56787, sale: false },
    { name: 'DELL 21.5 inch Full HD Monitor (E2216HV)', price: '$442.12', rating: 4.5, reviews: 56787, sale: true },
    { name: 'DELL 21.5 inch Full HD Monitor (E2216HV)', price: '$442.12', rating: 4.5, reviews: 56787, sale: false },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'text-[#2DB224] bg-white'
      case 'IN PROGRESS':
        return 'text-[#FA8232] bg-white'
      case 'CANCELED':
        return 'text-[#EE5858] bg-white'
      default:
        return 'text-gray-600 bg-white'
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="min-h-screen bg-gray-50" ref={dropdownRef}>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg min-h-screen">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Account</h2>

                <nav className="space-y-2">
                  <Link href="/dashboard" className="flex items-center space-x-3 px-4 py-3 bg-orange-500 text-white rounded-lg">
                    <img src="/images/dashboard/Stack.svg" alt="Dashboard" className="w-5 h-5" />
                    <span className="font-medium">Dashboard</span>
                  </Link>

                  <Link href="/dashboard/orders" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <img src="/images/dashboard/Storefront.svg" alt="Orders" className="w-5 h-5" />
                    <span>Order History</span>
                  </Link>

                  <Link href="/dashboard/notifications" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <img src="/images/dashboard/MapPinLine.svg" alt="Notification" className="w-5 h-5" />
                    <span>Notification</span>
                    <span className="ml-auto bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">0</span>
                  </Link>

                  <Link href="/dashboard/my-orders" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <img src="/images/dashboard/ArrowsCounterClockwise.svg" alt="My Order History" className="w-5 h-5" />
                    <span>My Order History</span>
                  </Link>

                  <Link href="/dashboard/auction-bids" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <img src="/images/dashboard/ShoppingCartSimple.svg" alt="Auction Bid" className="w-5 h-5" />
                    <span>Auction Bid</span>
                  </Link>

                  <Link href="/dashboard/customize-requests" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <img src="/images/dashboard/Heart.svg" alt="Customize Request" className="w-5 h-5" />
                    <span>Customize Request</span>
                  </Link>

                  <Link href="/dashboard/enquiries" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <img src="/images/dashboard/ArrowsCounterClockwise.svg" alt="Enquiry" className="w-5 h-5" />
                    <span>Enquiry</span>
                  </Link>

                  <Link href="/dashboard/favorites" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <img src="/images/dashboard/ArrowsCounterClockwise.svg" alt="Favorite Products" className="w-5 h-5" />
                    <span>Favorite Products</span>
                  </Link>

                  <Link href="/dashboard/flagged-products" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <img src="/images/dashboard/ArrowsCounterClockwise.svg" alt="Flag Product" className="w-5 h-5" />
                    <span>Flag Product</span>
                    <span className="ml-auto bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">0</span>
                  </Link>

                  <Link href="/dashboard/flagged-quotes" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <img src="/images/dashboard/ArrowsCounterClockwise.svg" alt="Flag Quote" className="w-5 h-5" />
                    <span>Flag Quote</span>
                  </Link>

                  <Link href="/dashboard/cards-address" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <img src="/images/dashboard/Notebook.svg" alt="Cards & Address" className="w-5 h-5" />
                    <span>Cards & Address</span>
                  </Link>

                  <Link href="/dashboard/settings" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <img src="/images/dashboard/Gear.svg" alt="Setting" className="w-5 h-5" />
                    <span>Setting</span>
                  </Link>

                  <button className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors w-full text-left">
                    <img src="/images/dashboard/SignOut.svg" alt="Log-out" className="w-5 h-5" />
                    <span>Log-out</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Hello, Kevin</h1>
                <p className="text-gray-600 max-w-2xl">
                  From your account dashboard, you can easily check & view your Recent Orders, manage your Shipping and Billing Addresses and edit your Password and Account Details.
                </p>
              </div>

              {/* Account Information Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Account Info */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-sm font-semibold text-[#191C1F] border-b border-[#E4E7E9] uppercase pb-4">ACCOUNT INFO</h3>
                  <div className="flex items-start space-x-4 pt-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="/images/Kevin.png"
                        alt="Kevin Gilbert"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2 text-sm flex-1">
                      <p><span className="font-medium">Name:</span> Kevin Gilbert</p>
                      <p><span className="font-medium">Address:</span> Dhaka - 1207, Bangladesh</p>
                      <p><span className="font-medium">Email:</span> kevingilbert@gmail.com</p>
                      <p><span className="font-medium">Secondary Email:</span> kevin12345@gmail.com</p>
                      <p><span className="font-medium">Phone:</span> +1-202-555-0118</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white text-[#2DA5F3] text-semibold text-sm leading-[48px] border border-[#D5EDFD] rounded-md hover:bg-blue-700 transition-colors text-sm">
                    EDIT ACCOUNT
                  </button>
                </div>

                {/* Billing Address */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-sm font-semibold text-[#191C1F] border-b border-[#E4E7E9] uppercase pb-4">BILLING ADDRESS</h3>
                  <div className="space-y-2 text-sm pt-4">
                    <p><span className="font-medium">Name:</span> Kevin Gilbert</p>
                    <p><span className="font-medium">Address:</span> East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 50, Dhaka - 1200, Bangladesh</p>
                    <p><span className="font-medium">Phone:</span> +1-202-555-018</p>
                    <p><span className="font-medium">Email:</span> kevingilbert@gmail.com</p>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-white text-[#2DA5F3] text-semibold text-sm leading-[48px] border border-[#D5EDFD] rounded-md hover:bg-blue-700 transition-colors text-sm">
                    EDIT ADDRESS
                  </button>
                </div>

                {/* Order Summary */}
                <div className="rounded-lg">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center space-x-3 bg-[#EAF6FE] p-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <img src="/images/dashboard/Rocket.svg" alt="Rocket" className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[20px] leading-[28px] font-semibold text-[#191C1F]">154</p>
                        <p className="text-sm leading-[20px] text-[#475156]">Total Orders</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-[#FFF3EB] p-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <img src="/images/dashboard/Receipt.svg" alt="Receipt" className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[20px] leading-[28px] font-semibold text-[#191C1F]">05</p>
                        <p className="text-sm leading-[20px] text-[#475156]">Pending Orders</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-[#EAF7E9] p-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <img src="/images/dashboard/Package.svg" alt="Package" className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[20px] leading-[28px] font-semibold text-[#191C1F]">149</p>
                        <p className="text-sm leading-[20px] text-[#475156]">Completed Orders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">PAYMENT OPTION</h3>
                  <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                    Add Card →
                  </button>
                </div>

                <div className="flex gap-6">
                  {/* VISA Card */}
                  <div className="relative">
                    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1B6392] to-[#124261] rounded-lg p-6 text-white w-[296px] h-[196px]">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-2xl font-bold mb-4">$95,400.00 USD</p>
                          <div className="space-y-2">
                            <span className="text-blue-200 text-xs uppercase">CARD NUMBER</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">**** **** **** 3814</span>
                              <div className="w-5 h-5 rounded flex items-center justify-center cursor-pointer">
                                <Copy size={16} className="text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <button
                            onClick={() => setActiveCard(activeCard === 'visa' ? null : 'visa')}
                            className="text-white hover:text-gray-200"
                          >
                            <MoreHorizontal size={20} />
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-end mt-auto">
                        <div className="text-white font-bold text-lg">VISA</div>
                        <div className="text-white text-lg">Kevin Gilbert</div>
                      </div>
                    </div>

                    {activeCard === 'visa' && (
                      <div className="absolute top-10 right-0 bg-white rounded-lg shadow-lg border p-2 z-10 min-w-[120px]">
                        <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded w-full">
                          <Edit size={16} />
                          <span>Edit Card</span>
                        </button>
                        <button className="flex items-center space-x-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded w-full">
                          <Trash2 size={16} />
                          <span>Delete</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Mastercard */}
                  <div className="relative">
                    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#248E1D] to-[#2DB224] rounded-lg p-6 text-white w-[296px] h-[196px]">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-2xl font-bold mb-4">$87,583.00 USD</p>
                          <div className="space-y-2">
                            <span className="text-green-200 text-xs uppercase">CARD NUMBER</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">**** **** 1761</span>
                              <div className="w-5 h-5 rounded flex items-center justify-center cursor-pointer">
                                <Copy size={16} className="text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <button
                            onClick={() => setActiveCard(activeCard === 'mastercard' ? null : 'mastercard')}
                            className="text-white hover:text-gray-200"
                          >
                            <MoreHorizontal size={20} />
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-end mt-auto">
                        <div className="text-white font-bold text-lg">mastercard.</div>
                        <div className="text-white text-lg">Kevin Gilbert</div>
                      </div>
                    </div>

                    {activeCard === 'mastercard' && (
                      <div className="absolute top-10 right-0 bg-white rounded-lg shadow-lg border p-2 z-10 min-w-[120px]">
                        <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded w-full">
                          <Edit size={16} />
                          <span>Edit Card</span>
                        </button>
                        <button className="flex items-center space-x-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded w-full">
                          <Trash2 size={16} />
                          <span>Card</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">RECENT ORDER</h3>
                  <button className="text-[#FA8232] hover:text-blue-700 font-medium">
                    View All →
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">ORDER ID</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">STATUS</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">DATE</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">TOTAL</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-4 text-sm font-medium text-[#191C1F]">{order.id}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-[#5F6C72]">{order.date}</td>
                          <td className="py-3 px-4 text-sm text-[#475156]">
                            {order.total} ({order.products} Products)
                          </td>
                          <td className="py-3 px-4">
                            <button className="text-[#2DA5F3] hover:text-blue-700 text-sm font-medium">
                              View Details →
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Browsing History */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">BROWSING HISTORY</h3>
                  <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                    View All →
                  </button>
                </div>

                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {browsingHistory.map((product, index) => (
                      <div key={index} className="flex-shrink-0 w-64 bg-white border rounded-lg p-4">
                        <div className="relative mb-3">
                          <img
                            src="/images/product_retails/Dell_monitor.png"
                            alt={product.name}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          {product.sale && (
                            <span className="absolute top-2 left-2 bg-[#2DB224] text-white text-xs px-2 py-1 rounded-[2px] font-medium">
                              SALE
                            </span>
                          )}
                        </div>

                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={i < Math.floor(product.rating) ? "text-[#FA8232] fill-current" : "text-gray-300"}
                            />
                          ))}
                          <span className="text-xs text-[#77878F] ml-1">({product.reviews.toLocaleString()})</span>
                        </div>

                        <h4 className="text-sm font-medium text-[#191C1F] mb-2 line-clamp-2">
                          {product.name}
                        </h4>

                        <p className="text-lg font-bold text-[#2DA5F3]">{product.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pagination and Navigation - Same Line */}
                <div className="flex justify-center items-center gap-4 mt-6">
                  {/* Left Arrow */}
                  <button className="bg-white border border-[#FA8232] hover:bg-orange-600 text-[#FA8232] rounded-full p-2 shadow-lg transition-colors">
                    <ChevronLeft size={20} />
                  </button>

                  {/* Pagination Dots */}
                  <div className="flex space-x-2">
                    {[...Array(5)].map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${index === 0
                            ? 'bg-[#FA8232]'
                            : 'bg-[#FFCEAD]'
                          }`}
                      />
                    ))}
                  </div>

                  {/* Right Arrow */}
                  <button className="bg-white border border-[#FA8232] hover:bg-orange-600 text-[#FA8232] rounded-full p-2 shadow-lg transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 