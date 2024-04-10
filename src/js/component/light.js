import React, { useState } from "react";

const Light = ({selectedColor, item, index, setSelectedColor})=>{
    return (
        <div key={index}
                onClick={() => setSelectedColor(index)}
                className={`light ${item} + ${selectedColor === index ? " glow " : " "} `}>
            </div>
    );
};

export default Light;