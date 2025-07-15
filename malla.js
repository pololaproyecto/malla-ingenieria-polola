const ramos = [
  { codigo: "MAT101", nombre: "Cálculo I", prerequisitos: [] },
  { codigo: "MAT102", nombre: "Cálculo II", prerequisitos: ["MAT101"] },
  { codigo: "FIS101", nombre: "Física I", prerequisitos: [] },
  { codigo: "FIS102", nombre: "Física II", prerequisitos: ["FIS101", "MAT101"] },
  { codigo: "IIN101", nombre: "Intro a la Ing.", prerequisitos: [] },
  { codigo: "ECO101", nombre: "Microeconomía", prerequisitos: [] },
  { codigo: "ECO102", nombre: "Macroeconomía", prerequisitos: ["ECO101"] },
];

const mallaDiv = document.getElementById("malla");
const estado = {};

function actualizarEstados() {
  ramos.forEach((ramo) => {
    const elem = document.getElementById(ramo.codigo);
    const cursado = estado[ramo.codigo];
    const habilitado = !cursado && ramo.prerequisitos.every(pr => estado[pr]);

    elem.className = "ramo";
    if (cursado) {
      elem.classList.add("cursado");
    } else if (habilitado) {
      elem.classList.add("habilitado");
    }

    elem.onclick = () => {
      estado[ramo.codigo] = !estado[ramo.codigo];
      actualizarEstados();
    };
  });
}

function dibujarMalla() {
  ramos.forEach((ramo) => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = ramo.codigo;
    div.innerHTML = `<strong>${ramo.nombre}</strong><br><small>${ramo.codigo}</small>`;
    mallaDiv.appendChild(div);
  });
  actualizarEstados();
}

dibujarMalla();
