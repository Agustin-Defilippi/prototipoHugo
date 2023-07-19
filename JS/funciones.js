// Funcion ingreso Usuario
const crearIngreso = () => {
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

        if (nombreUsuario.value.toUpperCase() === "HUGO" && contraseñaUsuario.value.toUpperCase() === "HUGOCOLON10") {
            usuario.innerHTML = "";
            contPadre.innerHTML = renderContPadre();
            setupInputMercaderiaChange();
        } else {
            const errorIngreso = document.getElementById("errorIngreso");
            errorIngreso.textContent = "Ingreso Erróneo, vuelve a intentar!";
            errorIngreso.classList.add("text-danger");
            setTimeout(() => {
                errorIngreso.textContent = "";
            }, 3000);
        }
    });
};

//Funcion render del contenedor Padre del Programa
const renderContPadre = () => {
    return `
    <div class="containerPrograma">
        <div class="containerForm1">
            <h1>Programa Mercaderia Hugo</h1>
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
            <div class="total" id="casillasTotal">
                
            </div>
        </div>
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
                <div class="mb-3 cantidades" id="totalCasillas${i}">
                    <p id="totalCasilla" class="bg-warning"> </p>
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
        <button id="btn-reset" class="btn text-warning  btn-calcular bg-dark border-warning mt-2" type="submit">Resetear</button>
    </form>`;
}

// Funcion subTotal de casillas individuales
const calcularTotalCasilla = (precio,unidades) =>{
    const totalCasilla = document.getElementById(`totalCasilla`);
    
    return totalCasilla.innerHTML = `<b><p class ="bg-warning">Sub Total: $${precio * unidades}</p></b>`;
}

// Funcion Total de  todas las casillas
const calcularTotalCasillas = () =>{
    const totalCasilla = document.getElementById("casillasTotal");
    const datosFinales = datos;

   let total = datosFinales.reduce((acumulador,item) =>{
     return acumulador+= item.precio * item.unidades
   },0)
   totalCasilla.innerHTML = `<p>Total Precios Mercaderia: $${total}</p>`
}
