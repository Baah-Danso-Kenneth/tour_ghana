import styled from "styled-components";
import { device } from "../../utils/styles/BreakPoint";
import { NavbarPros, isHoveringProp, openProps } from "./types";


export const NavbarContainer=styled.div<NavbarPros>`
  
  background-color:${({theme})=>theme.colors.primaryColor};
  grid-area:1/1/1/-1;

  @media ${device.lg}{
    width:100%;
    min-height:${({scrolled})=>(scrolled ? '56px' : 'auto')};
    position:${({scrolled})=>(scrolled ? 'fixed' : 'relative')};
    z-index:${({scrolled})=>(scrolled ? '1000': '')};
    border-bottom:1px solid lightcyan;
  }

  @media ${device.sm} {
    width:${({scrolled})=>(scrolled ? '10%':'100%')};
    margin-left:${({scrolled})=>(scrolled ? '2rem':'0')};
    height:${({scrolled})=>(scrolled ? '30px' :'auto')};
    transform:${({scrolled})=>(scrolled ?'translateY(50%)':'none' )}
   
  }
`;


export const NavbarElements=styled.div`
@media ${device.xl}{
}
@media ${device.lg}{
 display:flex;
 justify-content:space-between;
 max-width:60%;
 margin:0 auto;
 font-family:${({theme})=>theme.fonts.PoppinsFont};
 font-weight:200;
 font-size:14px;
 text-transform:uppercase;
 color:#fff;

 .menu_icon{
  display:none;
 }

 .c_icon{
  color:#fff !important;
 }
 .white_icon{
  color:#fff !important;
 }

 .close_icon{
  position:fixed;
  display:block;
  transform:translate(-150%,40%);
  font-size:25px;
  z-index:800;
 }
  .first_section {
   display:flex;
  }

  .first_section ul{
    cursor:pointer;
   display:flex;
   gap:2rem;
   transform:translate(-20%, 72%);
  }

  .first_section  li{
    list-style-type: none;
    white-space:nowrap;
  }


  .middle_section{

    
  }

  .middle_section img{
     width:198.5px;
     z-index:1000;
     height:51.7px;
     object-fit:cover;
  }

  .middle_section p{
  }

  .last_section {
    cursor:pointer;
    transform:translate(-23%, 2%);
  }

  .last_section ul{
   display:flex;
   gap:2rem;
   
  }

  .last_section ul li{
    cursor:pointer;
    white-space:nowrap;
    list-style:none;
  }
}

@media ${device.md}{

  .first_section{
    display:none;
  }

  .middle_section p{
    display:none;
  }

  .last_section{
    display:none;
  }


  .menu_icon{
    display:none;
    position:relative;
  }
  .menu_icon .m_icon{
    position:absolute;
    font-size:30px;
    top:1.5rem;
    left:-6rem;
  }

  .middle_section {
     position:relative;
  }

  .middle_section img{
    position:absolute;
    left:10rem;
    top:0.8rem;
  }
}



@media ${device.sm}{
  
  .middle_section img{
    width:150px;
    height:47px;
    left: 5rem;
    transform:translate(0%, 30%);
  }

  .menu_icon{
    display:block;
    z-index:50000;
  }

  .menu_icon.menuIconFixed{
    /* position:fixed;
    top:0;
    background:red; */
  }

  .menu_icon .m_icon{
    color:#fff;
    font-size:13px;
    top:2.5rem;
    left:-2rem;

}



}

`;



export const DropDown=styled.div<openProps>`
  
  @media ${device.lg}{
      display:none;
  }
  @media ${device.sm}{
    display:${({open})=>(open ? 'block' : 'none')};  
  
    ul {
       display:${({open})=>(open ? 'block':'none')};
      width:351px;
      z-index:2150;
      height:180vh;
      position:fixed;
      top:-0.8rem;
      left:0;
      right:0;
      background-color:${({theme})=>theme.colors.primaryColor};

      >li{
        font-weight:500;
        transform:translate(0,280%);
        margin-bottom:10px;
        margin-left:4rem;
        list-style-type: none;
        margin-top:2em;
      }

}

  }
`;


export const DestinationDrop=styled.div<isHoveringProp>`
@media ${device.lg}{
  position:relative
  >ul{
    width:100px;
    height:100px;
    position:absolute;
    left:-40rem;
    top:6.5rem;
    z-index:1000;
    background-color:${({theme})=>theme.colors.primaryColor};
    transform:${({scrollPosition})=>(scrollPosition > 500 ? "translate(35%,-65%)" : "translate(15%,-5%)" )};
    >li{
      cursor:pointer;
      list-style:none;
      transform:translate(-40%);
      margin-bottom:2px;
    }

  }
}
`;


export const ShowDrop=styled.div<isHoveringProp>`
@media ${device.lg}{
  position:relative;
  >ul{
    position:absolute;
    width:150px;
    display:${({isShopping})=>(isShopping ? 'block' : 'none')};
    width:150px;
    height:55px;
    top:2rem;
    left:-4.5rem;
    color:red;
    z-index:1000;
    transform:${({scrollPosition})=>(scrollPosition > 500 ? "translate(-40%,5%)" : "translate(-30%,120%)" )};
    background-color:${({theme})=>theme.colors.primaryColor};

    >li{
      list-style:none;
      transform:translate(-30%);
      white-space:nowrap;
      color:#fff;
    }
  }
}
`;

export const AboutDrop=styled.div<isHoveringProp>`
@media ${device.lg}{
  position:relative;
  >ul{
    position:absolute;
    width:150px;
    display:${({isAboutHovering})=>(isAboutHovering ? 'block' : 'none')};
    width:100px;
    height:auto;
    top:5.5rem;
    left:-8rem;
    color:red;
    z-index:1000;
    transform:${({scrollPosition})=>scrollPosition > 500 ? "translate(60%, -43%)" : "translate(70%, 15%)"};
     background-color:${({theme})=>theme.colors.primaryColor};

    >li{
      list-style:none;
      transform:translate(-55%);
      white-space:nowrap;
      margin-bottom:1px;
      color:#fff;
      
    }
  }
}
`;



