const apiPeople = "https://rickandmortyapi.com/api/character";
const btnApiCharacter = document.getElementById("btnApiCharacter");

 //2)
 const datacharacter = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        fillCharacter(json);
    })
    .catch((error)=> {
        console.log("Error desde la API", error),
        alert("La API no esta disponible");
    })
}

//1)
const fillCharacter = (jsonCharacter) => {
    let htmlCharacter = "";

    for (let i = 0; i < 20; i++) { // Tambien puedo usar el forEach ya que la API solo me enseña 20 json
            htmlCharacter += '<div class="col ">';
            htmlCharacter += '<div class="card d-flex align-items-center">';
            htmlCharacter += `<h5 class="card-title m-3">${jsonCharacter.results[i].name}</h5>`;
            htmlCharacter += `<img class="w-75" src="${jsonCharacter.results[i].image}" class="card-img-top" alt="...">`;
            htmlCharacter += '<div>';
            htmlCharacter += `<ul class="nav-item"><li class="unstyled">${jsonCharacter.results[i].type}</li></ul>`;
            htmlCharacter += `<ul class="nav-item"><li class="unstyled">${jsonCharacter.results[i].type}</li></ul>`;
            htmlCharacter += '</div>';
            htmlCharacter += '</div>';
            htmlCharacter += '</div>';
    };
    document.getElementById("cardCharacter").innerHTML = htmlCharacter;
};

btnApiCharacter.onclick = function () {
    datacharacter(apiPeople);
}



