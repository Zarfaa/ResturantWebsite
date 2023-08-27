import "./Footer.css"


let Footer = () =>{
    return(
<footer className="footer-area">
<div className="container">
<div className="row">
<div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
<div className="single-footer-widget footer_1">
<h4>About Us</h4>
<p>your go-to destination for delicious fast food on the go!</p>
</div>
</div>
<div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
<div className="single-footer-widget footer_2">
<h4>Contact us</h4>
<div className="contact_info">
<p><span> Address :</span>steet 76 , Lahore </p>
<p><span> Phone :</span> +92 36 265 (8060)</p>
<p><span> Email : </span>info@Foody.com </p>
</div>
</div>
</div>
<div className="col-xl-3 col-sm-6 col-md-4 col-lg-3">
<div className="single-footer-widget footer_3">
<h4>Newsletter</h4>
<p>Drop a message</p>
<form action="#">
<div className="form-group">
<div className="input-group mb-3">
<input type="text" className="form-control" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'"/>
<div className="input-group-append">
<button className="btn" type="button"><i class="uil uil-message"></i></button>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
<div className="copyright_part_text">
<div className="row">
<div className="col-lg-8">
<p className="footer-text m-0">
© Foody 2023
</p>
</div>
</div>
</div>
</div>
</footer>
    )
}

export default Footer