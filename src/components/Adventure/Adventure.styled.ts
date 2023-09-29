import { styled } from "styled-components";
import { device } from "../../utils/styles/BreakPoint";

export const AdventureContainer = styled.div`
  @media ${device.xl} {
    /* XL styles here */
  }

  @media ${device.lg} {
    grid-area: 8/1/span 1/-1;
  }

  @media ${device.md} {
    /* MD styles here */
  }

  @media ${device.sm} {
    /* SM styles here */
  }
`;

export const AdventureElements = styled.div`
  @media ${device.xl} {
    /* XL styles here */
  }

  @media ${device.lg} {
    grid-area: 8/1/span 1/-1;
    background-color: red;
  }

  @media ${device.md} {
    /* MD styles here */
  }

  @media ${device.sm} {
    /* SM styles here */
  }
`;

export const NoYogaRetreatContainer = styled.div`
  @media ${device.xl} {
    /* XL styles here */
  }

  @media ${device.lg} {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.baseColor};
    height: 710.2px;
  }

  @media ${device.md} {
    /* MD styles here */
  }

  @media ${device.sm} {
    /* SM styles here */
    height:900px;
  }
`;

export const NoYogaElements = styled.div`
  @media ${device.xl} {
    /* XL styles here */
  }

  @media ${device.lg} {
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
    transform: translate(0, 15%);

    .yoga_image_element {
      /* flex: 0.5; */
    }

    .yoga_image_element img {
      width: 500.4px;
      height: 544.9px;
      object-fit: contain;
    }

    .yoga_text_elements {
      /* flex: 0.5; */
    }

    .yoga_text_elements h1 {
      font-size: 35px;
      font-weight: 200;
      word-wrap:break-word;
      width:70%;
      transform:translate(20%);
      word-wrap:break-word;
      color: ${({ theme }) => theme.colors.primaryColor};
      text-transform: uppercase;
      text-align: center;
    }

    .yoga_text_elements p {
      font-size: 15px;
      font-weight: 200;
      color: ${({ theme }) => theme.colors.textColor};
      line-height: 28px;
    }

    .yoga_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
    }

    .yoga_btn button {
      padding: 15px 68px 15px;
      text-transform: uppercase;
      font-size: 14px;
      color: #fff;
      font-weight: 100;
      font-family: ${({ theme }) => theme.fonts.HindFont};
      border: none;
      outline: none;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.primaryColor};
    }
  }


  @media ${device.md}{
   .yoga_image_element img{
    width:394.16px;
    height:393.16px;
   }


   .yoga_btn button{
    font-size:14px;
    word-wrap:normal;
    white-space:nowrap;

    padding:13px 55px 13px;
   }
  }

  @media ${device.sm}{
    flex-flow:column;
    max-width:90%;
    margin:0 auto;

    .yoga_image_element img{
      width:280px;
      height:279px;
    }

    .yoga_text_elements h1{
      font-size:25px;
    }

    .yoga_text_elements p{
      font-size:14px;
    }

  }



`;


export const WomenOftheWorldContainer=styled.div`

@media ${device.lg}{
   width:100%;
   height:418.4px;
   background-color:#fff;
}

@media ${device.sm} {
  height:680px;
}

`;

export const WomenOftheWorldElements=styled(NoYogaElements)`

@media ${device.lg}{

.women_text_elements p{
   font-size: 15px;
      font-weight: 200;
      color: ${({ theme }) => theme.colors.textColor};
      line-height: 28px;
}
 .women_image_element{ }

 .women_image_element img{
   width:408px;
   height:431.3px;
   object-fit:contain;
   transform:translate(0,-45%);
 }
.women_text_elements{}

.women_text_elements h1{
  font-size: 35px;
      font-weight: 200;
      word-wrap:break-word;
      width:70%;
      transform:translate(20%);
      word-wrap:break-word;
      color: ${({ theme }) => theme.colors.primaryColor};
      text-transform: uppercase;
      text-align: center;
}

.women_btn{
   display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
}

.women_btn button{
  padding: 15px 40px 15px;
      text-transform: uppercase;
      font-size: 14px;
      color: #fff;
      font-weight: 100;
      font-family: ${({ theme }) => theme.fonts.HindFont};
      border: none;
      outline: none;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.primaryColor};
}
}


@media ${device.md}{

  .women_image_element{
   transform:translate(); 
  }
   .women_image_element img{
    width:394.16px;
    height:295.9px;
   }

   .women_text_elements{
    transform:translate(0,-20%);
   }

   .women_text_elements h1{
    font-size:45px;
    width:150px;
    height:135px;
    text-align:center;
    transform:translate(50%, 10%);
   }

   .women_text_elements p{
    font-size:14px;
    transform:translate(0, -30%);
   }


   .women_text_elements h1{
    font-size:20px;
   }

   .women_btn{
    transform:translate(0%,-30%);
    margin-bottom:2rem;
   }

   .women_btn button{
    padding:13px 70px 13px;
    font-size:14px;
   }
}

@media ${device.sm}{
.women_image_element img{
  height:210px;
  width:280px;
}
}
`;



export const FeministFestivalContainer=styled(NoYogaRetreatContainer)`
@media ${device.lg}{
  width:100%;
height:597px;
background-color:${({theme})=>theme.colors.baseColor};
}

@media ${device.sm}{
  height:800px;
}

`;

export const FeministFestivalElements=styled(NoYogaElements)`
@media ${device.lg}{
  .feminist_image_element {
}
.feminist_image_element img{
     width: 500.4px;
      height: 544.9px;
      object-fit: contain;}

  .feminist_text_elements{
  }

  .feminist_text_elements h1{
  font-size: 32px;
      word-wrap:break-word;
      width:65%;
      transform:translate(28%);
      font-weight: 200;
      color: ${({ theme }) => theme.colors.primaryColor};
      text-align:center;
      text-transform: uppercase;
  }

  .feminist_text_elements p{
    font-size: 15px;
      font-weight: 200;
      color: ${({ theme }) => theme.colors.textColor};
    line-height: 28px;
  }

.feminist_btn{
  display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
}

.feminist_btn button{
  padding: 15px 40px 15px;
      text-transform: uppercase;
      font-size: 14px;
      color: #fff;
      font-weight: 100;
      font-family: ${({ theme }) => theme.fonts.HindFont};
      border: none;
      outline: none;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.primaryColor};
}
}

@media ${device.md}{
    .feminist_image_element img{
      width:394.16px;
      height:315px;
    }

    .feminist_text_elements{
      font-size:20px;
    }

    .feminist_btn button{
      padding:13px 35px;
      font-size:14px;
    }
}


@media ${device.sm}{
  max-width:90%;
  margin:0 auto;
  .feminist_image_element img{
    width:280px;
    height:224px;
  }

  .feminist_image_element{
    transform:translate(0%,-25%);
  }

  .feminist_text_elements{
    transform:translate(0%, -15%);
  }

  .feminist_text_elements h1{
    font-size:30px;
  }

  .feminist_text_elements p{
    font-size:14px;
  }
}
`;


export const SleepyContainer=styled(WomenOftheWorldContainer)`
@media ${device.lg}{
  width:100%;
height:509px;
}

@media ${device.md}{}

@media ${device.sm}{
  height:800px;
}
`;

export const SleepyElements=styled(WomenOftheWorldElements)`

@media ${device.lg}{
.sleepy_image_element{

}

.sleepy_image_element img{
  width: 500.4px;
      height: 580.9px;
      object-fit: contain;
      
}

.sleepy_text_elements{
position:relative;
}

.sleepy_text_elements h1{
  font-size: 32px;
      word-wrap:break-word;
      width:65%;
      transform:translate(28%);
      font-weight: 200;
      color: ${({ theme }) => theme.colors.primaryColor};
      text-align:center;
      text-transform: uppercase;
}


.sleepy_text_elements p{
  font-size: 15px;
      font-weight: 200;
      color: ${({ theme }) => theme.colors.textColor};
    line-height: 28px;
}


.sleepy_btn{
  display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
}

.sleepy_btn button{
  padding: 15px 40px 15px;
      text-transform: uppercase;
      font-size: 14px;
      color: #fff;
      font-weight: 100;
      font-family: ${({ theme }) => theme.fonts.HindFont};
      border: none;
      outline: none;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.primaryColor};
}

}

@media ${device.md}{
   .sleepy_image_element img{
     width:394px;
     height:315px;
   }

   .sleepy_text_elements h1{
    font-size:20px;
   }

   .sleepy_btn button{
     padding:13px 35px 13px;
   }
  
}

@media ${device.sm}{

  .sleepy_image_element img{
    width:277.968px;
    height:277.2px;
  }
}
`;