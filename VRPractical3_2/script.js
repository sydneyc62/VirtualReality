let scene, car, tree;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")

  car = document.getElementById("blueCar");
  car.r = 0;
  car.dr = 0.5;
  car.move = false;

  car.addEventListener("click",function(){
    car.move = true;

  });

  tree = this.document.getElementById("tree");
  tree.y = 0;
  tree.dy = 0.01;
  tree.r = 0;
  tree.dr = 0.5
  tree.fall = false;

  tree.addEventListener("mouseenter",function(){
    tree.fall = true;
  
  });
  tree.addEventListener("mouseleave",function(){
    tree.fall = false;
  
  });  

  loop();
})

function loop(){
  if(car.move){
    car.r -= car.dr;
    car.setAttribute('position',{x:car.r,y:2,z:0});
  }

  if(tree.fall){
    tree.r += tree.dr;
    tree.y -= tree.dy;
    tree.setAttribute('rotation',{x:0,y:0,z:tree.r});
    tree.setAttribute('position',{x:0,y:tree.y,z:0})
  }
  window.requestAnimationFrame(loop);
}