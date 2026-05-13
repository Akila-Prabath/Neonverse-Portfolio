import Navbar from "./components/navbar/Navbar"
import SocialSidebar from "./components/common/SocialSidebar"
import Hero from "./sections/Hero"

const App = () => {
  return (
    <main className="bg-[#020617] min-h-screen text-white overflow-hidden">

      <Navbar />

      <SocialSidebar />

      <Hero />

    </main>
  )
}

export default App