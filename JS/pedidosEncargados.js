btnCargarPedidos = () =>{
    const containerButtons = document.getElementById("cargaProductos");
    const btnMisPedidos = document.getElementById("btn-misPedidos");

    btnMisPedidos.addEventListener("click", () =>{
        renderMisPedidos()
       /*  renderizarPedido(); */
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

    contMisPedidos.innerHTML= `
    <div  class="containerPrograma4" id="containerPrograma4">
      <div  class="containerForm4">
        <div id="misPedidosPdf" class="containerForm4">
          <h1>MIS PEDIDOS</h1>
          <div class="containerForm7">

            <div class="cont-input-cliente">

              <label class="mb-2"><b>Ingrese Nombre Cliente</b></label>
              <input type="text" id="clienteNombre" placeholder="nombre" class="input-class mb-3">

            </div>

            <div id="contenedores"class="containerForm8 pdf-style" id="misPdf table table-striped">

            
            </div>
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
  


   volverAtrasMisPedidos()
   renderContenedores()

      const btnPdf = document.getElementById("btn-pdf")

      btnPdf.addEventListener("click", () =>{
        Toastify({

          text: "PDF DESCARGADO, ENCUENTRALO EN LA CARPETA DESCARGAS!",
          backgroundColor:"red",
          textColor:"black",
          duration: 3000, 
          gravity: "bottom", 
          position: "center",
          style: {
            color:"white",
          },
          
        }).showToast();

        setTimeout(() => {
          descargarPDF("misPedidosPdf"); 
        }, 3000);
      
      })  
}

const renderContenedores = () =>{
  const contenedores = document.getElementById("contenedores");
  
  const inputNombreCliente = document.getElementById("clienteNombre");

  inputNombreCliente.addEventListener("change", () =>{
    contenedores.innerHTML = `
  <table    class="table table-striped border border-dark">
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
  </table>`
  renderizarPedido();
  })
  
 
}


const renderizarPedido = () =>{
  const pedidos = datos;
  console.log(pedidos);
  const inputNombreCliente = document.getElementById("clienteNombre");
  const misPedidos = document.getElementById("misPedidos");

  const arrayFiltradoCliente = pedidos.filter(item => item.nombrePedido === inputNombreCliente.value.trim().toUpperCase());

  
 
  
  arrayFiltradoCliente.forEach((item,i) => {
       
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
      margin: 15,
      filename: "PedidosHUGO.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2,className:"pdf-style"},
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      
    };

    // Utilizar html2pdf.js para generar el PDF
    html2pdf().from(element).set(options).save();
}; 
   

/* const descargarPDF = (className) => {
  // Crear una copia del contenido para no modificar el HTML original
  const element = document.createElement("div");
  const originalContent = document.getElementsByClassName(className);

  for (let i = 0; i < originalContent.length; i++) {
    const clonedNode = originalContent[i].cloneNode(true);
    element.appendChild(clonedNode);
  }

  // Configuración opcional para el tamaño y orientación del PDF
  const options = {
    margin: 15,
    filename: "PedidosHUGO.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2},
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  // Aplicar estilos en línea a los elementos clonados
  const elements = element.getElementsByClassName(className);

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "black";
    elements[i].style.fontSize = "20px";
    elements[i].style.border = "black solid 2px";
    elements[i].style.fontFamily = "'Times New Roman', Times, serif";
   
    // Agrega más estilos según sea necesario
  }

  // Utilizar html2pdf.js para generar el PDF
  html2pdf().from(element).set(options).save();
}; */

/* 
contMisPedidos.innerHTML= `<div  class="containerPrograma4" id="containerPrograma4">
<div  class="containerForm4">
  <div id="misPedidosPdf" class="containerForm4">
    <h1>MIS PEDIDOS</h1>
    <div class="containerForm7">
      
      <div class="containerForm8 pdf-style" id="misPdf table table-striped">
          <table    class="table table-striped border border-dark">
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
  </div>
  
  <div class="btn-resetBase">
    <button id="btn-pdf"class="btn bg-danger text-light" type="button">Descargar PDF</button>
  </div>
</div>
</div>
<div class="btn-volver4 border border-ligth">
  <button id="btn-volverAtras4"class="btn bg-warning">Volver</button>
</div>` */