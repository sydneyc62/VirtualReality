let scene;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")

  car.getElementById("car");
  car.x = 0;
  car.dx = 0.05;
  car.move = false;
  car.addEventListener("click",function(){
    car.move = true;
  });
      
  loop();
})

function loop(){
  if(car.move){
    car.x += car.dx;
    car.setAttribute("position",{x:car.dx,y:2,z:0});
  }


    
  window.requestAnimationFrame(loop);
}