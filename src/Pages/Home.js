import Navbar from "../Components/Navbar";
import Coursel from "../Components/Coursel";
import Eyeglass from "../Components/Eyeglass";
import Brands from "../Components/Brands";
import Offer from "../Components/Offer";
import Lens from "../Components/Lens";
import Footer from "../Components/Footer";

export default function Home() {
  
  return (
    <div>
      <Coursel />
      <Eyeglass title="Trending Eye Frames" jsn="trending"/>
      <Eyeglass title="Popular Eye Frames" jsn="popular"/>
      <Brands />
      <Eyeglass title="Trending Sunglasses" jsn="popular"/>
      <Eyeglass title="Season Sale" jsn="popular"/>
      <Eyeglass title="Premium Sunglasses" jsn="popular"/>
      <Offer />
      <Eyeglass title="Best Shape Frames" jsn="popular"/>
      <Eyeglass title="Color Blind Glasses" jsn="popular"/>
      <Lens />
      <Footer />
    </div>
  )
}
