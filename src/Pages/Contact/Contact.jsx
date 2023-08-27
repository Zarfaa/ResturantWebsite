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
        <div className="mb-3">
  <input type="text" className="form-control" placeholder="Full Name"/>
</div>
<div className="mb-3">
  <input type="tel" className="form-control" placeholder="Phone Number"/>
</div>
        <div className="mb-3">
  <input type="email" className="form-control" placeholder="Email"/>
</div>
<div className="mb-3">
  <textarea className="form-control" rows="3" placeholder="Message"></textarea>
</div>
<div className="mb-3">
<button type="button" className="btn rounded-pill">SUBMIT</button>
</div>
    </div>
  </>
    )
}

export default Contact