import { CardComponent } from "./Cards.styled";

interface CardProps{
    name?:string;
    src?:string;
    itenary?:string;
    statement?:string;
    icon?:string;
}

function Cards({name, src, itenary, icon}:CardProps) {
  return (
    <CardComponent>
      <div className="image_content">
        <img src={src} alt={`${name}.jpeg`}/>
      </div>
      <div className="country_tag">
        <p>{name}</p>
      </div>
      <div className="itenary">
        <h3>{itenary}</h3>
        <p>{icon}</p>
      </div>
    </CardComponent>
  )
}

export default Cards