class Cloud{
    constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    let piece1 = document.createElement("a-sphere");
    let piece2 = document.createElement("a-sphere");
    let piece3 = document.createElement("a-sphere");

    piece1.setAttribute("color","white");
    piece1.setAttribute("opacity","1");
    piece1.setAttribute("position","0 10.2 0");
    piece1.setAttribute("radius","1");

    piece2.setAttribute("color","white");
    piece2.setAttribute("opacity","1");
    piece2.setAttribute("position","0.75 10 0");
    piece2.setAttribute("radius","0.75");

    piece3.setAttribute("color","white");
    piece3.setAttribute("opacity","1");
    piece3.setAttribute("position","-0.75 10 0");
    piece3.setAttribute("radius","0.75");    


    this.obj.append(piece1);
    this.obj.append(piece2);
    this.obj.append(piece3);

    this.obj.setAttribute("position",{x:x, y:y, z:z});

    scene.append(this.obj);

    };

};