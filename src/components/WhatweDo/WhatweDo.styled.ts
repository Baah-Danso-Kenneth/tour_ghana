import { styled } from "styled-components";
import { device } from "../../utils/styles/BreakPoint";

export const WhatWeDoContainer = styled.div`
  @media ${device.xl}{

}
@media ${device.lg}{
background-color:${({theme})=>theme.colors.primaryColor};
grid-area:3/1/span 1/-1;
}
@media ${device.md}{

}
@media ${device.sm}{

}
`;

export const WhatWeDoElement = styled.div`
  @media ${device.xl}{

}
@media ${device.lg}{
 max-width:70%;
 margin:0 auto;


 .what_we_do{
    display:flex;
    justify-content:space-between;
 }

 .title{
    margin-top:2rem;
 }
 .title p{
    font-size:20px;
    line-height:28px;
    text-transform:uppercase;
    text-align:center;
    transform:translate(50%);
    font-weight:300;
    font-family:${({theme})=>theme.fonts.PoppinsFont};
    color:#fff;
    width:60%;
 }

  .connect h1{
    color:#fff;
    text-align:center;
    font-size:45px;
    font-weight:300;
    text-transform:uppercase;
    font-family:${({theme})=>theme.fonts.HindFont};
    margin-bottom:0;
 }

 .connect p{
    font-size:13px;
    text-align:center;
    font-weight:200;
    color:#fff;
    line-height:2px;
    font-family:${({theme})=>theme.fonts.PoppinsFont};
}

 .connect img{
    width:10%;
    object-fit:contain;
 }



   .experience h1{
    color:#fff;
    text-align:center;
    font-size:45px;
    font-weight:300;
    text-transform:uppercase;
    font-family:${({theme})=>theme.fonts.HindFont};
    margin-bottom:0;
 }

  .experience p{
    font-size:13px;
    text-align:center;
    font-weight:200;
    margin-top:0.4rem;
    color:#fff;
    line-height:20px;
    font-family:${({theme})=>theme.fonts.PoppinsFont};
}


   .celebrate h1{
    color:#fff;
    text-align:center;
    font-size:45px;
    font-weight:300;
    text-transform:uppercase;
    font-family:${({theme})=>theme.fonts.HindFont};
    margin-bottom:0;
 }

  .celebrate p{
    font-size:13px;
    text-align:center;
    font-weight:200;
    color:#fff;
    line-height:2px;
    font-family:${({theme})=>theme.fonts.PoppinsFont};
}
.celebrate img{
    width:10%;
    object-fit:contain;
}



}
@media ${device.md}{
  max-width:80%;
  margin:0 auto;

  .title{
   width:660px;
   height:57px;
  }

  .title p{
   font-size:17px;
   font-weight:300;
   font-family:${({theme})=>theme.fonts.PoppinsFont};
   transform:translate(25%, 10%);
  }

  .connect h1{
   font-size:30px;
  }

  .connect p{
   line-height:15px;
  }
  .experience h1{
   font-size:30px;
  }

  .celebrate h1{
   font-size:30px;
  }

  .celebrate p{
   line-height:22px;
  }

  .what_we_do{
   margin-top:2rem;
  }
}

@media ${device.sm}{
.title{
  width:250px;
  height:172px;
  font-weight:300;
}

.what_we_do{
   flex-flow:column;
}
}
`;
