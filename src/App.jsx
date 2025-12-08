import { Navbar, Welcome, Dock } from "@components"
import { Draggable } from "gsap/Draggable"
import gsap from "gsap";
import { Finder, Resume, Safari, Terminal, Text, ImageWithContent, Contact } from "@windows";
gsap.registerPlugin(Draggable);

function App() {
  return (
      <main>
        <Navbar />
        <Welcome />
        <Dock/>

        {/* windows */}
        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <ImageWithContent />
        <Contact />
      </main>
  )
}

export default App
