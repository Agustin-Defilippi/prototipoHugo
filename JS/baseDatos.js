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
            <table class="table  table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Stock</th>
                </tr>
              </thead>
              <tbody id="productosBaseDatos">
       
              </tbody>
            </table>
        </div>
    
      </div>
      <div class="btn-resetBase">
        <button id="btn-resetBase"class="btn bg-danger text-light">Resetear Base Datos</button>
      </div>
    </div>
  </div>
  <div class="btn-volver3 border border-ligth">
      <button id="btn-volverAtras3"class="btn bg-warning">Volver</button>
  </div>`
  volverAtrasBaseDatos()
  console.log("base de datos ok");
  renderProductosBaseDatos();
  borrarBaseDatos()
}

const renderListaBaseDatos = (productos) =>{
  let salidaProd ="";
  productos.forEach((item,i) =>{
    const posicion = i +1 ;
    salidaProd+= `<tr>
    <th scope="row">${posicion}</th>
    <td>${item.nombre}</td>
    <td>${item.categoria}</td>
    <td>${item.precio}</td>
    <td>${item.unidades}</td>
    </tr>`
  })
  return salidaProd;
}

const renderProductosBaseDatos = () =>{
  const productosCargados = JSON.parse(localStorage.getItem("baseDatos"));
  const contenedorBaseDatos = document.getElementById("productosBaseDatos")

  if(productosCargados && productosCargados.length > 0){
   let renderizadoProductos= renderListaBaseDatos(productosCargados);
    return contenedorBaseDatos.innerHTML = renderizadoProductos
  }else{
    return contenedorBaseDatos.innerHTML = "";
  }
}

const borrarBaseDatos = () =>{
  const btnResetBaseDatos = document.getElementById("btn-resetBase");
  btnResetBaseDatos.addEventListener("click", () =>{
    
    localStorage.removeItem("baseDatos");
    const contenedorBaseDatos = document.getElementById("productosBaseDatos");
    contenedorBaseDatos.innerHTML="";
  })
}