String.prototype.replaceAt=function(index, character) 
{ return this.substring(0, index) + character + this.substring(index+character.length); } 

//conjunto de palabras para el juego
const button=document.querySelector('#calcular');//asignando button a boton calcular
const palabras=['riwi','albañil','maestro','codigo'];
//palabra randon
const palabra= palabras[Math.floor(Math.random()*palabras.length)];
//remplazar las palbras por guion y espacio
let palabraConGuiones = palabra.replace(/./g,"_ ");

let contadorFallos=0;
//<p> id output sera reemplazado por "palabraConGuiones"
document.querySelector('#output').innerHTML = palabraConGuiones;
button.addEventListener('click',()=>{
    //obtener el valor de la letra ingresada en id letra y guardarlo en la const letra.
    let letra=document.querySelector('#letra').value;
    letra=letra.toLowerCase();
    let haFallado=true;
    for(const i in palabra){
        //si encuentra la letra, reemplazarà el guión+espacio por la letra que encontro en el espacio en que lo encontro.
        if(letra==palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            haFallado=false;
        }
    }

    /* condición de ganador o perdedor */
    if(haFallado){
       contadorFallos++;
       document.querySelector('#ahorcado').style.backgroundPosition= -(180*contadorFallos)+'px 0px'; 
       if(contadorFallos>2){
        document.querySelector('#ahorcado').style.backgroundPosition= -(198*contadorFallos)+'px 220px';
       }
       if(contadorFallos>=5){
        document.querySelector('#resultado').innerHTML="Perdiste, has sido ahorcado.";
        document.getElementById('resultado').style.backgroundColor="#740707";
        
        button.disabled=true;
       }
    }else{
        if(palabraConGuiones.indexOf('_')<0){
            document.querySelector('#resultado').innerHTML="¡¡Eres un Ganador!!";
            document.getElementById('resultado').style.backgroundColor="#0c5ca7";
            button.disabled=true;
        }
    }

    
       
       
    
    /* reemplazar los datos de id output por la variable palabra con guiones */
    document.querySelector('#output').innerHTML=palabraConGuiones;
    
});
