// import { Triangle } from "../WhereWeGo/WhereWeGo.styled";
import { NameTag, RecommedationCardContainer, Triangle } from "./Cards.styled"

interface RecommendationCardProps{
    name:string;
    statement:string;
}
function RecommendationCard({name, statement}:RecommendationCardProps) {
  return (
  <div>
    <RecommedationCardContainer>
        <div className="statement_tag">
            <p>{statement}</p>
            </div>
          <Triangle/> 
        </RecommedationCardContainer>
        <NameTag>
            <p>{name}</p>
        </NameTag>
        </div>
  )
}

export default RecommendationCard