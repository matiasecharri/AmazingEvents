let contenedorDetalles = document.getElementById("mainDetalles");

let idGuardado = Number(location.search.slice(8));
console.log(idGuardado)

let eventoElegido = events.filter((evento) => evento._id === idGuardado);
console.log(eventoElegido)


for (i = 0; i < eventoElegido.length; i++) {
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



