let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }


   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
  for(let i=0;i<75;i++){
    let x = rnd(-20,20);  
    let z = rnd(-20,20);  
    createCloud(x,5,z);  
  }
   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
  for(let i=0;i<10;1++){
    let x = rnd(-20,20);  
    let z = rnd(-20,20);  
    createHouse(x,0,z);     
  }

  });

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
  function createCloud(x,y,z){
    let cloud = document.createElement("a-entity");
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


    cloud.append(piece1);
    cloud.append(piece2);
    cloud.append(piece3);

    cloud.setAttribute("position",{x:x, y:y, z:z});

    scene.append(cloud);

  }
/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createHouse(x,y,z){
  let house = document.createElement("a-entity");

  let base = document.createElement("a-box");
  let roof = document.createElement("a-cylinder");

  base.setAttribute("color","red");
  base.setAttribute("position","0 0 0");
  base.setAttribute("height","4");
  base.setAttribute("width","4");
  base.setAttribute("depth","4");

  roof.setAttribute("segments-radial","3");
  roof.setAttribute("position","0 4 0");


  house.append(base);
  house.append(roof);

  house.setAttribute("position",{x:x, y:y, z:z});
  scene.append(house);
  
}


function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



