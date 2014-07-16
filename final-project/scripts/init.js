function init(){

	var root = new THREE.Object3D();

	  //prato
    grass = mkPlaneTexture(100,100,"grass.jpg",7.5,5,-.01);
    grass.material.side = THREE.DoubleSide;
    root.add(grass);

    //pareti
    root.add(loadMura());

      //floor
      root.add(mkFloors());
      
      //windows
      root.add(mkWindows());

      //doors
      doors = mkDoors();
      doors.name = "doors";
      root.add(doors);
      
      //walls
      root.add(mkWalls());

      //carpet
      root.add(mkPlaneTexture(1.7,1.7,"tappeto.jpg",13,7.8,0.22));

      //lights
      lights = mkLights();
      root.add(lights);



      

      //mobili
      root.add(loadObjs());

      //quadri
      var quadri = mkPaintings();
      quadri.name = "quadri";
      root.add(quadri);


      //video tv
      tv = videoTv();
      tv.name = "tv";
      root.add(tv);

      //video Pc
      pc = videoPc();
      pc.name = "pc";
      root.add(pc);

      //lampada
      lamp = mkLamp();
      lamp.name = "lamp";
      root.add(lamp);
      
      return root;
    }

    function lightsAndTools(){
     var tools = new THREE.Object3D();

     /*var light = new THREE.DirectionalLight( 0xffffff, 1.5 );
     light.position.set( 1, 1, 1 );
     tools.add( light );

     var light = new THREE.DirectionalLight( 0xffffff, 0.75 );
     light.position.set( -1, - 0.5, -1 );
     tools.add( light );*/


    // add axis helper
    var axisHelper = new THREE.AxisHelper(1);
    axisHelper.visible = true;
    tools.add(axisHelper);


    //add skyBox
    var imagePrefix = "../final-project/images/skybox/mountain-";
    var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
    var imageSuffix = ".png";
    var skyGeometry = new THREE.BoxGeometry( 500, 500, 500 ); 


    var materialArray = [];
    for (var i = 0; i < 6; i++)
      materialArray.push( new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
        side: THREE.BackSide
      }));
    var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
    var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
    skyBox.rotation.x = Math.PI/2;
    //skyBox.position.z = 200;
    tools.add( skyBox );

    return tools;


  }