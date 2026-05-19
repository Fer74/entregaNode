console.log (process.argv);

const method = process.argv[2];
const endpoint = process.argv[3];

console.log (`Nethid : ${method}`);
console.log (`Endpoint: ${endpoint}`);

async function getProducts() {
    try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await (response).json();
            console.log(data);

        } catch (error){
        console.error(`Error al cargar productos`,error)
        }    
}

async function unProducto (){

   const id = endpoint.split('/')[1];
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json(); 
    console.log(data);
  } catch (error) {
    console.error('Error mostrar producto:', error);
  }
}
async function crearProducto(product) {
  try {                                  
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error en crear un producto:', error);
  }
}
async function deleteProduct (){
   
     const partes = endpoint.split('/');
     const id = partes[1];
    try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE'    
}) 
   const data = await response.json();  
    console.log(data);
} catch (error) {
        console.error('Error en borrar producto: ', error);
}
}
switch (method) {
    case 'GET':
        if (endpoint && endpoint.startsWith('products/')) {
            console.log('Obteniendo producto específico');
            await unProducto();
        } else {
            console.log('Obteniendo productos');
            await getProducts();
        }
        break;
    case 'POST':
            console.log('Creando producto');
            const product = {
            title: process.argv[4],
            price: parseFloat(process.argv[5]),  
            category: process.argv[6]
  };
  await crearProducto(product);
  break;
    case 'DELETE':
        console.log('Eliminando recurso');
        await deleteProduct();
        break;
    default:
        console.log('Método no válido');
}