import { WomenInBusinessContainer, WomenInBusinessElements } from "./WomenInBusiness.styled"
import businessImage from '../../assets/images/business_women.jpeg';

function WomenInBusiness() {
  return (
    <WomenInBusinessContainer>
      <WomenInBusinessElements>
        <div className="business_img">
          <img src={businessImage} alt="business"/>
        </div>

        <div className="business_text">
          <h3>In thebusiness of bridging women together</h3>
          <p>We specialize in small group tours for women of all ages and all life stages. 
If you're inspired and energized by the company of other women and by making meaningful connections 
that cross generations and borders, Wild Terrains is for you.</p>
               <div className="button_text">
                <button> More about us</button>
                </div> 
        </div>
      </WomenInBusinessElements>
      </WomenInBusinessContainer>
  )
}

export default WomenInBusiness