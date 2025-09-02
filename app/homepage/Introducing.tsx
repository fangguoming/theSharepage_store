'use client'

import { ArrowRight } from 'lucide-react'

export default function Introducing() {
  const banners = [
    {
      id: 1,
      title: "New Apple Homepod Mini",
      description: "Jam-packed with innovation, HomePod mini delivers unexpectedly.",
      buttonText: "SHOP NOW",
      badge: "INTRODUCING",
      badgeColor: "blue",
      image: "🔊",
      bgColor: "bg-gray-100",
      textColor: "text-black",
      buttonColor: "bg-primary-600 text-white",
      arrowColor: "text-white"
    },
    {
      id: 2,
      title: "Xiaomi Mi 11 Ultra",
      specs: "12GB+256GB",
      disclaimer: "*Data provided by internal laboratories. Industry measurment.",
      buttonText: "SHOP NOW",
      badge: "INTRODUCING NEW",
      badgeColor: "yellow",
      image: "📱",
      price: "$590",
      bgColor: "bg-green-800",
      textColor: "text-white",
      buttonColor: "bg-white text-black",
      arrowColor: "text-black"
    }
  ]

  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-600 text-white'
      case 'yellow':
        return 'bg-yellow-400 text-black'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Banner - Apple HomePod Mini */}
          <div className="relative overflow-hidden flex items-center bg-[#F2F4F5] gap-[40px] rounded-[4px] p-[44px]" style={{ 
            width: '648px',
            height: '368px'
          }}>
            <div className="flex-1 max-w-md">
              {/* Badge */}
              <div className="mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded bg-[#2DA5F3] text-white font-semibold text-[14px] rouneded-[2px] py-[6px] px-[12px] gap-[10px]">
                  INTRODUCING
                </span>
              </div>
              
              {/* Title */}
              <h2 className="mb-4 leading-tight text-[32px] text-[#191C1F]" style={{ 
                fontWeight: 600,
                lineHeight: '40px',
              }}>
                New Apple<br />Homepod Mini
              </h2>
              
              {/* Description */}
              <p className="mb-6 text-[#475156]" style={{ 
                lineHeight: '24px',
                fontWeight: 400
              }}>
                Jam-packed with innovation, HomePod mini delivers unexpectedly.
              </p>
              
              {/* Call to Action Button */}
              <button className="hover:opacity-90 transition-opacity flex items-center justify-center bg-[#08B564] py-[20px] gap-[8px] text-white w-[191px] h-[56px] rounded-[6px]" style={{
                fontWeight: 600,
                letterSpacing: '0.5px'
              }}>
                <span>SHOP NOW</span>
                <ArrowRight size={20} className="text-white" />
              </button>
            </div>
            
            {/* Product Image */}
            <div className="flex-shrink-0">
              <img 
                src="/images/apple_homepod.png" 
                alt="Apple HomePod Mini" 
                className="object-contain w-[240px] h-[240px]"
              />
            </div>
          </div>

          {/* Right Banner - Xiaomi Mi 11 Ultra */}
          <div className="rounded-[4px] flex gap-[12px]" style={{ 
            width: '648px',
            height: '368px',
            background: 'linear-gradient(to bottom, #0F8F46, #04411E)',
          }}>
            {/* Left Div - Content */}
            <div className="h-full py-[44px] pl-[44px] w-[324px]">
              {/* Badge */}
              <div className="mb-4">
                <span className="font-semibold rounded-[2px] bg-[#EFD33D] py-[6px] px-[12px] gap-[10px] w-[158px] h-[32px] text-[14px] text-[#191C1F]" style={{
                  fontWeight: 600,
                  lineHeight: '20px',
                }}>
                  INTRODUCING NEW
                </span>
              </div>
              
              {/* Title */}
              <h2 className="text-white mb-2 leading-tight font-semibold text-[32px]" style={{ 
                fontWeight: 600,
                lineHeight: '40px'
              }}>
                Xiaomi Mi 11 Ultra <br/>12GB+256GB
              </h2>
              
              {/* Disclaimer */}
              <p className="mb-6 text-[#ADB7BC]" style={{ 
                lineHeight: '24px',
              }}>
                *Data provided by internal laboratories. Industry measurment.
              </p>
              
              {/* Call to Action Button */}
              <button className="hover:opacity-90 w-[191px] h-[56px] transition-opacity flex items-center justify-center bg-white rounded-[3px] text-[#08B564] gap-[12px] font-bold" style={{
                letterSpacing: '0.5px'
              }}>
                <span>SHOP NOW</span>
                <ArrowRight size={20} />
              </button>
            </div>
            
            {/* Right Div - Image and Price Badge */}
            <div className="relative w-[312px] h-full">
              <img 
                src="/images/xiaomi_ultra.png" 
                alt="Xiaomi Mi 11 Ultra" 
                className="absolute right-0 bottom-0 w-full"
              />
              {/* Price Badge */}
              <div className="absolute top-4 right-4 text-white font-bold rounded-full flex items-center justify-center bg-[#2DA5F3] w-[88px] h-[88px] text-[20px] font-semibold" style={{
                lineHeight: '28px',
              }}>
                $590
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 