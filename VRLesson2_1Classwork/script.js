window.addEventListener("DOMContentLoaded",function(){


  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML
    let scene= document.querySelector("a-scene");

  //Challenge 2: Create a variable for <a-dodecahedron>
    let dod = this.document.createElement("a-dodecahedron");

 
  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color
    dod.setAttribute("position",{x:0,y:3,z:-4});
    dod.setAttribute("color","red");
    dod.setAttribute("radius", 3);

  //Challenge 4: Add the <a-dodecahedron> to the scene -->
    scene.append(dod);
});