'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
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
  ChevronDown,
  Search,
  ArrowRight,
  Trash2,
  Eye,
  Edit,
  RotateCcw,
  Mail,
  CheckSquare,
  Package,
  Users,
  BarChart3,
  Tag,
  Star,
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function Orders() {
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [searchType, setSearchType] = useState('all')
  const [showSearchDropdown, setShowSearchDropdown] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [orders, setOrders] = useState([
    { 
      id: '#96459761', 
      date: 'Dec 30, 2019 05:18', 
      status: 'IN PROGRESS', 
      billing: 'East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh',
      total: '$1,500 (5 Products)'
    },
    { 
      id: '#71667167', 
      date: 'Feb 2, 2019 19:28', 
      status: 'COMPLETED', 
      billing: 'West Tejturi Bazar, Word No. 05, Road No. 14/x, House no. 1321/C, Flat No. 51, Dhaka - 1201, Bangladesh',
      total: '$80 (1 Products)'
    },
    { 
      id: '#95214362', 
      date: 'Mar 20, 2019 23:14', 
      status: 'CANCELED', 
      billing: 'North Tejturi Bazar, Word No. 06, Road No. 15/x, House no. 1322/C, Flat No. 52, Dhaka - 1202, Bangladesh',
      total: '$160 (3 Products)'
    },
    { 
      id: '#51746385', 
      date: 'Feb 2, 2019 19:28', 
      status: 'COMPLETED', 
      billing: 'South Tejturi Bazar, Word No. 07, Road No. 16/x, House no. 1323/C, Flat No. 53, Dhaka - 1203, Bangladesh',
      total: '$2,300 (2 Products)'
    },
    { 
      id: '#673971743', 
      date: 'Dec 7, 2019 23:26', 
      status: 'COMPLETED', 
      billing: 'Central Tejturi Bazar, Word No. 08, Road No. 17/x, House no. 1324/C, Flat No. 54, Dhaka - 1204, Bangladesh',
      total: '$220 (1 Products)'
    }
  ])
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveCard(null)
        setShowSearchDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])



  // Action functions for order management
  const handleDeleteOrder = (orderId: string) => {
    if (confirm(`Are you sure you want to delete order ${orderId}?`)) {
      setOrders(orders.filter(order => order.id !== orderId))
      alert(`Order ${orderId} has been deleted successfully!`)
    }
  }

  const handleViewOrder = (orderId: string) => {
    alert(`Viewing order details for ${orderId}\nThis would open a detailed view modal or navigate to order details page.`)
  }

  const handleEditOrder = (orderId: string) => {
    alert(`Editing order ${orderId}\nThis would open an edit form or navigate to order edit page.`)
  }

  const handleChangeStatus = (orderId: string) => {
    const newStatus = prompt(`Change status for order ${orderId}:\nEnter new status (COMPLETED, IN PROGRESS, CANCELED):`)
    if (newStatus) {
      setOrders(orders.map(order => 
        order.id === orderId 
          ? { ...order, status: newStatus.toUpperCase() }
          : order
      ))
      alert(`Order ${orderId} status changed to ${newStatus.toUpperCase()}`)
    }
  }

  const handleResendOrder = (orderId: string) => {
    alert(`Resending order confirmation for ${orderId}\nThis would trigger a resend of order confirmation email to the customer.`)
  }

  // Pagination functions
  const totalPages = Math.ceil(orders.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentOrders = orders.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

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

  const statusFilters = [
    { id: 'all', label: 'All', count: 5 },
    { id: 'pending', label: 'Pending Payment', count: 5 },
    { id: 'processing', label: 'Processing', count: 3 },
    { id: 'hold', label: 'Hold On', count: 5 },
    { id: 'complete', label: 'Complete', count: 6 },
    { id: 'cancel', label: 'Cancel', count: 1 }
  ]

  const searchOptions = [
    { id: 'order-id', label: 'Order ID' },
    { id: 'customer-email', label: 'Customers Email' },
    { id: 'customers', label: 'Customers' },
    { id: 'all', label: 'All' }
  ]

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
                  
                  
                  <Link href="/mystore/orders" className="flex items-center space-x-3 px-4 py-3 bg-orange-100 text-orange-600 rounded-lg">
                    <FileText size={20} />
                    <span className="font-medium">Orders</span>
                  </Link>
                  
                  <Link href="/mystore/products" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Package size={20} />
                    <span>Products</span>
                  </Link>
                  <Link href="/mystore/customers" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Users size={20} />
                    <span>Customers</span>
                  </Link>
                  <Link href="/mystore/reports" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <BarChart3 size={20} />
                    <span>Reports</span>
                  </Link>
                  
                  <Link href="/mystore/brands" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Tag size={20} />
                    <span>Brands</span>
                  </Link>
                  
                  <Link href="/mystore/category" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Tag size={20} />
                    <span>Category</span>
                  </Link>
                  
                  <Link href="/mystore/tags" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Tag size={20} />
                    <span>Tags</span>
                  </Link>
                  
                  <Link href="/mystore/attributes" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Settings size={20} />
                    <span>Attributes</span>
                  </Link>
                  
                  <Link href="/mystore/reviews" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Star size={20} />
                    <span>Reviews</span>
                  </Link>
                  
                  <Link href="/mystore/settings" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Settings size={20} />
                    <span>Setting</span>
                  </Link>
                  
                  <button className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors w-full text-left">
                    <LogOut size={20} />
                    <span>Log-out</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 pl-8 pt-8 pb-8">

              {/* Order Status Filters and Search */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <div className="flex items-center justify-between">
                  {/* Order Status Filters */}
                  <div className="flex space-x-1 border-b border-gray-200">
                    {statusFilters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setSelectedStatus(filter.id)}
                        className={`px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                          selectedStatus === filter.id
                            ? 'text-black border-b-2 border-black'
                            : 'text-[#2DA5F3] hover:text-gray-800'
                        }`}
                      >
                        {filter.label} ({filter.count})
                      </button>
                    ))}
                  </div>

                  {/* Search Section */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Search orders..."
                      className="w-56 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select className="w-[69px] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All</option>
                      <option>Order ID</option>
                      <option>Customers Email</option>
                      <option>Customers</option>
                    </select>
                    <button className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                      <Search size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action and Filter Bar with Pagination */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <div className="flex items-center justify-between">
                  {/* Left side - Action and Filter Controls */}
                  <div className="flex items-center space-x-4 flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Order Actions</option>
                        <option>Delete Selected</option>
                        <option>Mark as Complete</option>
                        <option>Mark as Processing</option>
                      </select>
                      <button className="px-4 py-2 bg-white border border-[#2DA5F3] text-[#2DA5F3] rounded-md hover:bg-blue-700 transition-colors text-sm">
                        Apply
                      </button>
                    </div>

                    <div className="flex items-center space-x-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>All Dates</option>
                        <option>Today</option>
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                      </select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Filters By Registered Customers</option>
                        <option>Registered Only</option>
                        <option>Guest Only</option>
                      </select>
                      <button className="px-4 py-2 bg-white border border-[#2DA5F3] text-[#2DA5F3] rounded-md hover:bg-blue-700 transition-colors text-sm">
                        Filters
                      </button>
                    </div>
                  </div>

                  {/* Right side - Pagination */}
                  <div className="flex items-center space-x-2">
                    {/* Previous Button */}
                    <button
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                      className="px-3 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-8 h-8 rounded-full transition-colors ${
                          currentPage === page
                            ? 'bg-orange-600 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    {/* Next Button */}
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="w-8 h-8 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Orders Table */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left">
                          <CheckSquare size={16} className="text-gray-400" />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ORDER ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          DATE & TIME
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          STATUS
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          BILLING
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          TOTAL
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentOrders.map((order, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {order.id}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {order.date}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                            <div className="truncate" title={order.billing}>
                              {order.billing}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {order.total}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <button 
                                onClick={() => handleDeleteOrder(order.id)}
                                className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                                title="Delete"
                              >
                                <Trash2 size={16} />
                              </button>
                              <button 
                                onClick={() => handleViewOrder(order.id)}
                                className="p-1 text-orange-600 hover:bg-orange-50 rounded transition-colors"
                                title="View"
                              >
                                <Eye size={16} />
                              </button>
                              <button 
                                onClick={() => handleEditOrder(order.id)}
                                className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                title="Edit"
                              >
                                <Edit size={16} />
                              </button>
                              <button 
                                onClick={() => handleChangeStatus(order.id)}
                                className="p-1 text-gray-600 hover:bg-gray-50 rounded transition-colors"
                                title="Change Status"
                              >
                                <RotateCcw size={16} />
                              </button>
                              <button 
                                onClick={() => handleResendOrder(order.id)}
                                className="p-1 text-gray-600 hover:bg-gray-50 rounded transition-colors"
                                title="Resend"
                              >
                                <Mail size={16} />
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
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 