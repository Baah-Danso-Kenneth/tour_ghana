import styled from "styled-components";
import { device } from "../../utils/styles/BreakPoint";

export const WomenInBusinessContainer=styled.div`
  @media ${device.xl}{
  
}
@media ${device.lg}{
background-color:${({theme})=>theme.colors.baseColor};
grid-area:6/1/span 1/-1;
}
@media ${device.md}{

}
@media ${device.sm}{

}
`;

export const WomenInBusinessElements=styled.div`
    @media ${device.lg}{
        max-width:80%;
        margin:0 auto;

        .business_img{
            margin-top:3.5rem;
        }
        .business_img img{
           height: 569.8px;
           width:100%;
           object-fit:cover;
        }

        .business_text{}

        .business_text h3 {
            text-align:center;
            font-size:35px;
            color:${({theme})=>theme.colors.primaryColor};
            text-transform:uppercase;
            width:60%;
            font-weight:400;

            transform:translate(30%, 20%)
        }
        .business_text p{
            color:${({theme})=>theme.colors.textColor};
            font-size:15px;
            text-align:center;
            width:70%;
            margin:0 auto;
            margin-bottom:2rem;
        }

        .button_text{
            display:flex;
            justify-content:center;
            align-items:center;
        }

        .button_text button{
            padding:18px 50px 18px;
            font-size:15px;
            border:none;
            outline:none;
            font-family:${({theme})=>theme.fonts.PoppinsFont};
            color:#fff;
            font-weight:200;
            border-radius:5px;
            text-transform:uppercase;
            background-color:${({theme})=>theme.colors.primaryColor};
        }
    }


    @media ${device.md}{
        .button_text button{
         margin-bottom:5rem;
        }
    }

    @media ${device.sm}{
        max-width:90%;
        margin:0 auto;
        .business_img img{
            width:280px;
            height:157.4px;}


        .business_text{}

        .business_text h3{
            width:130px;
            height:405px;
            font-size:16px;
            transform:translate(60%,3%);
        }

        .business_text p{
            transform:translate(0%,-18rem);
            width:80%;
            font-size:14px;
            font-weight:200;
            line-height:28px;
        }

        .button_text button{
            transform:translate(0,-18rem);
            font-size:13px;
            padding:13px 30px 13px;

        }

    }
`;