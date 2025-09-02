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
  ChevronDown,
  Search,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function Customers() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Customer data matching the design
  const [customers, setCustomers] = useState([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      phone: '+1 555-123-4567',
      location: 'Los Angeles, USA',
      totalOrders: 5,
      totalSpent: '$1,199',
      accountStatus: 'Active',
      lastOrderDate: 'Dec 15, 2024',
      dateJoined: 'Jan 10, 2023'
    },
    {
      id: '2',
      name: 'Sarah Lee',
      email: 'sarah.lee@yahoo.com',
      phone: '+44 20 7946 0958',
      location: 'London, UK',
      totalOrders: 54,
      totalSpent: '$1,199',
      accountStatus: 'Active',
      lastOrderDate: 'Dec 15, 2024',
      dateJoined: 'Dec 15, 2024'
    },
    {
      id: '3',
      name: 'Ahmed Khan',
      email: 'ahmed.khan@hotmail.com',
      phone: '+1 555-987-6543',
      location: 'New York, USA',
      totalOrders: 45,
      totalSpent: '$1,199',
      accountStatus: 'Active',
      lastOrderDate: 'Dec 15, 2024',
      dateJoined: 'Mar 20, 2023'
    },
    {
      id: '4',
      name: 'Maria Gonzalez',
      email: 'maria.gonzalez@outlook.com',
      phone: '+34 91 123 4567',
      location: 'Madrid, Spain',
      totalOrders: 46,
      totalSpent: '$1,199',
      accountStatus: 'Active',
      lastOrderDate: 'Dec 15, 2024',
      dateJoined: 'Jun 15, 2023'
    },
    {
      id: '5',
      name: 'James Brown',
      email: 'james.brown@gmail.com',
      phone: '+1 555-456-7890',
      location: 'Chicago, USA',
      totalOrders: 23,
      totalSpent: '$1,199',
      accountStatus: 'Active',
      lastOrderDate: 'Dec 15, 2024',
      dateJoined: 'Sep 5, 2023'
    },
    {
      id: '6',
      name: 'Emma Wilson',
      email: 'emma.wilson@yahoo.com',
      phone: '+44 20 1234 5678',
      location: 'Manchester, UK',
      totalOrders: 67,
      totalSpent: '$1,199',
      accountStatus: 'Active',
      lastOrderDate: 'Dec 15, 2024',
      dateJoined: 'Feb 28, 2023'
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
  const totalPages = Math.ceil(customers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCustomers = customers.slice(startIndex, endIndex)

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

  // Handle view customer
  const handleViewCustomer = (customerId: string) => {
    const customer = customers.find(c => c.id === customerId)
    if (customer) {
      alert(`Viewing customer details for: ${customer.name}\nEmail: ${customer.email}\nPhone: ${customer.phone}\nLocation: ${customer.location}\nTotal Orders: ${customer.totalOrders}\nTotal Spent: ${customer.totalSpent}\nAccount Status: ${customer.accountStatus}\nLast Order: ${customer.lastOrderDate}\nDate Joined: ${customer.dateJoined}`)
    }
  }

  // Handle search
  const handleSearch = () => {
    // This would filter customers based on searchQuery
    console.log('Searching for:', searchQuery)
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
                  
                  <Link href="/mystore/customers" className="flex items-center space-x-3 px-4 py-3 bg-orange-100 text-orange-600 rounded-lg">
                    <Users size={20} />
                    <span className="font-medium">Customers</span>
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

              {/* Top Filter and Search Bar */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <select 
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="all">Show All Customers</option>
                        <option value="active">Active Customers</option>
                        <option value="inactive">Inactive Customers</option>
                        <option value="new">New Customers</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                      Filters
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mt-4">
                  <input
                    type="text"
                    placeholder="Customers"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    onClick={handleSearch}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Customers Table */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          CUSTOMER NAME
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          EMAIL
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          PHONE NUMBER
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          LOCATION
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          TOTAL ORDERS
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          TOTAL SPENT
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ACCOUNT STATUS
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          LAST ORDER DATE
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          DATE JOINED
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentCustomers.map((customer, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{customer.email}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{customer.phone}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{customer.location}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{customer.totalOrders}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{customer.totalSpent}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              {customer.accountStatus}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{customer.lastOrderDate}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{customer.dateJoined}</div>
                          </td>
                          <td className="px-6 py-4">
                            <button 
                              onClick={() => handleViewCustomer(customer.id)}
                              className="p-1 text-orange-600 hover:bg-orange-50 rounded transition-colors"
                              title="View Customer"
                            >
                              <Eye size={16} />
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
                    className="w-8 h-8 border border-orange-500 text-orange-500 bg-white rounded-full hover:bg-orange-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
                          : 'border border-orange-500 text-orange-500 bg-white hover:bg-orange-50'
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
                    className="w-8 h-8 border border-orange-500 text-orange-500 bg-white rounded-full hover:bg-orange-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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