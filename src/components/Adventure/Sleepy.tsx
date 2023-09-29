import { SleepyContainer, SleepyElements } from "./Adventure.styled"
import SleepSceneryImage from '../../assets/images/sleepy.png';


function Sleepy() {
  return (
    <SleepyContainer>
      <SleepyElements>

        <div className="sleepy_text_elements">
         <h1>Hello, Beauty sleep</h1>
         <p>Bunk beds in a hostel? Call us snobs, but we would 
          never! Your beauty sleep is way too important to us</p>

          <p>We stay in small boutique hotels that are not only beautiful, 
            but women-owned and operated. </p>

        <div className="sleepy_btn">
           <button>see the itineraries</button>   
        </div>
    </div>

        <div className="sleepy_image_element">
          <img src={SleepSceneryImage} alt='yoga_image'/>  
        </div>

      </SleepyElements>
      </SleepyContainer>
  )
}

export default Sleepy