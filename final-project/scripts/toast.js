function mkToaster(){
	var toaster = new THREE.Object3D();
	toaster.name = "toaster";
	toasterMachine = loadObjMtl('toaster/grillePain',9.3,4.85,1.23,.007,.007,.007,Math.PI/2,-Math.PI/4,0);
	toaster.add(toasterMachine);
	toast = loadObjMtl('toaster/toast',9.31,4.87,1.23,.015,.015,.015,Math.PI/2,Math.PI/4,Math.PI/2);
	toaster.add(toast);
	var geometry = new THREE.SphereGeometry( .13,8,8 );
	var material = new THREE.MeshBasicMaterial( {opacity:0, transparent:true } );
	sphere = new THREE.Mesh( geometry, material );
	sphere.position.set(9.3,4.85,1.2);
	toaster.add( sphere );

	var back = 
		new TWEEN.Tween(toast.position)
  		.to({x:0,y:0, z:0 }, 2500)
  		.easing(TWEEN.Easing.Linear.None)
  		.delay(1000)
  		
  		
	

	sphere.interact =  function(){
		new TWEEN.Tween(toast.position)
  		.to({x:0,y:0, z:.1 }, 1000)
  		.easing(TWEEN.Easing.Elastic.Out)
  		.chain(back)
  		.start();
  		


  	}
	
  		



  	return toaster;
  }