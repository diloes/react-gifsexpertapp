import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValor, setInputValor] = useState('Introduce tu búsqueda');

    const manipularInputChange = e => {

        setInputValor(e.target.value)

    }

    const enviarSubmit = e => {
        
        e.preventDefault(); 

        if( inputValor.trim().length > 2 ) {

            setCategories( catgrs => [ inputValor , ...catgrs ]);
            setInputValor('');
        }

    }

    //Esto es un añadido personal by diloes
    const clickVacio = e => {

        if(inputValor === 'Introduce una raza') { 
            setInputValor('');
        }
        
    }

    return (
        <form onSubmit={ enviarSubmit }>
            <input 
                type="text"
                value={ inputValor }
                onChange={ manipularInputChange }
                onClick={ clickVacio }
            />
        </form>
    )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}

/*

NOTAS: 
 - Este componente AddCategory sirve para añadir a través de un input una nueva categoría a la lista(array)

 - El atributo onChange es: cuando cambie algo en el imput vas a hacer lo que está en las llaves

  - No es necesario tener siempre el fragment <> </> o <fragment></fragment> ya que lo único que nos pide react es que todo esté
 envuelto en una etiqueta, un padre. En este caso usaremos <form></form>
 
 - e.preventDefault(); es para prevenir el comportamiento por defecto del formulario, que es recagar la página 
 cuando damos a enter. Si lo ponemos la página no se recargará, que es lo que queremos. 
 
 - if( inputValor.trim().length > 2 ) -> si imputValor sin contar los espacios delante y detrás es mayor que dos...
setCategories( catgrs => [...catgrs, inputValor]); -> añadimos al array(estado) de GifExpertApp lo que hemos introducido en el input 
 
 - setInputValor(''); -> el estado de inputValor será un string vacío después de pulsar enter

 - Con PropTypes.func.isRequired nos aseguramos que cualquiera que utilice nuestro componente con los argumentos que estoy esperando.

*/