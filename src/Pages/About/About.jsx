import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Assets/AboutHero.jpg"
import "./About.css"

const AboutUs = () => {
  return (
    <>
    <div className="About_Nav">
        <Navbar/>
        <h2 className="section-title">Foodys - gathering place for food enthusiasts</h2>
        </div>
    <section className="about-us">
      <div className="container">
        <div className="row">
            <h3 className="mb-5 Header">Our Story</h3>
          <div className="col-lg-6 col-md-6">
            <p className="section-description pb-4">
              Welcome to Foody, your ultimate destination for delightful fast food experiences. At Foody, we are passionate about creating mouthwatering dishes that satisfy your cravings and ignite your taste buds. Our expertise lies in crafting irresistible pasta and pizza combinations that are sure to leave you craving for more.
            </p>
            <p className="pb-4">
              With a focus on quality ingredients and authentic flavors, we take pride in delivering not only a meal but a memorable culinary journey. From classic favorites to innovative creations, our menu is designed to cater to diverse palates, ensuring there's something for everyone.
            </p>
            <p>
              Whether you're dining in or enjoying the comfort of your home, Foody promises a delightful experience backed by friendly service and a welcoming ambiance. Join us in our culinary adventure and let us treat you to a feast that reflects our passion for good food.
            </p>
          </div>
          <div className="col-lg-6 col-md-6">
            <img
              src={Hero} 
              alt="About Foody"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>

  
    </>
  );
};

export default AboutUs;
