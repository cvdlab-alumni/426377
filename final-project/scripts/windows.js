function mkDoubleWindow(width,heigh, positionX, positionY,positionZ){
		var finestra = new THREE.Object3D();

		//anta sx
		var antaSx = createAnta(width,heigh);
		finestra.add(antaSx);

		//anta dx
		var antaDx = createAnta(width,heigh);
		antaDx.position.x = width/2;
		finestra.add(antaDx);


		finestra.position.set(positionX,positionY,positionZ);


		return finestra;

		
	}


	function mkSingleWindow(width,heigh, positionX, positionY,positionZ){
		var finestra = new THREE.Object3D();

		//anta 
		var anta = createAnta(width*2,heigh);
		finestra.add(anta);

		finestra.position.set(positionX,positionY,positionZ);

		return finestra;

	}


	

	function createAnta(width,heigh){

			var anta = new THREE.Object3D();

			var options = {
            amount: .05,
            bevelEnabled: false
            
          };

		shape = createMesh(new THREE.ExtrudeGeometry(drawShape(), options));
		
		function drawShape() {
			var rectShape = new THREE.Shape();
			rectShape.moveTo( 0,0 );
			rectShape.lineTo( width/2, 0 );
			rectShape.lineTo( width/2, heigh );
			rectShape.lineTo( 0,heigh );
			rectShape.lineTo( 0, 0 );

			var hole1 = new THREE.Path();
	        hole1.moveTo(width/20,heigh/10);
	        hole1.lineTo(9*width/20,heigh/10);
	        hole1.lineTo(9*width/20,9*heigh/10);
	        hole1.lineTo(width/20,9*heigh/10);
	        hole1.lineTo(width/20,heigh/10);
	        rectShape.holes.push(hole1);
	        return rectShape;
	    }

	    function createMesh(geom) {
	   
        var material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
        var mesh = new THREE.Mesh( geom, material );

        return mesh;
      }

		anta.add(shape);
		//vetro anta sx
		var vetroX = width*2/5;
		var vetroY = heigh*4/5;
		var vetroZ = .05;


		var geometry = new THREE.BoxGeometry( vetroX,vetroY,vetroZ );
		var material = new THREE.MeshLambertMaterial( {color: 0x87cefa, transparent: true, opacity: .5} );
		var vetro = new THREE.Mesh( geometry, material );
		vetro.position.set(vetroX/2+width/20,vetroY/2+heigh/10,vetroZ/2);
		anta.add( vetro );
		anta.rotation.x = (Math.PI/2);

		return anta ;
	}

function mkWindows(){
	//FINESTRE
      var windows = new THREE.Object3D();
      //scene.add(windows);

      //finestra CAMERA1
      var win1 = mkDoubleWindow(1.5,1.35,2.65,9,1.45);
      windows.add(win1);

      //finestra camera 2
      var win2 = mkDoubleWindow(1.125,1.35,1.2,1.137,1.45);
      win2.rotation.z = Math.PI/2;
      windows.add(win2);

      //finestra salotto 1
      var win3 = mkSingleWindow(1.5,1.3,12.2,3.25,1.6);
      windows.add(win3);

      //finestra salotto 2
      var win4 = mkDoubleWindow(1.5,1.35,12.45,9,1.45);
      windows.add(win4);
     
      //finestra corridoio
      var win5 = mkSingleWindow(1.5,1.3,9.25,3.25,1.6);
      windows.add(win5);

      //finestra bagno
      var win6 = mkSingleWindow(.8,1.35,7.4,9,1.45);
      windows.add(win6);

      //finestra bagno
      var win7 = mkSingleWindow(.8,1.35,9.6,9,1.45);
      windows.add(win7);

	return windows;
}


