const numeros= [1,2,3]
const numerosnuevos = numeros.concat([4,5,6])

//spread
const numerosSpread = [...numeros, 4, 5, 6, 7, 8]


//Destructuring Array

const colores = ['rojo', 'amarillo', 'violeta']

const primero = colores[0]
const segundo = colores[1]

const [primerColor, segundoColor]= colores


let mensaje;

if(edad >=18){
    mensaje= 'Sos mayor, podes tener cheques'
}else{
    mensaje= 'No podes tener cheques'
}

const superMensaje = edad >= 18 ? 'Podes comprar cerveza' : 'No podes comprar cerveza'


function sumar (a,b){
    return a+b
}

const sumarFlecha = (a,b)=>{
    return a + b 
}

const sumerFlecha = (a,b)=> a + b