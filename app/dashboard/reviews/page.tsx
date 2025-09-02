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
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function Reviews() {
  const [allRatings, setAllRatings] = useState('')
  const [filterByStatus, setFilterByStatus] = useState('')
  const [filterByProduct, setFilterByProduct] = useState('')
  const [filterByDate, setFilterByDate] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Reviews data matching the design
  const [reviews, setReviews] = useState([
    {
      id: '1',
      product: 'iPhone 12 Pro',
      customerName: 'John Doe',
      rating: 4,
      review: 'Great phone!',
      status: 'Approved',
      date: 'Dec 15, 2024'
    },
    {
      id: '2',
      product: 'MacBook Pro 2020',
      customerName: 'Sarah Smith',
      rating: 5,
      review: 'Battery life could be better.',
      status: 'Pending',
      date: 'Dec 15, 2024'
    },
    {
      id: '3',
      product: 'Samsung Galaxy S21',
      customerName: 'Mike Johnson',
      rating: 3,
      review: 'Good camera but expensive.',
      status: 'Approved',
      date: 'Dec 14, 2024'
    },
    {
      id: '4',
      product: 'Sony WH-1000XM4',
      customerName: 'Emily Davis',
      rating: 5,
      review: 'Amazing sound quality!',
      status: 'Approved',
      date: 'Dec 13, 2024'
    },
    {
      id: '5',
      product: 'Nike Air Max 270',
      customerName: 'David Wilson',
      rating: 4,
      review: 'Very comfortable shoes.',
      status: 'Pending',
      date: 'Dec 12, 2024'
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
  const totalPages = Math.ceil(reviews.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentReviews = reviews.slice(startIndex, endIndex)

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

  // Handle view review
  const handleViewReview = (reviewId: string) => {
    const review = reviews.find(r => r.id === reviewId)
    if (review) {
      alert(`Viewing review details:\nProduct: ${review.product}\nCustomer: ${review.customerName}\nRating: ${review.rating}/5 stars\nReview: "${review.review}"\nStatus: ${review.status}\nDate: ${review.date}`)
    }
  }

  // Handle filters
  const handleFilters = () => {
    // This would apply the selected filters
    console.log('Applying filters:', { allRatings, filterByStatus, filterByProduct, filterByDate })
  }

  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= rating ? 'text-orange-500 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    return status === 'Approved' 
      ? 'text-green-600 bg-green-100' 
      : 'text-orange-600 bg-orange-100'
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="min-h-screen bg-gray-50" ref={dropdownRef}>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-100 min-h-screen p-4">
              <div className="space-y-2">
                <Link href="/dashboard" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  <LayoutDashboard size={20} />
                  <span>Dashboard</span>
                </Link>
                <Link href="/dashboard/orders" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  <FileText size={20} />
                  <span>Orders</span>
                </Link>
                <Link href="/dashboard/products" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  <Package size={20} />
                  <span>Products</span>
                </Link>
                <Link href="/dashboard/customers" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  <Users size={20} />
                  <span>Customers</span>
                </Link>
                <Link href="/dashboard/reports" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  <BarChart3 size={20} />
                  <span>Reports</span>
                </Link>
                <Link href="/dashboard/brands" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  <Tag size={20} />
                  <span>Brands</span>
                </Link>
                <Link href="/dashboard/category" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  <FileText size={20} />
                  <span>Category</span>
                </Link>
                <Link href="/dashboard/tags" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  <Tag size={20} />
                  <span>Tags</span>
                </Link>
                <Link href="/dashboard/attributes" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  <Settings size={20} />
                  <span>Attributes</span>
                </Link>
                <Link href="/dashboard/reviews" className="flex items-center space-x-3 px-4 py-3 bg-orange-500 text-white rounded-lg">
                  <Star size={20} />
                  <span>Reviews</span>
                </Link>
                <Link href="/dashboard/settings" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  <Settings size={20} />
                  <span>Setting</span>
                </Link>
                <Link href="/dashboard/logout" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  <LogOut size={20} />
                  <span>Log-out</span>
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 pl-8 pt-8 pb-8">

              {/* Top Filter Bar */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <select 
                        value={allRatings}
                        onChange={(e) => setAllRatings(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">All Ratings</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select 
                        value={filterByStatus}
                        onChange={(e) => setFilterByStatus(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Filter By Status</option>
                        <option value="approved">Approved</option>
                        <option value="pending">Pending</option>
                        <option value="rejected">Rejected</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select 
                        value={filterByProduct}
                        onChange={(e) => setFilterByProduct(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Filter By Product</option>
                        <option value="iphone">iPhone</option>
                        <option value="macbook">MacBook</option>
                        <option value="samsung">Samsung</option>
                        <option value="sony">Sony</option>
                        <option value="nike">Nike</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select 
                        value={filterByDate}
                        onChange={(e) => setFilterByDate(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Filter By Date</option>
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="quarter">This Quarter</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  </div>
                  <button 
                    onClick={handleFilters}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    Filter
                  </button>
                </div>
              </div>

              {/* Reviews Table */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          PRODUCT
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          CUSTOMER NAME
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          RATING
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          REVIEW
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          STATUS
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          DATE
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentReviews.map((review, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{review.product}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{review.customerName}</div>
                          </td>
                          <td className="px-6 py-4">
                            {renderStars(review.rating)}
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500 max-w-xs truncate">{review.review}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(review.status)}`}>
                              {review.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </td>
                          <td className="px-6 py-4">
                            <button 
                              onClick={() => handleViewReview(review.id)}
                              className="p-1 text-orange-600 hover:bg-orange-50 rounded transition-colors"
                              title="View Review"
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