import Navbar from "./components/navbar/Navbar"
import SocialSidebar from "./components/common/SocialSidebar"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"

const App = () => {
  return (
    <main className="bg-[#020617] min-h-screen text-white overflow-hidden">

      <Navbar />

      <SocialSidebar />

      <Hero />

      <About />

      <Skills />

    </main>
  )
}

export default App