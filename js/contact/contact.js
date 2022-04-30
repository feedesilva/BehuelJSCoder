let form = document.querySelector("#my_form");
//Incorporo SweetAlert para informar que el mensaje fue enviado//
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    Swal.fire({
        title: "Mensaje Enviado!",
        text: "Recibirá una respuesta en los próximos días",
        icon: "success",
        confirmButtonText: "Genial",
    })
   
})