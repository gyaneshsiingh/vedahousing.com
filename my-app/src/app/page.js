import Header from './components/Header/header'
import Hero from './components/Hero/hero'
import Stats from './components/Stats/stats'
import Services from './components/Services/services'
import ContactCTA from "./components/Contact/contact"
import Footer from './components/Footer/footer'
import StickWidget from './components/widget/widget'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <ContactCTA />
      <StickWidget />
      <Footer />
    </main>
  )
}