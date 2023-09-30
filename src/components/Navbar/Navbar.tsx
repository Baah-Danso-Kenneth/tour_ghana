import { AboutDrop, DestinationDrop,  DropDown,  NavbarContainer, NavbarElements, ShowDrop } from "./Navbar.styled"
import Logo from '../../assets/images/asset 0.png';
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled]=useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isHovering, setHovering] = useState(false)
  const [isShopping, setShoppingHovering] = useState(false)
  const [isAboutHovering, setAboutHovering] = useState(false)
  const [open, setOpen] = useState(false);

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

  const openModal=()=>{
    setOpen(!open)
    console.log(open)
  }

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarElements>
        <div className="first_section">
          <ul>
            <li>Small groups trips</li>
            <li onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>destinations</li>
          </ul>
        </div>

        <div className='middle_section'>
          {scrollPosition < 500 && (
            <img src={Logo} alt="gerk"/>
          )}
          
         <div className="menu_icon" onClick={openModal}>
          {open ?(
               <div className="close_icon">
               <GrClose className="c_icon white_icon" onClick={()=>setOpen(false)}/>
                </div>)
            :
            <AiOutlineMenu style={{fontSize:scrollPosition >= 500 ? '30px':'',
                                   transform:scrollPosition >= 500 ? 'translate(90%,-100%)':''     
         }} className='m_icon' />
              
          }
     

        </div>

        <p style={{ whiteSpace: scrollPosition >= 500 ? 'nowrap' : 'normal',transform: `translateY(${scrollPosition >= 500 ? 65 : 0}%) translateX(-10%)` }}>2023 + 2024 calendar</p>
        </div>

        <div className="last_section" >
        <ul style={{ transform: `translateY(${scrollPosition >= 500 ? 65 : 280}%)translateX(20%)` }}>
            <li>custom trips</li>
             <li onMouseEnter={()=>setShoppingHovering(true)} onMouseLeave={()=>setShoppingHovering(false)}>shop</li>
             <li onMouseEnter={()=>setAboutHovering(true)} onMouseLeave={()=>setAboutHovering(false)}>about</li>
           </ul>
        </div>

  
    
      
       {isHovering ? (
          <DestinationDrop isHovering={isHovering} scrollPosition={scrollPosition}>
          <ul>
            <li>argentina</li>
            <li>france</li>
            <li>portugal</li>
            <li>mexico</li>
          </ul>
        </DestinationDrop>
       ) : ""
       }
      

{isShopping ? (
    <ShowDrop   isShopping={isShopping} scrollPosition={scrollPosition}>
    <ul>
      <li>wild terrain shop</li>
      <li>lauren's pick</li>
    </ul>
  </ShowDrop>

) : ""}
    

    {isAboutHovering ? (
    <AboutDrop isAboutHovering={isAboutHovering} scrollPosition={scrollPosition}>
    <ul>
      <li>our story</li>
      <li>our team</li>
      <li>in the news</li>
      <li>FAQ'S</li>
      <li>say hello </li>
    </ul>
  </AboutDrop>

    ) : ""}

    

      <DropDown open={open} scrollPosition={scrollPosition}>
        <ul>
          <li>Small group trips</li>
          <li>+ Destinatons</li>
          <li>2023 +2024 calender</li>
          <li>custom trips</li>
          <li>+ shop</li>
          <li>+ about</li>

        </ul>
      </DropDown> 

      </NavbarElements>
      </NavbarContainer>
  )
}

export default Navbar