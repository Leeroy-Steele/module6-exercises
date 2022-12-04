import React from 'react'

export default function APICall() {


    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100')  // returns a promise that gets parsed to a JS object
    .then((resp)=>resp.json())
    .then((resp)=>{
        for(let i in resp.results){
            let pokemonName = resp.results[i].name
            console.log(pokemonName)
            document.getElementById('pokemonNameP').innerHTML+= pokemonName + ', '
        }
        
           
    })

  return (
    <div>
        <h2>*** Pokemon APICall ***</h2>
    
        <p id='pokemonNameP'><b>Pokemon names go here:</b><br></br> </p>
    
    </div>
  )
}
