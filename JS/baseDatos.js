// Funcion Click button Calcular productos
const btnBaseDatos = () =>{
    
    const btnDatos = document.getElementById("btn-baseDatos");
    const containerButtons = document.getElementById("cargaProductos");
  
    btnDatos.addEventListener("click", () =>{
        renderBaseDatos()
        containerButtons.innerHTML = "";
        containerButtons.className= "heigth-0"
    })
}

// Funcion volver atras cargar producto
const volverAtrasBaseDatos= () =>{
    const btnVolver3 = document.getElementById("btn-volverAtras3");
    const containerPrograma2 = document.getElementById("baseDatos");
    const cargarOcalcular = document.getElementById("cargaProductos");
    btnVolver3.addEventListener("click", () =>{
        containerPrograma2.innerHTML="";
        cargarOcalcular.className="containerCargarOcalcular"
        renderContButtonsEleccion();
        btnBaseDatos();
        btnCargarProductos();
        btnCalcularProductos();
    
    })
}

const renderBaseDatos = () =>{
    const containerBaseDatos = document.getElementById("baseDatos");
    containerBaseDatos.innerHTML = `
    <div class="containerPrograma3" id="containerPrograma3">
    <div class="containerForm3">
      <h1>BASE DE DATOS</h1>
      <div class="containerForm5">
        <div class="containerForm6">
          
        </div>
      </div>
    </div>
  </div>
  <div class="btn-volver3 border border-ligth">
      <button id="btn-volverAtras3"class="btn bg-warning">Volver</button>
  </div>`
    volverAtrasBaseDatos()
    console.log(volverAtrasBaseDatos());
}

