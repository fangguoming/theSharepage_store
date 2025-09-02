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
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function Reports() {
  const [dateTime, setDateTime] = useState('')
  const [customerType, setCustomerType] = useState('')
  const [orderStatus, setOrderStatus] = useState('')
  const [productCategory, setProductCategory] = useState('')
  const [regionCountry, setRegionCountry] = useState('')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchDatePeriod, setSearchDatePeriod] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Reports data matching the design
  const [reports, setReports] = useState([
    {
      id: '1',
      reportType: 'Total Sales',
      metric: 'Sales Amount',
      value: '$15,000',
      timePeriod: 'Monthly'
    },
    {
      id: '2',
      reportType: 'Total Orders',
      metric: 'Order Count',
      value: '350 ORDERS',
      timePeriod: 'Monthly'
    },
    {
      id: '3',
      reportType: 'Average Order Value',
      metric: 'Value per Order',
      value: '$42.85',
      timePeriod: 'Monthly'
    },
    {
      id: '4',
      reportType: 'Top-Selling Product',
      metric: 'Product A',
      value: '150 UNITS',
      timePeriod: 'Monthly'
    },
    {
      id: '5',
      reportType: 'New Customers',
      metric: 'New Accounts',
      value: '50 CUSTOMERS',
      timePeriod: 'Monthly'
    },
    {
      id: '6',
      reportType: 'Retention Rate',
      metric: 'Returning Customers',
      value: '60%',
      timePeriod: 'Monthly'
    },
    {
      id: '7',
      reportType: 'Gross Revenue',
      metric: 'Revenue',
      value: '$20,000',
      timePeriod: 'Monthly'
    },
    {
      id: '8',
      reportType: 'Net Profit',
      metric: 'Profit',
      value: '$8,000',
      timePeriod: 'Monthly'
    },
    {
      id: '9',
      reportType: 'Pending Orders',
      metric: 'Pending Orders',
      value: '25 ORDERS',
      timePeriod: 'Current'
    },
    {
      id: '10',
      reportType: 'Shipped Orders',
      metric: 'Shipped Orders',
      value: '300 ORDERS',
      timePeriod: 'Current'
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
  const totalPages = Math.ceil(reports.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentReports = reports.slice(startIndex, endIndex)

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

  // Handle search
  const handleSearch = () => {
    // This would filter reports based on searchKeyword and searchDatePeriod
    console.log('Searching for:', searchKeyword, 'Date period:', searchDatePeriod)
  }

  // Handle filters
  const handleFilters = () => {
    // This would apply the selected filters
    console.log('Applying filters:', { dateTime, customerType, orderStatus, productCategory, regionCountry })
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
                  
                  <Link href="/mystore/reports" className="flex items-center space-x-3 px-4 py-3 bg-orange-100 text-orange-600 rounded-lg">
                    <BarChart3 size={20} />
                    <span className="font-medium">Reports</span>
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

              {/* Top Filters Bar */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <select 
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Date/Time</option>
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="quarter">This Quarter</option>
                        <option value="year">This Year</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select 
                        value={customerType}
                        onChange={(e) => setCustomerType(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Customer Type</option>
                        <option value="new">New Customers</option>
                        <option value="returning">Returning Customers</option>
                        <option value="vip">VIP Customers</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select 
                        value={orderStatus}
                        onChange={(e) => setOrderStatus(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Order Status</option>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select 
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Product Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="books">Books</option>
                        <option value="home">Home & Garden</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select 
                        value={regionCountry}
                        onChange={(e) => setRegionCountry(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Region/Country</option>
                        <option value="north-america">North America</option>
                        <option value="europe">Europe</option>
                        <option value="asia">Asia</option>
                        <option value="africa">Africa</option>
                        <option value="south-america">South America</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  </div>
                  <button 
                    onClick={handleFilters}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    Filters
                  </button>
                </div>
              </div>

              {/* Search Inputs Bar */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Search By Keyword"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Search By Date/Period"
                    value={searchDatePeriod}
                    onChange={(e) => setSearchDatePeriod(e.target.value)}
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

              {/* Reports Data Table */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          REPORT TYPE
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          METRIC
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          VALUE
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          TIME PERIOD
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentReports.map((report, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{report.reportType}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{report.metric}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{report.value}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{report.timePeriod}</div>
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