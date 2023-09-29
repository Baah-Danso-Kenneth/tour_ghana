import { FooterContainer, FooterElements } from "./Footer.styled"
import CertiImage from '../../assets/images/b_cert.png';
import IataImage from '../../assets/images/iata.png';
import IataImagePro from '../../assets/images/globe_iata.png';


function Footer(){
   return (
   <FooterContainer>
      <FooterElements>
         <div className="footer_img">
            <img src={CertiImage} alt="certi"/>
            <img src={IataImage} alt='iata'/>
            <img src={IataImagePro} alt="globe_iata"/>
         </div>

         <div className="footer_text">
           <p>Wild Terrains is a positive, gender-affirming space for women everywhere. We welcome all ages, abilities, and bodies. We have a zero tolerance policy when it comes to racism, xenophobia, homophobia, transphobia, ableism. Every woman can sit with us.</p>
         </div>

         <div className="footer_contact">
           <h3>Contact Us</h3> 
           <p>hello@wildterrains.com</p> 
           <p>Monday-Friday: 10am - 6pm EST</p>
         </div>

         <div className="footer_status">
            <p>© 2023 Wild Terrains LLC, all rights reserved. Wild Terrains® is a registered trademark of Wild Terrains LLC. Privacy Policy</p>
         </div>

      </FooterElements>
</FooterContainer>
   )
}

export default Footer
