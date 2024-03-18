import React from "react";
import stillWoozyImage from '/Users/ledialuli/Documents/Makers/React_Applications/GigReactTemplate/src/assets/Still-Woozy.jpeg';


const Gig = () => {
    return (<div id="Gig">
    <h3 id="band">Still Woozy</h3>
    <img src={stillWoozyImage} alt="Still Woozy"/>
    <p className="desciption">This is a gig</p>
    <p className="t-a-d">21/03/2024 at 9pm</p>
    <p className="location">London</p>
  </div>)
}
  export default Gig;
  

  // // Create a component called Gig, which contains information 
  // about a gig on the website. It should contain:

  // // A h3 (heading) element listing the name of the band
  // // A img (image) element for an image of the band,
  //  using the src attribute to link to an image.
  // // A p (paragraph) element containing a description of the event
  // // A p element containing the time and date of the event
  // // A p element containing the location of the event
  // // You can come up with the event details yourself.