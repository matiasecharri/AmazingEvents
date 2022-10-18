//// APARECER CARTAS DE UPCOMING //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let container = document.getElementById("cartaid");
function imprimir(arreglo2){
for (i = 0; i < arreglo2.length; i++) {arreglo2
  if (arreglo2[i].date > currentDate) {
    container.innerHTML += ` 
  <div class="card">
  <img src="${arreglo2[i].image}" class="card-img-top" alt="${arreglo2[i].name}">
  <div class="card-body-d-flex align-items-around">
    <h5 class="card-title">${arreglo2[i].name}
  </h5><div class="cuadrado">
    <p class="card-text">${arreglo2[i].description}</p>
    </div>
   
    <div class="botones">
    <a href="details.html?evento=${arreglo2[i]._id}" class="btn">Know more info</a>
    <div/>
  </div>
  </div>`;}
}}
imprimir(events)

//HACER APARECER CHECKBOX --------------------------------------------------------///////////////////////////////////////////////////////////////////////////////////////////////

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

search.addEventListener("change", (evento) => {
  let textFilter = evento.target.value;

  let eventTextFiltered = events.filter((evento) =>
    evento.name.toLowerCase().includes(textFilter.toLowerCase())
  );
  container.innerHTML = " ";

  imprimir(eventTextFiltered)
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

  let eventosCategoriaChequeada = events.filter(function (evento) {
    return arrayCategoriasChequeadas.includes(evento.category);
  });
  container.innerHTML = " ";
  if (arrayCategoriasChequeadas.length !== 0) {
    imprimir(eventosCategoriaChequeada)
  } else {
   imprimir(events)
  }
});
