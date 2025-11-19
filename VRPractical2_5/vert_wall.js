class VertWall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;

    this.obj=document.createElement("a-box");
    this.obj.setAttribute("height","6");
    this.obj.setAttribute("width","1");
    this.obj.setAttribute("depth","0.5");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("color","red")
    this.obj.setAttribute("rotation","0 90 0")
    scene.append(this.obj);    
  }

}