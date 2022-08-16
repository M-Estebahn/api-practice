"use strict";

var pokeUrl = "https://pokeapi.co/api/v2/pokemon"

try {
    fetch(pokeUrl)
        .then(res => {
            return res.json()
        }).then(data => {
        console.log(data.results)
        data.results.forEach(result => {
            fetch(result.url).then(pokemon => {
                document.getElementById('card-table').innerHTML =
                    '<div class="small-card col-sm-12 col-md-3 ">' +
                    '<div>' + '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + pokemon.id + '.png"' + ' alt=' + pokemon.name + '>' + '</div>' +
                    '<h3>' + pokemon.name + '</h3>' +
                    '<hr>' +
                    '<h4>' + 'Moves:' + '</h4>' +
                    '<h5>' + pokemon.moves[0].move.name + '</h5>' +
                    '<h5>' + pokemon.moves[1].move.name + '</h5>' +
                    '<h5>' + pokemon.moves[2].move.name + '</h5>' +
                    '</div>'
            }).catch(err => {
                console.log(err)
            })


        }
    catch
        (err)
        {
            console.log(err)
        }


//
//         })
//     })
// }).catch(error=>{
//     console.log(error)
// })