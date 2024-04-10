import React, { useState, useEffect } from "react";
import Light from "./light";


/*
 * En la home definimos los useStates donde vamos a almacenar los diferentes estados: 
 * - selectedColor: determina la luz que se encuentra seleccionada y setSelectedColor permite definir la nueva luz 
 * que se va a seleccionar, se inicializa en un string vacio "".
 * - colors: es un array de colores, donde podemos meter más colores mediate setColors, y que podemos recorrer para hacer el map de las luces
 * - AutoChangeActive: se inicializa en false y permite setear el estado del botón de cambio de luz. De esta forma activo hace un start del
 * cambio automático de luz cada 3 segundos.
 * - intervalId: 
 */


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
/**
 * Esta función se activa al clicar sobre el botón "Add Extra Purple Color 2".
 * Como lo que queremos es que se cree una vez y se borre la luz purple al clicar y volver a clicar sobre el botón
 * creamos una variable con la que determinamos si purple ha sido incluida en el array colors
 * con if condicional determinamos dentro de una nueva variable updatedColors que si ha sido incluida haga un .filter de todos los colores menos el purple
 * y seteamos el array de colores a updatedColors, si no ha sido incluido, seteamos el array de colores añadiendole purple. 
 * De esta forma conseguimos que se muestre la nueva luz morada en el semáforo, habiendo sido necesario para ello utilizar un estado para poder setearla 
 * y renderizar el elemento inmediatamente. 
 */

        const toggleAutoChange = () => {
            if (autoChangeActive) {
                clearInterval(intervalId);
                setIntervalId(null);
            } else {
                const id = setInterval(() => {
                    setSelectedColor(prevColor => (prevColor === colors.length - 1 ? 0 : prevColor + 1)); // no entiendo por qué se utiliza el prevColor, revisar qué significa esa sintaxis 
                }, 3000);
                setIntervalId(id);
            }
            setAutoChangeActive(!autoChangeActive);
        };

        /*
         * Con esta función utilizamos un condicional para indicar que si nos encontramos con que el estado de 
         * autoChangeActive es false, limpiamos el intervalId y lo seteamos a null, de manera que paramos de cambiar automáticamente el color del semáforo.
         * Si autoChangeActive lo ponemos a true se activa la condición else en la que creamos una variable llamada id, en la que seteamos el Intervalo en el
         * que cambiamos de color y le decimos que si el color es el último del array que nos cambie al primero y que si es cualquier otro que nos cambie al siguiente,
         * esto lo hace cada 3 segundos. 
         * La última línea nos permite inicializar y hacer stop del setAutoChangeActive, ya que al invocarlo le decimos que su estado será el contrario del que estaba,
         * pasa de activo a inactivo y viceversa.
        */
    
        /*useEffect(() => {
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
        }, [autoChangeActive, intervalId, colors]);*/

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
