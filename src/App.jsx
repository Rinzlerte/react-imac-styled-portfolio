import { Navbar, Welcome, Dock, Home} from "@components"
import { Draggable } from "gsap/Draggable"
import gsap from "gsap";
import { Finder, Resume, Safari, Terminal, Text, ImageWithContent, Contact, Photos } from "@windows";
gsap.registerPlugin(Draggable);

function App() {
  return (
      <main>
        <Navbar />
        <Welcome />
        <Dock/>

        <Home /> 

        {/* windows */}
        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <ImageWithContent />
        <Contact />
        <Photos />
      </main>
  )
}

export default App
