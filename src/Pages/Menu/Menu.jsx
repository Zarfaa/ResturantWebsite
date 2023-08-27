import Pizza1 from "../../Assets/Pizza_Margherita.jpg"
import Pizza2 from "../../Assets/Chicken Fajita.jpg"
import Pizza3 from "../../Assets/Chicken Tikka.jpg"
import Pizza4 from "../../Assets/Very Veggie.jpg"
import Pasta1 from "../../Assets/Fettuccine Alfredo.jpg"
import Pasta2 from "../../Assets/Creamy Pasta.jpg"
import Pasta3 from "../../Assets/White Sauce Pasta.jpg"
import Dessert1 from "../../Assets/Cheese cake.jpg"
import Dessert2 from "../../Assets/Pastry.jpg"
import Dessert3 from "../../Assets/cup cake.jpg"
import { useState } from "react"
import "./Menu.css"
import Navbar from "../../Components/Navbar/Navbar"
let Menu = () =>{
    const [selectedCategory, setSelectedCategory] = useState("All");
    const clickHandler = (category) => {
        setSelectedCategory(category);
    };
    const itemsToShow = {
        All: ["Pizza", "Pasta", "Desserts"],
        Pizza: ["Pizza"],
        Pasta: ["Pasta"],
        Desserts: ["Desserts"],
    };
    return(
        <>
       <div className="Navbar">
        <Navbar/>
        </div>
      
<div>
    <h1 className="header animation"><i class="uil uil-restaurant"></i>Our Menu</h1>
    <div className="Menu_btn animation">
    {Object.keys(itemsToShow).map((category) => (
        <div
            key={category}
            onClick={() => clickHandler(category)}
            className={selectedCategory === "All" && category === "All" ? "selected" : ""}
        >
            {category}
        </div>
    ))}
</div>
{itemsToShow[selectedCategory].includes("Pizza") && (
    <section className="Items" id="Pizza">
        <div className="Menu_items">
            <img src={Pizza1} alt="Pizza_Margherita"/>
            <div className="Menu_text">
            <p className="Menu_title">Pizza Margherita</p>
            <p className="Menu_price">Rs 570</p>
            </div>
        </div>
        <div className="Menu_items">
            <img src={Pizza2} alt="Chicken Fajita"/><div className="Menu_text">
            <p className="Menu_title">Chicken Fajita</p>
            <p className="Menu_price">Rs 570</p>
            </div>
        </div>
        <div className="Menu_items">
            <img src={Pizza3} alt="Chicken Tikka"/><div className="Menu_text">
            <p className="Menu_title">Chicken Tikka</p>
            <p className="Menu_price">Rs 570</p>
            </div>
        </div>
        <div className="Menu_items">
            <img src={Pizza4} alt="Very Veggie"/><div className="Menu_text">
            <p className="Menu_title">Very Veggie</p>
            <p className="Menu_price">Rs 570</p>
            </div>
        </div>
    </section>
   )}

{itemsToShow[selectedCategory].includes("Pasta") && (
    <section className="Items" id="Pasta">
    <div className="Menu_items">
            <img src={Pasta1} alt="Fettuccine Alfredo"/><div className="Menu_text">
            <p className="Menu_title">Fettuccine Alfredo</p>
            <p className="Menu_price">Rs 790</p>
            </div>
        </div>
        <div className="Menu_items">
            <img src={Pasta2} alt="Creamy Pasta"/><div className="Menu_text">
            <p className="Menu_title">Creamy Pasta</p>
            <p className="Menu_price">Rs 530</p>
            </div>
        </div>
        <div className="Menu_items">
            <img src={Pasta3} alt="White Sauce Pasta"/><div className="Menu_text">
            <p className="Menu_title">White Sauce Pasta</p>
            <p className="Menu_price">Rs 650</p>
            </div>
        </div>
    </section>
    )}
    {itemsToShow[selectedCategory].includes("Desserts") && (
    <section className="Items" id="Desserts">
    <div className="Menu_items">
            <img src={Dessert1} alt="Cheese Cake"/><div className="Menu_text">
            <p className="Menu_title">Cheese Cake</p>
            <p className="Menu_price">Rs 350</p>
            </div>
        </div>
        <div className="Menu_items">
            <img src={Dessert2} alt="Pastry"/><div className="Menu_text">
            <p className="Menu_title">Pastry</p>
            <p className="Menu_price">Rs150</p>
            </div>
        </div>
        <div className="Menu_items">
            <img src={Dessert3} alt="Cup Cake"/><div className="Menu_text">
            <p className="Menu_title">Cup Cake</p>
            <p className="Menu_price">Rs 100</p>
            </div>
        </div>
    </section>
    )}
</div>
</>)
}
export default Menu