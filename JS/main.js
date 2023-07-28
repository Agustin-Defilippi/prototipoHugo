const usuario = document.getElementById("usuario");
const contPadre = document.getElementById("containerPadre");

permitirIngreso();

const alamacenarDatos = (nombre,unidades,precio,descuento,precioNeto) =>{
    const datosMercaderia={
        nombre: nombre,
        unidades: unidades,
        precio: precio,
        descuento: descuento,
        precioNeto : precioNeto
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

                let neto = valorPrecioNeto(precioMercaderia,descuentoProducto,unidadesProducto)

                let almacenDatos = alamacenarDatos(nombreMercaderia,unidadesProducto,precioMercaderia,descuentoProducto,neto);
                datos.push(almacenDatos);
                calcularSubTotalLista(precioMercaderia,unidadesProducto,i);
                calcularSubTotalNeto(precioMercaderia,descuentoProducto,i,unidadesProducto)
                calcularTotalPrecioLista();
                calcularTotalPrecioNeto();
                console.log(datos);
                
            }
        });

        const btnReset = document.getElementById("btn-reset");
        btnReset.addEventListener("click", () =>{
            resetearCasillas(formulario,datos)
            console.log(datos);
            for (let i = 1; i <= inputMercaderia.value; i++) {
                const subTotalCasilla = document.getElementById(`subTotalCasillas${i}`);
                const subTotalCasillaNeto = document.getElementById(`subTotalCasillasNeto${i}`);

                subTotalCasilla.innerHTML = `<b><p id="subTotalLista">SUBTOTAL LISTA: 0</p></b>`;
                subTotalCasillaNeto.innerHTML = `<b><p id="subTotalLista">SUBTOTAL NETO: 0</p></b>`;
            }
           console.log(datos);
        })
     
        calcularTotalPrecioLista();
        calcularTotalPrecioNeto();
        
    });
    volverAtrasCalcularProducto();
};

let stockProductos = [];












