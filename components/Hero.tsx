'use client'

import { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const banners = [
    {
      id: 1,
      title: "THE BEST PLACE TO PLAY",
      subtitle: "Xbox Consoles",
      description: "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
      price: "$299",
      buttonText: "SHOP NOW",
      bgGradient: "from-yellow-400 to-orange-500",
      textColor: "text-black",
      image: "🎮",
      badge: "$299"
    },
    {
      id: 2,
      title: "Summer Sales",
      subtitle: "New Google Pixel 6 Pro",
      description: "Experience the latest in mobile technology with amazing features and performance.",
      price: "$899",
      buttonText: "SHOP NOW",
      bgGradient: "from-green-700 to-green-800",
      textColor: "text-white",
      image: "📱",
      badge: "29% OFF"
    },
    {
      id: 3,
      title: "Premium Audio",
      subtitle: "Xiaomi FlipBuds Pro",
      description: "Wireless earbuds with active noise cancellation and premium sound quality.",
      price: "$299 USD",
      buttonText: "SHOP NOW",
      bgGradient: "from-pink-100 to-amber-100",
      textColor: "text-black",
      image: "🎧",
      badge: "New"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative py-8 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Left Banner - Xbox Consoles */}
          <div className="lg:col-span-2 relative overflow-hidden flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-[#FFE767] to-[#FFA600] rounded-[6px] p-6 md:py-14 md:pl-[54px] md:pr-[118px] min-h-[400px] md:h-[550px]">
            {/* Left Section - Content */}
            <div className="w-full md:w-[356px] h-auto md:h-[304px] flex flex-col justify-center mb-6 md:mb-0">
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-0.5 bg-[#2DA5F3] mr-2"></div>
                  <h3 className="text-[#2484C2] font-semibold font-['Public_Sans'] text-sm leading-5">
                    THE BEST PLACE TO PLAY
                  </h3>
                </div>
                <h2 className="mb-4 text-[#191C1F] font-['Poppins'] font-semibold text-2xl md:text-[48px] leading-tight md:leading-[56px]">
                  Xbox Consoles
                </h2>
                <p className="mb-6 max-w-md text-[#475156] font-['Poppins'] font-normal text-lg leading-6">
                  Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
                </p>
                {/* Call to Action Button */}
                <button className="bg-[#08B564] text-white py-4 md:py-6 px-8 md:px-12 rounded-lg font-bold hover:bg-[#08B564] hover:text-white transition-colors flex items-center space-x-2 w-auto rounded-[6px] text-lg md:text-xl">
                  <span>SHOP NOW</span>
                  <ArrowRight size={20} className="text-white" />
                </button>
              </div>
            </div>
            
            {/* Carousel Dots - Outside Left Section */}
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-[54px] flex space-x-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-colors ${
                    index === currentSlide ? 'w-[10px] h-[10px] bg-[#191C1F]' : 'w-3 h-3 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            {/* Right Section - Image and Badge */}
            <div className="flex-shrink-0 relative w-full md:w-[347px] h-[200px] md:h-[408px]">
              <img src="/images/Xbox.png" alt="Xbox Console" className="w-full h-full object-contain" />
              <div className="absolute top-0 right-0 text-white rounded-full flex items-center justify-center w-[100px] h-[100px] border-4 border-white pr-[23px] pl-[21px] gap-[10px] bg-[#2DA5F3] font-semibold text-[22px]">
                {banners[0].badge}
              </div>
            </div>
          </div>

          {/* Right Column - Two Smaller Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
            {/* First Banner - Green Gradient */}
            <div className="relative overflow-hidden flex flex-row items-center justify-between bg-gradient-to-b from-[#0F8F46] to-[#00461E] rounded-[6px] py-6 h-[200px] md:h-[248px]">
              {/* Left Section - Content */}
              <div className="w-[200px] flex flex-col justify-center pl-3 md:pl-[40px]">
                <h3 className="text-sm font-medium text-yellow-200 mb-1">{banners[1].title}</h3>
                <h2 className="w-full font-['Poppins'] font-semibold text-2xl leading-8 text-white mb-3">{banners[1].subtitle}</h2>
                <button className="flex items-center transition-colors bg-white w-[156px] h-[48px] rounded-[2px] px-6 gap-2 text-[#0F8F46] font-['Public_Sans'] font-bold text-sm leading-[48px] tracking-[1.2%]">
                  <span>{banners[1].buttonText}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
              
              {/* Right Section - Image and Badge */}
              <div className="flex-shrink-0 relative w-[200px] h-full">
                <img 
                  src="/images/google_pixel.png" 
                  alt="Google Pixel 6 Pro" 
                  className="absolute bottom-0 right-0 object-contain top-[23px] left-[-37px] max-w-[312px] max-h-[312px]"
                />
                <div className="absolute flex items-center justify-center w-[102px] h-[40px] left-[60px] rounded-[2px] py-2 px-4 bg-[#EFD33D] gap-[10px] text-[#141414] font-semibold text-base leading-6 z-[1]">
                  {banners[1].badge}
                </div>
              </div>
              
              {/* Carousel Dots - Outside Left Section */}
              <div className="absolute bottom-4 left-10 flex space-x-2">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Second Banner - Orange Background */}
            <div className="relative overflow-hidden flex flex-row items-center justify-between bg-[#FFE7D6] gap-3 md:gap-5 pt-6 md:pt-10 pr-4 md:pr-10 pb-6 md:pb-10 pl-4 md:pl-8 rounded-[6px] h-[200px] md:h-[248px]">
              {/* Left Section - Product Image */}
              <div className="flex-shrink-0">
                <img 
                  src="/images/xiaomi.png" 
                  alt="Xiaomi Earbuds" 
                  className="object-contain w-[120px] h-[120px] md:w-[160px] md:h-[160px]"
                />
              </div>
              
              {/* Right Section - Content */}
              <div className="flex-1">
                <h2 className="mb-2 font-['Poppins'] font-semibold text-lg md:text-2xl leading-6 md:leading-8 text-[#191C1F]">
                  Xiaomi FlipBuds Pro
                </h2>
                <p className="mb-3 md:mb-4 text-[#2DA5F3] font-semibold text-base md:text-lg leading-5 md:leading-6">
                  $299 USD
                </p>
                <button className="w-[130px] md:w-[155px] h-[40px] md:h-[48px] bg-[#0F8F46] text-white px-4 md:px-6 rounded-[2px] font-['Poppins'] font-bold text-xs md:text-sm leading-[40px] md:leading-[48px] tracking-[1.2%] hover:bg-[#0A7A3A] transition-colors flex items-center justify-center gap-2">
                  <span>{banners[2].buttonText}</span>
                  <ArrowRight size={16} />
                </button>
                
                {/* Carousel Dots */}
                <div className="flex space-x-2 mt-3 md:mt-4">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
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
  )
} 