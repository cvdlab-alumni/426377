function mkWall(side1,side2,texture,posX,posY,posZ){
	var plane = createMesh(new THREE.PlaneGeometry(side1,side2), texture);
	plane.rotation.x = Math.PI/2;
	plane.position.set(posX+side1/2,posY,posZ+side2/2);
    return plane;

}


function mkWallDoor(wall_sideX,wall_sideY,door_sideX,door_sideY,texture,wall_posX,wall_posY,wall_posZ,door_pos){
	var rectShape = new THREE.Shape();
	rectShape.moveTo( 0,0 );
    rectShape.lineTo( door_pos,0 );
    rectShape.lineTo( door_pos,door_sideY );
    rectShape.lineTo( door_pos+door_sideX,door_sideY );
    rectShape.lineTo( door_pos+door_sideX,0 );
    rectShape.lineTo( wall_sideX,0 );
    rectShape.lineTo( wall_sideX,wall_sideY );
    rectShape.lineTo( 0,wall_sideY );
    rectShape.lineTo( 0,0 );
    

	var plane = createMesh(new THREE.ShapeGeometry( rectShape ), texture);
	plane.rotation.x = Math.PI/2;

	plane.position.set(wall_posX,wall_posY,wall_posZ);

    return plane;

}

function mkWallWindow(wall_sideX,wall_sideY,hole_sideX,hole_sideY,texture,wall_posX,wall_posY,wall_posZ,hole_posX,hole_posY){
	var rectShape = new THREE.Shape();
	rectShape.moveTo( 0,0 );
    rectShape.lineTo( wall_sideX,0 );
    rectShape.lineTo( wall_sideX,wall_sideY );
    rectShape.lineTo( 0,wall_sideY );
    rectShape.lineTo( 0,0 );

    var hole = new THREE.Path();
	hole.moveTo(hole_posX,hole_posY);
	hole.lineTo(hole_posX+hole_sideX,hole_posY);
	hole.lineTo(hole_posX+hole_sideX,hole_posY+hole_sideY);
	hole.lineTo(hole_posX,hole_posY+hole_sideY);
	hole.lineTo(hole_posX,hole_posY);
	rectShape.holes.push(hole);
    

	var plane = createMesh(new THREE.ShapeGeometry( rectShape ), texture);
	plane.rotation.x = Math.PI/2;

	plane.position.set(wall_posX,wall_posY,wall_posZ);

    return plane;
}

function mkWallWindowDoor(wall_sideX,wall_sideY,hole_sideX,hole_sideY,door_sideX,door_sideY,texture,wall_posX,wall_posY,wall_posZ,hole_posX,hole_posY,door_pos){
    var rectShape = new THREE.Shape();
    rectShape.moveTo( 0,0 );
    rectShape.lineTo( door_pos,0 );
    rectShape.lineTo( door_pos,door_sideY );
    rectShape.lineTo( door_pos+door_sideX,door_sideY );
    rectShape.lineTo( door_pos+door_sideX,0 );
    rectShape.lineTo( wall_sideX,0 );
    rectShape.lineTo( wall_sideX,wall_sideY );
    rectShape.lineTo( 0,wall_sideY );
    rectShape.lineTo( 0,0 );

    var hole = new THREE.Path();
    hole.moveTo(hole_posX,hole_posY);
    hole.lineTo(hole_posX+hole_sideX,hole_posY);
    hole.lineTo(hole_posX+hole_sideX,hole_posY+hole_sideY);
    hole.lineTo(hole_posX,hole_posY+hole_sideY);
    hole.lineTo(hole_posX,hole_posY);
    rectShape.holes.push(hole);
    

    var plane = createMesh(new THREE.ShapeGeometry( rectShape ), texture);
    plane.rotation.x = Math.PI/2;

    plane.position.set(wall_posX,wall_posY,wall_posZ);

    return plane;
}



function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("../final-project/images/" + imageFile)
         var mat = new THREE.MeshLambertMaterial({side: THREE.DoubleSide});
         texture.wrapS = THREE.RepeatWrapping;
         texture.wrapT = THREE.RepeatWrapping;

        //var mat = new THREE.MeshLambertMaterial();
        //var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;


        var mesh = new THREE.Mesh(geom, mat);
        mesh.receiveshadow = true;
        return mesh;
      }


function mkWalls(){

          
      //carta da parati
      var heigh_floor = .202;
      var heigh_wall = 3;
      var walls = new THREE.Object3D();
      //scene.add(walls)
      
      
      //cucina
      kitchen = new THREE.Object3D();
      walls.add(kitchen);

      var textureKitchen = "cartarossa.jpg";
      
      //parete1
      var par1 = mkWall(4.2,heigh_wall,textureKitchen,8.899,4.7+2,heigh_floor);
      par1.rotation.y = Math.PI/2;
      kitchen.add(par1);

      //parete2
      var par2 = mkWall(4.2,heigh_wall,textureKitchen,6.901,4.7+2,heigh_floor);
      par2.rotation.y = Math.PI/2;
      kitchen.add(par2);

      //parete3
      var par3 = mkWallDoor(2,heigh_wall,.75,2.2,textureKitchen,9,4.601,heigh_floor,.625);
      kitchen.add(par3);

      //parete4
      var par4 = mkWallWindow(2,heigh_wall,.8,1.35,textureKitchen,9,8.798,heigh_floor,.6,1.25);
      kitchen.add(par4);


      //camera1
      room1 = new THREE.Object3D();
      walls.add(room1);

      var textureRoom1 = "cartablu.jpg";

      //parete1
      var par1 = mkWall(5.2,heigh_wall,textureRoom1,1.4,.202,heigh_floor);
      room1.add(par1);
    
      //parete2
      var par2 = mkWall(5.2,heigh_wall,textureRoom1,1.4,4.398,heigh_floor);
      room1.add(par2);

      //parete3
      var par3 = mkWallDoor(4.2,heigh_wall,.7,2,textureRoom1,6.598,.202,heigh_floor,3.35);
      par3.rotation.y = Math.PI/2;
      room1.add(par3);

      //parete4
      var par4 = mkWallWindow(4.2,heigh_wall,1.1,1.3,textureRoom1,1.402,.202,heigh_floor,.95,1.3);
      par4.rotation.y = Math.PI/2;
      room1.add(par4);


      //camera2
      room2 = new THREE.Object3D();
      walls.add(room2);

      var textureRoom2 = "cartablu.jpg";

      //parete1
      var par1 = mkWall(5.2,heigh_wall,textureRoom2,1.4,4.602,heigh_floor);
      room2.add(par1);

      //parete2
      var par2 = mkWall(1.2,heigh_wall,textureRoom2,5.4,5.598,heigh_floor);
      room2.add(par2);

      //parete3
      var par3 = mkWallWindow(4.2,heigh_wall,1.5,1.35,textureRoom2,1.4,8.798,heigh_floor,1.25,1.25);
      room2.add(par3);

      //parete4
      var par4 = mkWallDoor(3.2,heigh_wall,.745,2.2,textureRoom2,5.398,5.6,heigh_floor,1.33 );
      par4.rotation.y = Math.PI/2;
      room2.add(par4);

      //parete5
      var par5 = mkWallDoor(1,heigh_wall,.7,2,textureRoom2,6.598,4.6,heigh_floor,.15 )
      par5.rotation.y = Math.PI/2;
      room2.add(par5);

      //parete6
      var par6 = mkWallDoor(4.2,heigh_wall,.745,2.2,textureRoom2,1.402,4.6,heigh_floor,2.33 )
      par6.rotation.y = Math.PI/2;
      room2.add(par6);


      //sgabuzzino
      closet = new THREE.Object3D();
      walls.add(closet);

      var textureCloset = "cartablu.jpg";

      //parete1
      var par1 = mkWall(4.2,heigh_wall,textureCloset,-1.898,6.7,heigh_floor);
      par1.rotation.y = Math.PI/2;
      closet.add(par1);

      //parete2
      var par2 = mkWallDoor(4.2,heigh_wall,.745,2.2,textureRoom2,1.198,4.6,heigh_floor,2.33 );
      par2.rotation.y = Math.PI/2;
      closet.add(par2);

      //parete3
      var par3 = mkWall(1,heigh_wall,textureCloset,.2,4.602,heigh_floor);
      closet.add(par3);

      //parete4
      var par4 = mkWall(1,heigh_wall,textureCloset,.2,8.798,heigh_floor);
      closet.add(par4);


      //salone
      mainRoom = new THREE.Object3D();
      walls.add(mainRoom);

      var textureSalone = "cartagialla.jpg";

      //parete1
      var par1 = mkWall(5.4,heigh_wall,textureSalone,12.498,6.1,heigh_floor);
      par1.rotation.y = Math.PI/2;
      mainRoom.add(par1);

      //parete2
      var par2 = mkWall(4.4,heigh_wall,textureSalone,9.002,6.6,heigh_floor);
      par2.rotation.y = Math.PI/2;
      mainRoom.add(par2);

      //parete3
      var par3 = mkWallWindow(4.2,heigh_wall,1.5,1.35,textureSalone,11,8.798,heigh_floor,1.45,1.25);
      mainRoom.add(par3);

      //parete4
      var par4 = mkWallWindowDoor(4,heigh_wall,1.5,1.3,.75,2,textureSalone,11.2,3.402,heigh_floor,1,1.4,3);
      mainRoom.add(par4);


      //corridoio
      corridor = new THREE.Object3D();
      walls.add(corridor);

      var textureCorridor = "cartagialla.jpg";

      //parete1
      var par1 = mkWallWindow(2.4,heigh_wall,1.5,1.3,textureCorridor,8.8,3.402,heigh_floor,.45,1.4);
      corridor.add(par1);

      //parete2
      var par2 = mkWallDoor(2.4,heigh_wall,.75,2.2,textureCorridor,8.8,4.398,heigh_floor,.825 );
      corridor.add(par2);

      //parete3
      var par3 = mkWall(2,heigh_wall,textureCorridor,6.8,3.402,heigh_floor);
      corridor.add(par3);

      //parete4
      var par4 = mkWallDoor(2.2,heigh_wall,.75,2.2,textureCorridor,6.6,5.598,heigh_floor,.825 );
      corridor.add(par4);

      //parete5
      var par5 = mkWallDoor(1,heigh_wall,.7,2,textureCorridor,6.802,3.4,heigh_floor,.15 );
      par5.rotation.y = Math.PI/2;
      corridor.add(par5);

      //parete6
      var par6 = mkWallDoor(1.2,heigh_wall,.7,2,textureCorridor,6.802,4.4,heigh_floor,.35 );
      par6.rotation.y = Math.PI/2;
      corridor.add(par6);

      //parete7
      var par7 = mkWall(1.2,heigh_wall,textureCorridor,8.198,5,heigh_floor);
      par7.rotation.y = Math.PI/2;
      corridor.add(par7);


      //bagno1
      bathroom1 = new THREE.Object3D();
      walls.add(bathroom1);

      var textureBathroom = "darkBlue.jpg";

      //parete1
      var par1 = mkWall(3,heigh_wall,textureBathroom,7.298,7.3,heigh_floor);
      par1.rotation.y = Math.PI/2;
      bathroom1.add(par1);

      //parete2
      var par2 = mkWall(3,heigh_wall,textureBathroom,5.302,7.3,heigh_floor);
      par2.rotation.y = Math.PI/2;
      bathroom1.add(par2);

      //parete3
      var par3 = mkWallDoor(2,heigh_wall,.75,2.2,textureBathroom,6.8,5.802,heigh_floor,.625 );
      bathroom1.add(par3);

      //parete4
      var par4 = mkWallWindow(2,heigh_wall,.8,1.35,textureBathroom,6.8,8.798,heigh_floor,.6,1.25);
      corridor.add(par4);


      //bagno2

      bathroom2 = new THREE.Object3D();
      walls.add(bathroom2);

      var textureBathroom = "darkBlue.jpg";

      //parete1
      var par1 = mkWall(3,heigh_wall,textureBathroom,5.098,7.3,heigh_floor);
      par1.rotation.y = Math.PI/2;
      bathroom2.add(par1);

      //parete2
      var par2 = mkWall(1,heigh_wall,textureBathroom,5.6,5.802,heigh_floor);
      bathroom2.add(par2)

      //parete3
      var par3 = mkWall(1,heigh_wall,textureBathroom,5.6,8.798,heigh_floor);
      bathroom2.add(par3);

      //parete4
      var par4 = mkWallDoor(3,heigh_wall,.75,2.2,textureBathroom,5.602,5.802,heigh_floor,1.12 );
      par4.rotation.y = Math.PI/2;
      bathroom2.add(par4);

      


      return walls;
}