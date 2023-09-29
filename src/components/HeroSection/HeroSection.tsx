import { HeroSectionContainer, HeroSectionElement } from "./Hero.styled"
import LaptobImage from '../../assets/images/asset 2.jpeg';
import TabletImage from '../../assets/images/asset 2.jpeg';

function HeroSection() {
  return (
    <HeroSectionContainer>
      <HeroSectionElement>
          <img src={ window.innerWidth >= 768 ? LaptobImage : TabletImage} alt='hero_imag'/>
          <div className="hero_statement">
          <p>A whole new take on a girls' trip</p>
          </div> 
      </HeroSectionElement>
      </HeroSectionContainer>
  
  )
}

export default HeroSection