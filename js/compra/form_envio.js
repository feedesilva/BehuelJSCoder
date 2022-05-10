//Formulario envio a domicilio//
function  f_Form(){
    select_comuna();
    nombre_form();
    cod_postal();
    nro_cel();
    btn_Enviar();
}

//Creo seleecion de comuna 1 al 15//
function select_comuna(){
    for(i = 1; i<16;i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML=i;
        comuna.appendChild(option);
    }
    comuna.addEventListener("change", ()=>{
        select_barrio(comuna.value);
    })
}

//Seteo los inputs de nombre y apellido, solo pueden ingresarse letras//
function nombre_form(){
    nombre_envio.addEventListener("keypress", (e)=>{
        e.preventDefault();
        let codigoinput = e.keyCode;
        let valorinput = String.fromCharCode(codigoinput);
        valorParsed = parseInt(valorinput);  //Discrimino solo numeros
        valorParsed  || (nombre_envio.value += valorinput); //OP OR, si no es un número lo tomo//
    })
    apellido_envio.addEventListener("keypress", (e)=>{
        e.preventDefault();
        let codigoinput = e.keyCode;
        let valorinput = String.fromCharCode(codigoinput);
        valorParsed = parseInt(valorinput);  //Discrimino solo numeros
        valorParsed  || (apellido_envio.value += valorinput); //OP OR, si no es un número lo tomo//
    })
}

//Seteo input de codigo postal. Solo pueden ingresarse 4 digitos numericos//
function cod_postal(){
    let cp = document.querySelector("#codPostal");
    cp.addEventListener("keypress", (e)=>{
        e.preventDefault();
        let codigoinput = e.keyCode;
        let valorinput = String.fromCharCode(codigoinput);
        valorParsed = parseInt(valorinput);
        if(valorParsed || codigoinput === 48){
            if(cp.value.length <4){ //LIMITO A 4 DIGITOS
                cp.value += valorParsed;
            }
        }
    })
}

//Seteo input de celular. Solo pueden ingresarse 11 digitos numericos. Hace las separaciones de manera automática//
function nro_cel(){
    let cel = document.querySelector("#cel_envio");
    cel.addEventListener("keypress", (e)=>{
        e.preventDefault();
        let codigoinput = e.keyCode;
        let valorinput = String.fromCharCode(codigoinput);
        valorParsed = parseInt(valorinput);
        if(valorParsed || codigoinput === 48){
            if(cel.value.length < 12){
                if(cel.value.length === 2 || cel.value.length === 7)
                    cel.value += ' ' + valorParsed;
                else
                    cel.value += valorParsed;
            }
        }
    })
}

//Creo el botón de envío y redirijo al pago//
function btn_Enviar(){
    let div_btn = document.querySelector("#div_btnForm");
    let btn_form = document.createElement("a");
    btn_form.setAttribute("class", "btn_enviar  btn_form_envio");
    btn_form.innerHTML = `Continuar con la compra`
    btn_form.addEventListener("click", ()=>{
        location = "./pago.html"
    })
    div_btn.appendChild(btn_form);
}