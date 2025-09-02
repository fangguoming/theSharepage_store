import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Retail from './homepage/Retail'
import Wholesale from './homepage/Wholesale'
import Introducing from './homepage/Introducing'
import Auction from './homepage/Auction'
import BusinessOpportunity from './homepage/BusinessOpportunity'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Retail />
      <Wholesale />
      <Introducing />
      <Auction />
      <BusinessOpportunity />
      <Footer />
    </main>
  )
} 