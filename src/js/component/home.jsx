import React, { useState, useEffect } from "react";
import Light from "./light";

const Home = () => {
    const [selectedColor, setSelectedColor] = useState("");
    const [colors, setColors] = useState(["red", "yellow", "green"]);

    const handleAddExtraColor = () => {
        const hasPurple = colors.includes("purple");
        if (hasPurple) {
            const updatedColors = colors.filter(color => color !== "purple");
            setColors(updatedColors);
        } else {
            setColors([...colors, "purple"]);
        }
    };

    useEffect(() => {
        let intervalId;

        if (selectedColor !== "") {
            intervalId = setInterval(() => {
                setSelectedColor(prevColor => (prevColor === colors.length - 1 ? 0 : prevColor + 1));
            }, 3000);
        }

        return () => clearInterval(intervalId);
    }, [selectedColor, colors]);

    const handleChangeColor = () => {
        setSelectedColor(selectedColor === colors.length - 1 ? 0 : selectedColor + 1);
    };

    const selectFirstColor = () => {
        if (selectedColor == "") {
            setSelectedColor(0);
        }
    };

    const stopSelectedColor = () => {
        let i= colors.indexOf();
        if (selectedColor == colors[i]) {
            setSelectedColor("");
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
                    <button className="btn btn-primary" onClick={handleChangeColor}

                        type="button">Change color!</button>
                    <button className="btn btn-primary" onClick={selectFirstColor}

                        type="button">Select First Color</button>
                    <button className="btn btn-primary" onClick={stopSelectedColor}

                        type="button">Stop selected color</button>
                </div>


            </div>

        </div>


    );
}

export default Home;
