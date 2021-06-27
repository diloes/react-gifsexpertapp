import React from 'react'

/* SIN DESTRUCTURING:

export const GifGridItem = ( imag ) => {

    console.log(imag.imag.id)
    console.log(imag.imag.title)  
    console.log(imag.imag.url

    return (
        <div>
            <img src={ imag.imag.url } alt={ imag.imag.title } />
            <p> { imag.imag.title } </p>
        </div>
    )
*/

/* CON DESTRUCTURING: */
export const GifGridItem = ({ id, title, url }) => {
    
    //console.log({ id, title, url });

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div> 
    )
}

/*
NOTAS:
 - El console.log(imag) nos muestra cada img del images.map con sus tres elementos.
 - imag debería llamarse props, pero lo voy a quedar así para entender el funcionamiento, es lo que se llamaría, las properties.

*/