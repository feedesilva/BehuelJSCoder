let precio_card = 0;
class Tienda{
    constructor(productos){
        this.productos=productos;
    }

    //llega el producto encontrado en addtoshopp

    addProducto(producto)
    { 
      
      if (tienda.hasOwnProperty(producto)){
        console.log("existe");
      }
      console.log(producto);
    this.productos.push(producto)  
    }

   //Guardo los datos en el almacenamietno local//
    save(){
      localStorage.setItem("Shop",JSON.stringify (this.productos)); //aplico json para ingresar al objeto//
      preciofinal = tienda.productos.reduce((acc,element)=>acc+=element.precio,0); //Calculo el precio final y lo imprimo en consola//
      localStorage.setItem("Precio", JSON.stringify(preciofinal));
      console.log(preciofinal);

    }
}