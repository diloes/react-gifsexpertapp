import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Pastor Alemán'])
/*
    const añadir = () => {

        setCategories([...categories, 'Malinois']);
        // o también se puede hacer con callback -> setCategories( (cats) => [...cats, 'Malinois'] );

    }
*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>

            <ol>
                {
                    categories.map( ( category ) => {

                        return (           // El return y parentesis se puede quitar, pero yo me entero mejor así por ahora
                            <GifGrid 
                            key={ category }
                            category={ category } 
                            />
                        )
                    })
                }
            </ol>

        </>
    )
}

/*

NOTAS:
 -  En key vamos a colocar el id único del elemento. Sirve para que React sepa cuál es el elemento que está iterando. Si ese key
 cambia o se necesita borrar, hacer renderizaciones o cambiar algo, react se va a basar en base a key.  

 - const añadir es una tarea resuelta por mi. Si quisieramos que 'Malinois' estuviese primero en la lista lo pondriamos así:
    ['Malinois',...categories ]

 - setCategories también puede tener un callback en el cual el argumento es el valor del estado anterior -cats- y el 
 nuevo estado -[..cats, 'Malinois']- o los valores anteriores más el que yo estoy agregando.

 - Si le damos más de una vez al botón añadir, la consola nos marcará el error de que la key se repite, ya que esta
 debe ser única, y aquí le estamos dando el nombre de la categoria que es lo mismo que estamos agregando. Si la agregamos
 más de una vez, hacemos lo mismo con la key. Esto normalmente no suele pasar porque la key es un identificador de una base de 
 datos único e irrepetible. 

 - En esta línea <AddCategory setCategories={ setCategories }/> ,setCategories es un prop

 - El categories.map también podria escribirse... -> categories.map( category => <li key={category}> { category } </li>)
para ahorra código, pero yo me entero mejor por ahora como lo he dejado. Bueno ya se ha reemplazado por <GifGrid />. 

*/
