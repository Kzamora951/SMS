import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/todos/10')
      .then((respuesta) => {
        return respuesta.json();
      }).then((resp)=>{
        console.log(resp)
      })