import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //const state = useFetchGifs();
    const { data:images, loading } = useFetchGifs( category );

    //console.log({ data, loading });
    
    
    /*const [images, setImages] = useState([]);
    
    useEffect( () => { //Si la category cambia, va a volver a ejecutar este hook

        getGifs( category ) //Retorna una promesa
            //.then( imgs => setImages( imgs )) 
            .then( setImages ); //también se puede escribir así en este caso la línea de arriba
    }, [ category ]);*/
/*
    const getGifs = async() => {    NOS LLEVAMOS TODO ESTE CODIGO A OTRO ARCHIVO COMO HELPER

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=12&api_key=iI6W0H5w2YPRicsqy9TqzHuU5pyooo5F`;
        const resp = await fetch( url ); // nos delvolverá una promise(response)
        const { data } = await resp.json(); // convierte la resp en un json, esto tambień es una promesa

        // Vamos a recorrer cada uno de los 12 resultados(gifs)
        const gifs = data.map( img => {

            // Y retornamos un objeto con la información exclusiva que nos interesa.
            return { 
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        });
        
        console.log(gifs);
        setImages( gifs ); //Ha pasado de ser un array vació(línea 5) a ser gifs( un objeto con tres elementos)

    }
*/
    return (

        <>
            <h3 className="card animate__animated animate__fadeIn"> { category } </h3>

            {/* Si loading está en true, mostramos Cargando... si no, Data cargada */}
            {/* { loading ? 'Cargando...' : 'Data cargada' } */}
            { loading && <p className="card animate__animated animate__flash">Cargando...</p>}{/* Esto es igual que lo de arriba pero es la forma corta */}

            <div className="card-grid">
                
                {
                    images.map( img => {
                        return (
                            <GifGridItem {...img} key={ img.id } /> //imag={ img } -> para no destructuring
                                                
                        )
                    })
                }
           </div>
        </>   
    )

}

/*
NOTAS:
 - El url lo hemos obtenido utilizando postman. 

 - getGifs es una función asíncrona porque contiene una petición a un servidor(const resp = await fetch( url );) que no sabemos cuánto 
 va a tardar en responder. 

 - Con fetch hacemos la petición(GET por defecto) al servidor y nos devuelve una promise(response).

 - Cuando obtenemos el json(data) vemos que nos devuelve 4 elementos, uno de ellos es data, lo que nos interesa. Con ayuda de
 la destruturación la obtenemos directamente {data}.

 - En el return de gifs usamos llaves en lugar de paréntesis porque retornamos un objeto.

 - url: img.images?.downsized_medium.url -> el signo de interrogación es por si en alguno no tiene la imagen. Le decimos, si tienes
 la imagen utilizada. En ese caso si no la tuviera no nos daría error. Simplemente no la utiliza.

 - useEffect nos permite ejecutar cierto código de manera condicional.

 - Con useEffect llamando a la función getGifs(), el 2º argumento de useEffect es un arreglo de dependencias, en este caso vacío. 
 Al dejarlo vacío conseguimos que no se repita todo el código de getGifs cada vez que cambiamos algo, por ej. si tuviesemos un botón
 incrementador de un valor, cada vez que lo pulsemos hará la petición fetch, pero si lo ponemos dentro de useEffect y con el array
 de 2º argumento vacío evitaremos eso. 

    En resumen, que el código de useEffect tal y como está ahí(ha cambiado ya) lo que consigue es que getGifs() sólo se ejecuta cuando el componente
    es renderizado por primera vez.

 - <GifGridItem img={ img }/> va a recibir el parámetro imag que contiene el img del images.map

 - Por cada elemento que recorre el images.map(img) retorna un GifGridItem con su contenido correspondiente.

 - {...img} -> usamos el operador spread de img como argumento de GifGridItem. De esta forma estoy enviando cada una de las propiedades
 de las imágenes como una propiedad independiente.

 - encodeURI() es para que reemplace los espacios por %20, etc.

*/