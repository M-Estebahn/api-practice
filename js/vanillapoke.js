"use strict";

var pokeUrl= "https://pokeapi.co/api/v2/pokemon"

fetch(pokeUrl).then(data=> {
    console.log(data)
    console.log(data.json())
    data.json().then(res=>{

    })

   })
//     res.results.forEach(result=>{
//         fetch(result.url).then(pokemon=>{
//             document.getElementById('card-table').innerHTML=
//             '<div class="small-card col-sm-12 col-md-3 ">'+
//             '<div>'+'<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+pokemon.id+'.png"' +' alt='+pokemon.name+'>'+'</div>'+
//             '<h3>'+pokemon.name+'</h3>'+
//             '<hr>'+
//             '<h4>'+'Moves:'+'</h4>'+
//             '<h5>'+pokemon.moves[0].move.name+'</h5>'+
//             '<h5>'+pokemon.moves[1].move.name+'</h5>'+
//             '<h5>'+pokemon.moves[2].move.name+'</h5>'+
//             '</div>'
//
//         })
//     })
// }).catch(error=>{
//     console.log(error)
// })