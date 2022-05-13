let form = document.querySelector("#my_form");
let new_messaje = document.createElement("div");
//Incorporo SweetAlert para informar que el mensaje fue enviado//
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    Swal.fire({
        title: "Mensaje Enviado!",
        text: "Recibirá una respuesta en los próximos días",
        icon: "success",
        confirmButtonText: "Genial",
    })
    setTimeout(()=>{
        form.innerHTML = ''
        new_messaje.innerHTML = `<h2 class = "h2_Contact">Recibimos su mensaje. Pronto nos contactaremos</h2>`
        console.log("GRACIAS");
        form.appendChild(new_messaje)
    },1500);
})
