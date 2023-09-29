import KindWordCards from "../Cards/KindWordCards"
import { KindWordsContainer, KindWordsElement } from "./Recommend.styled"

function Kindwords(){
    const kindWordsInfo=[
        {name:'- Erin E.', statement:"Truly transformative experience and I can’t wait to travel with them again! Highly recommended for solo female travelers!"},
         {name:'- Beverlee M.', statement:'Go! I cannot encourage you enough. It is life-changing.'} ,   
         {name:'- Theressa okra.', statement:'Grab your sister, best friend, or mom and sign up for the next travel experience. You’ll leave happy, full, and inspired!'}   , 
        {name:'- Alberta Kissi.', statement:'Wild Terrains is unlike any travel company out there! - and this is coming from a gal who has traveled the world solo!! Lauren and her team made me feel so welcome and “at home”. Truly an amazing experience!'} ,   
         {name:'- Emelia M.', statement:'I didn’t know any of the women in the group, but it only took a few minutes to feel that I was among friends. Everyone was fun and interesting, and Wild Terrains created an atmosphere that made us all feel like we belonged. I would recommend this trip to anyone, of any age or background who is looking for a new experience.'} ,   
        {name:'- Elsie M.', statement:'I must say, this trip exceeded all my expectations. I personally adore planning my own travel and adventures so I was unsure how I would feel coming on a planned group trip. This trip will change your mind about group travel.'},   
        
    ]



    return (
    <KindWordsContainer>
        <KindWordsElement>
          <div className="kind-word-title">
            <h1>kind words</h1>
          </div>

          <div className="control_elements">
          {kindWordsInfo.map(({name, statement})=>(
         <KindWordCards name={name} statement={statement}/>
        ))}
          </div>
        </KindWordsElement>

        <div className="btn-more">
            <button>more this way</button>                
        </div>
     
        </KindWordsContainer>
    )}
    
    export default Kindwords
