import { styled } from "styled-components";
import { device } from "../../utils/styles/BreakPoint";


export const NewsLettersContainer=styled.div`

@media ${device.xl}{

}
@media ${device.lg}{
    background-color:${({theme})=>theme.colors.primaryColor};
    grid-area:11/1/span 1/ -1;

}
@media ${device.md}{

}
@media ${device.sm}{

}
`;


export const NewsLettersElements=styled.div`

@media ${device.xl}{

}
@media ${device.lg}{
    max-width:80%;
    margin:0 auto;

    .statements{
        display:flex;
        flex-flow:column;
        justify-content:center;
        align-items:center;
    }
    .statements h1{
        font-size:35px;
        text-transform:uppercase;
        width:50%;
        text-align:center;
        margin-bottom:0;
        font-weight:200;
        color:#fff;
    }
    .statements p{
      font-size:13px;
      color:#fff;   
    }

    .input_section{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:1rem;
    }

    .input_section input{
       padding:12px;
    }

    .input_section button{
        width:13%;
        height:42px;
        text-transform:uppercase;
        background-color:#fff;
        color:${({theme})=>theme.colors.primaryColor};
        border:none;
        outline:none;
        border-radius:5px;
    }

 

    .subtle_p_tag{
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:14px;
      color:#fff;
      font-weight:300;
    }
}
@media ${device.md}{
    .statements h1{
        font-size:18px;
        
    }

    .statements p{
        font-size:14px;
        font-weight:200;
    }

    .input_section{
        flex-flow:column;
    }

    .input_section button{
        width:33%;
    }



}
@media ${device.sm}{

}
`;
