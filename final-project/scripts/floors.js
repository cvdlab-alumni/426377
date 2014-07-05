function mkPlaneTexture(side1,side2,texture, positionX,positionY,positionZ) {
	var plane = createMesh(new THREE.PlaneGeometry(side1,side2), texture);
	plane.position.set(positionX,positionY,positionZ);
    return plane;

}

function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("../final-project/images/" + imageFile)
         var mat = new THREE.MeshBasicMaterial();
         texture.wrapS = THREE.RepeatWrapping;
         texture.wrapT = THREE.RepeatWrapping;

        //var mat = new THREE.MeshLambertMaterial();
        //var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;


        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }


function mkShapeTexture(texture){
        var rectLength = 15.4, rectWidth = 9;

        var rectShape = new THREE.Shape();
        rectShape.moveTo( 1.2,0 );
        rectShape.lineTo( 6.7, 0 );
        rectShape.lineTo( 6.7, 3.2 );
        rectShape.lineTo( 15.4, 3.2 );
        rectShape.lineTo( 15.4, 9 );
        rectShape.lineTo( 11, 9 );
        rectShape.lineTo( 11, 4.4 );
        rectShape.lineTo( 9, 4.4 );
        rectShape.lineTo( 9, 5.6 );
        rectShape.lineTo( 5.4, 5.6 );
        rectShape.lineTo( 5.4, 9 );

        rectShape.lineTo( 0, 9 );
        rectShape.lineTo( 0, 4.4 );
        rectShape.lineTo( 1.2, 4.4 );
        rectShape.lineTo( 1.2, 0 );

        var shape = createMesh(new THREE.ShapeGeometry( rectShape ), texture);

       
        shape.position.set(0,0,.202);
        shape.material.map.repeat.set(.3,.3);
        return shape;
      }



function mkFloors(){
    //PAVIMENTI
      floors = new THREE.Object3D();
      //scene.add(floors);
      var heigh_floor = .202;

      //pavimento
      var floor = mkShapeTexture("floor.jpg");
      floors.add( floor );

      //pavimento cucina
      var kitchen_floor = mkPlaneTexture(2,4.4,"cucina.jpg",10,6.6,heigh_floor);
      kitchen_floor.material.map.repeat.set(2,4);
      floors.add(kitchen_floor);

      //pavimento bagno1
      var bathroom1_floor = mkPlaneTexture(2,3.4,"bagno.jpg",7.8,7.3,heigh_floor);
      bathroom1_floor.material.map.repeat.set(1,2);
      floors.add(bathroom1_floor);

      //pavimento bagno2
      bathroom2_floor = mkPlaneTexture(1.4,3.4,"bagno.jpg",6.1,7.3,heigh_floor);
      bathroom2_floor.material.map.repeat.set(.75,2);
      floors.add(bathroom2_floor);


    return floors;
}