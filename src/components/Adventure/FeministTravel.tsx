import { FeministFestivalContainer, FeministFestivalElements } from "./Adventure.styled"
import FeministTravelImage from '../../assets/images/travel_like_fem.png';


function FeministTravel() {
  return (
    <FeministFestivalContainer>
      <FeministFestivalElements>
      <div className="feminist_image_element">
          <img src={FeministTravelImage} alt='yoga_image'/>  
        </div>

        <div className="feminist_text_elements">
         <h1>Travel like a feminist, not a tourist</h1>
         <p>We've cultivated relationships with women hotel owners, chefs, artists, designers,
           historians, and policy makers around the world to create our group trips.</p>

        <div className="feminist_btn">
           <button>get to know them</button>   
        </div>
      

        </div>
      </FeministFestivalElements>
      </FeministFestivalContainer>
  )
}

export default FeministTravel