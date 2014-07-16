function init(){

	var root = new THREE.Object3D();

	  //grass
    grass = mkPlaneTexture(100,100,"grass.jpg",7.5,5,-.01);
    grass.material.side = THREE.DoubleSide;
    root.add(grass);

    //structure
    root.add(loadStructure());

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
    //lights = mkLights();
    //root.add(lights);


    //furnitures&objects
    root.add(loadObjs());

    //paintings
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

    //lamp
    lamp = mkLamp();
    lamp.name = "lamp";
    root.add(lamp);

    return root;
  }