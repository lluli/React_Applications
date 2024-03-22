import React, { useState } from "react";

const Die = () => {
    const [number, setNumber] = useState(0);

    const roll = () => {
        const randomNumber = Math.floor((Math.random() * 6) + 1);
        setNumber(randomNumber);
        };

    return (
        <div>
          <h1>{number}</h1>
          <button onClick={roll}>Roll</button>
        </div>
      );

}

export default Die;
