const apiPokemon = "https://apisimpsons.fly.dev/api/personajes?limit=20&page=2";
const btnApiPokemon = document.getElementById("btnApiPokemon");

//2)
const dataPokemon = (urlPOkemon) => {
    fetch(urlPOkemon)
    .then((reponse) => reponse.json())
    .then((json) =>{
        fillPokemon(json);
    })
    .catch((error) =>{
        console.log("Error desde la API", error),
        alert("la API no esta disponible")
    })
}


//1)
const fillPokemon = (jsonPokemon) => {
    let htmlPokemon = "";

    for (let i = 0; i < 20; i++) {
        htmlPokemon += '<div class="row ">';
        htmlPokemon += '<div class="col-10 d-flex align-items-center card m-3">';
        htmlPokemon += `<h5 class="card-title m-2">${jsonPokemon.docs[i].Nombre}</h5>`;
        console.log(jsonPokemon.docs[i].Nombre)
        htmlPokemon += `<img src="${jsonPokemon.docs[i].Imagen}" class="card-img-top w-50 " alt="...">`;
        console.log(jsonPokemon.docs[i].Imagen)
        htmlPokemon += '<div>';
        htmlPokemon += `<p>Genero: ${jsonPokemon.docs[i].Genero}</p>`;
        htmlPokemon += `<p>${jsonPokemon.docs[i].Historia}</p>`;
        htmlPokemon += '</div>';
        htmlPokemon += '</div>';
        htmlPokemon += '</div>';
    };
    document.getElementById("cardPokemon").innerHTML = htmlPokemon;
};

btnApiPokemon.onclick = function (){
    dataPokemon(apiPokemon)
}