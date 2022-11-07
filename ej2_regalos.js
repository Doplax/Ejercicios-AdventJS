const carta = 'bici coche balón _playstation bici coche peluche'



function carta_order(list) {
                return list
                // .trim() // Quita los espacios en blancos del principio y del final
                .split(" ")// Crea una lista separando los elementos que tengan un espacio entre ellos en este caso
                .filter(Element => !Element.startsWith("_")) // Para que saque todos los elementos menos los que empiecen con "_"
                .reduce((account,gift) => { // No entiendo esta parte
                    account[gift] = account[gift] ? account[gift] + 1 : 1
                    return account},{}) // No entiendo la coma y el  {} 
}

let lista = carta_order(carta)
console.log(lista);
 




// export default function listGifts(letter) {
//     return letter
//       .trim()
//       .split(/\s+/)
//       .filter(gift => !gift.startsWith('_'))
//       .reduce((acc, gift) => {
//         acc[gift] = acc[gift] ? acc[gift] + 1 : 1
//         return acc
//       }, {})
//   }