import React, { useState, useEffect } from "react";

export function Home() {
    const [selectedColor, setSelectedColor] = useState("red");
    const [show, setShow] = useState(false);
    const colors =["red", "yellow", "green"];


    return (
        <div className="trafficLightStructure text-center">
            <div className="Rect">
                <rect className="blackStick"></rect>
            </div>
            <div className="traffic-light">
            {colors.map((item, index)=>{
                return <div key={index}
                onClick={() => setSelectedColor(index)}
                className={`light ${item} + ${selectedColor === index ? " glow " : " red "} `}>
            </div>
            })}
            {show && (
                    <div
                        onClick={() => setSelectedColor("purple")}
                        className={"light purple" + (selectedColor === "purple" ? " glow " : "")}>
                    </div>
                )}
            </div>

            <div className="Buttons">
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary"  type="button">Turn to each color</button>
                    <button className="btn btn-primary" onClick={() => setShow(!show)} type="button">add Extra Purple Color</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
