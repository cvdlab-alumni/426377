function mkDoorX(side1, side2, side3, texture1, texture2, texture3, positionX, positionY, positionZ){
  var door = new THREE.Object3D();
  var materials = [
  new THREE.MeshLambertMaterial({
   map: THREE.ImageUtils.loadTexture('../final-project/images/'+texture3)
 }),
  new THREE.MeshLambertMaterial({
   map: THREE.ImageUtils.loadTexture('../final-project/images/'+texture3)
 }),
  new THREE.MeshLambertMaterial({
   map: THREE.ImageUtils.loadTexture('../final-project/images/'+texture2)
 }),
  new THREE.MeshLambertMaterial({
   map: THREE.ImageUtils.loadTexture('../final-project/images/'+texture1)
 }),
  new THREE.MeshLambertMaterial({
   map: THREE.ImageUtils.loadTexture('../final-project/images/'+texture3)
 }),
  new THREE.MeshLambertMaterial({
   map: THREE.ImageUtils.loadTexture('../final-project/images/'+texture3)
 })
  ];
  doorMesh = new THREE.Mesh(
    new THREE.BoxGeometry( side1,side2,side3,1,1,1 ),
    new THREE.MeshFaceMaterial( materials ) );
  doorMesh.position.set(-side1/2,0,0);
    doorMesh.castShadow = true;

  door.add(doorMesh);
  door.position.set(positionX + side1, positionY+side2/2, positionZ+side3/2);

  return door

}

function mkDoorY(side1, side2, side3, texture1, texture2, texture3, positionX, positionY, positionZ){
  var door = new THREE.Object3D();
  var materials = [
  new THREE.MeshLambertMaterial({
   map: THREE.ImageUtils.loadTexture('../final-project/images/'+texture3)
 }),
  new THREE.MeshLambertMaterial({
   map: THREE.ImageUtils.loadTexture('../final-project/images/'+texture3)
 }),
  new THREE.MeshLambertMaterial({
   map: THREE.ImageUtils.loadTexture('../final-project/images/'+texture2)
 }),
  new THREE.MeshLambertMaterial({
   map: THREE.ImageUtils.loadTexture('../final-project/images/'+texture1)
 }),
  new THREE.MeshLambertMaterial({
   map: THREE.ImageUtils.loadTexture('../final-project/images/'+texture3)
 }),
  new THREE.MeshLambertMaterial({
   map: THREE.ImageUtils.loadTexture('../final-project/images/'+texture3)
 })
  ];
  doorMesh = new THREE.Mesh(
    new THREE.BoxGeometry( side1,side2,side3,1,1,1 ),
    new THREE.MeshFaceMaterial( materials ) );
  //doorMesh.rotation.z = Math.PI/2;
  doorMesh.position.set(-side1/2,0,0);
  doorMesh.castShadow = true;
  door.rotation.z = -Math.PI/2;


  door.add(doorMesh);
  door.position.set(positionX+side1/2, positionY-side1/2+side2/2, positionZ+side3/2);

  return door

}

function mkDoors(){
  //PORTE
  var doors = new THREE.Object3D();
      //scene.add(doors);

      //portone
      portone = mkDoorX(.75,.2,2,"porta_ing.jpg", "porta_ing_rib.jpg", "porta_ing_bordo.jpg",14.2,3.2,.2);
      portone.name = "portone";
      portone.children[0].interact = function () {
        interactX(portone);        
      }
      doors.add(portone);


      //porta bagno1
      var door1 = mkDoorX(.75,.05,2.2,"porta.jpg", "porta_rib.jpg", "porta_bordo.jpg",7.425,5.6,.2);
      door1.name = "door1";
      door1.children[0].interact = function () {
        interactX(door1);        
      }
      doors.add(door1);

      //porta camera1
      door2 = mkDoorY(.7,.05,2,"porta.jpg", "porta_rib.jpg", "porta_bordo.jpg",6.35,3.87,.2);
      //door2.rotation.z = Math.PI/2;
      door2.name = "door2";
      door2.children[0].interact = function () {
        interactY(door2);
      }
      doors.add(door2);

      //porta camera2
      var door3 = mkDoorY(.7,.05,2,"porta.jpg", "porta_rib.jpg", "porta_bordo.jpg",6.35,5.08,.2);
      //door3.rotation.z = -Math.PI/2;
      door3.name = "door3";
      door3.children[0].interact = function () {
        interactY(door3);
      }
      doors.add(door3);

      //porta ripostiglio
      var door4 = mkDoorY(.77,.05,2.2,"porta5_rib.jpg", "porta5.jpg", "porta5_bordo.jpg",.95,7.275,.2);
      //door4.rotation.z = -Math.PI/2;
      door4.name = "door4";
      door4.children[0].interact = function () {
        interactInsideY(door4);
      }
      doors.add(door4);

      //porta bagno2
      var door5 = mkDoorY(.75,.05,2.2,"porta5.jpg", "porta5_rib.jpg", "porta5_bordo.jpg",5.05,7.275,.2);
      //door5.rotation.z = Math.PI/2;
      door5.name = "door5";
      door5.children[0].interact = function () {
        interactInsideY(door5);
      }
      doors.add(door5);

      //porta cucina
      var door6 = mkDoorX(.75,.05,2.2,"porta_cucina.jpg", "porta_cucina_rib.jpg", "porta_cucina_bordo.jpg",9.624,4.4,.2);
      door6.name = "door6";
      door6.children[0].interact = function () {
        interactInsideX(door6);
      }
      doors.add(door6);



      return doors;
    }

    function interactX(door){
      door.open = false
      if (!this.open){
        new TWEEN.Tween(door.rotation)
        .to({x: 0, y: 0, z: -Math.PI/2}, 2000)
        .easing(TWEEN.Easing.Bounce.Out)
        .start();
        this.open = true;
      }
      else
      {
        new TWEEN.Tween(door.rotation)
        .to({x: 0, y: 0, z: 0}, 2000)
        .easing(TWEEN.Easing.Bounce.Out)
        .start();
        this.open = false
      }
    }

    function interactY(door){
      door.open = false
      if (!this.open){
        new TWEEN.Tween(door.rotation)
        .to({x: 0, y: 0, z: -Math.PI/2}, 2000)
        .easing(TWEEN.Easing.Bounce.Out)
        .start();
        this.open = true;
      }
      else
      {
        new TWEEN.Tween(door.rotation)
        .to({x: 0, y: 0, z: 0}, 2000)
        .easing(TWEEN.Easing.Bounce.Out)
        .start();
        this.open = false
      }
    }

    function interactInsideX(door){
      door.open = false;
      if (!this.open){
        new TWEEN.Tween(door.position)
        .to({x: door.position.x-door.children[0].geometry.parameters.width, y: door.position.y, z: door.position.z}, 2000)
        .easing(TWEEN.Easing.Bounce.Out)
        .start();
        this.open = true;
      }
      else
      {
        new TWEEN.Tween(door.position)
        .to({x: door.position.x+door.children[0].geometry.parameters.width, y: door.position.y, z: door.position.z}, 2000)
        .easing(TWEEN.Easing.Bounce.Out)
        .start();
        this.open = false
      }
    }

    function interactInsideY(door){
      door.open = false;
      if (!this.open){
        new TWEEN.Tween(door.position)
        .to({x: door.position.x, y: door.position.y-door.children[0].geometry.parameters.width, z: door.position.z}, 2000)
        .easing(TWEEN.Easing.Bounce.Out)
        .start();
        this.open = true;
      }
      else
      {
        new TWEEN.Tween(door.position)
        .to({x: door.position.x, y: door.position.y+door.children[0].geometry.parameters.width, z: door.position.z}, 2000)
        .easing(TWEEN.Easing.Bounce.Out)
        .start();
        this.open = false
      }
    }