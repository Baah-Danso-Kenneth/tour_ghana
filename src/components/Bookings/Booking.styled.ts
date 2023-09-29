import { styled } from "styled-components";
import { device } from "../../utils/styles/BreakPoint";

export const BookingsContainer=styled.div`
 @media ${device.xl}{

   
}
@media ${device.lg}{
   grid-area:9/1/span 1/-1;
   background-color:${({theme})=>theme.colors.secondaryColor};
   position:relative;
}
@media ${device.md}{

}
@media ${device.sm}{

}
`;
export const BookingsElement=styled.div`
 @media ${device.xl}{
   
}
@media ${device.lg}{
   transform:translate(0,35%);
   max-width:80%;
   margin:0 auto;


   .main_img_banner{
      display:flex;
      justify-content:center;
      align-items:center;
      margin-bottom:2rem;
   }

   .main_img_banner img{
      width: 387.9px;
      height:50.8px;
      object-fit:contain;
   }

   .display_booking_flex{
      display:flex;
      align-items:center;
      justify-content:center;
      gap:2rem;
   }

   .booking_first_section{}
   
   .booking_img img{
      height:48.2px;
      width:46.2px;
      object-fit:contain;
   }

   .booking_first_section h3{
      font-weight:300;
      text-transform:uppercase;
      color:#fff;
      font-family:${({theme})=>theme.fonts.HindFont};
      margin-bottom:0;  
   }

   .booking_first_section p{
      font-size:13px;
      color:#fff;
      font-weight:200
   }


                 


   .booking_second_section{}
   
   .img_swimshade img{
      height:48.2px;
      width:46.2px;
      object-fit:contain;
   }

   .booking_second_section h3{
      font-weight:300;
      text-transform:uppercase;
      color:#fff;
      font-family:${({theme})=>theme.fonts.HindFont};
      margin-bottom:0;  
   }

   .booking_second_section p{
      font-size:13px;
      color:#fff;
      font-weight:200
   }




   .booking_last_section{}
   
   .img_booking img{
      height:48.2px;
      width:46.2px;
      object-fit:contain;
   }

   .booking_last_section h3{
      font-weight:300;
      text-transform:uppercase;
      color:#fff;
      font-family:${({theme})=>theme.fonts.HindFont};
      margin-bottom:0;  
   }

   .booking_last_section p{
      font-size:13px;
      color:#fff;
      font-weight:200
   }




}

@media ${device.md}{
 .booking_last_section h3{
   white-space:nowrap;
 }
}
@media ${device.sm}{

   .main_img_banner{
      transform:translate(0%,-7rem);
   }

   .display_booking_flex{
      flex-flow:column;
      justify-content:center;
      align-items:center;
      transform:translate(0%,-5em);
   }

   .img_booking{
  
   }

   .booking_img img{
      margin-left:3.5rem;
   }

    .img_swimshade img{
    margin-left:3.5rem;
   }

   .img_booking img{
      margin-left:3.5rem;
   }
}
`;