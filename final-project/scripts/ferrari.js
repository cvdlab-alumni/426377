function mkFerrari(){

	
	var ferrari = new THREE.Object3D();
	ferrari.name = "ferrari";
	car = loadObjMtl('458-Italia/Ferrari-458-Italia',11,-3	,.9,.3,.3,.3,Math.PI/2,Math.PI/4,0);
	ferrari.add(car);

	var geom = new THREE.BoxGeometry(4.4,2,2);
	var material = new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, opacity: 0} );
	box = new THREE.Mesh(geom,material);
	box.position.set(11,-.5,.9)
	box.rotation.set(Math.PI/2,-Math.PI/4,0);
	ferrari.add(box); 

	var ferrari_audio =  document.createElement('audio');
	var ferrari_audio_source = document.createElement('source');
	ferrari_audio_source.src = '../final-project/audio/ferrari.mp3';
	ferrari_audio.appendChild(ferrari_audio_source);
	ferrari_audio.loop = false;
	ferrari_audio.onPlay = false;
	ferrari_audio.paused === true


	box.interact =  function(){
		if (ferrari_audio.paused === true){
			ferrari_audio.play();
			
		}
		else{
			ferrari_audio.pause();
			
		}
	}

	
	return ferrari;
}