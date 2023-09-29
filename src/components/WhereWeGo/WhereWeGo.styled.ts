import { styled } from "styled-components";
import { device } from "../../utils/styles/BreakPoint";

export const WhereWeGoContainer = styled.div`
@media ${device.xl}{}

@media ${device.lg}{
  background-color:${({theme})=>theme.colors.baseColor};
  grid-area:4/1/4/-1;
}
@media ${device.md}{
    padding-bottom:5rem;
}

@media ${device.sm}{}
`;

export const WhereWeGoElements = styled.div`
@media ${device.xl}{
 
}
@media ${device.lg}{
    max-width:80%;
    margin:0 auto;
    margin-bottom:5rem;
 
    .location_layout{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        gap:1rem;    
    }

    .title_where_we_go p{
        font-size:45px;
        text-transform:uppercase; 
        font-weight:200;
        color:${({theme})=>theme.colors.primaryColor};
        text-align:center;
    }
}


@media ${device.md}{
.title_where_we_go p{
    font-size:25px;
    font-weight:300;
}

max-width:90%;
margin:0 auto;
.location_layout{
}


}
@media ${device.sm}{

}
`;



