let container = document.getElementById("cartaid");
for (i = 0; i < events.length; i++) {
  if (events[i].date < currentDate) {
    container.innerHTML += ` 
  <div class="card">
  <img src="${events[i].image}" class="card-img-top" alt="${events[i].name}">
  <div class="card-body-d-flex align-items-around">
    <h5 class="card-title">${events[i].name}
  </h5><div class="cuadrado">
    <p class="card-text">${events[i].description}</p>
    </div>
   
    <div class="botones">
    <a href="./details.html" class="btn">Know more info</a>
    <div/>
  </div>
  </div>`;}
}

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

// EVENTOS -------------------------------------------------------------------------

let search = document.getElementById("buscando");

search.addEventListener("change", (evento) => {
  let textFilter = evento.target.value;

  let eventTextFiltered = events.filter((evento) =>
    evento.name.toLowerCase().includes(textFilter.toLowerCase())
  );
  container.innerHTML = " ";

  for (i = 0; i < eventTextFiltered.length; i++) {
    if (eventTextFiltered[i].date < currentDate) {
      container.innerHTML += ` 
    <div class="card">
    <img src="${eventTextFiltered[i].image}" class="card-img-top" alt="${eventTextFiltered[i].name}">
    <div class="card-body-d-flex align-items-around">
      <h5 class="card-title">${eventTextFiltered[i].name}
    </h5><div class="cuadrado">
      <p class="card-text">${eventTextFiltered[i].description}</p>
      </div>
     
      <div class="botones">
      <a href="./details.html" class="btn">Know more info</a>
      <div/>
    </div>{
    </div>`;}

  }
});

