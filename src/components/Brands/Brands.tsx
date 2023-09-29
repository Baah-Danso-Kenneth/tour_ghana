import { BrandingContainer, BrandingElement } from "./Brand.styled"
import TodayLogo from '../../assets/images/today.png';
import TravelLeisureLogo from '../../assets/images/leisure.png';
import ElleLogo from '../../assets/images/elle.png';
import NewYorkLogo from '../../assets/images/new_york_times.png';
import VougueLogo from '../../assets/images/vouge.png';
import NationalGeographicLogo from '../../assets/images/national_geo.png';

function Brands(){

   return(
        <BrandingContainer>
        <BrandingElement>
              <div className="branding">
                 <img src={NewYorkLogo} alt="new_york"/>
                  <img src={VougueLogo} alt='vouge'/>
                  <img src={NationalGeographicLogo} alt='national'/>
                 <img src={TodayLogo} alt='today'/>
                 <img src={TravelLeisureLogo} alt='leisure'/>
                 <img src={ElleLogo} alt='leisure'/>
              </div>
             </BrandingElement>
              </BrandingContainer>
   )
}

export default Brands
