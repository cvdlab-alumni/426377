
function mkBump(posX, posY,posZ, width, heigh, imageFile, bump){


	var quadro = createMeshBump(new THREE.BoxGeometry(width,0.005, heigh), imageFile, bump);
	quadro.position.set(posX,posY,posZ);
	return quadro;

}


function createMeshBump(geom, imageFile, bump) {
	var texture = THREE.ImageUtils.loadTexture("../final-project/images/bump/" + imageFile)
	geom.computeVertexNormals();
	var mat = new THREE.MeshPhongMaterial();
	mat.map = texture;

	if (bump) {
		var bump = THREE.ImageUtils.loadTexture("../final-project/images/bump/" + bump)
		mat.bumpMap = bump;
		mat.bumpScale = 0.2;
	}

	var mesh = new THREE.Mesh(geom, mat);

	return mesh;
}


function mkPaintings(){
	paintings = new THREE.Object3D();

	quadro_salotto = mkBump(11.2,6.6,2.2,2.5,1.2,"cornice1_filled.jpg","cornice1_bumped.jpg");
	quadro_salotto.name = "quadro_salotto";
	quadro_salotto.rotation.z = Math.PI/2;
	paintings.add(quadro_salotto);

	quadro_salotto_2 = mkBump(15.198,7.4,2.2,1,1.4,"cornice2_filled.jpg","cornice2_bumped.jpg");
	quadro_salotto_2.name = "quadro_salotto_2";
	quadro_salotto_2.rotation.z = -Math.PI/2;
	paintings.add(quadro_salotto_2);

	quadro_salotto_3 = mkBump(15.198,5.4,2.2,1.5,1.5,"cornice3_filled.jpg","cornice3_bumped.jpg");
	quadro_salotto_3.name = "quadro_salotto_3";
	quadro_salotto_3.rotation.z = -Math.PI/2;
	paintings.add(quadro_salotto_3);

	quadro_corridoio = mkBump(8,3.402,1.9,1.3,.7,"cornice4_filled.jpg","cornice4_bumped.jpg");
	quadro_corridoio.rotation.z = Math.PI;
	quadro_corridoio.name = "quadro_corridoio";
	paintings.add(quadro_corridoio);

	quadro_camera = mkBump(1.402,5.5,2.2,1.2,1.2,"cornice5_filled.jpg","cornice5_bumped.jpg");
	quadro_camera.name = "quadro_camera";
	quadro_camera.rotation.z = Math.PI/2;
	paintings.add(quadro_camera);

	





	

	return paintings; 
}