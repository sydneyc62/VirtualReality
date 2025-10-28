let scene, a=0, b = 0;
window.addEventListener("DOMContentLoaded",function() {
    loop();

    car = this.document.querySelector('#car');
    pokemonball = this.document.querySelector('#pokemonball');
    rocket = this.document.querySelector("#rocket");
    dude = this.document.querySelector('#dude');
    sun = this.document.querySelector('#sun')

    
    function loop(){
        
        a+=0.00001
        car.setAttribute("position",{x:-a,y:0,z:0});
        setTimeout(loop,10); 

        pokemonball.setAttribute("rotation",{x:a,y:0,z:0});
        setTimeout(loop,10); 

        rocket.setAttribute("position",{x:0,y:a,z:0});
        setTimeout(loop,10); 
        
        dude.setAttribute("scale",{x:a,y:a,z:a});
        setTimeout(loop,10);
        
        sun.setAttribute("opacity",a);
        setTimeout(loop,10);


    }




})
