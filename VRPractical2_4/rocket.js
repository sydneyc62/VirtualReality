
class Rocket{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
        this.dx=0.1;
        this.obj = document.createElement("a-entity");

        let top = document.createElement("a-cone");
        top.setAttribute("radius-top","0");
        top.setAttribute("radius-bottom","0.5");
        top.setAttribute("position","0 0 -2");
        top.setAttribute("height","1");
        top.setAttribute("color","red");
        this.obj.append(top);

        let base = document.createElement("a-cylinder");
        base.setAttribute("radius","0.5");
        base.setAttribute("height","2");
        base.setAttribute("color","gray");
        base.setAttribute("position","0 -1.5 -2");
        this.obj.append(base);

        let bottom = document.createElement("a-cone");
        bottom.setAttribute("radius-top","0");
        bottom.setAttribute("radius-bottom","0.25");
        bottom.setAttribute("height","2");
        bottom.setAttribute("color","orange");
        bottom.setAttribute("position","0 -3.5 -2");
        bottom.setAttribute("rotation","-180 0 0");
        this.obj.append(bottom);

        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj )

    };
    rise(){
      this.y += this.dx;
      this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

    }

}
