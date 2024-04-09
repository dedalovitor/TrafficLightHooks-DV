import React, { useState, useEffect } from "react";

export function Home() {
    const [selectedColor, setSelectedColor] = useState("red");
    const [show, setShow] = useState(false);


	const handleTurnToEachColor= () => {
        const interval = setInterval(() => {
            switch (selectedColor) {
                case "red":
                    setSelectedColor("yellow");
                    break;
                case "yellow":
                    setSelectedColor("green");
                    break;
                case "green":
                    setSelectedColor("purple");
                    break;
                case "purple":
                    setSelectedColor("red");
                    break;
                default:
                    setSelectedColor("red");
                    break;
            }
        }, 3000);

        return () => clearInterval(interval);
    };

    return (
        <div className="trafficLightStructure text-center">
            <div className="Rect">
                <rect className="blackStick"></rect>
            </div>
            <div className="traffic-light">
                <div
                    onClick={() => setSelectedColor("red")}
                    className={"light red" + (selectedColor === "red" ? " glow " : "")}>
                </div>
                <div
                    onClick={() => setSelectedColor("yellow")}
                    className={"light yellow" + (selectedColor === "yellow" ? " glow " : "")}>
                </div>
                <div
                    onClick={() => setSelectedColor("green")}
                    className={"light green" + (selectedColor === "green" ? " glow " : "")}>
                </div>
                {show && (
                    <div
                        onClick={() => setSelectedColor("purple")}
                        className={"light purple" + (selectedColor === "purple" ? " glow " : "")}>
                    </div>
                )}
            </div>
            <div className="Buttons">
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" onClick={handleTurnToEachColor} type="button">Turn to each color</button>
                    <button className="btn btn-primary" onClick={() => setShow(!show)} type="button">add Extra Purple Color</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
