import Img2 from "../../Assets/party.jpg"
import Img1 from "../../Assets/Birthday.jpg"
import "./Events.css"
import Navbar from "../../Components/Navbar/Navbar"

let Events = () =>{
    return(
    <>
     <div className="Navbar">
        <Navbar/>
        </div>
    <div className="Event_Container">
      <div class="row featurette m-5">
      <div class="col-md-7 animation">
        <span className="Event_Price">Rs.30000</span>
        <h2 class="featurette-heading fw-normal lh-1">Birthday Party</h2>
        <p class="lead">Book our Birthday Party Package today, and let us handle all the details while you focus on making wonderful memories with your loved ones. Contact us now to reserve your spot for an unforgettable birthday celebration at Foody</p>
        <ul>
        <li>Reserved Party Area</li>
            <li>Delicious Food Options</li>
            <li>Themed Decorations</li>
        </ul>
      </div>
      <div class="col-md-5">
      <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={Img1} width="500" height="500" alt= "event package" />
      </div>
    </div>
    <div class="row featurette m-5 ">
      <div class="col-md-7 order-md-2 animation">
       <span className="Event_Price">Rs.50000</span>
        <h2 class="featurette-heading fw-normal lh-1">Wedding Party</h2>
        <p class="lead">Are you craving an epic night of celebration, dancing, and unforgettable memories? Look no further! At Foody, we know how to throw a party, and our Party Night Package is designed to make your night out an absolute blast</p>
        <ul>
            <li>Exclusive VIP Entry</li>
            <li>Delicious Finger Foods</li>
            <li>Party Games and Activities</li>
        </ul>
      </div>
      <div class="col-md-5 order-md-1">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={Img2} alt= "event package" width="500" height="500" />
      </div>
    </div>
    </div>
    </>
    )
}

export default Events