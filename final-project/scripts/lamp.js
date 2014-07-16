        
function mkLamp(){
  var lamp = new THREE.Object3D();

  //create the cylinder basis
  var geometry = new THREE.CylinderGeometry( 4, 4,1.3, 32 );
  var material = new THREE.MeshPhongMaterial( {color: 0xdcdcdc, shininess: 100, metal: true} );
  var cylinder = new THREE.Mesh( geometry, material );
  cylinder.castShadow = true;
  cylinder.position.set(0,-1.25,0)
  cylinder.name = "cylinder";
  lamp.add( cylinder );


  function mkJointArm(radius, height){
    var joint =new THREE.Object3D();
    var sphereGeometry = new THREE.SphereGeometry(radius,32,32);
    var sphereMaterial = new THREE.MeshPhongMaterial({color: 0xdcdcdc, shading: THREE.FlatShading, shininess: 100, metal: true});
    var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
    sphere.castShadow = true;
    joint.add(sphere);


    var cylinder = new THREE.Object3D();

    var cylinderGeometry = new THREE.CylinderGeometry(.2,.2,height,32,32);
    var cylinderMaterial = new THREE.MeshPhongMaterial({color: 0xdcdcdc, shading: THREE.FlatShading, shininess: 100, metal: true});
    var cylinderL = new THREE.Mesh(cylinderGeometry,cylinderMaterial);
    cylinderL.position.set(-.5, 0, -.5);
    cylinderL.castShadow = true;
    cylinder.add(cylinderL);

    var cylinderGeometry = new THREE.CylinderGeometry(.2,.2,height,32,32);
    var cylinderMaterial = new THREE.MeshPhongMaterial({color: 0xdcdcdc, shading: THREE.FlatShading, shininess: 100, metal: true});
    var cylinderR = new THREE.Mesh(cylinderGeometry,cylinderMaterial);
    cylinderR.position.set(+.5, 0, -.5);
    cylinderR.castShadow = true;
    cylinder.add(cylinderR);

    var cylinderGeometry = new THREE.CylinderGeometry(.2,.2,height,32,32);
    var cylinderMaterial = new THREE.MeshPhongMaterial({color: 0xdcdcdc, shading: THREE.FlatShading, shininess: 100, metal: true});
    var cylinderC = new THREE.Mesh(cylinderGeometry,cylinderMaterial);
    cylinderC.position.set(0, 0, .7);
    cylinderC.castShadow = true;
    cylinder.add(cylinderC);


    cylinder.position.set(0,height/2 + radius -.2,0)

    sphere.add(cylinder);


    var hook = new THREE.Object3D();
    hook.position.set(0, height/2 + radius -.2, 0);
    cylinder.add(hook);

    joint.sphere = sphere;
    joint.cylinder = cylinder;
    joint.hook = hook;

    return joint;
  }


  function mkJointLamp(radiusLamp, radiusBase){
    var joint =new THREE.Object3D();
    var sphereGeometry = new THREE.SphereGeometry(radiusBase,32,32);
    var sphereMaterial = new THREE.MeshPhongMaterial({color: 0xdcdcdc, shading: THREE.FlatShading, shininess: 100, metal: true});
    var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
    sphere.castShadow = true;
    joint.add(sphere);


    var sphereLampGeometry = new THREE.SphereGeometry(radiusLamp,32,32,Math.PI,Math.PI,3*Math.PI/2);
    var sphereLampMaterial = new THREE.MeshPhongMaterial({color: 0xdcdcdc, shading: THREE.FlatShading, shininess: 100, metal: true});
    var sphereLamp = new THREE.Mesh(sphereLampGeometry,sphereLampMaterial);
    sphereLamp.position.set(0, radiusLamp+radiusBase, 0);
    sphereLamp.material.side = THREE.DoubleSide;
    sphereLamp.rotation.x = (Math.PI);
    sphereLamp.castShadow = true;
    sphere.add(sphereLamp);

    var sphereBulbGeometry = new THREE.SphereGeometry(1,32,32);
    var sphereBulbMaterial = new THREE.MeshPhongMaterial({color: 0xFFFF00, shading: THREE.FlatShading, shininess: 100, metal: true});
    var sphereBulb = new THREE.Mesh(sphereBulbGeometry,sphereBulbMaterial);
    sphereBulb.position.set(0, radiusLamp-1, 0);
    sphereBulb.castShadow = true;
    sphereLamp.add(sphereBulb);



    var hook = new THREE.Object3D();
    hook.position.set(0, -20,0 );
    sphereBulb.add(hook);
    /*//oggetto che rappresenta hook
          var geometry = new THREE.SphereGeometry( .2 );
          var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
          var sphere2 = new THREE.Mesh( geometry, material );
          sphere2.position = new THREE.Vector3(0, -20,0 );
          sphereBulb.add( sphere2 );*/
          

          light = new THREE.SpotLight( 0xffffff,20,40,Math.PI/2);
          light.intensity = 0;
          light.castShadow = true;
          light.target = hook;
          light.shadowCameraNear = 2;
          light.shadowCameraFar = 300;
          light.shadowCameraFov = 300;
          light.shadowDarkness = 0.5;
          light.shadowMapWidth = 1024;
          light.shadowMapHeight = 1024;
          light.shadow;

          sphereBulb.add(light);

          
          joint.sphere = sphere;
          joint.sphereLamp = sphereLamp;
          joint.sphereBulb = sphereBulb;
          joint.light = light;
          joint.hook = hook;

          return joint;
        }

        var r = .75;
        var h = 7;
        joint1 = mkJointArm(r,h);
        joint1.name = "joint1";
        var joint2 = mkJointArm(r,h);
        joint2.name = "joint2";
        joint1.hook.add(joint2);

        var r1 = 3;
        joint3 = mkJointLamp(r1,r);
        joint3.name = "joint3";
        joint2.hook.add(joint3);

        lamp.add(joint1);
        lamp.castShadow = true;

        lamp.scale.set(.04,.04,.04);
        lamp.rotation.x = (Math.PI/2);
        lamp.position.set(1.85,4,1.25);

        joint3.children[0].children[0].children[0].interact = function () {
          if (joint3.children[0].children[0].children[0].children[1].intensity === 0){
            joint3.children[0].children[0].children[0].children[1].intensity = 1;
          }
          else
          {
            joint3.children[0].children[0].children[0].children[1].intensity = 0;
          }
        }

        var books = true;

        lamp.children[0].interact = function (){
          if (!books){
            new TWEEN.Tween(joint1.rotation)
            .to({x: 0, y: 2, z:0 }, 2000)
            .easing(TWEEN.Easing.Back.InOut)
            .start();
            
            //joint1.rotation.y  = 2 
            books = true;
          }
          else {
            new TWEEN.Tween(joint1.rotation)
            .to({x: 0, y: 4, z:0 }, 2000)
            .easing(TWEEN.Easing.Back.InOut)
            .start();

            
            //joint1.rotation.y  = 4        
            books = false;
          }
        }


        function defaultValues(){
          joint1.rotation.y = 2;
          joint2.rotation.y = 4.2;
          joint2.sphere.rotation.x = 1;
          joint3.sphere.rotation.x = 1.4;

        }


        defaultValues();

        return lamp;
      }