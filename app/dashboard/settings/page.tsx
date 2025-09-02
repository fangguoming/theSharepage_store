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
  Eye,
  EyeOff
} from 'lucide-react'

export default function SettingsPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Account Setting form data
  const [accountData, setAccountData] = useState({
    displayName: 'Kevin',
    fullName: 'Kevin Gilbert',
    secondaryEmail: 'kevin12345@gmail.com',
    country: 'Bangladesh',
    username: 'Display name',
    email: 'Kevin.gilbert@gmail.com',
    phoneNumber: '+1-202-555-0118',
    states: 'Dhaka',
    zipCode: '1207'
  })

  // Billing Address form data
  const [billingData, setBillingData] = useState({
    firstName: 'Kevin',
    lastName: 'Gilbert',
    companyName: '',
    address: 'Road No. 13/x, House no. 1320/C, Flat No. 50',
    country: 'Bangladesh',
    region: '',
    city: 'Dhaka',
    zipCode: '1207',
    email: 'kevin12345@gmail.com',
    phoneNumber: '+1-202-555-0118'
  })

  // Shipping Address form data (same as billing initially)
  const [shippingData, setShippingData] = useState({
    firstName: 'Kevin',
    lastName: 'Gilbert',
    companyName: '',
    address: 'Road No. 13/x, House no. 1320/C, Flat No. 50',
    country: 'Bangladesh',
    region: '',
    city: 'Dhaka',
    zipCode: '1207',
    email: 'kevin12345@gmail.com',
    phoneNumber: '+1-202-555-0118'
  })

  // Password form data
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

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

  // Handle form submissions
  const handleAccountSave = () => {
    alert('Account settings saved successfully!')
  }

  const handleBillingSave = () => {
    alert('Billing address saved successfully!')
  }

  const handleShippingSave = () => {
    alert('Shipping address saved successfully!')
  }

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New password and confirm password do not match!')
      return
    }
    if (passwordData.newPassword.length < 8) {
      alert('New password must be at least 8 characters long!')
      return
    }
    alert('Password changed successfully!')
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
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
                <Link href="/dashboard/reviews" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                  <Star size={20} />
                  <span>Reviews</span>
                </Link>
                <Link href="/dashboard/settings" className="flex items-center space-x-3 px-4 py-3 bg-orange-500 text-white rounded-lg">
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

              {/* ACCOUNT SETTING Section */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-6">ACCOUNT SETTING</h2>
                
                <div className="flex items-start space-x-6 mb-6">
                  {/* Profile Picture */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <img 
                        src="/images/Kevin.png" 
                        alt="Profile Picture" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Display name</label>
                      <input
                        type="text"
                        value={accountData.displayName}
                        onChange={(e) => setAccountData({...accountData, displayName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                      <input
                        type="text"
                        value={accountData.username}
                        onChange={(e) => setAccountData({...accountData, username: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={accountData.fullName}
                        onChange={(e) => setAccountData({...accountData, fullName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={accountData.email}
                        onChange={(e) => setAccountData({...accountData, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Email</label>
                      <input
                        type="email"
                        value={accountData.secondaryEmail}
                        onChange={(e) => setAccountData({...accountData, secondaryEmail: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={accountData.phoneNumber}
                        onChange={(e) => setAccountData({...accountData, phoneNumber: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country/Region</label>
                      <select
                        value={accountData.country}
                        onChange={(e) => setAccountData({...accountData, country: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">States</label>
                      <select
                        value={accountData.states}
                        onChange={(e) => setAccountData({...accountData, states: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Rajshahi">Rajshahi</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                      <input
                        type="text"
                        value={accountData.zipCode}
                        onChange={(e) => setAccountData({...accountData, zipCode: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleAccountSave}
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  SAVE CHANGES
                </button>
              </div>

              {/* BILLING ADDRESS and SHIPPING ADDRESS Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* BILLING ADDRESS Section */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-6">BILLING ADDRESS</h2>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          value={billingData.firstName}
                          onChange={(e) => setBillingData({...billingData, firstName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          value={billingData.lastName}
                          onChange={(e) => setBillingData({...billingData, lastName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name (Optional)</label>
                      <input
                        type="text"
                        value={billingData.companyName}
                        onChange={(e) => setBillingData({...billingData, companyName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input
                        type="text"
                        value={billingData.address}
                        onChange={(e) => setBillingData({...billingData, address: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <select
                          value={billingData.country}
                          onChange={(e) => setBillingData({...billingData, country: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="USA">USA</option>
                          <option value="UK">UK</option>
                          <option value="Canada">Canada</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Region/State</label>
                        <select
                          value={billingData.region}
                          onChange={(e) => setBillingData({...billingData, region: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select...</option>
                          <option value="Dhaka">Dhaka</option>
                          <option value="Chittagong">Chittagong</option>
                          <option value="Sylhet">Sylhet</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <select
                          value={billingData.city}
                          onChange={(e) => setBillingData({...billingData, city: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Dhaka">Dhaka</option>
                          <option value="Chittagong">Chittagong</option>
                          <option value="Sylhet">Sylhet</option>
                          <option value="Rajshahi">Rajshahi</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                        <input
                          type="text"
                          value={billingData.zipCode}
                          onChange={(e) => setBillingData({...billingData, zipCode: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          value={billingData.email}
                          onChange={(e) => setBillingData({...billingData, email: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={billingData.phoneNumber}
                          onChange={(e) => setBillingData({...billingData, phoneNumber: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleBillingSave}
                    className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors text-sm font-medium"
                  >
                    SAVE CHANGES
                  </button>
                </div>

                {/* SHIPPING ADDRESS Section */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-lg font-bold text-gray-800 mb-6">SHIPPING ADDRESS</h2>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          value={shippingData.firstName}
                          onChange={(e) => setShippingData({...shippingData, firstName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          value={shippingData.lastName}
                          onChange={(e) => setShippingData({...shippingData, lastName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name (Optional)</label>
                      <input
                        type="text"
                        value={shippingData.companyName}
                        onChange={(e) => setShippingData({...shippingData, companyName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input
                        type="text"
                        value={shippingData.address}
                        onChange={(e) => setShippingData({...shippingData, address: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <select
                          value={shippingData.country}
                          onChange={(e) => setShippingData({...shippingData, country: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="USA">USA</option>
                          <option value="UK">UK</option>
                          <option value="Canada">Canada</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Region/State</label>
                        <select
                          value={shippingData.region}
                          onChange={(e) => setShippingData({...shippingData, region: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select...</option>
                          <option value="Dhaka">Dhaka</option>
                          <option value="Chittagong">Chittagong</option>
                          <option value="Sylhet">Sylhet</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <select
                          value={shippingData.city}
                          onChange={(e) => setShippingData({...shippingData, city: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="Dhaka">Dhaka</option>
                          <option value="Chittagong">Chittagong</option>
                          <option value="Sylhet">Sylhet</option>
                          <option value="Rajshahi">Rajshahi</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                        <input
                          type="text"
                          value={shippingData.zipCode}
                          onChange={(e) => setShippingData({...shippingData, zipCode: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          value={shippingData.email}
                          onChange={(e) => setShippingData({...shippingData, email: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={shippingData.phoneNumber}
                          onChange={(e) => setShippingData({...shippingData, phoneNumber: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleShippingSave}
                    className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors text-sm font-medium"
                  >
                    SAVE CHANGES
                  </button>
                </div>
              </div>

              {/* CHANGE PASSWORD Section */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-6">CHANGE PASSWORD</h2>
                
                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <div className="relative">
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showCurrentPassword ? <EyeOff size={16} className="text-gray-400" /> : <Eye size={16} className="text-gray-400" />}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                        placeholder="8+ characters"
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showNewPassword ? <EyeOff size={16} className="text-gray-400" /> : <Eye size={16} className="text-gray-400" />}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? <EyeOff size={16} className="text-gray-400" /> : <Eye size={16} className="text-gray-400" />}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePasswordChange}
                  className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors text-sm font-medium"
                >
                  CHANGE PASSWORD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 