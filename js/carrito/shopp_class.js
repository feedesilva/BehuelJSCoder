let precio_card = 0;
class Tienda{
    constructor(productos){
        this.productos=productos;
    }

    //llega el producto encontrado en addtoshopp

    addProducto(producto)
    { 
      //Verifico si el producto ya existe en el carrito
      if(!tienda.hasOwnProperty(producto.id)){
        producto.cantidad = 1;
      }
      else{
        producto.cantidad++;
      }
      tienda[producto.id] = {...producto};
      pintarCarrito();
      localStorage.setItem("Carrito", JSON.stringify(this.productos));
    }

   //Guardo los datos en el almacenamietno local//
    save(){
      localStorage.setItem("Shop",JSON.stringify (this.productos)); //aplico json para ingresar al objeto//
      preciofinal = tienda.productos.reduce((acc,element)=>acc+=element.precio,0); //Calculo el precio final y lo imprimo en consola//
      localStorage.setItem("Precio", JSON.stringify(preciofinal));
      console.log(preciofinal);

    }
}