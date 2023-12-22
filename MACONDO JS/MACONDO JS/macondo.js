/*Caso 1
Hildebrando está alistando todo para poder viajar a Macondo, el sale de trabajar el día
viernes, y tiene un vuelo en la noche, pero el vuelo tiene escala en Medellín. Ese mismo
día le pagan a Hildebrando, a Hildebrando le pagan 2.500.000.
día viernes, Hildebrando llega al aeropuerto del dorado, se quiere comprar algo de
comer antes del vuelo, ya que hace escala en Medellín en la madrugada, y llegaría en la
mañana a Cartagena las opciones que tiene Hildebrando:
- si compra una almojábana con gaseosa son 15.000
le caerá mal porque lleva mucho en el stand
- un subway con gaseosa 23.000
estará llenito y bien
- no compra nada
- le tocara comprar algo en Medellín
Imprimir resultados, ir llevando la cuenta de cuanto dinero tiene disponible durante las
vacaciones


 if(imagen1 != imagen2){
    document.getElementById("imagen1").classList.remove("imagen2");
    document.getElementById("imagen2").classList.add("imagen1");

    }else{
    document.getElementById("imagen2").classList.remove("imagen1");
    document.getElementById("imagen1").classList.add("imagen2");

    */
    var salario = 2500000;

    function compra(){
    
    

        let compra1 = 15000;
        if(compra1 == 15000){
           salario = salario - 15000;
           console.log("le caerá mal por que lleva mucho tiempo en stand"+" "+salario);
           document.getElementById('parrafo').innerHTML= "Su saldo actual es : "+" "+ salario +" "+"Le caerá mal por que lleva mucho tiempo en stand.";
        }  else{
            console.log("le tocara comprar algo en medellin" + salario);
        
        }                                                                         
    }
    function compra2(){
        let compra2 = 23000;

        if(compra2 == 23000){
            salario = salario - 23000;
            console.log( "estará llenito y bien"+" "+salario); 
            document.getElementById('parrafo').innerHTML= "Su saldo actual es : "+" "+ salario +" "+ "estará llenito y bien.";
        }else{
            console.log("le tocara comprar algo en medellin" + salario);
        
        }
    }

//Caso 2//

// Tamaño original de la maleta de Hildebrando
let altoOriginal = 60;
let largoOriginal = 40;
let anchoOriginal = 20;

// Tamaño estándar para las maletas de mano
const altoEstandar = 55;
const largoEstandar = 40;
const anchoEstandar = 20;

// Calcular factores de reducción para cada dimensión
const factorReduccionAlto = altoEstandar / altoOriginal;
const factorReduccionLargo = largoEstandar / largoOriginal;
const factorReduccionAncho = anchoEstandar / anchoOriginal;

// Aplicar factores de reducción a las dimensiones originales
const nuevoAlto = altoOriginal * factorReduccionAlto;
const nuevoLargo = largoOriginal * factorReduccionLargo;
const nuevoAncho = anchoOriginal * factorReduccionAncho;

// Mostrar las nuevas dimensiones de la maleta
console.log("Dimensiones originales de la maleta:");
console.log("Alto: " + altoOriginal + " cm");
console.log("Largo: " + largoOriginal + " cm");
console.log("Ancho: " + anchoOriginal + " cm");

console.log("\nNuevas dimensiones de la maleta después de la reducción:");
console.log("Alto: " + nuevoAlto.toFixed(2) + " cm");
console.log("Largo: " + nuevoLargo.toFixed(2) + " cm");
console.log("Ancho: " + nuevoAncho.toFixed(2) + " cm");

function nuevas_dimensiones(){
    document.getElementById('dimensiones_alto').innerHTML= "Alto: " + nuevoAlto.toFixed(2) + " cm";
    document.getElementById('dimensiones_largo').innerHTML= "Largo: " + nuevoLargo.toFixed(2) + " cm";
    document.getElementById('dimensiones_ancho').innerHTML="Ancho: " + nuevoAncho.toFixed(2) + " cm";
}

/*caso 3

ahora que Hildebrando se dirige a la ciudad de Medellín, llega a las 2 am, y debe abordar
a las 3 am para Macondo, se encuentra con el problema de que el wifi del aeropuerto
está fallando, y necesita asegurar su reserva en el hotel para el siguiente día, caminando
por el aeropuerto encuentra wifi, la red se llama " ElPassEs:
01110010_01101001_01110111_01101001", pero la contraseña está cifrada en números
binarios, además cobran 50.000 la hora.
tienen que crear un código que convierta los números binarios, a decimales y luego a
caracteres

*/
    
function convertirAdecimales(binario){
    let decimal = 0;
    for (let index = 0, j = 8; index < 8; index++, j--) {
        console.log(decimal += Number(binario[index]) * Math.pow(2, j - 1));
    }
    return decimal;
}
let wifi = "Wifi";
let passwordWifi = "01110010_01101001_01110111_01101001";
passwordWifi = passwordWifi.split("_");


let password = passwordWifi.map((elemento) => String.fromCharCode(convertirAdecimales(elemento))).join("");
document.getElementById('password').innerHTML= password;
console.log(password);




/*4
al llegar a Macondo, se da cuenta que todos hablan diferente, solo hablan con la la vocal i

así que todo lo que dirá es con la vocal “i”pedir el taxi. Convertir: "Taxi me puede llevar al
hotel mariposas amarillas"
*/
function idioma_local(){
var local_laguage = "Taxi me puede llevar al hotel mariposas amarillas";
document.getElementById('local_laguage').innerHTML = (local_laguage.replace(/[aeiou]/g,'i'));
}


/*5
 cuando llega al hotel, el taxi, le pide que le 300.000 pesos, y el queda sorprendido, asi
 que empieza a negociar con él, y le dice que, si le gana papel piedra o tijera, le pagara losActividades Modulo 3
 300.000, pero si el taxista pierde, no le cobra nada. Solo será una ronda. Si hay empata,
 no pasa nada.
 si el taxista gana, se descontará del dinero disponible
 */
function pagoTaxi(){
var pagoTaxi = 300000;
var disponible = 2500000;
var descuento = disponible - pagoTaxi;

var opcionAzarTaxista = "piedra";
var opcionAzarPersona= "tijeras";

if((opcionAzarTaxista == "tijeras" && opcionAzarPersona == "piedra" )|| (opcionAzarTaxista == "piedra" && opcionAzarPersona == "papel") || (opcionAzarTaxista == "papel" && opcionAzarPersona == "tijera" )){
    document.getElementById('disponible').innerHTML = ("no pagamos nada"+ " Dinero disponible " + disponible);
} else if ((opcionAzarTaxista == "piedra" && opcionAzarPersona == "papel" )|| (opcionAzarTaxista == "papel" && opcionAzarPersona == "piedra" )|| (opcionAzarTaxista == "piedra" && opcionAzarPersona == "tijeras" )){
    document.getElementById('descuento').innerHTML = ("paga porque perdistes: "+ " Dinero disponible "+ descuento);
} else {
    document.getElementById('empate').innerHTML = ("empate no pasa nada: ");
}
}