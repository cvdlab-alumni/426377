function loadObj(path, posX, posY, posZ, scalX, scalY, scalZ, rotX, rotY, rotZ,colorMaterial){
	var object = new THREE.Object3D();
	var loader = new THREE.OBJLoader();
      loader.load('../final-project/objects/'+path, function (obj) {
        var material = new THREE.MeshLambertMaterial({color: colorMaterial, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });

        mesh = obj;
        obj.receiveShadow = true;
        obj.castShadow = true;

        obj.scale.set(scalX,scalY,scalZ);
        obj.position.set(posX,posY,posZ);
        obj.rotation.set(rotX,rotY,rotZ);
        object.add(obj);

      });
      return object;
}



function loadObjMtl(path, posX, posY, posZ, scalX, scalY, scalZ, rotX, rotY, rotZ){
		var object = new THREE.Object3D();
	 	var loader = new THREE.OBJMTLLoader();
      	loader.addEventListener('load', function (event) {

        var obj = event.content;

        
        obj.scale.set(scalX,scalY,scalZ);
        obj.position.set(posX,posY,posZ);
        obj.rotation.set(rotX,rotY,rotZ);
        mesh = obj;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        object.add(mesh);

      });


      loader.load(
        '../final-project/objects/'+path+'.obj', 
        '../final-project/objects/'+path+'.mtl', 
        {side: THREE.DoubleSide}
      );
	return object;
}

function loadMura(){
	return loadObj('casa.obj',0,0,0,1,1,1,0,0,0,0x999999);
}

function loadObjs(){
	var objects = new THREE.Object3D();
	var color = 0x999999;
/*
	//tavolo cucina
	objects.add(loadObj('tavolo-cucina/table.obj',10.2,8.5,0.2,0.019,0.027,0.019, Math.PI/2, Math.PI/2,0,color));

	//bidet bagno 1
	objects.add(loadObj('toilet-seat/01 (3).obj',8.33,7.73,.2,.0013,.0013,.0013,Math.PI/2,-Math.PI/2,0,0xFFFFFF));

	//bidet bagno 2
	objects.add(loadObj('toilet-seat/01 (3).obj',6.15,7.8,.2,.0012,.0012,.0012,Math.PI/2,-Math.PI/2,0,0xFFFFFF));

    //gabinetto bagno 1
    objects.add(loadObj('toilet OBJ/toilet OBJ.obj',8.64,8.28,.2,.0012,.0012,.0012,0,0,Math.PI,0xFFFFFF));

    //gabinetto bagno 2
    objects.add(loadObj('toilet OBJ/toilet OBJ.obj',6.48,8.28,.2,.00115,.00115,.00115,0,0,Math.PI,0xFFFFFF));

    //divano
    objects.add(loadObj('sofa/Sofa.obj',15,7.3,.2,1.3,1.3,1.3, -Math.PI/2,-Math.PI/2,Math.PI,0xF0DC82));

    //tavolo tv
    objects.add(loadObj('tv-table/Table.obj',11,7.5,.2,.03,.03,.03, Math.PI/2,Math.PI/2,0,0x4F4F4F));

    //tavolo salone
    objects.add(loadObjMtl('StylishDesk/StylishDesk',12.85,4.2,.2, .5, .6, .65, Math.PI/2, Math.PI/2,0));

    //tv
    objects.add(loadObjMtl('tv/Samsung Smart 3D HDTV Free',11.5,7.3  ,.98,.1, .1, .1, Math.PI/2, Math.PI/2,0));

    //desk
    objects.add(loadObjMtl('desk/ModernDeskOBJ',1.75,3.6  ,.2,.025,.025,.025, Math.PI/2, Math.PI/2,0));

    //shower
    objects.add(loadObjMtl('shower/19523_Shower',8.8,5.8  ,.2,.7,1,.7, Math.PI/2, Math.PI,0));

	//mobili camera1
    objects.add(loadObjMtl('camera/17982_Child_Furniture',4.48,.6,.2,.02,.03,.03, Math.PI/2, Math.PI,0));
      
    //letto camera1
    objects.add(loadObjMtl('letto1/lit',4.45,2.6,.45,.01,.01,.01, 0, -Math.PI/2,-Math.PI/2));

 	//letto camera2
    objects.add(loadObjMtl('letto2/6371_Bed',3.2,8.95,.2,.06,.09,.07, Math.PI/2, 0,0));
      
    //armadio camera2
    objects.add(loadObjMtl('armadio-camera2/16958_Closet',3.6,5,.35,.01,.01,.0065, -Math.PI/2, 0,Math.PI));

    //cucina
    objects.add(loadObjMtl('cucina/12684_Kitchen',-6.23,-4.05,.2,.00055,.00075,.00055, Math.PI/2, 0,0));

  	//tesoro
    objects.add(loadObjMtl('tesoro/12925_Treasure_Chest',.1,5.4,.2,.2,.2,.2, Math.PI, -Math.PI/2,Math.PI/2));

    //sedia
    objects.add(loadObjMtl('chair/21032_Office_Chair',2.2,3.2,.2,.01,.01,.01, Math.PI/2,0,0));

    //pc
    objects.add(loadObjMtl('pc/Lowpoly Old Notebook(obj)',2.55,4.05,1.2,.005,.005,.005, Math.PI/2,0,0));

    //lavabo1
    objects.add(loadObjMtl('lavabo/bathroom_vanity',7.08,7.5,1.1,.015,.015,.015, Math.PI/2,Math.PI/2,0));

    //lavabo2
    objects.add(loadObjMtl('lavabo/bathroom_vanity',6.15,5.97,1.1,.01,.01,.01, Math.PI/2,Math.PI,0));

    //sedia salotto
    objects.add(loadObjMtl('chair/Chair',12.7,4.3,.2,.02,.02,.02, 0,-Math.PI/2,-Math.PI/2));

    //libri
    objects.add(loadObjMtl('book/Book-Case',1.7,3.15,.98,.0055,.0055,.0055,Math.PI/2,-Math.PI/2,0));

    //auto
    objects.add(mkFerrari());

    //toaster
    objects.add(mkToaster());

    //apples
    objects.add(loadObjMtl('apples/apples',10.25,8.15,1.05,.015,.015,.015,Math.PI/2,0,0));

    //dish
    objects.add(loadObjMtl('plate/plate-and-ustensils',10.45,7.65,1.1,.2,.2,.2,Math.PI/2,Math.PI/2,0));

    //pizza
    objects.add(loadObjMtl('pizza/pizza',10.45,7.65,1.1,.007,.007,.007,Math.PI/2,Math.PI/2,0));

    //bottle
    objects.add(loadObjMtl('bottle/beer_bottle',10.1,7.65,1.1,.015,.015,.015,Math.PI/2,Math.PI/2,0));
*/
    //speakers
    objects.add(mkSpeakers());

    
/*
    //flowers
    objects.add(loadObjMtl('flowers/flowers',13.5,6,1.43,.01,.01,.01,Math.PI/2,Math.PI/2,0));

    //newspaper
    objects.add(loadObjMtl('newspaper/newspaper',12.93  ,4.3,1.13,.017,.017,.017,Math.PI/2,Math.PI/3,0));


    //washing-machine
    objects.add(loadObjMtl('washing-machine/clothes_washing_machine',7.07,6.16,.7,.012,.012,.012,Math.PI/2,Math.PI/2,0));

    //radiator
    objects.add(loadObjMtl('radiator/bathroomRadiator',7.06,8.6,-.5,.011,.011,.011,Math.PI/2,0,0));

    //towel1
    //objects.add(loadObjMtl('towel/com_bath3',8.26,8.6,-.5,1,1,1,Math.PI/2,0,0));

    //books1
    objects.add(loadObjMtl('book/livres',4.5,.4,1.32,.02,.013,.02,-Math.PI/2,0,Math.PI));

    //books2
    objects.add(loadObjMtl('book/livres',4.5,.4,1.72,.02,.013,.02,-Math.PI/2,0,Math.PI));

    //books3
    objects.add(loadObjMtl('book/livres',4.5,.4,2.08,.02,.013,.02,-Math.PI/2,0,Math.PI));

    //clothes1
    objects.add(loadObjMtl('clothes/folded_clothes',3.3,.4,1.32 ,.013,.013,.013,-Math.PI/2,Math.PI/2,Math.PI));

    //clothes2
    objects.add(loadObjMtl('clothes/folded_clothes',3.3,.4,1.02 ,.013,.013,.013,-Math.PI/2,Math.PI/2,Math.PI));

    //clothes3
    objects.add(loadObjMtl('clothes/folded_clothes',3.3,.4,0.72 ,.013,.013,.013,-Math.PI/2,Math.PI/2,Math.PI));

    //clothes4
    objects.add(loadObjMtl('clothes/folded_clothes',3.3,.4,0.42 ,.013,.013,.013,-Math.PI/2,Math.PI/2,Math.PI));


    //bedside1
    objects.add(loadObjMtl('bedside/bedsideTable2',1.85,8.45,0.23 ,.014,.014,.014,Math.PI/2,0,0));

    //bedside2
    objects.add(loadObjMtl('bedside/bedsideTable2',4.95,8.45,0.23 ,.014,.014,.014,Math.PI/2,0,0));

    //clothes4
    objects.add(loadObjMtl('clothes/folded_clothes',4,4.75,.5 ,.012,.012,.012,-Math.PI/2,Math.PI/2,Math.PI));

    //lamp1
    objects.add(loadObjMtl('lamp/little_lamp1',5.05,9.05,.85,1,1,1,Math.PI/2,0,0));

    //lamp1
    objects.add(loadObjMtl('lamp/little_lamp1',1.95 ,9.05,.85,1,1,1,Math.PI/2,0,0));

    //hangingclothes
    objects.add(loadObjMtl('hangingClothes/hanging-clothes2',3.9,5.1,2.07,.006,.006,.003,-Math.PI/2,0,Math.PI));
*/
	return objects;
}