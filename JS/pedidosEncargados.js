btnCargarPedidos = () =>{
    const containerButtons = document.getElementById("cargaProductos");
    const btnMisPedidos = document.getElementById("btn-misPedidos");

    btnMisPedidos.addEventListener("click", () =>{
        renderMisPedidos()
        renderizarPedido();
        containerButtons.innerHTML = "";
        containerButtons.className= "heigth-0"
    })
}

// Funcion volver atras cargar producto
const volverAtrasMisPedidos= () =>{
    const btnVolver4 = document.getElementById("btn-volverAtras4");
    const containerPrograma2 = document.getElementById("contMisPedidos");
    const cargarOcalcular = document.getElementById("cargaProductos");
    btnVolver4.addEventListener("click", () =>{
        containerPrograma2.innerHTML="";
        cargarOcalcular.className="containerCargarOcalcular"
        renderContButtonsEleccion();
        btnBaseDatos();
        btnCargarProductos();
        btnCalcularProductos();
        btnCargarPedidos()
    })
}

const renderMisPedidos = () =>{
    const contMisPedidos = document.getElementById("contMisPedidos");

    contMisPedidos.innerHTML= `<div class="containerPrograma4" id="containerPrograma4">
    <div class="containerForm4">
      <h1>MIS PEDIDOS</h1>
      <div class="containerForm7">
        
        <div class="containerForm8">
            <table class="table table-striped border border-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Unidades</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Bonificacion</th>
                  <th scope="col">SubTotal</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody id="misPedidos" class="w-100">
       
              </tbody>
            </table>
        </div>
    
      </div>
      <div class="btn-resetBase">
        <button id="btn-pdf"class="btn bg-danger text-light" type="button">Descargar PDF</button>
      </div>
    </div>
  </div>
  <div class="btn-volver4 border border-ligth">
      <button id="btn-volverAtras4"class="btn bg-warning">Volver</button>
  </div>`
  volverAtrasMisPedidos();
  const btnPdf = document.getElementById("btn-pdf")

    btnPdf.addEventListener("click", () =>{
    descargarPDF("misPedidos")
    })
}

const renderizarPedido = () =>{
    const pedidos = datos;
    console.log(pedidos);
    const misPedidos = document.getElementById("misPedidos");
  
    pedidos.forEach((item,i) => {
       
        const contenedorMisPedidos = document.createElement("tr");
        contenedorMisPedidos.innerHTML=` <td>${i}</td>
        <td>${item.nombre}</td>
        <td>${item.unidades}</td>
        <td>$${item.precio} ARS</td>
        <td>%${item.descuento}</td>
        <td>$${item.precio * item.unidades} ARS</td>
        <td>$${calcularDescuentos(item.precio,item.descuento)* item.unidades} ARS</td>
      `

        misPedidos.appendChild(contenedorMisPedidos);
    });
}


// Función para generar y descargar el PDF
const descargarPDF = (x) => {
    const element = document.getElementById(x); // Reemplaza "contenido" con el ID del contenedor que contiene los datos a convertir
  
    // Configuración opcional para el tamaño y orientación del PDF
    const options = {
      margin: 10,
      filename: "productos.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
  
    // Utilizar html2pdf.js para generar el PDF
    html2pdf().from(element).set(options).save();
}; 
  
