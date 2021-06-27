import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({

        data: [],
        loading: true

    });

    useEffect( () => { //los useEffect no pueden ser async 

        getGifs( category ) //esto es una promesa
            .then( imgs => {
                 
                //console.log(imgs)
                setState({
                    data: imgs,
                    loading: false    
                });        
            })

    }, [category])

/*    
    setTimeout(() => {       
        setState({
            data: [1,2,3,4,5,6,7],
            loading: false
        })
    }, 3000);
*/
    return state; //El state es un objeto con { data[], loading: true }

}



/*
NOTAS:
 - Todos los hooks empiezan por 'use...', como useState, useEffect... Cuando hacemos un custom hook no es obligatorio que empiece
 por use, pero es un standard que sí empiece así para que otros programadores sepan que es un hook. 


*/