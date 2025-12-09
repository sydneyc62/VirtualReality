class Ball{
  constructor(x,y,z){
    this.s = 1;
    this.ds = -0.25;
    this.x = x;
    this.y = y;
    this.dy = rnd(1,4)/100 * (Math.random() < 0.5 ? 1: -1);
    this.maxY = this.y + rnd(5,15);
    this.z = z;
    this.a = 0;
    this.da = 0.002;

    this.obj = document.createElement("a-sphere");
    let r = Math.floor(rnd(0,255));
    let g = Math.floor(rnd(0,255));
    let b = Math.floor(rnd(0,255));
    this.obj.setAttribute("color",`rgb(${r},${g},${b})`);
    
    // this.camera = document.createElement("a-camera");
    // this.camera.setAttribute("active",false);
    // this.camera.setAttribute("wasd-controls-enabled",false);

    this.obj.append( this.camera )

    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }
  bounce(){
    this.y += this.dy;
    if(this.y < 0.5 || this.y > this.maxY){
      this.dy = -this.dy;
    }
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z });
  }

  shrink(){
    if( this.shot && this.s > 0){
      this.s += this.ds;
      this.obj.setAttribute("scale",{x:this.s,y:this.s,z:this.s});
    }
    
  }

}