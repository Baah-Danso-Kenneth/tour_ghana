import styled from "styled-components";
import { device } from "../../utils/styles/BreakPoint";

export const FooterContainer =styled.div`
@media ${device.xl}{

}
@media ${device.lg}{
    background-color:${({theme})=>theme.colors.baseColor};
    grid-area:12/1/span 1/ -1;

}
@media ${device.md}{

}
@media ${device.sm}{

}
`;

export const FooterElements =styled.div`
@media ${device.xl}{

}
@media ${device.lg}{
    max-width:80%;
    margin:0 auto;
    .footer_img{
        margin-top:2rem;
        display:flex;
        justify-content:space-around;
    }
    .footer_img img{
        width:20%;
        object-fit:contain;

    }

    .footer_text{
        width:80%;
        margin:0 auto;
        font-size:13px;
        text-align:center;
        color:${({theme})=>theme.colors.textColor};
    }

    .footer_text p{
        margin-top:3rem;
    }

    .footer_contact{
        display:flex;
   
        margin-top:3rem;     flex-flow:column;
        justify-content:center;
        align-items:center;
        margin-bottom:2.5rem;
    }

    .footer_contact h3{
        margin-bottom:0;
        text-transform:uppercase;
        color:${({theme})=>theme.colors.textColor};
    }

    .footer_contact p{
        line-height:8px;
        font-size:13px;
        font-style:italic;
         color:${({theme})=>theme.colors.textColor};

    }
    .footer_contact p:nth-child(3){
       color:red;
       font-style:normal;
        color:${({theme})=>theme.colors.textColor}; 
    }

    .footer_status{
        max-width:80%;
        margin:0 auto;
    }

    .footer_status p{
        white-space:nowrap;
        font-size:13px;
         color:${({theme})=>theme.colors.textColor};
    }
}
@media ${device.md}{
   
      max-width:80%;
      margin:0 auto;

   .footer_status p{
   text-align:center;
   width:100% !important;
   white-space:pre-wrap;
    font-size:12px;
   }
}
@media ${device.sm}{

}
`;