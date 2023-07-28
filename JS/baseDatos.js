// Funcion Click button Calcular productos
const btnBaseDatos = () =>{
    
    const btnDatos = document.getElementById("btn-baseDatos");
    const containerButtons = document.getElementById("cargaProductos");
  
    btnDatos.addEventListener("click", () =>{
        
        containerButtons.innerHTML = "";
        containerButtons.className= "heigth-0"
    })
}