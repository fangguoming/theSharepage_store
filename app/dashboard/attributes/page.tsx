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
  Edit,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function Attributes() {
  const [sortByColor, setSortByColor] = useState('')
  const [sortBySize, setSortBySize] = useState('')
  const [sortByMaterial, setSortByMaterial] = useState('')
  const [attributeName, setAttributeName] = useState('')
  const [attributeValues, setAttributeValues] = useState('')
  const [attributeType, setAttributeType] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Attributes data matching the design
  const [attributes, setAttributes] = useState([
    {
      id: '1',
      name: 'Color',
      values: 'Red, Blue, Green'
    },
    {
      id: '2',
      name: 'Size',
      values: 'S, M, L, XL'
    },
    {
      id: '3',
      name: 'Material',
      values: 'Cotton, Wool'
    },
    {
      id: '4',
      name: 'Weight',
      values: '100g, 200g, 300g'
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
  const totalPages = Math.ceil(attributes.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentAttributes = attributes.slice(startIndex, endIndex)

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

  // Handle attribute actions
  const handleViewAttribute = (attributeId: string) => {
    const attribute = attributes.find(a => a.id === attributeId)
    if (attribute) {
      alert(`Viewing attribute details:\nName: ${attribute.name}\nValues: ${attribute.values}`)
    }
  }

  const handleEditAttribute = (attributeId: string) => {
    const attribute = attributes.find(a => a.id === attributeId)
    if (attribute) {
      alert(`Editing attribute: ${attribute.name}\nValues: ${attribute.values}\nThis would open an edit form.`)
    }
  }

  // Handle add new attribute
  const handleAddAttribute = () => {
    if (attributeName.trim() && attributeValues.trim()) {
      const newAttribute = {
        id: Date.now().toString(),
        name: attributeName,
        values: attributeValues
      }
      setAttributes([...attributes, newAttribute])
      setAttributeName('')
      setAttributeValues('')
      setAttributeType('')
      alert(`Attribute "${attributeName}" has been added successfully!`)
    } else {
      alert('Please fill in both attribute name and values.')
    }
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
                <Link href="/dashboard/attributes" className="flex items-center space-x-3 px-4 py-3 bg-orange-500 text-white rounded-lg">
                  <Settings size={20} />
                  <span>Attributes</span>
                </Link>
                <Link href="/dashboard/reviews" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
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
            <div className="flex-1 pl-8 pt-8 pb-8 space-y-6">

              {/* Top Section - Attribute List and Sorting */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-800">Attributes</h2>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Sort Products By:</span>
                    <div className="flex items-center space-x-2">
                      <select 
                        value={sortByColor}
                        onChange={(e) => setSortByColor(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Color</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select 
                        value={sortBySize}
                        onChange={(e) => setSortBySize(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Size</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select 
                        value={sortByMaterial}
                        onChange={(e) => setSortByMaterial(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Material</option>
                        <option value="cotton">Cotton</option>
                        <option value="wool">Wool</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  </div>
                </div>

                {/* Attributes Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ATTRIBUTE NAME
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          VALUES
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentAttributes.map((attribute, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{attribute.name}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{attribute.values}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <button 
                                onClick={() => handleViewAttribute(attribute.id)}
                                className="p-1 text-orange-600 hover:bg-orange-50 rounded transition-colors"
                                title="View"
                              >
                                <Eye size={16} />
                              </button>
                              <button 
                                onClick={() => handleEditAttribute(attribute.id)}
                                className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                title="Edit"
                              >
                                <Edit size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom Section - Add New Attribute */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Add New Attribute</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Attribute Name"
                        value={attributeName}
                        onChange={(e) => setAttributeName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Comma-separated list of values, e.g., Red, Blue, Green"
                        value={attributeValues}
                        onChange={(e) => setAttributeValues(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <select 
                        value={attributeType}
                        onChange={(e) => setAttributeType(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Attribute Type</option>
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="select">Select</option>
                        <option value="multiselect">Multi-Select</option>
                      </select>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  </div>
                  <div>
                    <button 
                      onClick={handleAddAttribute}
                      className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      Add Attribute
                    </button>
                  </div>
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