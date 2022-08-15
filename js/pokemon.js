$.get("https://pokeapi.co/api/v2/pokemon/").done(data=> {
    console.log(data)
    console.log(data.next)
    console.log(data.results[0].name)
    data.results.forEach(poke=> {
        $.get(poke.url).done(pokemon=> {
            console.log(pokemon.name +' '+pokemon.id)
            $('#card-table').html(document.getElementById('card-table').innerHTML+
                '<div class="small-card col-sm-12 col-md-4">'+
                '<div>'+'<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+pokemon.id+'.png"' +' alt='+pokemon.name+'>'+'</div>'+
                '<h3>'+pokemon.name+'</h3>'+
                '<h4>'+'Abilities'+'</h4>'+
                '<h5>'+pokemon.abilities[0].ability.name+'</h5>'+
                '<h5>'+pokemon.abilities[1].ability.name+'</h5>'+
            '</div>'
            );

        })
    })
})