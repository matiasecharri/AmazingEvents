//-------------------------------------------------------HACER APARECER CARTAS------------------------------------------------------------------------------------------------

let container = document.getElementById("cartaid");
function imprimir(arreglo2, date) {
  for (i = 0; i < arreglo2.length; i++) {
    arreglo2;
    if (arreglo2[i].date > date) {
      container.innerHTML += ` 
  <div class="card">
  <img src="${arreglo2[i].image}" class="card-img-top" alt="${arreglo2[i].name}">
  <div class="card-body-d-flex align-items-around">
    <h5 class="card-title">${arreglo2[i].name}
  </h5><div class="cuadrado">
    <p class="card-text">${arreglo2[i].description}</p>
    </div>
   
    <div class="botones">
    <a href="details.html?evento=${arreglo2[i].id}" class="btn">Know more info</a>
    <div/>
  </div>
  </div>`;
    }
  }
}
//----------------------------------------------------------HACER APARECER CHECKBOX-------------------------------------------------------------------------------------------

let checkbox = document.getElementById("checkboxbar");
function impressCheck(stringQueSepareArriba) {
  checkbox.innerHTML += `<div class="form-check">
<input class="form-check-input" type="checkbox" value="${stringQueSepareArriba}" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
  ${stringQueSepareArriba}
</label>
</div>
`;
}

//----------------------------------------------------------TODO LO DEMAS-------------------------------------------------------------------------------------------
async function dataPorApi (){

  let dataApi = await fetch ("https://mind-hub.up.railway.app/amazing")
   dataApi = await dataApi.json()
  console.log(dataApi)
let events = dataApi.events
let date = dataApi.date
let upcomingEvents = events.filter(function(i){
  return i.date > date
})

//////////////////Imprimir cards
imprimir(events, date);


//////////////////Imprimir checkbox
let arrayMapeadoDeEventos = new Set(
  events.map(function (i) {
    return i.category;
  })
);
arrayMapeadoDeEventos.forEach(impressCheck);

// --------------------------------------------------------------------------------------------------------------------------------
// EVENTOS  PARA QUE SE FILTREN LAS CARDS AL ESCRIBIR-------------------------------------------------------------------
let textFilter = "";
let search = document.getElementById("buscando");

search.addEventListener("keyup", (evento) => {
  textFilter = evento.target.value;

  filtrado();
});

//  ------------------------------------------- EVENTOS PARA FILTRAR POR CHECKBOX -------------------------------------------------------------------

let arrayCategoriasChequeadas = [];

checkbox.addEventListener("change", (evento) => {
  if (evento.target.checked) {
    arrayCategoriasChequeadas.push(evento.target.value);
  } else {
    let posicionDelNoChequeado = arrayCategoriasChequeadas.indexOf(
      evento.target.value
    );
    arrayCategoriasChequeadas.splice(posicionDelNoChequeado, 1);
  }

  filtrado();
});

//  ------------------------------------------- COMBINACION CHECKBOX Y SEARCH---------------------------------------------------------///

function filtrado() {
  let eventTextFiltered = upcomingEvents.filter(
    (evento) => evento.name.toLowerCase().includes(textFilter.toLowerCase()) //eventTextFiltered es un array de los eventos que el usuario escribio.
  );
  if (arrayCategoriasChequeadas.length === 0) {
    //Si arrayCategoriasChequeadas  (checkbox) es  0 filtrame por texto
    if (eventTextFiltered.length === 0) {
      //Si lo escrito tambien es igual a 0 entonces va a retornar que no hay resultados.
      container.innerHTML = `<div class = "noEvented"> <div class="newtons-cradle">
    <div class="newtons-cradle__dot"></div>
    <div class="newtons-cradle__dot"></div>
    <div class="newtons-cradle__dot"></div>
    <div class="newtons-cradle__dot"></div>
    </div>  <p class="noResultadoTexto"> Sorry! <span class = "xd"> not events found...</span> </p> </div>  `;
    } else {
      container.innerHTML = " ";

      imprimir(eventTextFiltered, date);
    } //Si event text filter no es 0 que imprima lo que filtro.
  } else {
    let eventosFiltradosPorNombreYCategoria = eventTextFiltered.filter(
      (evento) => arrayCategoriasChequeadas.includes(evento.category) //Si hay alguna categoria chequeada va a hacer un array de los checkbox y el buscador
    );
    container.innerHTML = " "; //vacio el container e imprimo los que haya filtrado
    if (eventosFiltradosPorNombreYCategoria.length === 0) {
      //Si no hay resultados en los checkbox y en el buscado imprime que no hay nada.
      container.innerHTML = `<div class = "noEvented"> 
      <div class="newtons-cradle">
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      </div>  <p class="noResultadoTexto"> Sorry! <span class = "xd"> not events found...</span> </p> </div>  `;
    } else {
      imprimir(eventosFiltradosPorNombreYCategoria, date);
    } //Si esto no es 0 va a imprimir lo filtrado por nombre y categoria.
  }
}


}

dataPorApi()