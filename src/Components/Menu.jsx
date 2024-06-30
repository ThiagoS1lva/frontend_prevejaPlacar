import {FaBars, FaTimes} from 'react-icons/fa'
import { GiSoccerKick } from "react-icons/gi";
import {useRef} from 'react'
import '../Styles/menu.css'
import { Link } from 'react-scroll'

function Menu() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }
  
  return (
    <header id="home">
      <div>
      <GiSoccerKick size={40}/>
      <h3>PreVejaPlacar</h3>
      </div>
      <nav ref={navRef}>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="tabela" smooth={true} duration={500}>Tabela Brasileirão</Link>
        <Link to="contato" smooth={true} duration={500}>Contato</Link>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  )
}

export default Menu