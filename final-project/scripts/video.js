function videoTv(){
	var texture;
	$tv = $('#tv');
	 videoTv = $tv[0];

	texture = new THREE.Texture(videoTv);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBFormat;
        texture.generateMipmaps = true;

        var geometry = new THREE.PlaneGeometry( 1.3,.75 );
        var material = new THREE.MeshBasicMaterial( {map: texture}  );
        plane = new THREE.Mesh( geometry, material );
        plane.position.set(11.516,7.3,1);
        plane.rotation.x = Math.PI/2;
        plane.rotation.y = Math.PI/2;
        plane.visible = false;
        videoTv.pause();

        plane.interact = function () {
                //plane.on = false
                if (!this.visible){
                        plane.visible = true;
                        videoTv.play();
                        //this.on = true;
                }
                else
                {
                        plane.visible = false;
                        videoTv.pause();
                        //this.on = false
                }
        }

        return plane
}

function videoPc(){
        var texture2;
        $pc = $('#pc');
        videoPc = $pc[0];

        texture2 = new THREE.Texture(videoPc);
        texture2.minFilter = THREE.LinearFilter;
        texture2.magFilter = THREE.LinearFilter;
        texture2.format = THREE.RGBFormat;
        texture2.generateMipmaps = true;

        var geometry = new THREE.BoxGeometry( .46,.33,.0001 );
        var material = new THREE.MeshBasicMaterial( {map: texture2, side: THREE.DoubleSide}  );
        plane2 = new THREE.Mesh( geometry, material );
        plane2.position.set(2.55,4.31,1.46);
        plane2.rotation.set(1.2,Math.PI,0);
        plane2.visible = false;
        videoPc.pause();

        plane2.interact = function () {
                //plane2.on = false
                if (!this.visible){
                        plane2.visible = true;
                        videoPc.play();
                        //this.on = true;
                }
                else
                {
                        plane2.visible = false;
                        videoPc.pause();
                        //this.on = false
                }
        }

        return plane2
}

