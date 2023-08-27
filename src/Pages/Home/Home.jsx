import "./Home.css"
import Hero from "./child/Hero"
import Intro from "./child/Intro"
import Counter from "./child/Counter"
import OpenHours from "./child/OpenHours"
import Navbar from "../../Components/Navbar/Navbar"

let Home =() =>{
    return(<>
    <div className="home_Container">
      <Navbar/>
     <Hero/>
     </div>
     <Intro/>
     <Counter/>
    <OpenHours/>
    </>
    )
}

export default Home