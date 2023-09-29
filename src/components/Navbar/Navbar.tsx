import { NavbarContainer, NavbarElements } from "./Navbar.styled"
import Logo from '../../assets/images/asset 0.png';
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled]=useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setScrollPosition(scrollY);
      setScrolled(scrollY > 500); 
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarElements>
        <div className="first_section">
          <ul>
            <li>Small groups trips</li>
            <li>destinations</li>
          </ul>
        </div>

        <div className='middle_section'>
          {scrollPosition < 500 && (
            <img src={Logo} alt="gerk"/>
          )}
          
         <div className="menu_icon">
          <AiOutlineMenu style={{fontSize:scrollPosition >= 500 ? '30px':'',
                                   transform:scrollPosition >= 500 ? 'translate(90%,-100%)':''     
        }} className='m_icon'/>
        </div>

        <p style={{ whiteSpace: scrollPosition >= 500 ? 'nowrap' : 'normal',transform: `translateY(${scrollPosition >= 500 ? 70 : 0}%) translateX(-10%)` }}>2023 + 2024 calendar</p>
        </div>

        <div className="last_section" >
        <ul style={{ transform: `translateY(${scrollPosition >= 500 ? 70 : 280}%)` }}>
            <li>custom trips</li>
             <li>shop</li>
             <li>about</li>
           </ul>
        </div>

     

        <div className="close_icon">
          <GrClose/>
        </div>
     
      </NavbarElements>


      <div>
        
      </div>
      </NavbarContainer>
  )
}

export default Navbar