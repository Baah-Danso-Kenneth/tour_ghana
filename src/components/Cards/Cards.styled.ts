import styled from "styled-components";
import { device } from "../../utils/styles/BreakPoint";

export const CardComponent = styled.div`

@media ${device.xl}{

}
@media ${device.lg}{
width:236px;
 height:318px;
 position:relative;

    &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 236px;
    height: 318px;
    background-color: rgba(0, 0, 0, 0.5); 
    pointer-events: none; 
    transition: background-color 0.5s ease; 
  }


  &:hover::after{
   background-color:rgba(0,0,0,0.3);
  }



.image_content img{
    width:236px;
    height:318px;
    object-fit:cover;
}

.country_tag{
    position:absolute;
    top:20%;
    left:50%;
    transform:translate(-50%);
    z-index:50;
}

.country_tag p{
    font-size:30px;
    word-wrap:break-word;
    color: #fff;
    text-align:center;
    text-transform:uppercase;

}

.itenary{
    position:absolute;
    top:85%;
    color:#fff;
    left:18%;
    display:flex;
    align-items:center;
    z-index:50;
}

.itenary h3{
    font-size:13px;
    font-weight:300;
    
}
.itenary p{
    font-size:13px;
    margin-left:0.5rem;
}
 
}


@media ${device.md}{
 width:160px;
 height:240px;
 object-fit:cover;


.image_content img{
    width:160px;
    height:240px;
}

    &::after {
   
    width: 160px;
    height: 240px;
  
  }


.country_tag p{
    font-size:20px;
}



}



@media ${device.sm}{
  width:130px;
  height:173px;

  &::after {
   
   width: 130px;
   height: 173px; 
 }

 .image_content img{
    width:130px;
    height:173px;
 }

 .country_tag p{
    font-size:15px;
 }

 .itenary{
    top:75%;
 }
 .itenary h3{
    font-size:9px;
    white-space:nowrap;
 }
}
`;



export const RecommedationCardContainer=styled.div`

@media ${device.lg}{
    width:280px;
    background-color:${({theme})=>theme.colors.subPrimaryColor};
    position:relative;
    top:2rem;
    transform:translate(0,20%);

    .statement_tag{
        display:flex;
        align-items:flex-end;
        justify-content:center;
    }

    .statement_tag p{
        font-size:13px;
        margin-top:2.3rem;
        text-align:center;
        line-height:30px;
        width:80%;
        color:#fff;
        display:flex;
        
    }
}

@media ${device.md}{
    width: 200.65px;
    margin-top:-2.5rem;
    padding:5px;
    .statement_tag p{
        font-size:15px;
    }
}

@media ${device.sm}{
    width:280px;

}

`;

export const Triangle = styled.div`

  position: absolute;
  bottom: 0;
  left: 85%;
  transform: translateY(10px) rotate(80deg); /* Center the triangle horizontally */
  width: 0;
  height: 0;
  border-left: 25px solid transparent; /* Adjust the size of the triangle */
  border-right: 25px solid transparent; /* Adjust the size of the triangle */
  border-top: 25px solid ${({theme})=>theme.colors.primaryColor}; /* Match the background color of the rectangle */

`;


export const NameTag=styled.div`
  @media ${device.lg}{
    position:relative;
    >p{
        
        position:absolute;
        color:${({theme})=>theme.colors.primaryColor};
        font-style:italic;
        font-size:15px;
        left:50%;
        transform:translate(-20%,300%);
    }
  }

  @media ${device.sm}{
    font-size:14px;
    transform:translate(5%,0%);
  }
`;


export const StyleCardContainer=styled.div`

@media ${device.lg}{
 width:30%;
 position:relative;

 >h5{
    display:flex;
    justify-content:flex-end;
    font-weight:200;
    font-size:15px;
    transform:translate(-20%);
    font-style:italic;
    color:${({theme})=>theme.colors.primaryColor};
 }
}

@media ${device.sm}{
    width:277px;
}
`;

export const StyleCardLayout=styled.div`

@media ${device.lg}{
    padding:10px;
    background-color:${({theme})=>theme.colors.subPrimaryColor};
    >p{
        color:#fff;
        font-size:13px;
        line-height:30px;
    }
}
`;


export const KindTriangle = styled.div`

  position: absolute;
  left: 80%;
  transform: translateY(-15px) rotate(80deg); /* Center the triangle horizontally */
  width: 0;
  height: 0;
  border-left: 25px solid transparent; /* Adjust the size of the triangle */
  border-right: 25px solid transparent; /* Adjust the size of the triangle */
  border-top: 25px solid ${({theme})=>theme.colors.primaryColor}; /* Match the background color of the rectangle */

`;

