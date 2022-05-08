let preciofinal = 0 ;
show_cat();

//Verifico local storage y edito Tienda//
let tienda = new Tienda ([]);
const data = JSON.parse(localStorage.getItem("Shop"));
if(data){
  tienda = new Tienda(data);
}

//mostrar botones de categorías//
function show_cat (){
  let container = document.querySelector("#show");
  categorias.forEach((cat)=>{
    const btn = document.createElement("button");
    btn.setAttribute("class", "comprar btn-primary btn agregar");  
    btn.innerHTML=cat.nombre;
    btn.addEventListener("click", ()=>
     show_element (cat))
    container.appendChild(btn);

})

}

function show_element(group){
  //filtro los productos por categoria//
  const choose = product_filter(group.id);
  //tomo el div para asignar posicion especifica al espacio para los productos/
  let posicion = document.querySelector("#big_space");
  //creo el espacio para los productos a comprar//
  let contenedor = document.getElementById("mainContainer");
  contenedor===null && createContainer(); //Operador AND
  function createContainer()
  {
    contenedor = document.createElement("div");
    contenedor.setAttribute("id", "mainContainer");
    posicion.appendChild(contenedor);
  }
  
  //Agrego los productos al espacio creado//
  let nodoProductos = document.getElementById("productos");

  nodoProductos===null ? crearProductos() : nodoProductos.innerHTML="" //Aplico operador ternario
  function crearProductos(){
    nodoProductos = document.createElement("div");
    nodoProductos.setAttribute("id", "productos");
    contenedor.appendChild(nodoProductos);
  }
  
  
 //a cada producto de la categoria elegida le asigno su informacion//
 let cadena ='';
 choose.forEach((element)=>{
   cadena+=product_information(element);
   nodoProductos.innerHTML=cadena;
 });
}



function product_information(product){
  return `
        <div class= "group">
        <div class="productWrapper">
        <div class="mainProductInfo">
          <div class="productImage">
            <img class ="imagen" src="${product.img}">
          </div>
          <div class="productInfo">
            ${product.nombre}<br>
            ${product.precio}
          </div>
          </div>
          <div class="productBtn">
            ${btn_prod(product)}
          </div>
          </div>
          </div>`
}

function btn_prod(prod){  
  return `<button class="comprar btn-primary btn" onclick="addtoShopp (${prod.id})">Agregar al Carrito</button>`
}
function addtoShopp(idProduct){
  let products = stockProductos.map(el=>el.id);
  let index = products.findIndex(el=>el===idProduct);
  let product = stockProductos[index];

   //TOASTIFY//  
  Toastify({
    text: "Producto Agregado 🛒",
    position: "right",
    gravity: "bottom",  
    duration: 2000,
    style: {
      background: "black",  
      borderRadius: "10px",
    }
  }).showToast();
  
  tienda.addProducto(product);
  refreshShopp();
  
}
let pesos = JSON.parse(localStorage.getItem("Precio"))

//CARRITO//
let vaciar_leyenda = document.querySelector("#carrito_Vacio");
const items = document.querySelector("#items");
function pintarCarrito(){
  vaciar_leyenda.innerHTML=""
  items.innerHTML = '';
  const template = document.querySelector("#template-carrito").content; 
  const fragment = document.createDocumentFragment();
  template.innerHTML = '';
  
  Object.values(tienda).forEach(producto => {
    console.log(producto);
    
    for (const product of producto) {
    template.querySelector('th').innerHTML = `${product.id}`;
    template.querySelectorAll('td')[0].innerHTML = `${product.nombre}`;
    template.querySelectorAll('td')[1].innerHTML = `${product.cantidad}`;
    template.querySelector('span').innerHTML =`${product.precio * product.cantidad}`;
    
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    
  }
  })
  items.appendChild(fragment);
  
}


let btn_div = document.createElement("div");
let buy_btn = document.createElement("button");
let reset_btn = document.createElement("button");
function refreshShopp(){
  tienda.save();
  vaciar_leyenda.innerHTML = `Precio final: $${preciofinal}` 
  let container = document.querySelector("#div_C");
  btn_div.style = "display:flex; flex-flow: row wrap";
  buy_btn.innerText = "Finalizar compra";
  buy_btn.setAttribute("class", "comprar btn-primary btn");
  buy_btn.style = ("margin:20px");
  buy_btn.addEventListener("click", ()=>{
    location = "envio.html";
  })


  reset_btn.innerText = "reset carrito";
  reset_btn.setAttribute("class", "comprar btn-primary btn");
  reset_btn.style = ("margin-top:20px");
  
 
  container.appendChild(btn_div);
  btn_div.appendChild(buy_btn);
  btn_div.appendChild(reset_btn); 
}

function product_filter(idgroup){
  return  stockProductos.filter(stockProductos=>stockProductos.categoria_producto===idgroup);
}

  //RESETEO EL CARRITO//
reset_btn.addEventListener("click", ()=>{
   items.innerHTML="";
  tienda= new Tienda([]);
   preciofinal=0;
   vaciar_leyenda.innerHTML = `Precio final: $${preciofinal}`;
  Toastify({
    text:"Carrito Eliminado ❌",
    duration: 3000,
    style:{
      background: "black",
      color: "white",}
  }).showToast();
  
})