//asigno a stockProductos el archivo json//
let stockProductos;
fetch('../../stock.json')
     .then(res => res.json())
     .then(productos =>  stockProductos =   productos)

