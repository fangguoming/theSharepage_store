import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ArrowRight, Star, TrendingUp, Users, Globe, Shield, Zap } from 'lucide-react'

export default function MarketplacePage() {
  const marketplaceProducts = [
    {
      id: 1,
      name: "Premium Solar Panel Kit - 5kW System",
      price: "$12,500",
      originalPrice: "$15,000",
      discount: "17% OFF",
      image: "/images/business/solar_panel.png",
      rating: 4.8,
      reviews: 234,
      category: "Renewable Energy",
      features: ["5kW Output", "25-Year Warranty", "Installation Included"]
    },
    {
      id: 2,
      name: "Smart Home Security Bundle",
      price: "$899",
      originalPrice: "$1,199",
      discount: "25% OFF",
      image: "/images/business/smart_TV.png",
      rating: 4.6,
      reviews: 189,
      category: "Security",
      features: ["4K Cameras", "24/7 Monitoring", "Mobile App"]
    },
    {
      id: 3,
      name: "Commercial Coffee Machine",
      price: "$2,400",
      originalPrice: "$3,200",
      discount: "25% OFF",
      image: "/images/business/kitchen_blender.png",
      rating: 4.7,
      reviews: 156,
      category: "Food & Beverage",
      features: ["50 Cups/Hour", "Auto Cleaning", "Warranty"]
    },
    {
      id: 4,
      name: "Professional Audio System",
      price: "$1,800",
      originalPrice: "$2,400",
      discount: "25% OFF",
      image: "/images/business/earphone.png",
      rating: 4.5,
      reviews: 278,
      category: "Audio",
      features: ["500W Output", "Bluetooth", "Portable"]
    },
    {
      id: 5,
      name: "Ergonomic Office Furniture Set",
      price: "$1,200",
      originalPrice: "$1,600",
      discount: "25% OFF",
      image: "/images/business/chair.png",
      rating: 4.9,
      reviews: 342,
      category: "Office",
      features: ["Adjustable", "Memory Foam", "5-Year Warranty"]
    },
    {
      id: 6,
      name: "Industrial LED Lighting",
      price: "$650",
      originalPrice: "$850",
      discount: "24% OFF",
      image: "/images/business/clock.png",
      rating: 4.4,
      reviews: 198,
      category: "Lighting",
      features: ["10,000 Lumens", "Motion Sensor", "Durable"]
    }
  ]

  const categories = ['All Categories', 'Renewable Energy', 'Security', 'Food & Beverage', 'Audio', 'Office', 'Lighting']

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Connect with suppliers and buyers worldwide"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Transactions",
      description: "Protected payments and verified suppliers"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Insights",
      description: "Real-time data and trend analysis"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Processing",
      description: "Quick order processing and delivery"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Business Marketplace</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your one-stop destination for business solutions, equipment, and services. Connect, trade, and grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button key={category} className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all">
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Marketplace?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-orange-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Business Solutions</h2>
              <p className="text-gray-600">Premium equipment and services for your business needs</p>
            </div>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2">
              View All
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketplaceProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Product Image */}
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                  {product.discount && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.discount}
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">
                        {product.originalPrice}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-orange-600">
                      {product.price}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {product.features.map((feature, index) => (
                        <div key={index} className="text-xs text-gray-700 flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Business Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-3">Manufacturing</h3>
              <p className="text-gray-600 mb-4">Industrial equipment, machinery, and manufacturing solutions for production facilities.</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Explore
              </button>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3">Office & Retail</h3>
              <p className="text-gray-600 mb-4">Furniture, equipment, and supplies for modern office and retail environments.</p>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Explore
              </button>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-3">Food & Hospitality</h3>
              <p className="text-gray-600 mb-4">Commercial kitchen equipment, restaurant supplies, and hospitality solutions.</p>
              <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust our marketplace for their equipment and service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Selling
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Browse Solutions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 