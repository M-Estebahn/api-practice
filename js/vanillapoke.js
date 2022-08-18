"use strict";

//Attempt 1 trying to reach through 2 layers to get each pokemon. receiving  an undefined error not able to use fetch to get poke information on the second layer by using for each on the url recieved from the first layer.

var pokeUrl = "https://pokeapi.co/api/v2/pokemon"

    fetch(pokeUrl)
        .then(res => {
            return res.json()
        }).then(data => {
        console.log(data.results)
        data.results.forEach(pokeData=>
            fetch(pokeData.url)
                .then(data=>{
                return data.json()
        }).then(pokemon=>
            console.log(pokemon.name+' '+pokemon.id)
            ).catch(err=> console.log(err))
    })


//Attempt 2: cycling through pokeinformation using a loop to grab each individually and then storing data in an array. (success) next break into smaller arrays then paginate.

// var promises=[];
//
// for(let i=1;i<151;i++){
//     const url=`https://pokeapi.co/api/v2/pokemon/${i}`;
//     promises.push(fetch(url).then(res=>res.json()));
// }
//
//     Promise.all(promises).then(pokedata=>{
//         console.log(pokedata)
//         pokedata.forEach(pokemon=>{
//             document.getElementById('card-table').innerHTML+=
//                 '<div class="small-card col-sm-12 col-md-3 ">'+
//                 '<div>'+'<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+pokemon.id+'.png"' +' alt='+pokemon.name+'>'+'</div>'+
//                 '<h2>'+pokemon.name+'</h2>'+
//                 '<h3>'+'ID: '+pokemon.id+'</h3>'+
//                 '<hr>'+
//                 '<h4>'+'Moves:'+'</h4>'+
//                 '<h5>'+pokemon.moves[0].move.name+'</h5>'+
//                 '<h5>'+pokemon.moves[1].move.name+'</h5>'+
//                 '<h5>'+pokemon.moves[2].move.name+'</h5>'+
//             '</div>'
//
//         })
//
// })


