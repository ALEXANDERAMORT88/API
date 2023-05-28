  //URL de la API de Usuarios
const api = "https://jsonplaceholder.typicode.com/users";
const btnApiUser = document.getElementById("apiUsers");

//Obtener la informacion de la API
//funcion flecha: la usamos para ejecuatr algo.
const getData = (url) => {
  // la url recibe de la api que esta en la linea 20
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillDate(json); //2. aqui ya uso la const
    })
    .catch((error) => {
      console.log("error desde la API", error),
        alert("la API no esta disponible");
    });
};

const fillDate = (jsonData) => {
  //1. primero creo la const para guardar datos de usuarios
  // aqui vamos a  crear los cards
  let htmlCard = "";
  console.log(jsonData);
  jsonData.forEach((e) => {// este es un ciclo for que nos permite repetir
    //el forEach solo trabaja con array
    htmlCard += '<div class="row">';
    htmlCard += '<div class="col card m-3">';
    htmlCard += '<div class="card-body">';
    htmlCard += `<h5 class="card-title">${e.name}</h5>`; // vamos a interpolar para ingresar el valor de una variable
    htmlCard += `<h5 class="card-text">${e.email}</h5>`;
    htmlCard += `<h5 class="card-text">${e.address.city}</h5>`;
    htmlCard += `<h5 class="card-text">${e.phone}</h5>`;
    htmlCard += "</div>";
    htmlCard += '<img src="./assets/img/kratos-god-of-war-.jpg" class="card-img-top w-75 m-3" alt="...">'
    htmlCard += "</div>";
    htmlCard += "</div>";
  });
  document.getElementById("cardFormApi").innerHTML = htmlCard;
};

//Evento click
btnApiUser.onclick = function () {
  getData(api); // esta es la funcion que vamos a activar, la cual creamos en la linea 8 y la api es una const de la line a 2
};
