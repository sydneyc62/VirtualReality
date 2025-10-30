let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i=0;i<100;i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let rocket = new Rocket({x , y , z});
    rockets.push(rocket);

  }
  

  loop();
})

function loop(){
  for(let rocket of rockets){

    rocket.setAttribute("position",{x:0,y:0,z:0});

    rocket.rise();
  }
  
  window.requestAnimationFrame( loop );
}
