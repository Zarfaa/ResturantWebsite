import AboutImg from "../../../Assets/about.png"


let Intro =() => {
 return(
    <div className="About_Container">
        <div className="About_Img"><img src={AboutImg} alt="About background"/></div>
        <div  className="About_Description animated-scroll">
            <span>Our History</span>
            <h2>Where The Food's As Good As The Freshly Brewed Coffee</h2>
            <h4>Satisfying people hunger for simple pleasures</h4>
            <p>your go-to destination for delicious fast food on the go! At Quick Bites, we take pride in serving up mouthwatering meals that are not only satisfying but also prepared with the freshest ingredients. Whether you're in a hurry during lunchtime or seeking a quick and tasty dinner option, we've got you covered!</p>
        </div>
     </div>
 )
}
export default Intro