import { useEffect, useState } from "react"
import Adventure from "../../components/Adventure/Adventure"
import Booking from "../../components/Bookings/Booking"
import Brands from "../../components/Brands/Brands"
import Footer from "../../components/Footer/Footer"
import HeroSection from "../../components/HeroSection/HeroSection"
import Navbar from "../../components/Navbar/Navbar"
import NewsLetters from "../../components/NewsLetter/NewsLetter"
import Kindwords from "../../components/Recommendation/KindWords"
import Recommend from "../../components/Recommendation/Recommend"
import WhatweDo from "../../components/WhatweDo/WhatweDo"
import WhereWeGo from "../../components/WhereWeGo/WhereWeGo"
import WomenInBusiness from "../../components/WomenInBusiness/WomenInBusiness"
import { CheckLoader, LandingPageContainer } from "./LandingPage.styled"
import Loader from '../../assets/images/loader_page.jpeg';


function LandingPage() {
  const [pageLoaded, setPageLoaded] = useState(false);


  useEffect(()=>{
    setTimeout(()=>{
      setPageLoaded(true);
    },2000)
  },[])
  return (

    <div>
      {!pageLoaded ? (
        <CheckLoader>
          <img src={Loader} alt='loader'/>
        </CheckLoader>
      ):(

      <LandingPageContainer>
      <Navbar/>
      <HeroSection/>
      <WhatweDo/>
      <WhereWeGo/>
      <Recommend/>
      <WomenInBusiness/>
      <Brands/>
      <Adventure/>
      <Booking/>
      <Kindwords/>
      <NewsLetters/>
      <Footer/>
    </LandingPageContainer>
      )}
    </div>


  )
}

export default LandingPage