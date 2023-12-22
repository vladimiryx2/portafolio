var allPersons = [];

function guardarPersona(){
    let formNombre = document.getElementById('nombres').value;
    let formApellido = document.getElementById('apellidos').value;
    let formCorreo = document.getElementById('correo').value;
    
    

    if (formNombre  != "" && formApellido  != "" && formCorreo  != ""){

    
    let fila = "<tr><td>"+formNombre+"</td><td>"+formApellido+"</td><td>"+formCorreo+"</td><td>"+'<button type="button" class="btn btn-danger">Danger</button></td></tr>';
    document.getElementById('fila').innerHTML +=fila;


    let persona = {
        nombre : formNombre,
        apellido : formApellido,
        correo :formCorreo
    }
    allPersons.push(persona)
    console.log(allPersons);
    allPersons.forEach(function(person){
        console.log(person.nombre, person.apellido, person.correo);
    });
    }else{
    console.log()
    }
    if (formNombre  != ""){
        document.getElementById("nombres").classList.add('is-valid');
        document.getElementById("nombres").classList.remove('is-invalid');
        document.getElementById("nombres").value = "";
        
    }else{
        document.getElementById("nombres").classList.remove('is-valid');
        document.getElementById("nombres").classList.add('is-invalid');
        document.getElementById("campo1").innerHTML = 'Ingrese nombre';
    
    }
    if (formApellido  != ""){
        document.getElementById("apellidos").classList.add('is-valid');
        document.getElementById("apellidos").classList.remove('is-invalid');
        document.getElementById("apellidos").value = "";
    }else{
        document.getElementById("apellidos").classList.remove('is-valid');
        document.getElementById("apellidos").classList.add('is-invalid');
        document.getElementById("campo2").innerHTML = 'Ingrese apellido';
    
    }
    if (formCorreo  != ""){
        document.getElementById("correo").classList.add('is-valid');
        document.getElementById("correo").classList.remove('is-invalid');
        document.getElementById("correo").value = "";
        
    }else{
        document.getElementById("correo").classList.remove('is-valid');
        document.getElementById("correo").classList.add('is-invalid');
        document.getElementById("campo3").innerHTML = 'Ingrese correo';
    
    }
    
}
 
