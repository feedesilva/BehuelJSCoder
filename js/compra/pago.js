//VARIABLES Y CREACIONES DE ELEMENTOS GLOBALES
let div_img = document.querySelector("#logo_marca");
let card_number = document.querySelector("#number");
let inputNum = document.querySelector("#inputNumero");
let banco; 
let visa;
let master; 

let cuotas_precio;
let precio_card;
let cuotas = document.querySelector("#inputCuotas");
let eleccion;
let interes = 1; 
let exist = 0;

const card = document.querySelector("#card");
const btn = document.querySelector("#abrir_form");
let subtotal = document.createElement("h3");
let div_p = document.querySelector("#precio");

funcion_Pago();
cuotas_precio = precio_card;

function funcion_Pago(){
    volver(); 
    rotate();
    precio();
    mes_tarjeta();
    año();
    numero_tarjeta();
    nombre_tarjeta();
    cvv();
    send_pay();
}


//ROTACION TARJETA//

function rotate(){
    const pay_form = document.querySelector("#form_card");
    card.addEventListener('click', ()=>{
        card.classList.toggle('active');
        console.log(card.classList.contains("active"));
    });
    //ABRIR FORM//
    btn.addEventListener("click", () =>{
        btn.classList.toggle("active");
        pay_form.classList.toggle("active");
    })
}
//Vuelvo la tarjeta al frente//
function mostrarFrente(){
    if(card.classList.contains('active')) 
        card.classList.remove("active")
}

//Vuelvo la tarjeta Trasera//
function mostrarBack(){
    if(!card.classList.contains('active'))
        card.classList.add("active");
}

//Muestro precio final//
function precio(){
    precio_card = JSON.parse(localStorage.getItem("Precio_EnvioIncluido"));
    console.log(precio_card);
    subtotal.setAttribute("class", "precioFinal")
    subtotal.innerHTML = "El precio final es: $" + precio_card;
    div_p.appendChild(subtotal);
}
//Creo opciones de mes//
function mes_tarjeta(){
    let selectMonth= document.querySelector("#selectMes");
    let mes = 0;
    let card_month = document.querySelector("#month");
    //Creo opción para 12 meses//
    for(let i = 1; i<= 12; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerText=i;
        mes = i;
        selectMonth.appendChild(option);
    }
    //si cambio el mes elegido, roto la tarjeta y si es menor a 10 le agrego un 0 por delante del mes//
    selectMonth.addEventListener("change", () =>{
        mostrarFrente();
        selectMonth.value <= 9 ? card_month.innerText = "0 "+selectMonth.value :  card_month.innerText = selectMonth.value;
    })
}

//Creo opciones de Año//
function año(){
    let selectYear = document.querySelector("#selectYear");
    const actualYear = new Date().getFullYear();
    let card_year = document.querySelector("#year");
    //Opciones para 10 años//
    for(let i = actualYear; i<= actualYear+10; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerText=i;
        selectYear.appendChild(option);
    }
    //Si cambio el año elegido, roto la tarjeta y elimino los primeros 2 números//
    selectYear.addEventListener("change", ()=>{
        mostrarFrente();
        card_year.innerText = selectYear.value.slice(2); //Paso la seleccion de año a la tarjeta cortando los primeros 2 valores
    })
}
//Input numero tarjeta//

//Cada número que agrego paso el código del teclado y lo termino transformando a número//
function numero_tarjeta(){
    inputNum.addEventListener("keypress", (e)=>{
        mostrarFrente();
        e.preventDefault();
        let codigoinput = e.keyCode;
        let valorinput = String.fromCharCode(codigoinput);
        valorParsed = parseInt(valorinput);
        //si es número o 0 (código 48)//
        if(valorParsed || codigoinput === 48){
            if(inputNum.value.length < 19){
                let i = inputNum.value.length+1;
                //Creo el espacio cada 4 digitos//
                if(i%5!==0){
                    inputNum.value += valorParsed;
                }
                else{
                    inputNum.value += ' ' + valorParsed;
                }
            }
        }
        card_number.innerText = inputNum.value;

        //Defino que imagen se muestra en la tarjeta//
        if(inputNum.value[0] ==4){
            div_img.innerHTML = '';
            const card_img = document.createElement("img");
            banco = visa; 
            card_img.src = "../assets/visa.png";
            div_img.appendChild(card_img);
            calcularIntereses();
        }
        else{
            if(inputNum.value[0] == 3){
                div_img.innerHTML = ''; 
                const card_img = document.createElement("img");
                banco = master;
                card_img.src = "../assets/master.png";
                div_img.appendChild(card_img);
                calcularIntereses();
            }
        }
    })
}

//Cálculo de cuotas e intereses//
//Según la tarjeta elegida, calculo los intereses//
function calcularIntereses(){
    if(inputNum.value[0] ==4){
        if(exist === 0)
            createOptions();
        cuotas.addEventListener("change", ()=>{
            interesVisa();
        })
    }
    else{
        if(inputNum.value[0] == 3){
            if(exist === 0)
                createOptions();
            cuotas.addEventListener("change", ()=>{
                interesMaster();
            })
        }
    }
}

//Creo las opciones de 1, 3 o 6 cuotas//
function createOptions(){
    exist = 1;
    for(let i = 1; i<=6; i++){
        if(i===1 || i%3 === 0){
            let option = document.createElement("option");
            if(i===1){
                option.value = i;
                option.innerHTML = i;
            }
            if(i===3){
                option.value = i;
                option.innerText=i;
            }
            if(i===6){
                option.value = i;
                option.innerText=i;
            }
            cuotas.appendChild(option);
        }
    }
}
//Calculo los intereses para la tarjeta visa//
function interesVisa(){
    //si cambio cantidad de cuotas tomo el precio original//
    cuotas_precio = cuotas_precio/interes
    if(cuotas.value === '1'){
        interes = 1 //sin interés//
    }
    if(cuotas.value === '3'){
        interes = 1.1;//10%//
    }
    if(cuotas.value === '6'){
        interes = 1.2;  //20%//
    }
    cuotas_precio*=interes;
    //Paso el precio a entero//
    let precio_Int = parseInt(cuotas_precio);
    //Modifico el precio msotrado//
    subtotal.innerHTML = '';
    subtotal.innerHTML = "El precio final es: $" + precio_Int;
    div_p.appendChild(subtotal);
}

//Calculo los intereses para la tarjeta master//
function interesMaster(){
     //si cambio cantidad de cuotas tomo el precio original//
    cuotas_precio = cuotas_precio/interes
        if(cuotas.value === '1'){
            interes = 1 //sin interes//
        }
        if(cuotas.value === '3'){
            interes = 1.2; //20%//
        }
        if(cuotas.value === '6'){
            interes = 1.3; //30%//
        }
        cuotas_precio*=interes;
        let precio_Int = parseInt(cuotas_precio);
        subtotal.innerHTML = '';
        subtotal.innerHTML = "El precio final es: $" + precio_Int;
        div_p.appendChild(subtotal);
}

//Input Nombre//
function nombre_tarjeta(){
    let inputName = document.querySelector("#inputNombre")
    inputName.addEventListener("keypress", (e)=>{
        mostrarFrente();
        e.preventDefault();
        let codigoinput = e.keyCode;
        let valorinput = String.fromCharCode(codigoinput);
        valorParsed = parseInt(valorinput);  //Discrimino solo numeros
        valorParsed  || (inputName.value += valorinput); //OP OR, si no es un número lo tomo//
        let card_name = document.querySelector("#name");
        card_name.innerText = inputName.value;
})
}

//Input numero cvv//
function cvv(){
    let inputCvv = document.querySelector("#inputCvv");
    let card_cvv = document.querySelector("#cvv");
    inputCvv.addEventListener("keypress", (e)=>{
        mostrarBack();
        e.preventDefault();
        let codigoinput = e.keyCode;
        let valorinput = String.fromCharCode(codigoinput);
        valorParsed = parseInt(valorinput);
        if(valorParsed || codigoinput === 48){
            if(inputCvv.value.length <3){ //LIMITO A 3 DIGITOS
                inputCvv.value += valorParsed;
            }
        }
        card_cvv.innerHTML = inputCvv.value;     //Agrego a tarjeta el cvv
    })
}

//Pulso enviar//
function send_pay(){
    let send = document.querySelector("#btn_enviar");
    send.addEventListener("click", () => {
        Swal.fire({
            title: "Compra realizada con Exito",
            icon: "success",
             html:
              '<br>'+
              '<a href="../index.html" class = "btn_enviar" id = "btn_pago">Ir a Inicio</a> ',
              showConfirmButton: false,
              heightAuto:false
        })
    })
}

//Funcion de boton de volver al envio//
function volver(){
    let container = document.querySelector("#back");
    let back = document.createElement("button");
    back.setAttribute("class", "comprar btn-primary btn agregar ")
    back.innerText = "Volver"
    back.addEventListener("click", ()=>{
        location = "./envio.html";
    })
    container.appendChild(back)
}

