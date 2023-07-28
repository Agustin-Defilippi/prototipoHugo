// Funcion ingreso Usuario
const permitirIngreso = () => {
    const ingreso = document.createElement("div");
    ingreso.innerHTML = `
        <label class="mb-1">Ingrese Nombre Usuario</label>
        <input id="nombreUsuario" type="text" placeholder="Nombre de Usuario">
        <label class="mb-1">Ingrese contraseña</label>
        <input id="contrasenaUsuario" type="password" placeholder="Contraseña">
        <p id="errorIngreso"></p>
        <button class="btn text-warning border-warning mt-2" type="submit">Ingresar</button>`;

    usuario.appendChild(ingreso);

    const nombreUsuario = document.getElementById("nombreUsuario");
    const contraseñaUsuario = document.getElementById("contrasenaUsuario");

    usuario.addEventListener("submit", (e) => {
        e.preventDefault();

        if (nombreUsuario.value.toUpperCase() === "HUGO" && contraseñaUsuario.value.toUpperCase() === "HUGOCOLON10"){
            usuario.innerHTML = "";
            renderContButtonsEleccion();
            btnCargarProductos();
            btnCalcularProductos();

            
        }else {
            const errorIngreso = document.getElementById("errorIngreso");
            errorIngreso.textContent = "Ingreso Erróneo, vuelve a intentar!";
            errorIngreso.classList.add("text-danger");
            setTimeout(() => {
                errorIngreso.textContent = "";
            }, 3000);
        }
    });
};


// Funcion cargar productos o calcular productos 
const renderContButtonsEleccion = () =>{
    const cargarOcalcular = document.getElementById("cargaProductos");
    return cargarOcalcular.innerHTML= 
    ` 
    <div id="cont-buttons" class="cont-buttons">
        <div>
            <button id="btn-calcularProductos" class="btn bg-dark text-warning">Calcular Productos</button>
        </div>
        <div>
            <button id="btn-cargarProductos" class="btn bg-dark text-warning">Cargar Productos</button>
        </div>
        <div>
            <button id="btn-cargarProductos" class="btn bg-dark text-warning">Cargar Productos</button>
        </div>
    </div> `
}



// Funcion para crear los input de carga de productos
const crearNuevoCampo = () => {
    const formElementsDiv = document.getElementById('formElements');
    
    const nuevoProductoDiv = document.createElement('div');
  
    const nombreInput = document.createElement('input');
    nombreInput.type = 'text';
    nombreInput.placeholder = 'Nombre del producto';
    nombreInput.className="m-1";
  
    const precioInput = document.createElement('input');
    precioInput.type = 'number';
    precioInput.placeholder = 'Precio';
    precioInput.className="m-1";
    
  
    const categoriaInput = document.createElement('input');
    categoriaInput.type = 'text';
    categoriaInput.placeholder = 'Categoria';
    categoriaInput.className="m-1";
  
    const unidadesInput = document.createElement('input');
    unidadesInput.type = 'number';
    unidadesInput.placeholder = 'Unidades';
    unidadesInput.className="m-1";
  
    nuevoProductoDiv.appendChild(nombreInput);
    nuevoProductoDiv.appendChild(precioInput);
    nuevoProductoDiv.appendChild(categoriaInput);
    nuevoProductoDiv.appendChild(unidadesInput);
  
    formElementsDiv.appendChild(nuevoProductoDiv);
}

// Función para cargar el formulario de stock
const renderFormStock = () => {
    crearNuevoCampo();
};

// Funcion eventica para renderizar el formulario infinito
const agregarCampoOnClick = () => {
  const botonAgregarCampo = document.getElementById('btn-stock');
  botonAgregarCampo.addEventListener('click',
   renderFormStock
 );
}

const terminarCargaProducto = () =>{
    const btnTerminar = document.getElementById("btn-terminar");
    const formElements = document.getElementById("formElements");
    

    btnTerminar.addEventListener("click", () =>{
        formElements.innerHTML="";
        const formStock = document.getElementById("formStock");
        formStock.reset();
        stockProductos.length=0
        console.log(stockProductos);
    })
}

const cargaStockProductos = () => {
  const containerProductos = document.getElementById("cargaDeProductos");
  containerProductos.innerHTML = `
    <div class="containerPrograma2" id="containerPrograma2">
      <div class="containerForm2">
        <h1>PROGRAMA MERCADERIA HUGO</h1>
        <div class="containerForm3">
          <div class="containerForm4">
            <h2>Carga tus Productos</h2>   
            <form class="form" id="formStock">
              <div id="formElements">
                
              </div>
              <div class="my-2">
                <button id="btn-stock" type="button" class="btn bg-dark text-warning">Click(+)</button>
                <button type="submit" class="btn bg-dark text-warning">Cargar</button>
                <button id="btn-terminar" type="button" class="btn bg-dark text-warning">Resetear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-volver2 border border-ligth">
        <button id="btn-volverAtras2"class="btn bg-warning">Volver</button>
    </div>`;

  containerProductos.className = "cargaDeProductos";
  console.log("cargaStockProductos ejecutado");
  agregarCampoOnClick();
  terminarCargaProducto()

 const formStock = document.getElementById("formStock");

 formStock.addEventListener("submit", (e) => {
 e.preventDefault();
 procesarFormulario();
 });

 volverAtrasCargarProducto()
};



const procesarFormulario = () => {
    const formElements = document.getElementById('formElements').children;
  
    // productoDiv = variable iteracion 
    for (const productoDiv of formElements){
      const nombre = productoDiv.children[0].value;
      const precio = parseFloat(productoDiv.children[1].value);
      const categoria= productoDiv.children[2].value;
      const unidades = parseInt(productoDiv.children[3].value);
  
      const producto = {
        nombre,
        precio,
        categoria,
        unidades,
      };
      stockProductos.push(producto)
    }
    console.log(stockProductos);
};





// Funcion Click button Cargar productos
const btnCalcularProductos = () =>{
    const btnCalcular = document.getElementById("btn-calcularProductos");
    
    const containerButtons = document.getElementById("cargaProductos");

    btnCalcular.addEventListener("click", () =>{
        contPadre.innerHTML = renderContPadre();
        setupInputMercaderiaChange();
        containerButtons.innerHTML = "";
        containerButtons.className= "heigth-0"
    })
}

// Funcion Click button Calcular productos

const btnCargarProductos = () =>{
    
    const btnCargar = document.getElementById("btn-cargarProductos");
    const containerButtons = document.getElementById("cargaProductos");

    btnCargar.addEventListener("click", () =>{
        
        cargaStockProductos()
        containerButtons.innerHTML = "";
        containerButtons.className= "heigth-0"
    })
}


// Funcion volver atras calcular producto
const volverAtrasCargarProducto = () =>{
    const btnVolver = document.getElementById("btn-volverAtras2");
    const containerPrograma2 = document.getElementById("cargaDeProductos");
    const cargarOcalcular = document.getElementById("cargaProductos");
    btnVolver.addEventListener("click", () =>{
        containerPrograma2.innerHTML="";
        cargarOcalcular.className="containerCargarOcalcular"
        renderContButtonsEleccion();
        btnCargarProductos();
        btnCalcularProductos();
    })
}


// Funcion volver atras calcular producto
const volverAtrasCalcularProducto = () =>{
    const btnVolver = document.getElementById("btn-volverAtras");
    const containerPadre = document.getElementById("containerPadre");
    const cargarOcalcular = document.getElementById("cargaProductos");
    btnVolver.addEventListener("click", () =>{
        containerPadre.innerHTML="";
        cargarOcalcular.className="containerCargarOcalcular"
        renderContButtonsEleccion();
        btnCargarProductos();
        btnCalcularProductos();
    })
}

//Funcion render del contenedor Padre del Programa
const renderContPadre = () => {
    return `
    <div class="containerPrograma">
        <div class="containerForm1">
            <h1>PROGRAMA MERCADERIA HUGO</h1>
            <div class="containerForm2">
                <div class="containerForm">
                    <div class="form">
                        <div class="mb-3 mercaderia">
                            <label class="mb-2"><b>Ingrese numero de Mercaderia a evaluar</b></label>
                            <input type="text" id="mercaderiaNum" placeholder="numero" class="input-class">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="mercaderia" class="mercaderiaDefinida"></div>
        <div class="containerTotal">
            <div class="total" id="casillasTotalLista">
                
            </div>
            <div class="total" id="casillasTotalNeto">
                
            </div>
        </div>
    </div>
    <div class="btn-volver border border-ligth">
        <button id="btn-volverAtras"class="btn bg-warning">Volver</button>
    </div>`;
};

// render contenedor/es de mercaderia
const renderContenedoresMercaderia = (valor,contenedor) =>{
    for (let i = 1; i <= valor; i++) {
        contenedor.innerHTML += `
            <div class="containers-mercaderia">
                <div class="mb-3 cantidades">
                    <label class="mb-2"><b>*Nombre Producto (${i})</label></b>
                    <input type="text" id="input-nombre${i}">
                </div>
                <div class="mb-3 cantidades">
                    <label class="mb-2"><b>*Unidades de producto (${i})</label></b>
                    <input type="text" id="input-unidades${i}">
                </div>
                <div class="mb-3 cantidades">
                    <label class="mb-2"><b>*Precio de producto (${i})</label></b>
                    <input type="text" id="input-precio${i}">
                </div>
                <div class="mb-3 cantidades">
                    <label class="mb-2"><b>*Descuento Producto (${i})</label></b>
                    <input type="text" id="input-descuento${i}">
                </div>
                <div class="mb-3 cantidades bg-warning" id="subTotalCasillas${i}">
                    <b><p id="subTotalLista">SUBTOTAL LISTA: 0</p></b>
                </div>
                <div class="mb-3 cantidades bg-warning" id="subTotalCasillasNeto${i}">
                <b><p id="subTotalNeto" class="bg-warning">SUBTOTAL NETO: 0</p></b>
                </div>
            </div>`;
    }
}

// Funcion para render de formulario envio datos inputs mercaderia
const renderFormulario = (contenedor) =>{
    contenedor.innerHTML = `
    <form id="formulario" class="formularioDatos">
        <div>${contenedor.innerHTML}</div>
        <button class="btn text-warning  btn-calcular bg-dark border-warning mt-2" type="submit">Calcular</button>
        <button id="btn-reset" class="btn text-warning  btn-calcular bg-dark border-warning mt-2" type="button">Resetear</button>
    </form>`;
}

// Funcion Calcular descuentos
const calcularDescuentos = (precioProducto,porcentajeDescuento) =>{
    const descuento = (precioProducto * porcentajeDescuento) / 100;
    const precioConDescuento = precioProducto - descuento;
    return (precioConDescuento).toFixed(2);
}

// Funcion subTotal de casillas individuales
const calcularSubTotalLista = (precio, unidades, iteracion) => {
    const subTotalCasilla = document.getElementById(`subTotalCasillas${iteracion}`);

    if (subTotalCasilla !== null) {
      return subTotalCasilla.innerHTML = `<b><p">SUBTOTAL LISTA: $${precio * unidades}</p></b>`;
      
    } else {
      return subTotalCasilla.innerHTML = "";
    }
  }

// Funcion subTotal de casillas individuales
const calcularSubTotalNeto = (precio,descuentoProducto,iteracion,unidades) =>{
    const subTotalCasillaNeto = document.getElementById(`subTotalCasillasNeto${iteracion}`);

    if(subTotalCasillaNeto !== null){

      return subTotalCasillaNeto.innerHTML = `<b><p>SUBTOTAL NETO: $${calcularDescuentos(precio,descuentoProducto)*unidades}</p></b>`;
    }else{
        return subTotalCasillaNeto.innerHTML =""
    }
}

const valorPrecioNeto = (precio,descuentoProducto,unidades) =>{
   return calcularDescuentos(precio,descuentoProducto)*unidades
}

// Funcion Total de  todas las casillas
const calcularTotalPrecioLista = () =>{
    const totalCasilla = document.getElementById("casillasTotalLista");
    const datosFinales = datos;

   let total = datosFinales.reduce((acumulador,item) =>{
     return acumulador+= item.precio * item.unidades
   },0)
   totalCasilla.innerHTML = `<p>Total Precios (lista) Mercaderia: $${total}</p>`
}

const calcularTotalPrecioNeto = () =>{
    const casillasTotalNeto = document.getElementById("casillasTotalNeto")
    const datosPrecios = datos
    let salida =datosPrecios.reduce((acumulador,item) =>{
        return acumulador+= item.precioNeto
    },0)

    return casillasTotalNeto.innerHTML = `<p>Total Precios (neto) Mercaderia: $${salida}</p>`
}

// Funcion Reseto de casillas
const resetearCasillas = (form,array) =>{
    form.reset();
    array.length=0;
    const totalLista = document.getElementById("casillasTotalLista");
    const totalNeto = document.getElementById("casillasTotalNeto")
    totalLista.innerHTML="";
    totalNeto.innerHTML="";
    calcularTotalPrecioLista();
    calcularTotalPrecioNeto();
}

