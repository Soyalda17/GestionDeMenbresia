// Obtenemos referencias a los elementos del formulario y la lista de membresías
const form = document.getElementById('formMembresia');
const nombreInput = document.getElementById('nombre');
const tipoInput = document.getElementById('tipoMembresia');
const fechaInput = document.getElementById('fechaInicio');
const membresiasList = document.getElementById('membresiasList');

// Array para almacenar los miembros
let membresias = [];

// Función para mostrar las membresías
function mostrarMembresias() {
    membresiasList.innerHTML = '';
    membresias.forEach((membresia, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${membresia.nombre} - ${membresia.tipo} - ${membresia.fecha}`;
        membresiasList.appendChild(li);
    });
}

// Función para manejar el envío del formulario
function agregarMembresia(event) {
    event.preventDefault();
    const nombre = nombreInput.value;
    const tipo = tipoInput.value;
    const fecha = fechaInput.value;

    const nuevaMembresia = {
        nombre,
        tipo,
        fecha
    };

    membresias.push(nuevaMembresia);
    mostrarMembresias();
    form.reset();
}

// Escuchamos el envío del formulario
form.addEventListener('submit', agregarMembresia);