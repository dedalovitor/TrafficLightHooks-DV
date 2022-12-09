import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [selectedColor, setSelectedColor] = useState("red");
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
			</div>
			<div className="Buttons">
				<div className="d-grid gap-2 col-6 mx-auto">
					<button className="btn btn-primary" type="button">Turn to each color</button>
					<button className="btn btn-primary" type="button">add Extra Purple Color</button>
				</div>
			</div>
		</div>

	);
}

export default Home

