class Burgers {
  constructor(nombre, ingrediente_uno, ingrediente_dos, ingrediente_tres) {
    this.nombre = nombre;
    this.ingrediente_uno = ingrediente_uno;
    this.ingrediente_tres = ingrediente_tres;

    this.ingrediente_dos = ingrediente_dos;
  }
  mostrarIngredientes() {
    console.log(this.ingrediente_uno);
    console.log(this.ingrediente_dos);
    console.log(this.ingrediente_tres);
  }
}
let lista_burgers = [];

let cheese_burger = new Burgers(
  "cheese burger",
  "Doble carne",
  "Queso cheddar",
  "no tiene"
);
let cheese_bacon = new Burgers(
  "Cheese Bacon",
  "Doble carne",
  "Queso cheddar",
  "Bacon"
);
let gran_chamaco = new Burgers(
  "Gran Chamaco",
  "Doble carne",
  "Queso cheddar",
  "pepinillos"
);
let riquifort = new Burgers(
  "Rikifort",
  "Doble carne",
  "Queso roquefort",
  "Cebolla"
);
let lachamaca = new Burgers(
  "La chamaca",
  "Doble carne",
  "Queso provolone",
  "jalapeños"
);
let voraz = new Burgers("Voraz", "Doble carne", "Queso provolone", "Cebolla");

lista_burgers.push(
  cheese_burger,
  cheese_bacon,
  gran_chamaco,
  riquifort,
  lachamaca,
  voraz
);
for (let burger of lista_burgers) {
  console.log(burger.nombre);
}

while (true) {
  seleccion = prompt(
    "selecciona una hamburgesa o escribir 'salir' para terminar, Voraz, La chamaca, cheese burger, Rikifort, Gran Chamaco, Cheese Bacon"
  );
  if (seleccion === "salir" && typeof seleccion === "string") {
    break;
  }
  encontrado = false;
  lista_burgers.forEach((burger) => {
    if (burger.nombre === seleccion) {
      console.log(burger.nombre);
      burger.mostrarIngredientes();
      encontrado = true;
    }
  });
  if (typeof seleccion !== "string") {
    console.log("Por favor ingresa una selección válida");
    continue;
  }

  if (!encontrado) {
    console.log("No seleccionaste bien");
  }
}
console.log("Hasta luego");
