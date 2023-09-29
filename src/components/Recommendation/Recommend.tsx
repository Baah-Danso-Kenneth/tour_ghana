
import RecommendationCard from "../Cards/RecommendationCard"
import { RecommedElements, RecommedationContainer } from "./Recommend.styled"

function Recommend() {
  const recommendations=[
    {name:"Sharyn V.", statement:"Going on a trip with Wild Terrains is like having an in-the-know girlfriend arrange your itinerary."},
    {name:"Rebecca H.", statement:"Cannot recommend Wild Terrains—and the Vogue-worthy curation of their trips—enough!"},
    {name:"Amy G.", statement:"They are truly the most perfectly curated trips - and that is coming from a very selective traveler."},
  ]

  return (
    <RecommedationContainer>
      <RecommedElements>
           {recommendations.map(({name, statement}, index)=>(
            <RecommendationCard key={index} name={name} statement={statement} />
           ))}
      </RecommedElements>
      </RecommedationContainer>
  )
}

export default Recommend