let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i=0;i<100;i++){
    let rocket = new rocket({x:this.x,y:this.y,z:this.z});
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
