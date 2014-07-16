function renderProva() {
         
         stats.update();
          trackballControls.update();

          if (tv.readyState === tv.HAVE_ENOUGH_DATA) {
            if (root.getObjectByName("tv").material.map) root.getObjectByName("tv").material.map.needsUpdate = true;
            //else if(root.getObjectByName("tv").material.map) root.getObjectByName("tv").material.map.needsUpdate = true;
          }

          if (pc.readyState === pc.HAVE_ENOUGH_DATA) {
            if (root.getObjectByName("pc").material.map) root.getObjectByName("pc").material.map.needsUpdate = true;
          }

          TWEEN.update();

        // render using requestAnimationFrame
        requestAnimationFrame(renderProva);
        renderer.render(scene, camera);

        if (PLenabled === true){
          PLcontrol();
        }
      }