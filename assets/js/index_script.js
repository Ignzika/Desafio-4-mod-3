const propiedadesDesafio = [
  {
    name: "Departamento 2 ambientes",
    description: "Un lugar ideal para descansar dentro de la ciudad",
    src: "assets/imgs/apartej.jpg",
    rooms: 2,
    m: 60,
  },
  {
    name: "Casa estilo mediterraneo",
    description: "Tu oasis con estilo urbano",
    src: "assets/imgs/01.jpg",
    rooms: 6,
    m: 240,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "assets/imgs/02.jpg",
    rooms: 4,
    m: 130,
  },
  {
    name: "Departamento Europeo",
    description: "Ambiente europeo en el tercer mundo",
    src: "assets/imgs/03.jpg",
    rooms: 3,
    m: 65,
  },
  {
    name: "Cabaña",
    description: "Un refugio perfecto",
    src: "assets/imgs/04.jpg",
    rooms: 3,
    m: 120,
  },
  {
    name: "La pequeña casa roja",
    description: "No, no es en la pradera, es en la loma del cerro, .",
    src: "assets/imgs/05.jpg",
    rooms: 2,
    m: 26,
  },
  {
    name: "Casas experimentales",
    description: "2 habitaciones con espacio expandible para 5",
    src: "assets/imgs/06.jpg",
    rooms: 2,
    m: 35,
  },
  {
    name: "Azotea mirardor mirabien",
    description: "Hermoso espacio en la azotea centrica",
    src: "assets/imgs/07.jpg",
    rooms: 4,
    m: 75,
  },
  {
    name: "Loft Oficina ",
    description: "Trabaja y vive en un espacio modular",
    src: "assets/imgs/08.jpg",
    rooms: 2,
    m: 40,
  },
  {
    name: ' Proyecto "Alturas"  ',
    description: "Renta de habitaciones panoramicas",
    src: "assets/imgs/09.jpg",
    rooms: 1,
    m: 12,
  },
];

let cardSection = document.querySelector("#items");
let cantidad = document.querySelector("#cantidad");

function houses(propiedadesDesafio) {
  cantidad.innerHTML = propiedadesDesafio.length;
  cardSection.innerHTML = "";

  for (const obj of propiedadesDesafio) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("cardEj");
    newDiv.innerHTML = `
    <img src="${obj.src}" alt="${obj.name}">
    <div class="dataApart">
    <h2>${obj.name}</h2>
    <p> ${obj.description} </p>
    <div class="specApart">
    <span id="iconRoom">
    <i class="fa-sharp fa-solid fa-people-roof" style="color: #443c43;"></i>
    </span>
    <span id="iconSize">
    <i class="fa-solid fa-ruler-combined" style="color: #443c43;"></i>
    </span>
    <span id="NHabitaciones">
    ${obj.rooms}
    </span>
    <span id="Nsize">
    ${obj.m}
    </span>
    </div>
        
  <input type="button" value="Ver más" id="seeMore">
  </div>
  `;

    cardSection.appendChild(newDiv);
  }
}

houses(propiedadesDesafio);

let range = Array.from(document.querySelectorAll(".typeNumb"));
let bttnFilter = document.querySelector("#search");

let filterHouses = () => {
  let [{ value: cuartos }, { value: desde }, { value: hasta }] = range;
  if (!desde ||!hasta ||!cuartos ) {
    alert(
      "Uno o mas datos no fueron ingresado  por favor ingrese todos los datos requeridos"
    );
    return false;
  } else {
    let filterHouses = propiedadesDesafio.filter(
      (obj) => obj.rooms >= cuartos && desde <= obj.m && obj.m <= hasta
    );

    houses(filterHouses);
  }
};

bttnFilter.addEventListener("click", filterHouses);

let filterClear = document.querySelector("#blank");

filterClear.addEventListener("click", () => {
  range.forEach((input) => (input.value = ""));
  if ((cardSection.innerHTML = "")) {
    houses(propiedadesDesafio);
  } else {
    cardSection.innerHTML = "";
    houses(propiedadesDesafio);
  }
});
