let limite = 10;
let impares = 0;
let menores= 0;


for ( let i = 0; i <= limite; i++) {
    if (i % 2 === 1 ) {
        impares ++;
        } if (i < limite / 2) {
        menores ++;
        }
        
}
console.log('La cantidad de numeros impares es:' + impares);
console.log('La cantidad de numeros menores de limite dividido 2 es:' + menores);

/*
2) Contador
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta limite
Imprimir al final del programa la cantidad de numeros impares
Imprimir al final del programa la cantidad de numeros menores de limite / 2
*/