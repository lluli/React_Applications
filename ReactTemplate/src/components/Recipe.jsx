import React from "react";

const Recipe = (props) => {
    return (
        <div id="Recipe">
            <h1 data-testid="title">{props.title}</h1>
            <h2 data-testid="type">{props.type}</h2>
            <h3 data-testid="duration">{props.duration}</h3>
        </div>
    );
}

export default Recipe;
