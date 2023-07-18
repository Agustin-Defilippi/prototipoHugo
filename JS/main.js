const usuario = document.getElementById("usuario");
const contPadre = document.getElementById("containerPadre");

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

crearIngreso();

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
                            <input type="text" id="mercaderiaNum" placeholder="numero">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="mercaderia" class="mercaderiaDefinida"></div>
        <div class="containerTotal">
            <div class="total">
                <p>Total Productos:</p>
            </div>
        </div>
    </div>`;
};


const alamacenarDatos = (nombre,unidades,precio,descuento) =>{
    const datosMercaderia={
        nombre : nombre,
        unidades: unidades,
        precio: precio,
        descuento: descuento
    }
    return datosMercaderia
}



let datos = []

const setupInputMercaderiaChange = () => {
    const inputMercaderia = document.getElementById("mercaderiaNum");

    inputMercaderia.addEventListener("change", () => {
        const mercaderia = document.getElementById("mercaderia");
        mercaderia.innerHTML = "";
        let cantidadMercaderia = document.createElement("div");

        cantidadMercaderia.innerHTML = `
            <form id="formulario" class="formularioDatos">
            
                <div>${cantidadMercaderia.innerHTML}</div>
                <button type="submit" class="btn btn-primary">enviar</button>
            </form>`;

        for (let i = 1; i <= inputMercaderia.value; i++) {
            cantidadMercaderia.innerHTML += `
                <div class="containers-mercaderia">
                    <div class="mb-3 cantidades">
                        <label class="mb-2"><b>Ingrese nombre de mercadería (${i})</label></b>
                        <input type="text" id="input-nombre${i}">
                    </div>
                    <div class="mb-3 cantidades">
                        <label class="mb-2"><b>Ingrese unidades de producto (${i})</label></b>
                        <input type="text" id="input-unidades${i}">
                    </div>
                    <div class="mb-3 cantidades">
                        <label class="mb-2"><b>Ingrese precio de mercadería (${i})</label></b>
                        <input type="text" id="input-precio${i}">
                    </div>
                    <div class="mb-3 cantidades">
                        <label class="mb-2"><b>Ingrese descuento a aplicar a producto (${i})</label></b>
                        <input type="text" id="input-descuento${i}">
                    </div>
                    <div class="mb-3 cantidades bg-warning">
                        <p>Total: </p>
                    </div>
                </div>`;
        }
        mercaderia.appendChild(cantidadMercaderia);

        const formulario = document.getElementById("formulario");

        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            for (let i = 1; i <= inputMercaderia.value; i++) {
                const nombreMercaderia = document.getElementById(`input-nombre${i}`).value;
                const unidadesProducto = document.getElementById(`input-unidades${i}`).value;
                const precioMercaderia = document.getElementById(`input-precio${i}`).value;
                const descuentoProducto = document.getElementById(`input-descuento${i}`).value;
                
                let almacenDatos = alamacenarDatos(nombreMercaderia,unidadesProducto,precioMercaderia,descuentoProducto)
                datos.push(almacenDatos);
                console.log(almacenDatos);
            }
            console.log(datos);
        });
    });
};

