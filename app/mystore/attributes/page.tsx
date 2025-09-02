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
  FileText,
  Plus
} from 'lucide-react'

export default function Attributes() {
  const [selectedSort, setSelectedSort] = useState('name')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newAttribute, setNewAttribute] = useState({ name: '', type: '', required: false })

  const attributes = [
    {
      id: 1,
      name: 'Color',
      type: 'Dropdown',
      required: true,
      values: 12,
      products: 45
    },
    {
      id: 2,
      name: 'Size',
      type: 'Radio',
      required: true,
      values: 8,
      products: 32
    },
    {
      id: 3,
      name: 'Material',
      type: 'Text',
      required: false,
      values: 15,
      products: 28
    },
    {
      id: 4,
      name: 'Brand',
      type: 'Dropdown',
      required: false,
      values: 25,
      products: 67
    },
    {
      id: 5,
      name: 'Weight',
      type: 'Number',
      required: false,
      values: 0,
      products: 12
    }
  ]

  const handleViewAttribute = (attribute: any) => {
    alert(`Attribute Details:\nName: ${attribute.name}\nType: ${attribute.type}\nRequired: ${attribute.required ? 'Yes' : 'No'}\nValues: ${attribute.values}\nProducts: ${attribute.products}`)
  }

  const handleEditAttribute = (attribute: any) => {
    alert(`Edit Attribute: ${attribute.name}`)
  }

  const handleAddAttribute = () => {
    if (newAttribute.name && newAttribute.type) {
      alert(`New Attribute Added:\nName: ${newAttribute.name}\nType: ${newAttribute.type}\nRequired: ${newAttribute.required ? 'Yes' : 'No'}`)
      setNewAttribute({ name: '', type: '', required: false })
      setShowAddForm(false)
    }
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
                
                <Link href="/mystore/attributes" className="flex items-center space-x-3 px-4 py-3 bg-orange-100 text-orange-600 rounded-lg">
                  <FileText size={20} />
                  <span className="font-medium">Attributes</span>
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
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Attributes</h1>
                <div className="flex items-center space-x-4">
                  <select 
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="type">Sort by Type</option>
                    <option value="required">Sort by Required</option>
                  </select>
                  
                  <button 
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm flex items-center space-x-2"
                  >
                    <Plus size={16} />
                    <span>Add New Attribute</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Add New Attribute Form */}
            {showAddForm && (
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Attribute</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Attribute Name</label>
                    <input
                      type="text"
                      value={newAttribute.name}
                      onChange={(e) => setNewAttribute({...newAttribute, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter attribute name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                    <select
                      value={newAttribute.type}
                      onChange={(e) => setNewAttribute({...newAttribute, type: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select type</option>
                      <option value="Text">Text</option>
                      <option value="Number">Number</option>
                      <option value="Dropdown">Dropdown</option>
                      <option value="Radio">Radio</option>
                      <option value="Checkbox">Checkbox</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={newAttribute.required}
                        onChange={(e) => setNewAttribute({...newAttribute, required: e.target.checked})}
                        className="mr-2"
                      />
                      <span className="text-sm font-medium text-gray-700">Required</span>
                    </label>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 mt-4">
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddAttribute}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Add Attribute
                  </button>
                </div>
              </div>
            )}

            {/* Attributes Table */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attribute Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Values</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {attributes.map((attribute) => (
                      <tr key={attribute.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {attribute.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {attribute.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            attribute.required 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {attribute.required ? 'Yes' : 'No'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {attribute.values}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {attribute.products}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleViewAttribute(attribute)}
                            className="text-blue-600 hover:text-blue-900 mr-3"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleEditAttribute(attribute)}
                            className="text-green-600 hover:text-green-900"
                          >
                            Edit
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
                  Showing 1 to {attributes.length} of {attributes.length} results
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