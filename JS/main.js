const usuario = document.getElementById("usuario");
const contPadre = document.getElementById("containerPadre");

permitirIngreso();

const datos = []
let stockProductos = JSON.parse(localStorage.getItem('baseDatos')) || [];

