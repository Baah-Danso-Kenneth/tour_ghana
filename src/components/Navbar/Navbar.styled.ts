import styled from "styled-components";
import { device } from "../../utils/styles/BreakPoint";
import { NavbarPros } from "./types";


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

 .close_icon{
  display:none;
 }
  .first_section {
   display:flex;
  }

  .first_section ul{
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
  }

  .last_section ul{
   display:flex;
   gap:2rem;
   transform:translate(-5%, 280%);
  }

  .last_section ul li{
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
    display:block;
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