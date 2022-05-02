let precio_card = 0;
class Tienda{
    constructor(productos){
        this.productos=productos;
    }

    //llega el producto encontrado en addtoshopp

    addProducto(producto)
    {   
      let mapear = this.productos.map(element => element.producto);
      let enStock = this.productos.find (element => element.id === producto.id);
      if(enStock){
        let indexed = mapear.ma(element => element.id);
        let index = indexed.indexOf(producto.id);
        this.productos[index].cantidad+=1;
      }
      else{
        this.productos.push({cantidad:1, producto});
      }
    }
      /*
        //buscarProducto
        // map => [{cantidad:1, producto}] = [producto]
        let mapped= this.productos.map(element=>element.producto);
        
        let enCarrito = mapped.find(element=>element.id===producto.id);

        if(!enCarrito){
            this.productos.push({cantidad:1, producto});
        }  
        else{
            // [producto] => [id]
            let indexed = mapped.map(element=>element.id);
            // [1,2,3,4,5,6] => indexOf(6) => 5
            // ["perro", "gato", "paloma"] =>indexOf("gato") => 1
            // [{id:1, nombre:"hola"}, {id:2, nombre:"bola"}] => indexOf({id:2, nombre:"bola"}) =>-1
            let index = indexed.indexOf(producto.id);
            this.productos[index].cantidad+=1;
        }      
        */

   //Guardo los datos en el almacenamietno local//
    save(){
      localStorage.setItem("Shop",JSON.stringify (this.productos)); //aplico json para ingresar al objeto//
      preciofinal = tienda.productos.reduce((acc,element)=>acc+=element.precio,0); //Calculo el precio final y lo imprimo en consola//
      localStorage.setItem("Precio", JSON.stringify(preciofinal));
      console.log(preciofinal);

    }
}