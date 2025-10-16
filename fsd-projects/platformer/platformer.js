$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(350, 650, 250, 10)
   createPlatform(600, 120, 250, 10)
   createPlatform(200, 250, 251, 10)
   createPlatform(750, 550, 250, 10)
   createPlatform(600, 370, 250, 10)
   createPlatform(400, 490, 250, 10)
    createPlatform(200, 550, 100, 10)
    // TODO 3 - Create Collectables
   createCollectable("steve",250,505)
   createCollectable("max",300,205)
   createCollectable("diamond",700,75)
   createCollectable("grace",710,320)
   createCollectable("kennedi",900,510)
    // TODO 4 - Create Cannons
   createCannon("bottom",670,600)
   createCannon()
   createCannon()  
    createCannon()
    createCannon()
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
