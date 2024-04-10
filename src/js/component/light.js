import React, { useState } from "react";

/*
Hemos creado el componente Light al que le pasamos las props: 
- selectedColor (índice del color seleccionado: 0 red, 1 yellow, 2 green..)
- item: es cada uno de los colores dentro del array colors
- index: es cada uno de los índices del array color
- setSelectedColor: es la función del useState que nos permite setear el estado del color seleccionado.

De esta forma, mediante un .map del array colors vamos a recorrerlo y renderizar una luz del semáforo por cada color.
La primera funcionalidad integrada es que si clicamos sobre una luz la seleccionamos, y al seleccionarla hacemos 
que se ilumine " glow " (definido como clase en css), si no está seleccionada deja de iluminarse.
La manera de configurar el comportamiento y estética de cada luz es a través del className, donde utilizamos el
literal string `..` y dentro le pasamos las propiedades  
*/

const Light = ({selectedColor, item, index, setSelectedColor})=>{
    return (
        <div key={index}
                onClick={() => setSelectedColor(index)}
                className={`light ${item}  ${selectedColor === index ? " glow " : " "} `}>
            </div>
    );
};

export default Light;