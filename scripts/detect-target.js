document.addEventListener("DOMContentLoaded", function() {

	let sceneEl = document.querySelector('a-scene');
	let arSystem = sceneEl.systems["mindar-image-system"];

    sceneEl.addEventListener("arReady", (event) => {
        arSystem.pause(true);
    });

    let CalcioFrasco = document.createElement('a-entity');
                        
    CalcioFrasco.setAttribute("id", "calcio-frasco-0")
    CalcioFrasco.setAttribute("class", "clickable")
    CalcioFrasco.setAttribute("tap-frasco", "frasco: calcio-frasco-0; target:0;")
    CalcioFrasco.setAttribute("position", "0 0.383 0")
    CalcioFrasco.setAttribute("rotation", "25.000 1.790 0")
    CalcioFrasco.setAttribute("scale", ".1 .1 .1")
    CalcioFrasco.setAttribute("gltf-model", "#calcio-frasco-glb")
    CalcioFrasco.setAttribute("animation", "property: position; to: 0 0.483 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")

    sceneEl.appendChild(CalcioFrasco);

    let MultivitFrasco = document.createElement('a-entity');
                    
    MultivitFrasco.setAttribute("id", "multivit-frasco-0")
    MultivitFrasco.setAttribute("class", "clickable")
    MultivitFrasco.setAttribute("tap-frasco", "frasco: multivit-frasco-0; target:0;")
    MultivitFrasco.setAttribute("position", "-1 0 0")
    MultivitFrasco.setAttribute("scale", ".2 .2 .2")
    MultivitFrasco.setAttribute("gltf-model", "#multivit-frasco-glb")
    MultivitFrasco.setAttribute("animation", "property: position; to: -1 0.1 0; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")

    sceneEl.appendChild(MultivitFrasco);

    let ComplejoFrasco = document.createElement('a-entity');
                    
    ComplejoFrasco.setAttribute("id", "complejob-frasco-0")
    ComplejoFrasco.setAttribute("class", "clickable")
    ComplejoFrasco.setAttribute("tap-frasco", "frasco: complejob-frasco-0; target:0;")
    ComplejoFrasco.setAttribute("position", "1.435 0.326 0")
    ComplejoFrasco.setAttribute("rotation", "25.000 -50.000 0")
    ComplejoFrasco.setAttribute("scale", ".1 .1 .1")
    ComplejoFrasco.setAttribute("gltf-model", "#complejob-frasco-glb")
    ComplejoFrasco.setAttribute("animation", "property: position; to: 1.435 0.426 0; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")

    sceneEl.appendChild(ComplejoFrasco);

    

});