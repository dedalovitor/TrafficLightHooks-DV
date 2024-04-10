import React, { useState, useEffect } from "react";
import Light from "./light";

const Home = () => {
    const [selectedColor, setSelectedColor] = useState("");
    const [colors, setColors] = useState(["red", "yellow", "green"]);
    const [autoChangeActive, setAutoChangeActive] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const handleAddExtraColor = () => {
        const hasPurple = colors.includes("purple");
        if (hasPurple) {
            const updatedColors = colors.filter(color => color !== "purple");
            setColors(updatedColors);
        } else {
            setColors([...colors, "purple"]);
        }
    };
    
        const toggleAutoChange = () => {
            if (autoChangeActive) {
                clearInterval(intervalId);
                setIntervalId(null);
            } else {
                const id = setInterval(() => {
                    setSelectedColor(prevColor => (prevColor === colors.length - 1 ? 0 : prevColor + 1));
                }, 3000);
                setIntervalId(id);
            }
            setAutoChangeActive(!autoChangeActive);
        };
    
        useEffect(() => {
            if (autoChangeActive && !intervalId) {
                const id = setInterval(() => {
                    setSelectedColor(prevColor => (prevColor === colors.length - 1 ? 0 : prevColor + 1));
                }, 3000);
                setIntervalId(id);
            }
            return () => {
                if (intervalId) {
                    clearInterval(intervalId);
                }
            };
        }, [autoChangeActive, intervalId, colors]);

    const handleChangeColor = () => {
        setSelectedColor(selectedColor === colors.length - 1 ? 0 : selectedColor + 1);
    };

    const selectFirstColor = () => {
        if (selectedColor == "") {
            setSelectedColor(0);
        }
    };


    return (
        <div className="trafficLightStructure text-center">
            <div className="blackStick">
            </div>
            <div className="traffic-light">
                {colors.map((item, index) => {
                    return <Light key={index} index={index} selectedColor={selectedColor} item={item} setSelectedColor={setSelectedColor} />
                })}
            </div>

            <div className="Buttons">
                <div className="d-grid gap-2 col-6 mx-auto">

                    <button className="btn btn-primary" onClick={() => {
                        handleAddExtraColor();
                    }

                    } type="button">{colors.includes("purple") ? "Remove Purple Color" : "Add Extra Purple Color 2"}</button>
                    <button className="btn btn-success" onClick={selectFirstColor} type="button">Select First Color</button>
                    <button className="btn btn-dark" onClick={handleChangeColor} type="button">Change color manually!</button>
                    <button className="btn btn-danger" onClick={toggleAutoChange}  type="button">{autoChangeActive ? "Stop Auto Change" : "Start Auto Change"}</button>
                    

                </div>


            </div>

        </div>


    );
}

export default Home;
