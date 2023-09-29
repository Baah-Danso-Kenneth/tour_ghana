import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/HomePage/LandingPage"

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
  )
}

export default PublicRoutes
