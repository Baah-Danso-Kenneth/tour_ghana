import { WhereWeGoContainer, WhereWeGoElements } from "./WhereWeGo.styled"
import PortugalImage from '../../assets/images/portugal.jpeg';
import ArgentinaImage from '../../assets/images/argentina.jpeg';
import FranceImage from '../../assets/images/franace.jpeg';
import MexicoImage from '../../assets/images/mexico.jpeg';
import IceLandImage from '../../assets/images/iceland.jpeg';
import OxoxoImage from '../../assets/images/oaxaca.jpeg';
import TepoztImage from '../../assets/images/tepoz.jpeg';
import Cards from "../Cards/Cards";



function WhereWeGo(){
    const destinationInfo=[
         {name:'Portugal', src:PortugalImage, itenary:'See the itenary', icon:'>>'},
         {name:'Iceland', src:IceLandImage, itenary:'See the itenary', icon:'>>'},
         {name:'Argentina', src:ArgentinaImage, itenary:'See the itenary', icon:'>>'},
         {name:'France', src:FranceImage, itenary:'See the itenary', icon:'>>'},
         {name:'oaxaca', src:OxoxoImage, itenary:'See the itenary', icon:'>>'},
         {name:'Mexico city', src:MexicoImage, itenary:'See the itenary', icon:'>>'},
         {name:'Tepoztlan', src:TepoztImage, itenary:'See the itenary', icon:'>>'},
     ]

  return (
    <WhereWeGoContainer>
      <WhereWeGoElements>
        <div className="title_where_we_go">
          <p>Where we go</p>
        </div>

        <div className="location_layout">

          {destinationInfo.map(({name, src, itenary, icon}, index)=>(
            <Cards key={index} name={name} src={src} itenary={itenary} icon={icon}/>
          ))}
             
        </div>

      </WhereWeGoElements>
      </WhereWeGoContainer>
  )
}

export default WhereWeGo