let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i=0;i<1000;i++){
    let x = rnd(-5,5);
    let z = rnd(-5,5);
    let y=2.5;
    let rocket = new Rocket(x , y , z);
    rockets.push(rocket);

  }
  

  loop();
})

function loop(){
  for(let rocket of rockets){

    rocket.rise();
  }
  
  window.requestAnimationFrame( loop );
}
