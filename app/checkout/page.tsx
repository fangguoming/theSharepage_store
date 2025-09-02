'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Checkout() {
  const router = useRouter()
  const [selectedPayment, setSelectedPayment] = useState('card')
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false)

  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    country: '',
    region: '',
    city: '',
    zipCode: '',
    email: '',
    phoneNumber: ''
  })

  const [cardInfo, setCardInfo] = useState({
    nameOnCard: '',
    cardNumber: '',
    expireMonth: '',
    expireYear: '',
    cvc: ''
  })

  const [orderNotes, setOrderNotes] = useState('')

  const orderItems = [
    {
      id: 1,
      name: "Canon EOS 1500D DSLR Camera Body+ 18-..",
      image: "/images/product_retails/canon.png",
      quantity: 1,
      price: 70
    },
    {
      id: 2,
      name: "Wired Over-Ear Gaming Headphones with U...",
      image: "/images/product_retails/headphone.png",
      quantity: 3,
      price: 250
    }
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + (item.quantity * item.price), 0)
  const shipping = 0 // Free shipping
  const discount = 24
  const tax = 61.99
  const total = subtotal + shipping - discount + tax

  const handlePlaceOrder = () => {
    // Redirect to success page
    router.push('/checkout-success')
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Check-Out</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Billing, Payment, Additional Info */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Billing Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Billing Information</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input
                      type="text"
                      value={billingInfo.firstName}
                      onChange={(e) => setBillingInfo({...billingInfo, firstName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                    <input
                      type="text"
                      value={billingInfo.lastName}
                      onChange={(e) => setBillingInfo({...billingInfo, lastName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name (Optional)</label>
                  <input
                    type="text"
                    value={billingInfo.companyName}
                    onChange={(e) => setBillingInfo({...billingInfo, companyName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    value={billingInfo.address}
                    onChange={(e) => setBillingInfo({...billingInfo, address: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <select
                      value={billingInfo.country}
                      onChange={(e) => setBillingInfo({...billingInfo, country: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select...</option>
                      <option value="usa">USA</option>
                      <option value="uk">UK</option>
                      <option value="canada">Canada</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Region/State</label>
                    <select
                      value={billingInfo.region}
                      onChange={(e) => setBillingInfo({...billingInfo, region: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select...</option>
                      <option value="california">California</option>
                      <option value="newyork">New York</option>
                      <option value="texas">Texas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <select
                      value={billingInfo.city}
                      onChange={(e) => setBillingInfo({...billingInfo, city: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select...</option>
                      <option value="losangeles">Los Angeles</option>
                      <option value="newyork">New York</option>
                      <option value="chicago">Chicago</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                    <input
                      type="text"
                      value={billingInfo.zipCode}
                      onChange={(e) => setBillingInfo({...billingInfo, zipCode: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={billingInfo.email}
                      onChange={(e) => setBillingInfo({...billingInfo, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={billingInfo.phoneNumber}
                      onChange={(e) => setBillingInfo({...billingInfo, phoneNumber: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="shipToDifferent"
                    checked={shipToDifferentAddress}
                    onChange={(e) => setShipToDifferentAddress(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="shipToDifferent" className="text-sm text-gray-700">
                    Ship into different address
                  </label>
                </div>
              </div>
            </div>

            {/* Payment Option */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Payment Option</h2>
              
              <div className="grid grid-cols-5 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <img src="/images/payments/CurrencyDollar.svg" alt="Cash on Delivery" className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Cash on Delivery</p>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={selectedPayment === 'cod'}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                  />
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <img src="/images/payments/vemo.svg" alt="Venmo" className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Venmo</p>
                  <input
                    type="radio"
                    name="payment"
                    value="venmo"
                    checked={selectedPayment === 'venmo'}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                  />
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <img src="/images/payments/paypal.svg" alt="PayPal" className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Paypal</p>
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={selectedPayment === 'paypal'}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                  />
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <img src="/images/payments/amazon-icon-1 1.svg" alt="Amazon Pay" className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Amazon Pay</p>
                  <input
                    type="radio"
                    name="payment"
                    value="amazon"
                    checked={selectedPayment === 'amazon'}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                  />
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <img src="/images/payments/CreditCard.svg" alt="Credit Card" className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Debit/Credit Card</p>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={selectedPayment === 'card'}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Card Details */}
              {selectedPayment === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                    <input
                      type="text"
                      value={cardInfo.nameOnCard}
                      onChange={(e) => setCardInfo({...cardInfo, nameOnCard: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      value={cardInfo.cardNumber}
                      onChange={(e) => setCardInfo({...cardInfo, cardNumber: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expire Date</label>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={cardInfo.expireMonth}
                          onChange={(e) => setCardInfo({...cardInfo, expireMonth: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="DD"
                        />
                        <input
                          type="text"
                          value={cardInfo.expireYear}
                          onChange={(e) => setCardInfo({...cardInfo, expireYear: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="YY"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                      <input
                        type="text"
                        value={cardInfo.cvc}
                        onChange={(e) => setCardInfo({...cardInfo, cvc: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Additional Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Additional Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order Notes (Optional)</label>
                <textarea
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  rows={4}
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
              <h2 className="text-[18px] font-medium text-[#191C1F] mb-6">Order Summary</h2>
              
              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">{item.name}</h4>
                      <p className="text-sm text-[#5F6C72]">{item.quantity} x <span className="text-[#2DA5F3] font-semibold">${item.price}</span></p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Sub-total:</span>
                  <span className="font-medium text-gray-800">${subtotal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Shipping:</span>
                  <span className="font-medium text-gray-800">Free</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Discount:</span>
                  <span className="font-medium text-gray-800">-${discount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Tax:</span>
                  <span className="font-medium text-gray-800">${tax}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">Total:</span>
                    <span className="text-lg font-bold text-gray-800">${total.toFixed(2)} USD</span>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-orange-500 text-white py-3 px-4 rounded-full font-bold leading-[56px] hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>PLACE ORDER</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 