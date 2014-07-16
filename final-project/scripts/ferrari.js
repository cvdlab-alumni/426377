function mkFerrari(){

	
	ferrari = new THREE.Object3D();
	ferrari.name = "ferrari";
	car = loadObjMtl('458-Italia/Ferrari-458-Italia',0,0,0,.3,.3,.3,0,0,0);
	ferrari.add(car);

	var geom = new THREE.BoxGeometry(4.4,2,2);
	var material = new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, opacity: 0} );
	box = new THREE.Mesh(geom,material);
	//box.position.set(11,-.5,.9)
	box.rotation.set(Math.PI/2,-Math.PI/4,0);
	ferrari.add(box); 

	var ferrari_audio =  document.createElement('audio');
	var ferrari_audio_source = document.createElement('source');
	ferrari_audio_source.src = '../final-project/audio/ferrari.mp3';
	ferrari_audio.appendChild(ferrari_audio_source);
	ferrari_audio.loop = false;
	ferrari_audio.onPlay = false;
	ferrari_audio.paused === true;

	



	
	//luce1

	var spheretar1 = new THREE.Object3D(  );
	spheretar1.position.set(-.65,-.3,4);
	ferrari.add( spheretar1 );

	spotLight1 = new THREE.SpotLight( 0xFFD800 );
	spotLight1.position.set( -.65,-.3,1.75 );

	spotLight1.castShadow = true;

	spotLight1.shadowMapWidth = 1024;
	spotLight1.shadowMapHeight = 1024;

	spotLight1.shadowCameraNear = 500;
	spotLight1.shadowCameraFar = 4000;
	spotLight1.shadowCameraFov = 30;
	spotLight1.target = spheretar1;
	spotLight1.intensity = 0;

	ferrari.add( spotLight1 );

	

	
	var spheretar2 = new THREE.Object3D(  );
	spheretar2.position.set(.65,-.3,4);
	ferrari.add( spheretar2 );

	spotLight2 = new THREE.SpotLight( 0xFFD800 );
	spotLight2.position.set( .65,-.3,1.75 );

	spotLight2.castShadow = true;

	spotLight2.shadowMapWidth = 1024;
	spotLight2.shadowMapHeight = 1024;

	spotLight2.shadowCameraNear = 500;
	spotLight2.shadowCameraFar = 4000;
	spotLight2.shadowCameraFov = 30;
	spotLight2.target = spheretar2;
	spotLight2.intensity = 0;
	ferrari.add( spotLight2 );



	
	
	var spheretar3 = new THREE.Object3D();
	spheretar3.position.set(-.72,-.1,-4);
	ferrari.add( spheretar3 );

	spotLight3 = new THREE.SpotLight( 0xFF0000 );
	spotLight3.position.set( -.72,-.1,-1.9 );

	spotLight3.castShadow = true;

	spotLight3.shadowMapWidth = 1024;
	spotLight3.shadowMapHeight = 1024;

	spotLight3.shadowCameraNear = 500;
	spotLight3.shadowCameraFar = 4000;
	spotLight3.shadowCameraFov = 30;
	spotLight3.target = spheretar3;
	spotLight3.intensity = 0;
	ferrari.add( spotLight3 );

	var geometry = new THREE.RingGeometry( .05, .08, 16 );
	var material = new THREE.MeshLambertMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
	fanale1 = new THREE.Mesh( geometry, material );
	fanale1.position.set(-.76,-.05,-2.02);
	fanale1.visible = false;
	ferrari.add( fanale1 );





	
	var spheretar4 = new THREE.Object3D();
	spheretar4.position.set(.72,-.1,-4);
	ferrari.add( spheretar4 );

	spotLight4 = new THREE.SpotLight( 0xFF0000 );
	spotLight4.position.set(  .72,-.1,-1.9  );

	spotLight4.castShadow = true;

	spotLight4.shadowMapWidth = 1024;
	spotLight4.shadowMapHeight = 1024;

	spotLight4.shadowCameraNear = 500;
	spotLight4.shadowCameraFar = 4000;
	spotLight4.shadowCameraFov = 30;
	spotLight4.target = spheretar4;
	spotLight4.intensity = 0;
	ferrari.add( spotLight4 );

	var geometry = new THREE.RingGeometry( .05, .08, 16 );
	var material = new THREE.MeshLambertMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
	fanale2 = new THREE.Mesh( geometry, material );
	fanale2.position.set(.76,-.05,-2.02);
	fanale2.visible = false;
	ferrari.add( fanale2 );

	


	ferrari.position.set(0,-3	,.9);
	ferrari.rotation.set(Math.PI/2,Math.PI/4,0);


	box.interact =  function(){
		if (ferrari_audio.paused === true){
			ferrari_audio.play();
			spotLight1.intensity = 70;
			spotLight2.intensity = 70;
			spotLight3.intensity = 70;
			spotLight4.intensity = 70;
			fanale1.visible = true;
			fanale2.visible = true;

			
		}
		else{
			ferrari_audio.pause();
			spotLight1.intensity = 0;
			spotLight2.intensity = 0;
			spotLight3.intensity = 0;
			spotLight4.intensity = 0;
			fanale1.visible = false;
			fanale2.visible = false;
		}
	}

	
	return ferrari;
}