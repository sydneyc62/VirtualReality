class House{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");

        let base = document.createElement("a-box");
        let roof = document.createElement("a-cylinder");

        base.setAttribute("color","red");
        base.setAttribute("position","-1 2 0");
        base.setAttribute("height","3");
        base.setAttribute("width","3");
        base.setAttribute("depth","2.5");

        roof.setAttribute("segments-radial","3");
        roof.setAttribute("position","-1 4.5 0");
        roof.setAttribute("rotation","-90 0 0");

        roof.setAttribute("scale","2.5 2.5 2")


        this.obj.append(base);
        this.obj.append(roof);

        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append(this.obj);

    }

}