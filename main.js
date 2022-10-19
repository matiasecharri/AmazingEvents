//-------------------------------------------------------HACER APARECER CARTAS------------------------------------------------------------------------------------------------

let container = document.getElementById("cartaid");
function imprimir(arreglo) {
  for (i = 0; i < arreglo.length; i++) {
    container.innerHTML += ` 
  <div class="card">
  <img src="${arreglo[i].image}" class="card-img-top" alt="${arreglo[i].name}">
  <div class="card-body-d-flex align-items-around">
    <h5 class="card-title">${arreglo[i].name}
  </h5><div class="cuadrado">
    <p class="card-text">${arreglo[i].description}</p>
    </div>
   
    <div class="botones">
    <a href="details.html?evento=${arreglo[i]._id}" class="btn">Know more info</a>
    <div/>
  </div>
  </div>`;
  }
}
imprimir(events);

//----------------------------------------------------------HACER APARECER CHECKBOX-------------------------------------------------------------------------------------------

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

// --------------------------------------------------------------------------------------------------------------------------------
// EVENTOS  PARA QUE SE FILTREN LAS CARDS AL ESCRIBIR-------------------------------------------------------------------

let search = document.getElementById("buscando");
let textFilter = "";
search.addEventListener("change", (evento) => {
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
  let eventTextFiltered = events.filter((evento) =>
    evento.name.toLowerCase().includes(textFilter.toLowerCase())
  );
  if (arrayCategoriasChequeadas.length === 0) {
   if ( eventTextFiltered.length === 0){
    container.innerHTML = `<div class = "noEvented"> <img src="./assets/images/favpng_business-scrum-apache-hadoop.png" alt="noEvento" class="noEvento">  <p class="noResultadoTexto"> No se encontró ningún evento... </p> </div> ` 


   } else {container.innerHTML = " ";

   imprimir(eventTextFiltered);}
  }
   else {
    let eventosFiltradosPorNombreYCategoria = eventTextFiltered.filter(
      (evento) => arrayCategoriasChequeadas.includes(evento.category)
    );
    container.innerHTML = " ";
    if(eventosFiltradosPorNombreYCategoria.length === 0){
      container.innerHTML = `<div class = "noEvented"> <img src="./assets/images/favpng_business-scrum-apache-hadoop.png" alt="noEvento" class="noEvento">  <p class="noResultadoTexto"> No se encontró ningún evento... </p> </div> ` 
    }
    else{imprimir(eventosFiltradosPorNombreYCategoria);}
  }
}




