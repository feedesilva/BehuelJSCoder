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
  actual_shop();
}

function actual_shop(){
  let container = document.querySelector("#mainContainer");
  let myShopp = document.querySelector("#shopp");
  if(!myShopp){
    myShopp = document.createElement("div");
    myShopp.setAttribute("id", "shopp");
      container.appendChild(myShopp);
  }
 
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

const template = document.querySelector("#template-carrito").content;
const fragment = document.createDocumentFragment();
const items = document.querySelector("#items");
function pintarCarrito(){
  Object.values(tienda).forEach(producto => {
    console.log(producto);
    template.querySelector('th').textcontent = producto.id;
    template.querySelectorAll('td')[0].textcontent = producto.nombre
    template.querySelectorAll('td')[1].textcontent = producto.cantidad
    template.querySelector('span').textcontent = producto.precio

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
  })
  items.appendChild(fragment)
}

//REVISAR///
function refreshShopp(){
  let container = document.querySelector("#shopp");
  container.innerHTML="";
  //let prods = tienda.productos;
  let newContainer = document.createElement("div");
  newContainer.setAttribute("style", "display:flex; flex-flow: column wrap");
  // prods.forEach(product => {
    const view_shopp = JSON.parse(localStorage.getItem("Carrito"));
    // const {cantidad, nombre, precio} = product// Desestructuracion
    let nodoLi = document.createElement("div");
    nodoLi.innerHTML = `${view_shopp}`;
    // nodoLi.innerHTML = "";
    // nodoLi.innerHTML = `<br>${cantidad} - ${nombre} - ${precio}   <br> `;
    newContainer.appendChild(nodoLi);
//})
  container.appendChild(newContainer);

  tienda.save();

  let btn_div = document.createElement("div");
  btn_div.style = "display:flex; flex-flow: row wrap";
  let final_price = document.createElement("h3");
  final_price.innerHTML = `Precio final: ${preciofinal} <br>`;
  newContainer.appendChild(final_price);
  let buy_btn = document.createElement("button");
  buy_btn.innerText = "Finalizar compra";
  buy_btn.setAttribute("class", "comprar btn-primary btn");
  buy_btn.style = ("margin:20px");
  buy_btn.addEventListener("click", ()=>{
    location = "pago.html";
  })

  //RESETEO EL CARRITO//
  let reset_btn = document.createElement("button");
  reset_btn.innerText = "reset carrito";
  reset_btn.setAttribute("class", "comprar btn-primary btn");
  reset_btn.style = ("margin-top:20px");
  reset_btn.addEventListener("click", ()=>{
    container.innerHTML="";
    tienda= new Tienda([]);
    Toastify({
      text:"Carrito Eliminado ❌",
      duration: 3000,
      style:{
        background: "black",
        color: "white",}
    }).showToast();
    
  })
  newContainer.appendChild(btn_div);
  btn_div.appendChild(buy_btn);
  btn_div.appendChild(reset_btn);

  
}

function product_filter(idgroup){
  return  stockProductos.filter(stockProductos=>stockProductos.categoria_producto===idgroup);
}