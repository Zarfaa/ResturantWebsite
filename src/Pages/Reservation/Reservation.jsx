import "./Reservation.css"
import Navbar from "../../Components/Navbar/Navbar"

let Reservation = () =>{
    return(
      <>
        <div className="Navbar">
        <Navbar/>
        </div>
      
    <div className="Form_container">
        <div className="Form_title">
     <span>Reservation</span>
     <h1>Book A Table</h1>
     </div>
     <form class="two-column-form">
  <div class="column">
    <label for="name">Name</label>
    <input type="text" id="name" required/>
    
    <label for="persons">Persons</label>
    <input type="number" id="persons" placeholder="Number of guests" required/>
    
    <label for="date">Date</label>
    <input type="date" id="date" required/>
    <button className="form_btn" type="submit">Book A Table</button>
  </div>
  
  <div class="column">
    <label for="email">Email</label>
    <input type="email" id="email" required/>
    
    <label for="phone">Phone Number</label>
    <input type="text" id="phone" required/>
    
    <label for="time">Time</label>
    <input type="time" id="time" required/>
  </div>
</form>

    </div>
    </>
    )
}

export default Reservation