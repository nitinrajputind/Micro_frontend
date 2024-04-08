import React from 'react';
import ReactDom from "react-dom";
import App from './App';


console.log('hello now it is woking')

// Mount funstion to start up the application
const mount = (el) =>{
    ReactDom.render(
        <App/>,
        el
    )
}



// If we are in development and in isolation mode,
// call mount() immediately
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root')
    if(devRoot){
        mount(devRoot)
    }
}

// we are running through the container
// and we should export the mount function

export { mount };