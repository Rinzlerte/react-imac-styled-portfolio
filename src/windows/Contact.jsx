import { WindowControls } from "@components"
import { socials } from "@constants"
import WindowWrapper from "@hoc/WindowWrapper.jsx";

const Contact = () => {
  return (
    <>
    <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
    </div>
    <div className="p-5 space-y-5">
        <img src="/images/adrian.jpg"  alt="serg" className="w-20 rounded-full"/>
        <h3>
            Let's connect! You can reach me via email at
        </h3>
        <p>
            Got an idea? A bug to squash? Or just want to talk about tech? Drop me a line at
        </p>
        <ul> 
            {
                socials.map(({id, bg, link, icon, text}) => (
                    <li key={id} style={{
                        backgroundColor: bg
                    }}>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="">
                           <img src={icon} alt={text} className="size-5"/>
                           <p>{text}</p>
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;