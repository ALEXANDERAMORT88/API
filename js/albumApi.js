const apiAlbum = "https://jsonplaceholder.typicode.com/photos";

//2)
const getDataAlbum = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        fillDateAlbum(json);
    })
    .catch((error) => {
        console.log("Error desde la API", error),
        alert("La API  no esta disponible");
    });
};

//1)
const fillDateAlbum = (jsonDataAlbum) => {
    let htmlAlbum = "";
    for (let i = 0; i < 20; i++) {//con el for vamos a dar la catidad de informacion que vamos a ver en el DOM
        htmlAlbum += '<div class="col">';
        htmlAlbum += '<div class="card">';
        htmlAlbum += `<img src="${jsonDataAlbum[i].url}" class="card-img-top" alt="...">`
        htmlAlbum += '<div class="card-body">'
        htmlAlbum += `<h5 class="card-title">${jsonDataAlbum[i].title}</h5>`
        htmlAlbum += '</div>';
        htmlAlbum += '</div>';
        htmlAlbum += '</div>';
        
    };
    
    document.getElementById("cardFormApiAlbum").innerHTML = htmlAlbum;
};

getDataAlbum(apiAlbum)