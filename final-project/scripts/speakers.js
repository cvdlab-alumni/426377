function mkSpeakers(){
	speakers = new THREE.Object3D();
	speakers.name = "speakers";

	var speaker1 = loadObjMtl('speaker/enceinteColonne',11.4,6.2,.202,.01,.01,.01,Math.PI/2,Math.PI/2,0);
	speakers.add(speaker1);

	var geom = new THREE.BoxGeometry(.25,.25,1.8	);
	var material = new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, opacity: 0} );
	box1 = new THREE.Mesh(geom,material);
	box1.position.set(11.4,6.2,.202);
	speakers.add(box1);




	var speaker2 = loadObjMtl('speaker/enceinteColonne',11.4,8.4,.202,.01,.01,.01,Math.PI/2,Math.PI/2,0);
	speakers.add(speaker2);

	var geom = new THREE.BoxGeometry(.25,.25,1.8);
	var material = new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, opacity: 0} );
	box2 = new THREE.Mesh(geom,material);
	box2.position.set(11.4,8.4,.202);
	speakers.add(box2);

	var speakers_audio =  document.createElement('audio');
	var speakers_audio_source = document.createElement('source');
	speakers_audio_source.src = '../final-project/audio/MichaelJackson-BlackOrWhite.mp3';
	speakers_audio.appendChild(speakers_audio_source);
	speakers_audio.loop = false;
	speakers_audio.onPlay = false;
	speakers_audio.paused === true


	box1.interact =  function(){
		if (speakers_audio.paused === true){
			speakers_audio.play();
			
		}
		else{
			speakers_audio.pause();
			
		}
	}

	box2.interact =  function(){
		if (speakers_audio.paused === true){
			speakers_audio.play();
			
		}
		else{
			speakers_audio.pause();
			
		}
	}


	return speakers;
}