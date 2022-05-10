//Creo btn para cada card y le agrego evento de redirigir al clickear//
function solicitados(){
    const container = document.getElementsByClassName("buy_product")
    for (const cont of container){
        btn = document.createElement("button");
        btn.innerText = "Comprar ahora";
        btn.setAttribute ("class", "comprar btn-primary btn");
        btn.addEventListener("click", ()=> {
            location = "./sections/productos.html";
        })   
        cont.appendChild(btn);
    }
}