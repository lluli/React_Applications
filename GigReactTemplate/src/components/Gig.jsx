import React from "../../../ReactTemplateForms/node_modules/@types/react";

const Gig = (props) => {
  return (
    <div id="Gig">
      <h3 id="band" data-testid="band">{props.name}</h3>
      <img width='500px' src={props.image} alt="BandImage"/>
      <p className="description" data-testid="description">{props.description}</p>
      <p className="t-a-d" data-testid="timedate">{props.timedate}</p>
      <p className="location" data-testid="location">{props.location}</p>
    </div>
  );
};

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