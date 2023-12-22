function themePage(){
var themePage= document.getElementById("theme").value;
if(themePage == 1){
    document.getElementById("body").classList.remove("theme-light");
    document.getElementById("body").classList.add("theme-dark");
}else{
    document.getElementById("body").classList.add("theme-light");
    document.getElementById("body").classList.remove("theme-dark");
}
}


function language(){
    var language = document.getElementById("language").value;
    if(language == 1){
    document.getElementById("text-1").innerText="1 BBQ CRUNCH Sandwich (1 breaded chicken fillet)";
    document.getElementById("text-2").innerText="1 Kentucky Burger / Sandwich (1 breaded chicken fillet, pickles...)";
    document.getElementById("text-3").innerText="1 BBQ Crunch sandwich (1 chicken fillet) + 1 small potato + Pet soda..";
    document.getElementById("text-4").innerText="1 Kentucky Colonel burger / sandwich (1 breaded chicken breast fillet, salad...)";
    document.getElementById("text-5").innerText="1 Kentucky hamburger / sandwich (1 breaded chicken breast fillet, pickles...)";
    document.getElementById("text-6").innerText="1 Kentucky Burger / Sandwich (1 breaded chicken fillet, pickles...)";
    document.getElementById("text-7").innerText="1 Crispy BBQ sandwich (1 extra large breast fillet, triple salad, crip onion...)";
    document.getElementById("text-8").innerText="1 Crispy BBQ sandwich (1 extra large breast fillet, triple salad, crip onion...)";
   }else{
    document.getElementById("text-1").innerText="1 Sandwich BBQ CRUNCH (1 filete de pollo apanado)";
    document.getElementById("text-2").innerText="1 kentuky Hamburguesa / Sandwich (1 filete de pollo apanado, pepinillos...)";
    document.getElementById("text-3").innerText="1 sandwich BBQ Crunch (1 filete de pollo) + 1 papa pequeña + gaseosa Pet..";
    document.getElementById("text-4").innerText="1 Kentucky Coronel hamburguesa / sandwich (1 filete de pechuga de pollo apanada,ensalada...))";
    document.getElementById("text-5").innerText="1 Kentucky hamburguesa / sandwich (1 filete de pechuga de pollo apanada,pepinillos...)";
    document.getElementById("text-6").innerText="1 kentuky Hamburguesa / Sandwich (1 filete de pollo apanado, pepinillos...)";
    document.getElementById("text-7").innerText="1 sandwich Crispy BBQ(1 filete de pechuga extra grande, triple emsalada,cebolla crip...)";
    document.getElementById("text-8").innerText="1 Crispy BBQ sandwich (1 extra large breast fillet, triple salad, crip onion...)";
   }

}