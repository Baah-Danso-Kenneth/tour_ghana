import { WomenOftheWorldContainer, WomenOftheWorldElements } from "./Adventure.styled"
import WomenOfTheWorldImage from '../../assets/images/women_of_d_world.png';

function WomenOfTheWorld() {
  return (
    <WomenOftheWorldContainer>
      <WomenOftheWorldElements>

        <div className="women_text_elements">
         <h1>Women of the world, welcome</h1>
         <p>Our travelers are women from all walks of life, in all stages of life. 
          We don't restrict age 
          on Wild Terrains group trips, and there's an important reason why..</p>

        <div className="women_btn">
           <button>tell me more</button>   
        </div>
      

        </div>

         <div className="women_image_element">
          <img src={WomenOfTheWorldImage} alt='yoga_image'/>  
        </div>
        </WomenOftheWorldElements>

        </WomenOftheWorldContainer>
  )
}

export default WomenOfTheWorld