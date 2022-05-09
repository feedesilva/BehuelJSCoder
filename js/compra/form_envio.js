function  f_Form(){
    select_comuna();
    nombre_form();
    cod_postal();
    nro_cel();
    let btn_form = document.querySelector("#btnForm");
    btn_form.addEventListener("click", ()=>{
        alert("HECHO")
    })
}
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
