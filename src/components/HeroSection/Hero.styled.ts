import styled from "styled-components";
import { device } from "../../utils/styles/BreakPoint";

export const HeroSectionContainer=styled.div`

@media ${device.xl}{
  
}
@media ${device.lg}{
    grid-area:2/1/2/-1;
}

@media ${device.md}{}
@media ${device.sm}{}
`;

export const HeroSectionElement=styled.div`
@media ${device.lg}{
position:relative;
>img{
    width:100%;
    height:1105px;
    object-fit:cover;
}
.hero_statement{
    position:absolute;
    color:#fff;
    left:50%;
    top:-5px;
    font-size:40px;
    line-height:40px;
    text-align:center;
    width:30%;
    font-family:${({theme})=>theme.fonts.PoppinsFont};
    font-weight:400;
    text-transform:uppercase;
    transform:translate(-55%);
}

}
@media ${device.md}{
    >img{
     width:768px;
     min-height:1524px;
    }

     .hero_statement{
        width: 250.33px;
        height:76.9px;
        font-size:25px;
        top:10rem;
        transform:translate( -50%);
    }
}
@media ${device.sm}{
   >img{
    width:100%;
    height:773px;
   }
   
}
`;