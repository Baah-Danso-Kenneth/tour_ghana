import { NoYogaElements, NoYogaRetreatContainer } from "./Adventure.styled"
import YogaImage from '../../assets/images/yoga.png';

function NoYogaRetreats() {
  return (
    <NoYogaRetreatContainer>
        <NoYogaElements>
        <div className="yoga_image_element">
          <img src={YogaImage} alt='yoga_image'/>  
        </div>

        <div className="yoga_text_elements">
         <h1>No yoga retreats here.</h1>
         <p>Don't get us wrong, we love a good yoga sesh, but we’ve
             got a whole lot more going on. We travel to dynamic places
              like Mexico City and we pack our group tours with transformative
               experiences, like secret dinners with famous 
            female chefs to graffiti workshops with local street artists.</p>

        <div className="yoga_btn">
           <button>2023 +2024 calender</button>   
        </div>
      

        </div>
        </NoYogaElements>
    </NoYogaRetreatContainer>
  )
}

export default NoYogaRetreats