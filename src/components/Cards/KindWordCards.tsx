import { KindTriangle, StyleCardContainer, StyleCardLayout} from "./Cards.styled"

interface KindProps{
  name:string,
  statement:string,
}
function KindWordCards({name, statement}:KindProps) {
  return (
    <StyleCardContainer>
      <StyleCardLayout>
         <p>{statement}</p> 
      </StyleCardLayout>
      <KindTriangle/>
       <h5>{name}</h5>
                     
      </StyleCardContainer>
  )
}

export default KindWordCards