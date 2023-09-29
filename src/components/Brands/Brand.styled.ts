import { styled } from "styled-components";
import { device } from "../../utils/styles/BreakPoint";

export const BrandingContainer=styled.div`
  @media ${device.xl}{
   
}
@media ${device.lg}{
    grid-area:7/1/span 1/-1;
    background-color:${({theme})=>theme.colors.primaryColor};
}
@media ${device.md}{

}
@media ${device.sm}{

}
`;


export const BrandingElement=styled.div`
  @media ${device.xl}{
   

}
@media ${device.lg}{
   height:300px;
   display:flex;
   align-items:center;
   justify-content:center;
   max-width:75%;
   margin:0 auto;
    .branding{
        display:flex;
        justify-content:space-between;
    }
   .branding img{
     width:16%;
     height:80px;
     object-fit:contain;
     margin-left:-2rem;
     display:flex;
     justify-content:space-between;

   }
}

@media ${device.md}{

}
@media ${device.sm}{
flex-flow:column;

.branding{
  flex-flow:column-reverse;
  justify-content:flex-end;
  align-items:center;
  margin-top:12rem;
}

}
`;