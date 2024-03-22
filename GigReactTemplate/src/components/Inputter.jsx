import React, { useState } from "react";

const Inputter = () => {
    const handleChange = (event) => {
        console.log(event.target.value);
    }
    return (
        <input
          type="text"
          placeholder="Type here..."
          onChange={handleChange}
        />
      );

}

export default Inputter;
