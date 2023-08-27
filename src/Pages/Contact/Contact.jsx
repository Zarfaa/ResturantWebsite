import "./Contact.css"
import Navbar from "../../Components/Navbar/Navbar"
let Contact = () =>{
    return(
        <>
         <div className="Navbar">
        <Navbar/>
        </div>

        
        <div className="Contact_title">
            <span>Drop a message</span>
            <h1>Contact Us</h1>
        </div>
        <div className="Contact_container">
        <div class="mb-3">
  <input type="text" class="form-control" placeholder="Full Name"/>
</div>
<div class="mb-3">
  <input type="tel" class="form-control" placeholder="Phone Number"/>
</div>
        <div class="mb-3">
  <input type="email" class="form-control" placeholder="Email"/>
</div>
<div class="mb-3">
  <textarea class="form-control" rows="3" placeholder="Message"></textarea>
</div>
<div class="mb-3">
<button type="button" class="btn rounded-pill">SUBMIT</button>
</div>
    </div>
  </>
    )
}

export default Contact