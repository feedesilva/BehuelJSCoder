//Variables y creaciones de elementos globales//
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

let subtotal_envio = JSON.parse(localStorage.getItem("Precio_Carrito"));
let precio_final = document.createElement("span");

let div_TiendaRecoger = document.querySelector("#div_enviarRecoger");
let btn_TiendaRecoger = document.createElement("button")
btn_TiendaRecoger.setAttribute("id", "btn_TiendaRecoger")
btn_TiendaRecoger.setAttribute("class", "btn_enviar")
btn_TiendaRecoger.innerHTML="Continuar con la compra"

section_envio();

function section_envio(){
    precio();    
    retirar();
    enviar();
    f_Form();
}


//Muestro el precio final con envío incluido//
function precio(){
    precio_final.innerHTML= `Precio Final: ${subtotal_envio}`;
    div_precio.appendChild(precio_final);
    //Creo un local storage con el precio del envio incluido//
    localStorage.setItem("Precio_EnvioIncluido", JSON.stringify(subtotal_envio));
}

//Retiro en tienda//
function retirar(){
    //Seteo el botón de retiro//
    btn_recoger.setAttribute("class", "btn_envios")
    retiro_container.setAttribute("class", "retiro_container")
    btn_recoger.innerHTML = `<img class ="img_envio" src = "../assets/mapa.png">Recoger en Tienda`;
    retiro_container.appendChild(btn_recoger);
    precio_recoger.innerText = "Gratis";
    precio_recoger.setAttribute("class","label_envio")
    btn_recoger.appendChild(precio_recoger);
    container.appendChild(retiro_container);

    //al hacer click se deshabilita//
    btn_recoger.addEventListener("click",() =>{
        btn_recoger.classList.toggle('btn_selected');
        //Si cambie la opcion de envio a retiro, le resto $300 al precio y cambio el boton seleccionado//
        if(btn_evio.classList.contains('btn_selected')){
            btn_evio.classList.remove('btn_selected');
            btn_evio.disabled = false;
            envio_form.classList.toggle("active");
            subtotal_envio-=300;
        }
        div_TiendaRecoger.appendChild(btn_TiendaRecoger);
        //Accion al clickear el btn enviar de recoger en tienda//
        btn_TiendaRecoger.addEventListener("click", ()=>{
            location =  "pago.html";
        })
        //Muestro el precio//
        precio()
        btn_recoger.disabled = true
    })
}

//Envio a domicilio//
function enviar(){
    //Seteo el botón de envio//
    btn_evio.setAttribute("class", "btn_envios")
    envio_container.setAttribute("class", "retiro_container")
    btn_evio.innerHTML = `<img class ="img_envio" src = "../assets/cargo-truck.png">Recoger en Tienda`;
    envio_container.appendChild(btn_evio);
    precio_envio.innerText = "$300";
    precio_envio.setAttribute("class","label_envio")
    btn_evio.appendChild(precio_envio);
    container.appendChild(envio_container);
    //al hacer click se deshabilita//
    btn_evio.addEventListener("click",() =>{
        btn_evio.classList.toggle('btn_selected')
        //cambio el boton seleccionado//
        if(btn_recoger.classList.contains('btn_selected')){
            btn_recoger.classList.remove('btn_selected')
            btn_recoger.disabled = false
            div_TiendaRecoger.innerHTML = "";
        }
        //le sumo $300 al precio//
        subtotal_envio+=300; 
        //Muestro el precio//   
        precio()
        btn_evio.disabled = true
        envio_form.classList.toggle("active")
     
    })
}