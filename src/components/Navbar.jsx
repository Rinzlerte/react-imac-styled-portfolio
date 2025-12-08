import { navIcons, navLinks } from "@constants";
import useWindwStore from "@store/window";
import dayjs from "dayjs";

const Navbar = () => {
    const { openWindow } = useWindwStore();
  return (
    <nav>
        <div>
            <img src="/images/logo.svg"  alt="logo"/>
            <p className="font-bol">Viktor Niko</p>
            <ul>
               {
                navLinks.map(({id, name, type})=>(
                    <li key={id} onClick={()=>{
                        openWindow(type)
                    }}>
                        <p>{name}</p>
                    </li>
                ))
               }
            </ul>
        </div>

        <div>
            <ul>
                {navIcons.map(({id, img})=>(
                    <li key={id}>
                        <img src={img} alt={`icon-${id}`} className="icon-hover"/>
                    </li>
                ))}
            </ul>
            <time>{dayjs().format('ddd MMM D h:mm A')}</time>
        </div>
        
    </nav>
  )
}

export default Navbar