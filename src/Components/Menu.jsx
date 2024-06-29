import {FaBars, FaTimes} from 'react-icons/fa'
import { GiSoccerKick } from "react-icons/gi";
import {useRef} from 'react'
import '../Styles/menu.css'


function Menu() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }
  
  return (
    <header>
      <GiSoccerKick size={40}/>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Sobre</a>
        <a href="/#">Tabela Brasileirão</a>
        <a href="/#">Contato</a>
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