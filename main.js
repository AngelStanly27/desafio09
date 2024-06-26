import './style.css'

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 1
const frutas = ['Melón','pera','Manzana','uva','Banana','coco'];
console.log(frutas.pop(frutas.length-1))
frutas.push('mango')
console.log(frutas)

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 2
const tareas = ['Banco', 'Médico', 'Odontólogo'];
console.log(tareas)

const realizada = tareas.shift()
console.log('Tarea completada ir al ' +realizada )

tareas.unshift('Gym')
console.log(tareas)

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 3
const fila = [ 'Juan', 'Jose', 'Sebastián', 'Daniela', 'Raúl', 'Pedro', 'Cristóbal']
fila.push('Vanesa', 'Carlos')
const atendido = fila.shift()
console.log('Sr/a ' +  atendido + ' ha sido atendido/a' )

// !--------------------------------------------------------------------------------------------
                                                                       //Ejercicio 4
const numUno = [22, 41, 63, 74, 27]
console.log(numUno)
let i = 0
for( i = 0; i<3; i++){
    let temp = numUno.pop()
    numUno.unshift(temp)
    // console.log(numUno)
}

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 5
const carrito =[]
console.log(carrito)

let producto = prompt('Agrega un producto al carrito de la compra')
console.log(producto)
carrito.push(producto)
producto = prompt('Quieres agregar otro producto al carrito de la compra')
carrito.push(producto)
producto = prompt('Quieres agregar otro producto al carrito de la compra')
carrito.push(producto)

console.log(carrito)

 
producto = prompt('Quieres eliminar el último producto del carrito de la compra')
if( producto == 'si'){
  carrito.pop()
}
console.log(carrito)

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 6
const numDobles = numUno.map(function(x){
  return x*2; 
})
console.log(numDobles)

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 7
const frutasMayusculas = []

const mayusculas = frutas.map(function(mayus){
  for(i= 0; i<(frutas.length); i++){
    frutasMayusculas[i] = frutas[i].toUpperCase();
  }
  return;
})
console.log(frutasMayusculas)
console.log(frutas)

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 8
const precio = [950, 2250, 1900, 500, 1800, 1500 , 1200]
const pIva = []

const iva = precio.map(function(prec){
  for(i= 0; i<(precio.length); i++){
    pIva[i] = precio[i] * 0.21
    pIva[i] = precio[i] + pIva[i]
  }
  return;
})
console.log(precio)
console.log(pIva)

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 9
const numDos = []
for(i= 1; i<11; i++){
numDos.push(i)
}
const cuadros = numDos.map(function(c){
  return (c * c);
})
console.log(numDos)
console.log(cuadros)

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 10
const pares = []

const numerosPares = numDos.filter(function(numPares){
  for(i= 0; i<(numDos.length); i++){
    if((numDos[i] % 2) === 0){
      pares[i] = numDos[i ]
    }
    else{ numDos.splice(i,1)}
  }
  
   return
})
console.log(pares)

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 11

const palabrasLargas = []

const numLetras = frutas.map(cadena => cadena.length);
const largas = numLetras.filter(function(palabLargas){
  for(i= 0; i<(numLetras.length); i++){
    if( numLetras[i]>4){
      palabrasLargas[i] = frutas[i]
    }
          // else{palabrasLargas.splice(i,1)}
         //!  Debería de eliminarme el espacio vacio pero no lo hace, si me puedes ayudar Gracias.
  }return
})
console.log(palabrasLargas)
console.log(frutas)

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 12
const productoObjeto = [{ "Nombre": 'Iphone',"Precio": 2000},
                        { "Nombre": 'Laptop',"Precio": 2100},
                        { "Nombre": 'Tv conector',"Precio": 100},
                        { "Nombre": 'Cable',"Precio": 200},
                        { "Nombre": 'Tv',"Precio": 2200},
                        { "Nombre": 'Cargador',"Precio": 300}
]
const ofertas = productoObjeto.filter(ofertasfBajas => ofertasfBajas.Precio<500) 

console.log("Los productos menores a 500$ son:",ofertas)

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 13
const estudiantes = [{ "Nombre": 'Carmen',"Edades": 15,"Nota": 10},
                     { "Nombre": 'Teresa',"Edades": 16,"Nota": 7},
                     { "Nombre": 'Yami',"Edades": 14,"Nota": 3},
                     { "Nombre": 'Angel',"Edades": 15,"Nota": 8},
                     { "Nombre": 'Daniel',"Edades": 17,"Nota": 4},
                     { "Nombre": 'Luisa',"Edades": 15,"Nota": 3}
]
const estudiantesAprovados = estudiantes.filter(estAprovado => estAprovado.Nota>4) 
console.log("Los estudiantes aprovados son:",estudiantesAprovados)

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 14
const tareasDos = [{ "Descripcion": 'Sumas',"Completada": 'si'},
                 { "Descripcion": 'Funciones',"Completada": 'si'},
                 { "Descripcion": 'Deportes',"Completada": 'si'},
                 { "Descripcion": 'Maqueta',"Completada": 'no'},
                 { "Descripcion": 'Volcán',"Completada": 'no'},
                 { "Descripcion": 'Restas',"Completada": 'si'}
]
const completadas = tareasDos.filter(tareaCom => tareaCom.Completada == 'si') 
console.log("Las tareas completadas son:",completadas)

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 15
const nomEst = estudiantes.forEach(function(nomb){
  console.log(nomb.Nombre)
})

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 16
let suma = 0
const edadEstudiante = estudiantes.forEach(function(edadAlum){
    suma= suma + edadAlum.Edades;
    return edadAlum;
})
console.log("la suma de las edades es ", suma)

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 17

productoObjeto.forEach(ivaDesc => {
  let porcentaje = ivaDesc.Precio* 0.1;
      porcentaje = ivaDesc.Precio - porcentaje
  console.log(`${ivaDesc.Nombre}: ${porcentaje.toFixed(2)}`);
});

// !--------------------------------------------------------------------------------------------
                                                                      //Ejercicio 18
estudiantes.forEach(estud => {
  console.log('Invitación enviada a ', estud.Nombre);
});

