"use client"

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ArrowRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function RetailPage() {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sliderValues, setSliderValues] = useState({ left: 0, right: 60 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragHandle, setDragHandle] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Calculate price values based on slider positions
  const calculatePriceFromSlider = (percentage: number) => {
    return Math.round((percentage / 100) * priceRange.max);
  };

  // Update price range when slider values change
  useEffect(() => {
    const minPrice = calculatePriceFromSlider(sliderValues.left);
    const maxPrice = calculatePriceFromSlider(sliderValues.right);
    setPriceRange({ min: minPrice, max: maxPrice });
  }, [sliderValues]);

  const handleMouseDown = (handle: string) => {
    setIsDragging(true);
    setDragHandle(handle);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    if (dragHandle === 'left') {
      const newLeft = Math.min(percentage, sliderValues.right - 5);
      setSliderValues(prev => ({ ...prev, left: newLeft }));
    } else if (dragHandle === 'right') {
      const newRight = Math.max(percentage, sliderValues.left + 5);
      setSliderValues(prev => ({ ...prev, right: newRight }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragHandle(null);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragHandle, sliderValues]);

  const retailProducts = [
    {
      id: 1,
      name: "Apple iPhone 15 Pro Max - 256GB",
      price: "$1,199",
      originalPrice: "$1,399",
      discount: "14% OFF",
      image: "/images/retail/mobile_LTE.png",
      rating: 4.8,
      reviews: 1247,
      hot: true
    },
    {
      id: 2,
      name: "Samsung 65-inch QLED 4K Smart TV",
      price: "$899",
      originalPrice: "$1,299",
      discount: "31% OFF",
      image: "/images/retail/LED_smart.png",
      rating: 4.6,
      reviews: 892,
      hot: false
    },
    {
      id: 3,
      name: "MacBook Air M2 - 13.6-inch Display",
      price: "$1,099",
      originalPrice: "$1,299",
      discount: "15% OFF",
      image: "/images/retail/mobile_Dell.png",
      rating: 4.9,
      reviews: 1563,
      hot: true
    },
    {
      id: 4,
      name: "Sony WH-1000XM5 Wireless Headphones",
      price: "$349",
      originalPrice: "$399",
      discount: "13% OFF",
      image: "/images/retail/sport_earbuds.png",
      rating: 4.7,
      reviews: 2341,
      hot: false
    },
    {
      id: 5,
      name: "Nintendo Switch OLED Model",
      price: "$299",
      originalPrice: "$349",
      discount: "14% OFF",
      image: "/images/retail/xbox_series.png",
      rating: 4.8,
      reviews: 1876,
      hot: true
    },
    {
      id: 6,
      name: "DJI Mini 3 Pro Drone",
      price: "$759",
      originalPrice: "$909",
      discount: "17% OFF",
      image: "/images/retail/sony_DSCHX8.png",
      rating: 4.5,
      reviews: 634,
      hot: false
    },
    {
      id: 7,
      name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
      price: "$89",
      originalPrice: "$119",
      discount: "25% OFF",
      image: "/images/retail/wshing_machine.png",
      rating: 4.4,
      reviews: 3421,
      hot: false
    },
    {
      id: 8,
      name: "JBL Charge 5 Portable Bluetooth Speaker",
      price: "$179",
      originalPrice: "$199",
      discount: "10% OFF",
      image: "/images/retail/JBL-filp.png",
      rating: 4.6,
      reviews: 987,
      hot: false
    }
  ]

  const categories = ['All Products', 'Electronics', 'Gaming', 'Audio', 'Home & Kitchen', 'Cameras']

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
            {/* Left Banner - Dell Optiplex (Different from homepage) */}
            <div className="lg:col-span-2 relative overflow-hidden flex items-center justify-between max-w-[887px] h-[550px] bg-gradient-to-b from-[#FF7979] to-[#C60909] py-14 px-14 rounded-md">
              <div className="flex-1 text-left">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-0.5 bg-white mr-2"></div>
                    <h3 className="text-white font-semibold font-['Public_Sans'] text-sm">
                      THE BEST PLACE TO PLAY
                    </h3>
                  </div>
                  <h2 className="mb-4 text-white font-['Poppins'] font-semibold text-4xl leading-[56px]">
                    Dell Optiplex All-in-One Computer Monitor
                  </h2>
                  <p className="mb-6 max-w-md text-white text-lg leading-6">
                    Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
                  </p>
                  <button className="text-white border border-white rounded-lg transition-colors flex items-center bg-transparent px-8 gap-3 font-bold text-base leading-[56px] tracking-[1.2%]">
                    <span>SHOP NOW</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
                
                {/* Carousel Dots */}
                <div className="flex space-x-2 mt-8">
                  {[1, 2, 3].map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === 0 ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="relative flex-shrink-0 w-[347px] h-[408px]">
                <img src="/images/monitor.png" alt="Dell Optiplex Monitor" className="w-full h-full object-contain mb-0" />
                <div className="absolute top-11 left-[267px] text-white rounded-sm flex items-center justify-center w-[102px] h-10 py-2 px-4 gap-2.5 bg-[#EFD33D] font-semibold text-base leading-6 text-[#141414]">
                  29% OFF
                </div>
              </div>
            </div>

            {/* Right Column - Two Smaller Banners (Same as homepage) */}
            <div className="space-y-6">
              {/* Top Right Banner - Google Pixel (Same as homepage) */}
              <div className="relative overflow-hidden flex items-center justify-between max-w-[424px] h-[248px] bg-gradient-to-b from-[#0F8F46] to-[#00461E] rounded-md">
                {/* Left Section - Content */}
                <div className="flex-1 flex flex-col justify-center p-6">
                  <div className="absolute flex items-center justify-center w-[102px] h-10 top-11 left-[267px] rounded-sm py-2 px-4 gap-2.5 bg-[#EFD33D] text-[#141414] font-semibold text-base leading-6">
                    29% OFF
                  </div>
                  <h3 className="text-sm font-medium text-yellow-200 mb-1">Summer Sales</h3>
                  <h2 className="text-2xl font-bold text-white mb-3">New Google Pixel 6 Pro</h2>
                  <button className="flex items-center transition-colors bg-white w-[156px] h-12 rounded-sm px-6 gap-2 text-[#0F8F46] font-['Public_Sans'] font-bold text-sm leading-12 tracking-[1.2%]">
                    <span>SHOP NOW</span>
                    <ArrowRight size={16} />
                  </button>
                  
                  {/* Carousel Dots */}
                  <div className="flex space-x-2 mt-4">
                    {[1, 2, 3].map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === 0 ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Right Section - Image */}
                <div className="flex-shrink-0 relative w-[200px] h-full">
                  <img 
                    src="/images/google_pixel.png" 
                    alt="Google Pixel 6 Pro" 
                    className="absolute bottom-0 right-0 object-contain max-w-[180px] max-h-[200px]"
                  />
                </div>
              </div>

              {/* Bottom Right Banner - Xiaomi Earbuds (Same as homepage) */}
              <div className="relative overflow-hidden flex items-center justify-between max-w-[424px] h-[278px] bg-[#FFE7D6] gap-5 pt-10 pr-10 pb-10 pl-8 rounded-md">
                {/* Left Section - Product Image */}
                <div className="flex-shrink-0">
                  <img 
                    src="/images/xiaomi.png" 
                    alt="Xiaomi Earbuds" 
                    className="object-contain w-40 h-40"
                  />
                </div>
                
                {/* Right Section - Content */}
                <div className="flex-1">
                  <h2 className="mb-2 font-['Poppins'] font-semibold text-2xl leading-8 text-[#191C1F]">
                    Xiaomi FlipBuds Pro
                  </h2>
                  <p className="mb-4 text-[#2DA5F3] font-semibold text-lg leading-6">
                    $299 USD
                  </p>
                  <button className="flex items-center transition-colors text-white w-[155px] h-12 rounded-sm px-6 gap-2 bg-[#0F8F46] font-bold text-sm leading-12 tracking-[1.2%]">
                    <span>SHOP NOW</span>
                    <ArrowRight size={16} />
                  </button>
                  
                  {/* Carousel Dots */}
                  <div className="flex space-x-2 mt-4">
                    {[1, 2, 3].map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === 0 ? 'bg-[#FA8232]' : 'bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Listing Section */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-lg p-6 space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">CATEGORIES</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Electronics Devices", selected: true },
                      { name: "Power Banks & Station", selected: false },
                      { name: "Smart Watches", selected: false },
                      { name: "SmartPhone", selected: false },
                      { name: "Headphone", selected: false },
                      { name: "Earbud", selected: false }
                    ].map((category, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input 
                          type="radio" 
                          name="category" 
                          checked={category.selected}
                          className="text-blue-600"
                        />
                        <span className="text-gray-700">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Store Reviews */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">STORE REVIEWS</h3>
                  <div className="space-y-3">
                    {[
                      { rating: "4.0 & up", selected: false },
                      { rating: "4.5 & up", selected: false },
                      { rating: "5.0", selected: false }
                    ].map((review, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input 
                          type="radio" 
                          name="review" 
                          checked={review.selected}
                          className="text-blue-600"
                        />
                        <span className="text-gray-700">{review.rating}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
                  <div className="space-y-4">
                    {/* Price Slider */}
                    <div className="relative" ref={sliderRef}>
                      <div className="w-full h-2 bg-gray-200 rounded-full relative">
                        <div 
                          className="h-2 bg-orange-500 rounded-full absolute transition-all duration-200" 
                          style={{ 
                            left: `${sliderValues.left}%`,
                            width: `${sliderValues.right - sliderValues.left}%`
                          }}
                        ></div>
                      </div>
                      <div 
                        className="absolute top-0 w-4 h-4 bg-orange-500 rounded-full -mt-1 cursor-pointer hover:scale-110 transition-transform duration-200 z-10" 
                        style={{ left: `${sliderValues.left}%` }}
                        onMouseDown={() => handleMouseDown('left')}
                      ></div>
                      <div 
                        className="absolute top-0 w-4 h-4 bg-orange-500 rounded-full -mt-1 cursor-pointer hover:scale-110 transition-transform duration-200 z-10" 
                        style={{ left: `${sliderValues.right}%` }}
                        onMouseDown={() => handleMouseDown('right')}
                      ></div>
                    </div>
                    
                    {/* Min/Max Price Input Fields */}
                    <div className="flex gap-2">
                      <input 
                        type="number" 
                        placeholder="Min price" 
                        value={priceRange.min}
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 0;
                          const percentage = (value / 1000) * 100;
                          setSliderValues(prev => ({ ...prev, left: Math.min(percentage, prev.right - 5) }));
                        }}
                        className="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
                      />
                      <input 
                        type="number" 
                        placeholder="Max price" 
                        value={priceRange.max}
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 0;
                          const percentage = (value / 1000) * 100;
                          setSliderValues(prev => ({ ...prev, right: Math.max(percentage, prev.left + 5) }));
                        }}
                        className="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
                      />
                    </div>
                    
                    {/* Minimum Order Input */}
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-700 text-sm">Min. order</span>
                      <input 
                        type="number" 
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
                      />
                      <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        OK
                      </button>
                    </div>
                    
                    {/* Predefined Price Range Radio Buttons */}
                    <div className="space-y-2">
                      {[
                        "All Price", "Under $20", "$25 to $100", "$100 to $300", 
                        "$300 to $500", "$500 to $1,000", "$1,000 to $10,000"
                      ].map((range, index) => (
                        <label key={index} className="flex items-center space-x-3 cursor-pointer">
                          <input 
                            type="radio" 
                            name="price" 
                            checked={index === 4} // "$300 to $500" is selected
                            className="text-orange-500 border-gray-300 focus:ring-orange-500"
                          />
                          <span className="text-gray-700 text-sm">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Popular Brands */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Popular Brands</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Apple", checked: true },
                      { name: "Google", checked: true },
                      { name: "Microsoft", checked: false },
                      { name: "Samsung", checked: true },
                      { name: "Dell", checked: false },
                      { name: "HP", checked: true },
                      { name: "Symphony", checked: false },
                      { name: "Xiaomi", checked: true },
                      { name: "Sony", checked: false },
                      { name: "Panasonic", checked: true },
                      { name: "LG", checked: true },
                      { name: "Intel", checked: false },
                      { name: "One Plus", checked: false }
                    ].map((brand, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={brand.checked}
                          className="text-blue-600"
                        />
                        <span className="text-gray-700 text-sm">{brand.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Popular Tag</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Game", selected: false },
                      { name: "iPhone", selected: true },
                      { name: "TV", selected: false },
                      { name: "Macbook", selected: true },
                      { name: "Graphics Card", selected: true },
                      { name: "Power Bank", selected: false },
                      { name: "Speaker", selected: false },
                      { name: "Tablet", selected: false },
                      { name: "Microwave", selected: false }
                    ].map((tag, index) => (
                      <button
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          tag.selected 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {tag.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  {
                    name: "TOZO T6 True Wireless Earbuds Bluetooth...",
                    price: "$70",
                    image: "/images/auction/TOZO_keyboard.png",
                    rating: 5,
                    reviews: 738,
                    label: "HOT",
                    labelColor: "red",
                    sold: 10
                  },
                  {
                    name: "TOZO T6 True Wireless Earbuds Bluetooth...",
                    price: "$70",
                    image: "/images/auction/TOZO_keyboard.png",
                    rating: 5,
                    reviews: 600,
                    label: "HOT",
                    labelColor: "red",
                    sold: 6
                  },
                  {
                    name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
                    price: "$360",
                    image: "/images/auction/Amazon_speed HDMI cable.png",
                    rating: 5,
                    reviews: 423,
                    label: "BEST DEALS",
                    labelColor: "blue",
                    sold: 520
                  },
                  {
                    name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
                    price: "$360",
                    image: "/images/auction/Amazon_speed HDMI cable.png",
                    rating: 4.5,
                    reviews: 994,
                    label: "BEST DEALS",
                    labelColor: "blue",
                    sold: 4545
                  },
                  {
                    name: "Wired Over-Ear Gaming Headphones with USB",
                    price: "$1,500",
                    image: "/images/auction/Ear Gaming Headphones.png",
                    rating: 5,
                    reviews: 647,
                    sold: 455
                  },
                  {
                    name: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tr...",
                    price: "$1,200",
                    originalPrice: "$1600",
                    image: "/images/auction/Polaroid.png",
                    rating: 4.5,
                    reviews: 877,
                    label: "25% OFF",
                    labelColor: "yellow",
                    sold: 777
                  },
                  {
                    name: "Dell Optiplex All-in-One Computer Monitor",
                    price: "$250",
                    image: "/images/monitor.png",
                    rating: 5,
                    reviews: 492,
                    sold: 5
                  },
                  {
                    name: "Dell Optiplex 7000x7480 All-In-One Computer Monitor",
                    price: "$250",
                    image: "/images/retail/mobile_Dell.png",
                    rating: 5,
                    reviews: 426,
                    sold: 77
                  }
                ].map((product, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden transition-all duration-300 border border-[#E4E7E9] hover:shadow-[0_4px_4px_-4px_rgba(12,12,13,0.05),0_16px_16px_-9px_rgba(12,12,13,0.1)] hover:border-[#FA8232] w-[253.25px]">
                    {/* Product Image */}
                    <div className="relative h-48">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain p-4"
                      />
                      {product.label && (
                        <div className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-semibold ${
                          product.labelColor === 'red' ? 'bg-red-500 text-white' :
                          product.labelColor === 'blue' ? 'bg-blue-500 text-white' :
                          'bg-yellow-400 text-black'
                        }`}>
                          {product.label}
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                      
                      {/* Product Name */}
                      <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      {/* Price */}
                      <div className="flex items-center gap-2 mb-3">
                        {product.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">
                            {product.originalPrice}
                          </span>
                        )}
                        <span className="text-lg font-bold text-blue-600">
                          {product.price}
                        </span>
                      </div>

                      {/* Product Details */}
                      <div className="space-y-1 mb-4">
                        <div className="text-xs text-gray-600">Min. order 1 unit</div>
                        <div className="text-xs text-gray-600">Delivery by Jan 3</div>
                        <div className="text-xs text-gray-600">Money-back guarantee</div>
                        <div className="text-xs text-gray-600">{product.sold} sold</div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-2">
                        <button 
                          onClick={() => window.location.href = '/retail/product-details'}
                          className="w-full text-[#191C1F] rounded-full font-medium transition-colors border border-[#191C1F] py-2 px-8 gap-2 font-normal text-sm leading-5 hover:bg-[#FF8C00] hover:text-[#191C1F]"
                        >
                          Buy now
                        </button>
                        <button className="w-full text-[#191C1F] rounded-full font-medium transition-colors border border-[#191C1F] py-2 px-8 gap-2 font-normal text-sm leading-5 hover:border-[#FB8308] hover:bg-gray-300">
                          Add to card
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* RELATED PRODUCT */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">RELATED PRODUCT</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Bose Sport Earbuds - Wireless Earphone...",
                    price: "$1,500",
                    image: "/images/retail/sport_earbuds.png"
                  },
                  {
                    name: "Simple Mobile 4G LTE Prepaid Smartphone",
                    price: "$1,500",
                    image: "/images/retail/mobile_LTE.png"
                  },
                  {
                    name: "4K UHD LED Smart TV with Chromecast Built-in",
                    price: "$1,500",
                    image: "/images/retail/LED_smart.png"
                  }
                ].map((product, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow w-[312px]">
                    <div className="flex p-4">
                      <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded mr-4 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-lg font-bold text-blue-600">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PRODUCT ACCESSORIES */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">PRODUCT ACCESSORIES</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Samsung Electronics Samsung Galexy S21 5G",
                    price: "$1,500",
                    image: "/images/retail/mobile_Dell.png"
                  },
                  {
                    name: "Simple Mobile 5G LTE Galexy 12 Mini 512GB...",
                    price: "$1,500",
                    image: "/images/retail/mobile_LTE.png"
                  },
                  {
                    name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
                    price: "$1,500",
                    image: "/images/retail/sony_DSCHX8.png"
                  }
                ].map((product, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow w-[312px]">
                    <div className="flex p-4">
                      <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded mr-4 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-lg font-bold text-blue-600">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* APPLE PRODUCT */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">APPLE PRODUCT</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "TOZO T6 True Wireless Earbuds Bluetooth...",
                    price: "$1,500",
                    image: "/images/auction/TOZO_keyboard.png"
                  },
                  {
                    name: "JBL FLIP 4 - Waterproof Portable Bluetooth...",
                    price: "$1,500",
                    image: "/images/retail/JBL-filp.png"
                  },
                  {
                    name: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...",
                    price: "$1,500",
                    image: "/images/retail/mobile_Dell.png"
                  }
                ].map((product, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow w-[312px]">
                    <div className="flex p-4">
                      <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded mr-4 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-lg font-bold text-blue-600">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FEATURED PRODUCTS */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">FEATURED PRODUCTS</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
                    price: "$1,500",
                    image: "/images/retail/wshing_machine.png"
                  },
                  {
                    name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
                    price: "$1,500",
                    image: "/images/retail/sony_DSCHX8.png"
                  },
                  {
                    name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
                    price: "$1,500",
                    image: "/images/retail/mobile_Dell.png"
                  }
                ].map((product, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow w-[312px]">
                    <div className="flex p-4">
                      <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded mr-4 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-lg font-bold text-blue-600">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 