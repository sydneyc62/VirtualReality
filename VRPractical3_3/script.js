let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, enemies = [], ammo_boxes = [], ammo_count = 50, enemy_killed = 0 , balls = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");


    for(let i = 0; i < 25; i++){
    let x = rnd(-20,20);
    let y = rnd(5, 10);
    let z = rnd(-20,20);
    balls.push( new Ball(x,y,z) );
  }
    for(let i=0;i<20;i++){
      let x = rnd(-20,20);
      let y = 0.5;
      let z = rnd(-20,20);
      ammo_boxes.push(new ammoBox(x,y,z) );
    }

  window.addEventListener("keydown",function(e){
    //User can only fire with they press the spacebar and have sufficient ammo
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
    }
  })

    ammoBox.disappear = false;

  window.addEventListener("click",function(){
    for(let ammoBox of ammo_boxes){
      ammoBox.disappear = true;
    }
  });

  setTimeout(loop,100);
  setTimeout(countdown,100);
})

function loop(){
  if(bullet){
    bullet.fire();
  }

   for(let ball of balls){
    ball.bounce();
  }

  for(let ball of balls){
    if(bullet != undefined && distance(ball.obj, bullet.obj)<1){
      ball.shot = true;
      ball.shrink();
    }
    
  }
  // for(let ammoBox of ammo_boxes){
  //   if(ammoBox.disappear = true){
  //     ammoBox.setAttribute("opacity",1);
  //   }
  // }

  // if(ammoBox.disappear = true){
  //   for(let ammoBox of ammo_boxes){
  //     ammoBox.setAttribute("opacity",1);
  //   }
  // }

  window.requestAnimationFrame(loop);
}

function countdown(){

  setTimeout(countdown,1000);
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}