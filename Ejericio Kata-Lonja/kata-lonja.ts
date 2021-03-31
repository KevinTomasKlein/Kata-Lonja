/* 
Kata-Lonja

En la lonja de un puerto pesquero gallego, un gallego emprendedor ha decidido comercializar pescado fresco gallego en otras ciudades de Europa, 
para ello va a comenzar con una pequeña furgoneta que es capaz de transportar hasta 200 Kg de pescado.

Para el primer viaje ha comprado 50 Kg de vieiras, 
100 Kg de pulpo 
y otros 50 Kg de centollos, pero se pregunta dónde debería vender esta carga para obtener el máximo beneficio.

Para ello conoce los precios de venta en los diferentes mercados locales:
        €/Kg  |  MADRID  |  BARCELONA  |  LISBOA 


      Vieiras |  500   |     450     |   600 

      Pulpo   |   0    |     120     |   100 

      Centollos | 450  |      0      |   500



Pero además hay que tener en cuenta que tan sólo cargar la furgoneta: 5 € + 2 €/Km recorrido. 


Las distancias hasta los posibles destinos son:

a MADRID : 800 Km
a BARCELONA : 1100 Km
a LISBOA : 600 Km

Y por último, hay que tener en cuenta que los compradores estiman que el valor de compra de la carga se deprecia en un 1% por cada 100 Km recorridos.


Recordad, el objetivo es responder a nuestro amigo emprendedor dónde debería vender esa carga de pescado y marisco para obtener el mayor beneficio.
Kata made by SaludOnNet's developers team. */


const vieiras: number = 50;
const pulpo: number = 100;
const centollos: number = 50;

interface Ciudad {
  nombres: string[];
  tipoAlimentos: string[];
  precioAlimentos: number[][];
  distanciaCiudad: number[];
}

const ciudades: Ciudad = {
  nombres: ['Madrid', 'Barcelona', 'Lisboa'],
  tipoAlimentos: ['Vieiras', 'Pulpo', 'Centollos'],
  precioAlimentos: [[500, 0, 450], [450, 120, 0], [600, 100, 500]],
  distanciaCiudad: [800, 1100, 600]
  
}

function calcularCiudad(cantidadAlimento1: number, precio1: number, cantidadAlimento2:number, precio2:number, cantidadAlimento3:number, precio3:number):number{
  return (precio1 * cantidadAlimento1) + (precio2 * cantidadAlimento2) + (cantidadAlimento3 * precio3);
  
}

function calcularCiudadConDesprecioCarga(precioPorCiudad: number, distanciaCiudad: number): number {
  let desprecioPorTransporte = (1 - 0.01 * distanciaCiudad / 100);
  let precioCargarFurgoneta = 5 + 2 * distanciaCiudad;
  return precioPorCiudad * desprecioPorTransporte - precioCargarFurgoneta;
}


let Madrid: number;
let Barcelona: number;
let Lisboa: number;

  for (let i: number = 0; i < ciudades.nombres.length; i++) {
    let precioPorCiudadX: any;
    var datos: number;

  switch (ciudades.nombres[i]) {
    case 'Madrid':
      precioPorCiudadX = calcularCiudad(ciudades.precioAlimentos[i][0], vieiras, ciudades.precioAlimentos[i][1], pulpo, ciudades.precioAlimentos[i][2], centollos);
      Madrid = (calcularCiudadConDesprecioCarga(precioPorCiudadX, ciudades.distanciaCiudad[i]));
      break;
    case 'Barcelona':
      precioPorCiudadX = calcularCiudad(ciudades.precioAlimentos[i][0], vieiras, ciudades.precioAlimentos[i][1], pulpo, ciudades.precioAlimentos[i][2], centollos);
      Barcelona = (calcularCiudadConDesprecioCarga(precioPorCiudadX, ciudades.distanciaCiudad[i]));
      break;
    case 'Lisboa':
      precioPorCiudadX = calcularCiudad(ciudades.precioAlimentos[i][0], vieiras, ciudades.precioAlimentos[i][1], pulpo, ciudades.precioAlimentos[i][2], centollos);
      Lisboa = (calcularCiudadConDesprecioCarga(precioPorCiudadX, ciudades.distanciaCiudad[i]));
      break;
  }

  }


function menorPrecioCiudad(){
  return Madrid > Barcelona && Madrid > Lisboa ? alert( "En Madrid se obtendrían más beneficios") : Barcelona > Lisboa ? alert("En Barcelona se obtendrían más beneficios") : alert( "En Lisboa se obtendrían más beneficios");
  
}



menorPrecioCiudad();






