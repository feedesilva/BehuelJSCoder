const conteiner = document.getElementsByClassName("buy_product")
for (const cont of conteiner){
btn = document.createElement("button");
btn.innerText = "Comprar ahora";
btn.setAttribute ("class", "comprar btn-primary btn");
btn.addEventListener("click", ()=> {
    location = "./sections/carrito.html";

}
)
cont.appendChild(btn);
}
