const usuario = document.getElementById("usuario");
const contPadre = document.getElementById("containerPadre");

crearIngreso();

const alamacenarDatos = (nombre,unidades,precio,descuento) =>{
    const datosMercaderia={
        nombre : nombre,
        unidades: unidades,
        precio: precio,
        descuento: descuento
    }
    return datosMercaderia
}

const datos = []

const setupInputMercaderiaChange = () => {
    const inputMercaderia = document.getElementById("mercaderiaNum");

    inputMercaderia.addEventListener("change", () => {
        const mercaderia = document.getElementById("mercaderia");
        mercaderia.innerHTML = "";
        let cantidadMercaderia = document.createElement("div");

        renderContenedoresMercaderia(inputMercaderia.value,cantidadMercaderia);
        renderFormulario(cantidadMercaderia);
       
        mercaderia.appendChild(cantidadMercaderia);

        const formulario = document.getElementById("formulario");

        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            for (let i = 1; i <= inputMercaderia.value; i++) {
                const nombreMercaderia = document.getElementById(`input-nombre${i}`).value;
                const unidadesProducto = document.getElementById(`input-unidades${i}`).value;
                const precioMercaderia = document.getElementById(`input-precio${i}`).value;
                const descuentoProducto = document.getElementById(`input-descuento${i}`).value;
                const totalCasillas = document.getElementById(`totalCasillas${i}`);

                let almacenDatos = alamacenarDatos(nombreMercaderia,unidadesProducto,precioMercaderia,descuentoProducto);
                datos.push(almacenDatos);
                totalCasillas.innerHTML= calcularTotalCasilla(precioMercaderia,unidadesProducto);
                calcularTotalCasillas();
                const btnReset = document.getElementById("btn-reset");

                btnReset.addEventListener("click", () =>{
                    const totalFuera = document.getElementById("casillasTotal");
                    formulario.reset();
                    datos.splice(0,datos.length);
                    console.log(datos);
                    totalFuera.innerHTML="";
                    totalCasillas.innerHTML="";
                })
            }
            console.log(datos);
        });
    });
};





