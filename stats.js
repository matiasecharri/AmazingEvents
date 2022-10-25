let table = document.getElementById("laTablita");
let table2 = document.getElementById("laTablita2");
let table3 = document.getElementById("laTablita3");

async function stats() {
  let dataApi = await fetch("https://mh-amazing.herokuapp.com/amazing");
  dataApi = await dataApi.json();

  let date = dataApi.date.slice(0, 10);
  let events = dataApi.events;

  let nuevosEventos = events.map((i) => ({
    name: i.name,
    porcentajeDeAsis: ((i.assistance * 100) / i.capacity).toFixed(2),
    capacidad: i.capacity,
  }));

  let eventoConMayorAsistencia = [...nuevosEventos].sort(
    (a, b) => b.porcentajeDeAsis - a.porcentajeDeAsis
  );
  eventoConMayorAsistencia = eventoConMayorAsistencia[0];

  let eventoConMenorAsistencia = [...nuevosEventos].sort(
    (a, b) => a.porcentajeDeAsis - b.porcentajeDeAsis
  );
  eventoConMenorAsistencia = eventoConMenorAsistencia[0];

  let eventoConMayorCapacidad = [...nuevosEventos].sort(
    (a, b) => b.capacidad - a.capacidad
  );
  eventoConMayorCapacidad = eventoConMayorCapacidad[0];

  function imprimirTabla(container, objeto1, objeto2, objeto3) {
    container.innerHTML += ` 
<thead>
  <tr>
    <th scope="col"></th>
    <th scope="col" class="tdTabla">Events</th>
    <th scope="col"></th>
    <th scope="col"></th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row"></th>
    <td class="tdTabla">Event with the highest percentaje of attendance</td>
    <td class="tdTabla">Event with the lowest percentaje of attendance</td>
    <td class="tdTabla"> Event with larger capacity</td>
  </tr>

</tbody>
<tbody>
  <tr>
    <th scope="row"></th>
    <td class="tdTabla" >${objeto1.name} ${objeto1.porcentajeDeAsis}%</td>
    <td class="tdTabla">${objeto2.name} ${objeto2.porcentajeDeAsis}%</td>
    <td class="tdTabla">${objeto3.name}: ${objeto3.capacidad}</td>
  </tr>

</tbody>


`;
  }
  imprimirTabla(
    laTablita,
    eventoConMayorAsistencia,
    eventoConMenorAsistencia,
    eventoConMayorCapacidad
  );
}

async function stats2() {
  try {
    let data = await fetch(
      "https://mh-amazing.herokuapp.com/amazing?time=past"
    );
    data = await data.json();
    let events = data.events;
    /*        console.log(events); */

    events.map((event) => {
      event.percentageOfAssitance = (
        (event.assistance / event.capacity) *
        100
      ).toFixed(2);
      event.revenues = event.assistance * event.price;
    });
    let EventsForCategory = [];
    EventsForCategory.push(events.filter((event) => event.category === "Food"));
    EventsForCategory.push(
      events.filter((event) => event.category === "Cinema")
    );
    EventsForCategory.push(
      events.filter((event) => event.category === "Party")
    );
    EventsForCategory.push(
      events.filter((event) => event.category === "Books")
    );
    EventsForCategory.push(events.filter((event) => event.category === "Race"));
    EventsForCategory.push(
      events.filter((event) => event.category === "Concert")
    );
    EventsForCategory.push(
      events.filter((event) => event.category === "Museum")
    );
    console.log(EventsForCategory[0]);
    let eventsFilter = [];

    for (const categorys of EventsForCategory) {
      let revenuesIni = 0;
      let revenues1 = categorys.reduce(function (accumulator, element) {
        return accumulator + element.revenues;
      }, revenuesIni);

      let capacityIni = 0;
      let capacity1 = categorys.reduce(function (accumulator, element) {
        return accumulator + element.capacity;
      }, capacityIni);

      let assisIni = 0;
      let assis = categorys.reduce(function (
        accumulator,
        element
      ) {
        return accumulator + Number(element.assistance);
      },
      assisIni);

      eventsFilter.push({
        name: categorys[0].category,
        revenues: revenues1,
        capacity: capacity1,
        percentageOfAssitance: assis*100 / capacity1,
      });
      
    }
    let laTablita2 = document.getElementById("laTablita2")
    
    for (i of eventsFilter){
      laTablita2.innerHTML +=
      `  <tr>
      
   
    
    <td class="tdTabla" >${i.name} </td>
    <td class="tdTabla">${i.revenues}</td>
    <td class="tdTabla">${(i.percentageOfAssitance).toFixed(2)}%</td>
  </tr>

`






    }
   
  } catch (error) {
    console.log("Error");
  }

 
}

async function stats3() {
  try {
    let data = await fetch(
      "https://mh-amazing.herokuapp.com/amazing?time=past"
    );
    data = await data.json();
    let events = data.events;
    /*        console.log(events); */

    events.map((event) => {
      event.percentageOfAssitance = (
        (event.assistance / event.capacity) *
        100
      ).toFixed(2);
      event.revenues = event.assistance * event.price;
    });
    let EventsForCategory = [];
    EventsForCategory.push(events.filter((event) => event.category === "Food"));
    EventsForCategory.push(
      events.filter((event) => event.category === "Cinema")
    );
    EventsForCategory.push(
      events.filter((event) => event.category === "Party")
    );
    EventsForCategory.push(
      events.filter((event) => event.category === "Books")
    );
    EventsForCategory.push(events.filter((event) => event.category === "Race"));
    EventsForCategory.push(
      events.filter((event) => event.category === "Concert")
    );
    EventsForCategory.push(
      events.filter((event) => event.category === "Museum")
    );
    console.log(EventsForCategory[0]);
    let eventsFilter = [];

    for (const categorys of EventsForCategory) {
      let revenuesIni = 0;
      let revenues1 = categorys.reduce(function (accumulator, element) {
        return accumulator + element.revenues;
      }, revenuesIni);

      let capacityIni = 0;
      let capacity1 = categorys.reduce(function (accumulator, element) {
        return accumulator + element.capacity;
      }, capacityIni);

      let assisIni = 0;
      let assis = categorys.reduce(function (
        accumulator,
        element
      ) {
        return accumulator + Number(element.assistance);
      },
      assisIni);

      eventsFilter.push({
        name: categorys[0].category,
        revenues: revenues1,
        capacity: capacity1,
        percentageOfAssitance: assis*100 / capacity1,
      });
      
    }
    let laTablita3 = document.getElementById("laTablita3")
    
    for (i of eventsFilter){
      laTablita3.innerHTML +=
      ` 
      
      
      
    
      <tr>     
   
    <td class="tdTabla" >${i.name} </td>
    <td class="tdTabla">${i.revenues}</td>
    <td class="tdTabla">${(i.percentageOfAssitance).toFixed(2)}%</td>
  </tr>

`






    }
   
  } catch (error) {
    console.log("Error");
  }

 
}









stats();
stats2();
stats3()