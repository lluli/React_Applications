import React from "react";


const Profile = (props) => {
    return (<div id="profile">
    <h1 id="name">{props.name}</h1>
    <p id="job" data-testid="job">{props.job}</p>
    <p id="year" data-testid="year">{props.year}</p>
  </div>)
}
  export default Profile;
  