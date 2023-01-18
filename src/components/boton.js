import React from 'react';
import { ReactDOM } from 'react';
import '../styles/boton.css'

const Button = (props) => {
return(
    <button className='btn' type='submit'>{props.textoBoton}</button>
)
}

export default Button