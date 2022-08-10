$.get("https://pokeapi.co/api/v2/pokemon/").done(data=> {
    console.log(data)
    console.log(data.next)
    console.log(data.results[0].name)
    data.results.forEach(poke=> {
        $.get(poke.url).done(data=> console.log(data.name +' '+data.id))
    })
})