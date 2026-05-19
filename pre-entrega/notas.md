En el packege.json hay que configurar un script start y poner node index.js ,
EN licencia MIT
y type module
en athor poner el nombre si lo desea

se ejecuta con npm start

con npm run start GET products/7 crea un array
en la posicion 0 donde esta el node.exe
en la psosicion 1 donde esta el poroyecto
2 el primer comando el GET
3 y por ultimo el recurso

Se parar los endpoint con split. Lo separa un string y lo transforma en un array. En este caso endpoint es un array

ejemplo
endpint.split(`/`) aca digo que use la barra para separar

const ´partes =endpoint.splt ("/");
console.log (partes);

const recurso = partes[0]
const id = partes [1]

o tambien

const [recurso, id] = partes;

como saber si pide products o products/7

console.log(String(endpoint.).startWith(`products/`)); Devuelve true o false

console.log(endpoint.includes(`/`)); aca pregunta si incluye la barra

console.log(endpoint.startWith(`products/`)); si empieza asi

para pode agregar con spred operator

console.log(`Endpoint: ${} `)

const[, , method, endpoint, ..args] = process.argv; esto se lee ,, se usa para ignorar el indice, despues viene method, le decimos qu elo traiga, trae el endpoint "...argv" traeme el resto..
