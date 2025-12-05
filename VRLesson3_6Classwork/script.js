let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, balls = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  gem = document.getElementById("gem");


  /*
    Challenge 1
    Add an eventlistener that associates user pressing the keys with the following actions.
    1) Rotate the gem in the positively on the z-axis    
    2) Rotate the gem in the negatively on the z-axis
    3) Rotate the gem in the positively on the x-axis
    4) Rotate the gem in the negatively on the x-axis
    5) Rotate the gem in the positively on the y-axis
    6) Rotate the gem in the negatively on the y-axis
    Note: Copy and paste!
  */
  window.addEventListener("keydown",function(e){
    console.log(e.key)
    gem.dx = 0.1;
    gem.dy = 0.1;
    gem.dz = 0.1;

    let gem1 = gem.object3D.rotation;
  

    if(e.key == "z"){
      gem1.z += gem.dz;
    }else if(e.key =="x"){
      gem1.z -= gem.dz;
    }else if(e.key =="c"){
      gem1.x += gem.dx;
    }else if(e.key =="v"){
      gem1.x -= gem.dx;
    }else if(e.key =="b"){
      gem1.y += gem.dy;
    }else if(e.key =="n"){
      gem1. y -= gem.dy;
    }

  });
  /*  Challenge 2
     When the user clicks in the window, resets the gem rotation to (0,0,0)
  */ 
   window.addEventListener("click",function(){
    gem.setAttribute("rotation",{x:0, y:0, z:0});

   });
   
   
});
