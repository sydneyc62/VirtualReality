let scene, car;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")

  car = document.getElementById("car");
  car.r = 0;
  car.dr = 1;
  car.move = false;

  car.addEventListener("click",function(){
    car.move = true;
  });
      
  loop();
})

function loop(){
  if(car.move){
    car.r += car.dr;
    car.setAttribute('position',{x:car.dr,y:2,z:0});
  }


    
  window.requestAnimationFrame(loop);
}