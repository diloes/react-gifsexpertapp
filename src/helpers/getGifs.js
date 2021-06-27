

export const getGifs = async( category ) => {

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
    
    return gifs; 

}


/* 
NOTAS:
 - Los helpers son funciones que hacen un trabajo específico, pueden recibir argumentos, lo procesan y hacen algún return. 

 - Hemos quitado esta función asíncrona del componente GifGrid. 
 
 - Como getGifs es una función asíncrona no retorna directamente los gifs, si no una promesa que resuelve la colección
   de imágenes. 

*/
