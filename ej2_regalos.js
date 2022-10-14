function print(element){ console.log(element);} 
const carta = 'bici coche balón _playstation bici coche peluche'

const lista = carta.split(" ");


let objeto = {}

lista.forEach((Element,i) => {objeto[Element] = 0});

lista.sort() 

delete lista[0]

for (let i of lista) {
    print(lista)
}

// objeto["bici"] = 1
// if (objeto["bici"]){
//     console.log("Cierto");
// } else {
//     console.log("No ha entrado");
// }


// if (lista[i].charAt(0) === "_") {
    
// }