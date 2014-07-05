function mkDoor(side1, side2, side3, texture1, texture2, texture3, positionX, positionY, positionZ){

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

    door = new THREE.Mesh(
    new THREE.BoxGeometry( side1,side2,side3,1,1,1 ),
    new THREE.MeshFaceMaterial( materials ) );
    door.position.set(positionX+side1/2, positionY+side2/2, positionZ+side3/2);

    return door
		
      }

function mkDoors(){
  //PORTE
      var doors = new THREE.Object3D();
      //scene.add(doors);

  //portone
      var portone = mkDoor(.75,.2,2,"porta_ing.jpg", "porta_ing_rib.jpg", "porta_ing_bordo.jpg",14.2,3.2,.2);
      doors.add(portone);


      //porta bagno1
      var door1 = mkDoor(.75,.05,2.2,"porta.jpg", "porta_rib.jpg", "porta_bordo.jpg",7.425,5.6,.2);
      doors.add(door1);

      //porta camera1
      var door2 = mkDoor(.7,.05,2,"porta.jpg", "porta_rib.jpg", "porta_bordo.jpg",6.35,3.87,.2);
      door2.rotation.z = Math.PI/2;
      doors.add(door2);

      //porta camera2
      var door3 = mkDoor(.7,.05,2,"porta.jpg", "porta_rib.jpg", "porta_bordo.jpg",6.35,5.08,.2);
      door3.rotation.z = -Math.PI/2;
      doors.add(door3);

      //porta ripostiglio
      var door4 = mkDoor(.75,.05,2.2,"porta5.jpg", "porta5_rib.jpg", "porta5_bordo.jpg",.95,7.275,.2);
      door4.rotation.z = -Math.PI/2;
      doors.add(door4);

      //porta bagno2
      var door5 = mkDoor(.75,.05,2.2,"porta5.jpg", "porta5_rib.jpg", "porta5_bordo.jpg",5.05,7.275,.2);
      door5.rotation.z = Math.PI/2;
      doors.add(door5);

      //porta cucina
      var door6 = mkDoor(.75,.05,2.2,"porta_cucina.jpg", "porta_cucina_rib.jpg", "porta_cucina_bordo.jpg",9.624,4.4,.2);
      doors.add(door6);


  return doors;
}