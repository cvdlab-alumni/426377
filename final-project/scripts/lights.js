function mkLight(posX,posY){
	var lamp = new THREE.Object3D();
	var heigh = 3;


	//guscio
	var geometry = new THREE.SphereGeometry( .25, 32,32,0,Math.PI,0,Math.PI);
	var material = new THREE.MeshLambertMaterial( {color: 0xC0C0C0, 
		side: THREE.DoubleSide,shading: THREE.SmoothShading, shininess: 30, metal: true} );
	var semiSphere = new THREE.Mesh( geometry, material );
	semiSphere.position.set(posX,posY, heigh);
	lamp.add( semiSphere );

	//lampadina
	var geometry = new THREE.SphereGeometry( .08, 32,32);
	var material = new THREE.MeshLambertMaterial( {color: 0xFFD800, side: THREE.DoubleSide} );
	var sphere = new THREE.Mesh( geometry, material );
	sphere.position.set(posX,posY,heigh+.25/2);
	lamp.add( sphere );

	//luce
	var spotLight = new THREE.SpotLight( 0xffffff);
	spotLight.position.set( posX,posY, heigh-.25/2 );
	spotLight.intensity =0;
	spotLight.castShadow = true;
	spotLight.shadowCameraNear = 2;
	spotLight.shadowCameraFar = 70;
	spotLight.shadowCameraFov = 70;
	spotLight.shadowDarkness = 0.5;
	spotLight.shadowMapWidth = 128;
	spotLight.shadowMapHeight = 128;
	spotLight.shadow;
	lamp.add(spotLight);

	//target
	var target = new THREE.Object3D();
	target.position.set(posX,posY,.3);
	lamp.add(target);

	spotLight.target = target;


	semiSphere.interact = function () {
		lamp.on = false
		if (!this.on){
			spotLight.intensity = 2;
			this.on = true;
		}
		else
		{
			spotLight.intensity = 0;
			this.on = false
		}
	}




	//lamp.position.set(posX,posY,0);


	return lamp;
}


function mkLights(){
	var lamps = new THREE.Object3D();

	//salone
	lamp1 = mkLight(13,6.3);
	lamp1.name = "lamp1";
	lamps.add(lamp1);

	//corridoio1
	lamp2 = mkLight(9,4);
	lamp2.name = "lamp2";
	lamps.add(lamp2);

	//cucina
	lamp3 = mkLight(10,6.75);
	lamp3.name = "lamp3";
	lamps.add(lamp3);

	//bagno1
	lamp4 = mkLight(7.75,7.25);
	lamp4.name = "lamp4";
	lamps.add(lamp4);	

	//bagno1
	lamp5 = mkLight(6,7.25);
	lamp5.name = "lamp5";
	lamps.add(lamp5);

	//camera1
	lamp6 = mkLight(3,7);
	lamp6.name = "lamp6";
	lamps.add(lamp6);	

	//ripostiglio
	lamp7 = mkLight(.75,7);
	lamp7.name = "lamp7";
	lamps.add(lamp7);

	//ripostiglio
	lamp8 = mkLight(4,2.25);
	lamp8.name = "lamp8";
	lamps.add(lamp8);		

	return lamps;
}

