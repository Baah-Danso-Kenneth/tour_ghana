import { BookingsContainer, BookingsElement } from "./Booking.styled"
import KeyHeaderImage from '../../assets/images/keynote.png';
import StarImage from '../../assets/images/star.png';
import BookingImage from '../../assets/images/booking.png';
import SwimShade from '../../assets/images/swim-shade.png';


function Booking(){
   
   return (
   <BookingsContainer>
      <BookingsElement>
         <div className="main_img_banner">
            <img src={KeyHeaderImage} alt="header"/>
         </div>

         <div className="display_booking_flex">
            <div className="booking_first_section">
               <div className="booking_img">
                <img src={StarImage} alt='image_star'/>      
               </div>
               
               <h3>Small Groups</h3>
               <p>We really hate shouting
                   across a dinner table, so we cap
                    our group size at 10-12 women
                     per trip. No ifs, ands, or buts about it. </p>
            </div>


            <div className="booking_second_section">
               <div className="img_swimshade">
                  <img src={SwimShade} alt="swim_suit"/>     
               </div>

                <h3>Flexible bookings</h3>  
                <p>Life happens. Rest assured you can 
                  change your trip date anytime up to
                   75 days before your original 
                   trip’s departure. </p>       
            </div>

            <div className="booking_last_section">
               <div className="img_booking">
                  <img src={BookingImage} alt="booking_image"/>
               </div>

               <h3>PRICE TRANSPARENCY</h3>
                <p>Know where your tourism dollars are 
                  going...directly into the pockets of 
                  local, talented women. </p>        
            </div>


         </div>

      </BookingsElement>  
	</BookingsContainer>

   )
}

export default Booking
