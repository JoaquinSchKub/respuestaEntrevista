// Buenas !! esta es mi intento de respuesta para el ejercicio que plantean:

//Lo primero que intente hacer fue resolverlo a la fuerza... SPOILER ALERT: no funciono...


const M = 2701

let n = [1,2,5,10,20,371844285230994047]

/* Esta función se encarga de tomar el valor que le pasemos y repetirlo n veces
Por esta razón la secuencia comienza con 1 y devuelve 1, 2 y devuelve 22 ya que no está sumando los números
sino que simplemente repite el numero la misma cantidad de veces que su valor lo indica
*/


function compute(n){
    let s = ""
    for (let i=0; i < n; i++){
        s = s + n
        return convertir_a_numero(s) % M
    }  
}

/* Para el ejemplo se omitió la función "convertir_a_numero" ya que en el ejercicio se entiende que existe por fuera del ejemplo
pero el primer problema se centraba en que el ultimo valor era demasiado grande, incluso para un campo BigInt */


/* Esta segunda función solo se encargaría de devolver la secuencia*/
for (i=0, i<n.length; i++){
    console.log(n + ": " + compute(i))
}

/*Resultado parcial de la ejecución
1: 1
2: 22
5: 1535
10: 1083
20: 1095
371844285230994047: ???*/


/* Entendiendo mejor el problema y ya habiendo pensado un poco me di cuenta de que la solución no estaría en
el código que pueda o no desarrollar, por lo que intente resolverlo matemáticamente*/


/* Para este punto lo primero que pensé fue que podía agarrar ese número y dividirlo por M la misma cantidad de veces
que el número.


Entonces: 371844285230994047 % M = 1920 y lo siguiente seria sumar ese resto al resto del siguiente modulo y así 
hasta llegar a 371844285230994047 o lo que era más fácil hacer " 1920 x 371844285230994047 " pero esto me planteaba
el problema que el resto terminaba siendo más grande que M, por lo que seguramente la división seguía siendo posible aun
en el nuevo resultado que había obtenido...


Por tanto, pensé seguir calculando el módulo, hasta que ya no pudiera reducirlo más, pero lejos de reducirse el número se
hacia más grande... por lo que supuse que a algún matemático ya se le había planteado este problema... lo que me llevo a conocer
a Euler, quien trabaja con exponentes modulares, y anuncia un teorema que aún no termino de entender, pero me dio las herramientas
para llegar a un resultado tal que: 


Si mi resto inicial es: r=371844285230994047 % 2701 = 1920
Y el valor de la función de Euler es: ϕ(2701) = 2592
Puedo entonces reducir el exponente usando 371844285230994047 % 2592 = 287
Una vez ya reducido ese exponente puedo llegar a la conclusión que el resto es: 1920^287 % 2701 = 83


Poder resolver esto me puso muy feliz al principio, aunque al ser un número tan chico me llamaba la atención, mi lógica decía
que a números grandes restos grandes... aunque es cierto que el resto tampoco podría sobrepasar M por lo anunciado antes, pero
a fin de verificarlo utilice chatGPT y otra vez a la frustración SPOILER ALERT: Arrojo un resultado que nada tenía que ver con lo
que yo había planteado...


El codigo que implemento fue: 

const M = 2701;
const bigNumber = "371844285230994047"; // Número como string debido a su tamaño

function computeModulo(bigNumber, M) {
    let residuo = 0n; // Inicializamos el residuo como BigInt
    const modM = BigInt(M); // Convertimos M a BigInt

    for (let i = 0; i < bigNumber.length; i++) {
        // Tomamos cada dígito, lo procesamos como BigInt y actualizamos el residuo
        residuo = (residuo * 10n + BigInt(bigNumber[i])) % modM;
    }

    return residuo; // Devolvemos el residuo final
}

const resultado = computeModulo(bigNumber, M);
console.log(resultado.toString()); // Imprimimos el resultado como string

resultado = 1546


Espero que el esfuerzo de investigación no sea en vano, y aunque no llegue al resultado, ojala esto demuestre brevemente
las ganas que tengo de pertenecer a su grupo de desarrollo, y la voluntad de resolver problemas que tengo a la hora 
de encarar un nuevo desafío.
 
Desde ya muchas gracias por su tiempo */
