//// APARECER CARTAS DE PAST//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let container = document.getElementById("cartaid");
function imprimir(arreglo3) {
  for (i = 0; i < arreglo3.length; i++) {
    if (arreglo3[i].date < currentDate) {
      container.innerHTML += ` 
  <div class="card">
  <img src="${arreglo3[i].image}" class="card-img-top" alt="${events[i].name}">
  <div class="card-body-d-flex align-items-around">
    <h5 class="card-title">${arreglo3[i].name}
  </h5><div class="cuadrado">
    <p class="card-text">${arreglo3[i].description}</p>
    </div>
   
    <div class="botones">
    <a href="details.html?evento=${arreglo3[i]._id}" class="btn">Know more info</a>
    <div/>
  </div>
  </div>`;
    }
  }
}
imprimir(events);

//HACER APARECER CHECKBOX --------------------------------------------------------///////////////////////////////////////////////////////////////////////////////////////////////
let pastEvents = events.filter((evento) => evento.date < currentDate);
console.log(pastEvents);

let checkbox = document.getElementById("checkboxbar"); //Traje el contenedor padre, para que los checkbox queden dentro de el.
let arrayMapeadoDeEventos = new Set( //Creo una nueva variable la cual es igual a un array, usando MAP me saco de encima la información que no me sirve y como la tengo duplicada uso new Set
  events.map(function (i) {
    return i.category; //Retorno el i.category que es lo que me interesa sacar del MAP.
  })
);

function impressCheck(stringQueSepareArriba) {
  checkbox.innerHTML += `<div class="form-check">
<input class="form-check-input" type="checkbox" value="${stringQueSepareArriba}" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
  ${stringQueSepareArriba}
</label>
</div>
`;
}

arrayMapeadoDeEventos.forEach(impressCheck);

// EVENTOS  PARA QUE SE FILTREN LAS CARDS AL ESCRIBIR-------------------------------------------------------------------

let search = document.getElementById("buscando");
let textFilter = "";
search.addEventListener("keyup", (evento) => {
  textFilter = evento.target.value;

  filtrado();
});

//  ------------------------------------------- EVENTOS CHECKBOX -------------------------------------------------------------------

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
  let eventTextFiltered = pastEvents.filter((evento) =>
    evento.name.toLowerCase().includes(textFilter.toLowerCase())
  );
  if (arrayCategoriasChequeadas.length === 0) {
    if ( eventTextFiltered.length === 0){
      container.innerHTML = `<div class = "noEvented"> <div class="newtons-cradle">
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      </div>  <p class="noResultadoTexto"> Sorry! <span class = "xd"> not events found...</span> </p> </div>  ` 
  
  
     } else {container.innerHTML = " ";
  
     imprimir(eventTextFiltered);}
  } else {
    let eventosFiltradosPorNombreYCategoria = eventTextFiltered.filter(
      (evento) => arrayCategoriasChequeadas.includes(evento.category)
    );
    container.innerHTML = " ";
    if(eventosFiltradosPorNombreYCategoria.length === 0){
      container.innerHTML = `<div class = "noEvented"> <div class="newtons-cradle">
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      </div>  <p class="noResultadoTexto"> Sorry! <span class = "xd"> not events found...</span> </p> </div>  ` 
    }
    else{imprimir(eventosFiltradosPorNombreYCategoria);}
  }
}
