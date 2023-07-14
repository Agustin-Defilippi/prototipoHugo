const inputMercaderia = document.getElementById("mercaderiaNum");

const renderInputs = (elemento) =>{
    for (let i = 1; i <= inputMercaderia.value; i++) {
        elemento.innerHTML += `
        <div class="containers-mercaderia">
            <div class="mb-3 cantidades">
                <label class="mb-2"><b>Ingrese nombre de mercadería (${i})</label></b>
                <input type="text" placeholder="nombre producto" id=input-mercaderia${i}>
            </div>
            <div class="mb-3 cantidades">
                <label class="mb-2"><b>Ingrese unidades de producto(${i})</label></b>
                <input type="text" placeholder="descuento producto" id=input-mercaderia${i}>
            </div>  
            <div class="mb-3 cantidades">
                <label class="mb-2"><b>Ingrese precio de mercadería (${i})</label></b>
                <input type="text" placeholder="precio producto" id=input-mercaderia${i}>
            </div>
            <div class="mb-3 cantidades">
            <label class="mb-2"><b>Ingrese descuento a aplicar a producto (${i})</label></b>
            <input type="text" placeholder="descuento producto" id=input-mercaderia${i}>
            </div>
            <div class="mb-3 cantidades bg-warning">
                <p>Total: </p>
            </div>  
        </div>`;
  }
  return elemento;
}

inputMercaderia.addEventListener("input", () => {
    const mercaderia = document.getElementById("mercaderia");
    mercaderia.innerHTML = ""; 
    let cantidadMercaderia = document.createElement("div");
    renderInputs(cantidadMercaderia)
    mercaderia.appendChild(cantidadMercaderia);

    //aca tengo que trabajar a los id ?

});


