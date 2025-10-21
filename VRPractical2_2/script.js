let scene, a=0, b = 0;
window.addEventListener("DOMContentLoaded",function() {
    loop();

    car = this.document.querySelector('#car');
    pokemonball = this.document.querySelector('#pokemonball');
    rocket = this.document.querySelector("#rocket");

    
    function loop(){
        
        a+=0.1
        car.setAttribute("position",{x:-a,y:0,z:0});
        setTimeout(loop,10); 

        pokemonball.setAttribute("rotation",{x:a,y:0,z:0});
        setTimeout(loop,10); 

        rocket.setAttribute("rotation",{x:a,y:0,z:0});
        setTimeout(loop,10);         
        

    }




})
