let contenedorDetalles = document.getElementById("mainDetalles");

// Locatin es un objeto que contiene todas las propiedades de la página, al buscar el .search lo que estoy haciendo sería entrar especificamente en esa propiedad.
let idGuardado = location.search.slice(8); //Este search no tiene nada que ver con mi search, location.search es una propiedad para encontrar un elemento.
console.log(idGuardado);

async function dataPorApi() {
  let dataApi = await fetch("https://mh-amazing.herokuapp.com/amazing");
  dataApi = await dataApi.json();

  let events = dataApi.events;

  let eventoElegido = events.filter((i) => i.id === idGuardado); // Hago una variable que sea = a eventos filtrados i y hago que evnetos filtrados i sea igual al ID que guarde.
  for (i = 0; i < eventoElegido.length; i++) {
    //Bucle de evento elegido LA CLASICA PA
    contenedorDetalles.innerHTML = `
<img src="${eventoElegido[i].image}" id="cardimg7" alt="${eventoElegido[i].name}">

</div>



<div class="cardetails" >

<div class="card-body">
  <h5 class="detailsTitle">${eventoElegido[i].name} </h5>
  <p class="card-text">${eventoElegido[i].description}</p>
  <p class="card-text"> <span class="spanDeDetalles"> Price: </span>$${eventoElegido[i].price}</p>
  <p class="card-text"> <span class="spanDeDetalles"> Date:  </span> ${eventoElegido[i].date}</p>
  <p class="card-text"><span class="spanDeDetalles">  Place:  </span> ${eventoElegido[i].place}</p>
  <p class="card-text"> <span class="spanDeDetalles"> Capacity:  </span> ${eventoElegido[i].capacity}</p>
    <p class="card-text"> <span class="spanDeDetalles"> Category: </span> ${eventoElegido[i].category}</p>

</div>  </span>
</div> `;
  }
}

dataPorApi()