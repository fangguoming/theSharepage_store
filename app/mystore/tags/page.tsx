'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  BarChart3, 
  Tag, 
  Star,
  FileText,
  Settings,
  LogOut,
  Edit,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function Tags() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Product Tags data matching the design
  const [productTags, setProductTags] = useState([
    {
      id: '1',
      name: 'Winter Sale',
      usedInProducts: '20 products'
    },
    {
      id: '2',
      name: 'Exclusive',
      usedInProducts: '1020 products'
    }
  ])

  // Order Tags data matching the design
  const [orderTags, setOrderTags] = useState([
    {
      id: '1',
      name: 'Winter Sale',
      ordersWithTag: '20 orders'
    },
    {
      id: '2',
      name: 'Exclusive',
      ordersWithTag: '1020 orders'
    }
  ])

  // Customer Tags data matching the design
  const [customerTags, setCustomerTags] = useState([
    {
      id: '1',
      name: 'Winter Sale',
      customersWithTag: '20 customers'
    },
    {
      id: '2',
      name: 'Exclusive',
      customersWithTag: '1020 customers'
    }
  ])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Handle any dropdown closing logic here
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Pagination functions
  const totalPages = Math.ceil(Math.max(productTags.length, orderTags.length, customerTags.length) / itemsPerPage)

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

  // Handle edit actions
  const handleEditProductTag = (tagId: string) => {
    const tag = productTags.find(t => t.id === tagId)
    if (tag) {
      alert(`Editing product tag: ${tag.name}\nUsed in: ${tag.usedInProducts}\nThis would open an edit form.`)
    }
  }

  const handleEditOrderTag = (tagId: string) => {
    const tag = orderTags.find(t => t.id === tagId)
    if (tag) {
      alert(`Editing order tag: ${tag.name}\nOrders with this tag: ${tag.ordersWithTag}\nThis would open an edit form.`)
    }
  }

  const handleEditCustomerTag = (tagId: string) => {
    const tag = customerTags.find(t => t.id === tagId)
    if (tag) {
      alert(`Editing customer tag: ${tag.name}\nCustomers with this tag: ${tag.customersWithTag}\nThis would open an edit form.`)
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
                  <Link href="/mystore/orders" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <FileText size={20} />
                    <span>Orders</span>
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
                    <FileText size={20} />
                    <span>Category</span>
                  </Link>
                  
                  <Link href="/mystore/tags" className="flex items-center space-x-3 px-4 py-3 bg-orange-100 text-orange-600 rounded-lg">
                    <Tag size={20} />
                    <span className="font-medium">Tags</span>
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
            <div className="flex-1 pl-8 pt-8 pb-8 space-y-6">

              {/* Product Tags Section */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Product Tags Section</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          TAG NAME
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          USED IN PRODUCTS
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {productTags.map((tag, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{tag.name}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{tag.usedInProducts}</div>
                          </td>
                          <td className="px-6 py-4">
                            <button 
                              onClick={() => handleEditProductTag(tag.id)}
                              className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                              title="Edit"
                            >
                              <Edit size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Order Tags Section */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Order Tags Section</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          TAG NAME
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ORDERS WITH THIS TAG
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orderTags.map((tag, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{tag.name}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{tag.ordersWithTag}</div>
                          </td>
                          <td className="px-6 py-4">
                            <button 
                              onClick={() => handleEditOrderTag(tag.id)}
                              className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                              title="Edit"
                            >
                              <Edit size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Customer Tags Section */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Customer Tags Section</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          TAG NAME
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          CUSTOMERS WITH THIS TAG
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {customerTags.map((tag, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{tag.name}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{tag.customersWithTag}</div>
                          </td>
                          <td className="px-6 py-4">
                            <button 
                              onClick={() => handleEditCustomerTag(tag.id)}
                              className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                              title="Edit"
                            >
                              <Edit size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pagination - Bottom Center */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center space-x-2">
                  {/* Previous Button */}
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="w-8 h-8 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-8 h-8 rounded-full transition-colors text-sm ${
                        currentPage === page
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      {page.toString().padStart(2, '0')}
                    </button>
                  ))}

                  {/* Ellipsis */}
                  {totalPages > 4 && (
                    <span className="text-gray-500">...</span>
                  )}

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
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 