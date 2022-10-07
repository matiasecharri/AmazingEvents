let container = document.getElementById("cartaid");
for (i = 0; i < events.length; i++) {
       if (events[i].date > currentDate){
  let cartas = document.createElement("div");
  cartas.className = "card";
  cartas.innerHTML += ` <img src="${events[i].image}" class="card-img-top" alt="${events[i].name}">
  <div class="card-body-d-flex align-items-around">
    <h5 class="card-title">${events[i].name}
  </h5><div class="cuadrado">
    <p class="card-text">${events[i].description}</p>
    </div>
   
    <div class="botones">
    <a href="./details.html" class="btn">Know more info</a>
    <div/>
  </div>`;   container.appendChild(cartas);
       }
}
