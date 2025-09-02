'use client'

import { useState } from 'react'
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
  FileText
} from 'lucide-react'

export default function Reviews() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedRating, setSelectedRating] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  const reviews = [
    {
      id: 1,
      product: 'Canon EOS 1500D DSLR Camera',
      customer: 'John Doe',
      rating: 5,
      comment: 'Excellent camera, great quality and fast delivery!',
      date: '2024-01-15',
      status: 'Published'
    },
    {
      id: 2,
      product: 'Wireless Gaming Headphones',
      customer: 'Jane Smith',
      rating: 4,
      comment: 'Good sound quality, comfortable to wear for long hours.',
      date: '2024-01-14',
      status: 'Published'
    },
    {
      id: 3,
      product: 'LED Smart TV 55"',
      customer: 'Mike Johnson',
      rating: 3,
      comment: 'Picture quality is decent but could be better.',
      date: '2024-01-13',
      status: 'Pending'
    },
    {
      id: 4,
      product: 'Bluetooth Earbuds',
      customer: 'Sarah Wilson',
      rating: 5,
      comment: 'Amazing sound quality and battery life!',
      date: '2024-01-12',
      status: 'Published'
    },
    {
      id: 5,
      product: 'Gaming Keyboard',
      customer: 'David Brown',
      rating: 4,
      comment: 'Great mechanical switches, very responsive.',
      date: '2024-01-11',
      status: 'Published'
    }
  ]

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
          />
        ))}
      </div>
    )
  }

  const handleViewReview = (review: any) => {
    alert(`Review Details:\nProduct: ${review.product}\nCustomer: ${review.customer}\nRating: ${review.rating}/5\nComment: ${review.comment}`)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 py-8">
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
                
                <Link href="/mystore/tags" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Tag size={20} />
                  <span>Tags</span>
                </Link>
                
                <Link href="/mystore/attributes" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Settings size={20} />
                  <span>Attributes</span>
                </Link>
                
                <Link href="/mystore/reviews" className="flex items-center space-x-3 px-4 py-3 bg-orange-100 text-orange-600 rounded-lg">
                  <Star size={20} />
                  <span className="font-medium">Reviews</span>
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
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Reviews</h1>
                <div className="flex items-center space-x-4">
                  <select 
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Reviews</option>
                    <option value="published">Published</option>
                    <option value="pending">Pending</option>
                    <option value="spam">Spam</option>
                  </select>
                  
                  <select 
                    value={selectedRating}
                    onChange={(e) => setSelectedRating(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Ratings</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Reviews Table */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {reviews.map((review) => (
                      <tr key={review.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {review.product}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {review.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {renderStars(review.rating)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                          {review.comment}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {review.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            review.status === 'Published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {review.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleViewReview(review)}
                            className="text-blue-600 hover:text-blue-900 mr-3"
                          >
                            View
                          </button>
                          <button className="text-green-600 hover:text-green-900 mr-3">
                            Approve
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing 1 to {reviews.length} of {reviews.length} results
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">
                    1
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    Next
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