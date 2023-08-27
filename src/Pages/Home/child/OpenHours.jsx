

let Hours = () =>{
    return(
    <>
    <div className="opening_hours_Container">
    <h2><i class="uil uil-clock"></i>Open Hours</h2>
    <div className="Two-column-table">
        <div className="days-column">
            <p>Monday</p>
            <p>Tuesday</p>
            <p>Wednesday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Saturday</p>
            <p>Sunday</p>
        </div>
        <div className="hours-column">
            <p>9:00 - 24:00</p>
            <p>9:00 - 24:00</p>
            <p>9:00 - 24:00</p>
            <p>9:00 - 24:00</p>
            <p>9:00 - 02:00</p>
            <p>9:00 - 02:00</p>
            <p>9:00 - 02:00</p>
        </div>
        </div>
    </div>

    </>
    )
}

export default Hours