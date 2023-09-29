import { AdventureContainer } from "./Adventure.styled"
import FeministTravel from "./FeministTravel"
import NoYogaRetreats from "./NoYogaRetreats"
import Sleepy from "./Sleepy"
import WomenOfTheWorld from "./WomenOfTheWorld"

function Adventure(){
   return (
    <AdventureContainer>
      <NoYogaRetreats/>
      <WomenOfTheWorld/>
      <FeministTravel/>
      <Sleepy/>
	</AdventureContainer>
   )
}

export default Adventure
