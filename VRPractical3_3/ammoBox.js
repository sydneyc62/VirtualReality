class ammoBox{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;

        this.obj = document.createElement("a-box");
        this.obj.setAttribute("height",0.5);
        this.obj.setAttribute("width",1);
        this.obj.setAttribute("depth",0.5);

        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        scene.append(this.obj);
    }
    disappear(){
        this.obj.setAttribute("opacity",0);
    }
}