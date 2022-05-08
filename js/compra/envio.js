let container = document.querySelector("#container_btn");
let div_envio = document.querySelector("#main_envios")
let envio_form = document.querySelector("#form_envio")

let btn_recoger = document.createElement("button");
let retiro_container = document.createElement("div");
let precio_recoger = document.createElement("label");

let btn_evio = document.createElement("button");
let envio_container = document.createElement("div");
let precio_envio = document.createElement("label");

let comuna = document.querySelector("#selectComuna");
let barrio = document.querySelector("#selectBarrio")
let div_precio = document.querySelector("#precio_envio");

let subtotal_envio = JSON.parse(localStorage.getItem("Precio"));
let precio_final = document.createElement("span");


function section_envio(){
    precio();    
    retirar();
    enviar();
    f_Form();
}



function precio(){
    precio_final.innerHTML= `Precio Final: ${subtotal_envio}`;
    div_precio.appendChild(precio_final)
    console.log(subtotal_envio);
}

function retirar(){
    btn_recoger.setAttribute("class", "btn_envios")
    retiro_container.setAttribute("class", "retiro_container")
    btn_recoger.innerHTML = `<img class ="img_envio" src = "../assets/mapa.png">Recoger en Tienda`;
    retiro_container.appendChild(btn_recoger);
    precio_recoger.innerText = "Gratis";
    precio_recoger.setAttribute("class","label_envio")
    btn_recoger.appendChild(precio_recoger);
    container.appendChild(retiro_container);
    //cambiar a toggle//
    btn_recoger.addEventListener("click",() =>{
        btn_recoger.classList.toggle('btn_selected')
        if(btn_evio.classList.contains('btn_selected')){
            btn_evio.classList.remove('btn_selected')
            btn_evio.disabled = false
            envio_form.classList.toggle("active")
            subtotal_envio-=300;
        }
        precio()
        btn_recoger.disabled = true
    
    })
}
function enviar(){
    btn_evio.setAttribute("class", "btn_envios")
    envio_container.setAttribute("class", "retiro_container")
    btn_evio.innerHTML = `<img class ="img_envio" src = "../assets/cargo-truck.png">Recoger en Tienda`;
    envio_container.appendChild(btn_evio);
    precio_envio.innerText = "$300";
    precio_envio.setAttribute("class","label_envio")
    btn_evio.appendChild(precio_envio);
    container.appendChild(envio_container);
    //cambiar a toggle//
    btn_evio.addEventListener("click",() =>{
        btn_evio.classList.toggle('btn_selected')
        if(btn_recoger.classList.contains('btn_selected')){
            btn_recoger.classList.remove('btn_selected')
            btn_recoger.disabled = false
        }
        subtotal_envio+=300;    
        precio()
        btn_evio.disabled = true
        envio_form.classList.toggle("active")
    })
    
}

section_envio();

//REVISAR DOBLE CLICK//
let btn_form = document.querySelector("#btnForm");
btn_form.addEventListener("click", ()=>{
    location = "pago.html";
    console.log("PAAGO");
})