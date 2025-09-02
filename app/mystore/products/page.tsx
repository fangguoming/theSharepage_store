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
  Edit,
  ChevronLeft,
  ChevronRight,
  CheckSquare,
  Square
} from 'lucide-react'

export default function Products() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Product data matching the design
  const [products, setProducts] = useState([
    {
      id: '1',
      name: '2020 Apple MacBook Pro, M1 Chip (13-inch)',
      sku: 'MBP2020-M1-SG',
      stock: 'in-Stock',
      price: '$1,199',
      category: 'Laptops, Electronics',
      datePublished: 'Dec 15, 2024',
      selected: false
    },
    {
      id: '2',
      name: 'Samsung Galaxy S23 Ultra',
      sku: 'MBP2020-M1-SG',
      stock: 'in-Stock',
      price: '$1,199',
      category: 'Smartphones, Electronics',
      datePublished: 'Dec 15, 2024',
      selected: false
    },
    {
      id: '3',
      name: 'Sony WH-1000XM5 Wireless Headphones',
      sku: 'MBP2020-M1-SG',
      stock: 'in-Stock',
      price: '$1,199',
      category: 'Audio, Accessories',
      datePublished: 'Dec 15, 2024',
      selected: false
    },
    {
      id: '4',
      name: 'ASUS ROG Strix Gaming Laptop',
      sku: 'MBP2020-M1-SG',
      stock: 'in-Stock',
      price: '$1,199',
      category: 'Laptops, Gaming',
      datePublished: 'Dec 15, 2024',
      selected: false
    },
    {
      id: '5',
      name: 'Nike Air Max 270',
      sku: 'MBP2020-M1-SG',
      stock: 'in-Stock',
      price: '$1,199',
      category: 'Footwear, Sportswear',
      datePublished: 'Dec 15, 2024',
      selected: false
    },
    {
      id: '6',
      name: 'Canon EOS R50 Mirrorless Camera',
      sku: 'MBP2020-M1-SG',
      stock: 'Low Stock',
      price: '$1,299',
      category: 'Cameras, Photography',
      datePublished: 'Dec 15, 2024',
      selected: false
    }
  ])

  // Status filters matching the design
  const statusFilters = [
    { id: 'all', label: 'All', count: 5 },
    { id: 'published', label: 'Published', count: 5 },
    { id: 'drafts', label: 'Drafts', count: 3 },
    { id: 'pending', label: 'Pending', count: 5 },
    { id: 'private', label: 'Private', count: 6 },
    { id: 'sorting', label: 'Sorting', count: 0 }
  ]

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
  const totalPages = Math.ceil(products.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = products.slice(startIndex, endIndex)

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

  // Handle product selection
  const handleSelectProduct = (productId: string) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, selected: !product.selected }
        : product
    ))
  }

  const handleSelectAll = () => {
    const allSelected = currentProducts.every(product => product.selected)
    setProducts(products.map(product => ({ ...product, selected: !allSelected })))
  }

  // Handle edit product
  const handleEditProduct = (productId: string) => {
    const product = products.find(p => p.id === productId)
    if (product) {
      alert(`Editing product: ${product.name}\nThis would open an edit form or navigate to product edit page.`)
    }
  }

  const getStockColor = (stock: string) => {
    return stock === 'in-Stock' ? 'text-green-600' : 'text-orange-600'
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
                  
                  <Link href="/mystore/products" className="flex items-center space-x-3 px-4 py-3 bg-orange-100 text-orange-600 rounded-lg">
                    <Package size={20} />
                    <span className="font-medium">Products</span>
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

              {/* Top Filter Tabs */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <div className="flex space-x-1 border-b border-gray-200">
                  {statusFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedStatus(filter.id)}
                      className={`px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                        selectedStatus === filter.id
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {filter.label} ({filter.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Action and Filter Bar (Upper Section) */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Bulk Stories</option>
                        <option>Delete Selected</option>
                        <option>Publish Selected</option>
                        <option>Unpublish Selected</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                      Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Action and Filter Bar (Lower Section) */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>All SEO Scores</option>
                        <option>High SEO Score</option>
                        <option>Medium SEO Score</option>
                        <option>Low SEO Score</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>All Readability Scores</option>
                        <option>High Readability</option>
                        <option>Medium Readability</option>
                        <option>Low Readability</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Filters By Product Type</option>
                        <option>Physical Products</option>
                        <option>Digital Products</option>
                        <option>Services</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Filters By Stocks Status</option>
                        <option>In Stock</option>
                        <option>Low Stock</option>
                        <option>Out of Stock</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                    Filters
                  </button>
                </div>
              </div>

              {/* Products Table */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <button onClick={handleSelectAll} className="flex items-center">
                            {currentProducts.every(product => product.selected) ? (
                              <CheckSquare size={16} className="text-blue-600" />
                            ) : (
                              <Square size={16} className="text-gray-400" />
                            )}
                          </button>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          PRODUCT NAME
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          SKU
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          STOCK
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          PRICES
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          CATEGORY
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          DATE PUBLISHED
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentProducts.map((product, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <button onClick={() => handleSelectProduct(product.id)} className="flex items-center">
                              {product.selected ? (
                                <CheckSquare size={16} className="text-blue-600" />
                              ) : (
                                <Square size={16} className="text-gray-400" />
                              )}
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                              {product.name}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{product.sku}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`text-sm font-medium ${getStockColor(product.stock)}`}>
                              {product.stock}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{product.price}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500 max-w-xs truncate">{product.category}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{product.datePublished}</div>
                          </td>
                          <td className="px-6 py-4">
                            <button 
                              onClick={() => handleEditProduct(product.id)}
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