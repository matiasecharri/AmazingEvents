let container = document.getElementById("cartaid");
for (i = 0; i < events.length; i++) {
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
  </div>`;
  container.appendChild(cartas);
}

let checkbox = document.getElementById("checkboxbar");
let categories = new Set(
  events.map(function (i) {
    return i.category;
  })
);

function impressCheck(categoria) {
  checkbox.innerHTML += `<div class="form-check">
<input class="form-check-input" type="checkbox" value="${categoria}" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
  ${categoria}
</label>
</div>
`;
}

categories.forEach(impressCheck);
