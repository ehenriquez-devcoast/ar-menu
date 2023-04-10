document.addEventListener("DOMContentLoaded", function() {

	let sceneEl = document.querySelector('a-scene');
    let Close = document.getElementById('close-btn')

	// let arSystem = sceneEl.systems["mindar-image-system"];
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const name = id == 1 ? "calcio" : id == 2 ? "multivit" : "complejob"
    
    sceneEl.addEventListener("arReady", (event) => {
        // arSystem.pause(true);
        Close.setAttribute('animation', {
            property: 'scale',
            to: '.5 .5 .5',
            easing: 'easeInQuad',
            dur: 500,
        });
        let closePos = new THREE.Vector3(0.9, 0.9, -1);
        closePos.unproject(sceneEl.camera)
        Close.setAttribute("position",closePos)
    });


    if(id == 1){
        let CalcioFrasco = document.createElement('a-entity');
                            
        CalcioFrasco.setAttribute("id", "calcio-frasco-0")
        CalcioFrasco.setAttribute("class", "notClickable")
        CalcioFrasco.setAttribute("tap-frasco", "frasco: calcio-frasco-0; target:0;")
        CalcioFrasco.setAttribute("position", "-1 1 0")
        CalcioFrasco.setAttribute("rotation", "25.000 1.790 0")
        CalcioFrasco.setAttribute("scale", "3 3 3")
        CalcioFrasco.setAttribute("gltf-model", "#calcio-frasco-glb")
        // CalcioFrasco.setAttribute("animation", "property: position; to: 0 0.483 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")
    
        sceneEl.appendChild(CalcioFrasco);
    }
    else if(id == 2){
        let MultivitFrasco = document.createElement('a-entity');
                        
        MultivitFrasco.setAttribute("id", "multivit-frasco-0")
        MultivitFrasco.setAttribute("class", "notClickable")
        MultivitFrasco.setAttribute("tap-frasco", "frasco: multivit-frasco-0; target:0;")
        MultivitFrasco.setAttribute("position", "0 1 0")
        MultivitFrasco.setAttribute("rotation", "25 0 0")
        MultivitFrasco.setAttribute("scale", "3 3 3")
        MultivitFrasco.setAttribute("gltf-model", "#multivit-frasco-glb")
        // MultivitFrasco.setAttribute("animation", "property: position; to: -1 0.1 0; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")
    
        sceneEl.appendChild(MultivitFrasco);
    }
    else if(id == 3){
        let ComplejoFrasco = document.createElement('a-entity');
                        
        ComplejoFrasco.setAttribute("id", "complejob-frasco-0")
        ComplejoFrasco.setAttribute("class", "notClickable")
        ComplejoFrasco.setAttribute("tap-frasco", "frasco: complejob-frasco-0; target:0;")
        ComplejoFrasco.setAttribute("position", "0 1 0")
        ComplejoFrasco.setAttribute("rotation", "25 0 0")
        ComplejoFrasco.setAttribute("scale", "3 3 3")
        ComplejoFrasco.setAttribute("gltf-model", "#complejob-frasco-glb")
        // ComplejoFrasco.setAttribute("animation", "property: position; to: 1.435 0.426 0; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")
    
        sceneEl.appendChild(ComplejoFrasco);
    }
    else{
        let ComplejoFrasco = document.createElement('a-entity');
                        
        ComplejoFrasco.setAttribute("id", "complejob-frasco-0")
        ComplejoFrasco.setAttribute("class", "notClickable")
        ComplejoFrasco.setAttribute("tap-frasco", "frasco: complejob-frasco-0; target:0;")
        ComplejoFrasco.setAttribute("position", "0 0.697 0")
        ComplejoFrasco.setAttribute("rotation", "25.000 -50.000 0")
        ComplejoFrasco.setAttribute("scale", ".1 .1 .1")
        ComplejoFrasco.setAttribute("gltf-model", "#subway-glb")
        // ComplejoFrasco.setAttribute("animation", "property: position; to: 1.435 0.426 0; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate")
    
        sceneEl.appendChild(ComplejoFrasco);
    }
    // =====================================

    // MODELS

    // Marco
    let marco = document.createElement('a-image');

    marco.setAttribute("position", "0 2.5 0")
    marco.setAttribute("height", "1")
    marco.setAttribute("width", "3")
    marco.setAttribute("src", "#marco-" + name)

    sceneEl.appendChild(marco);

    // crear Combinacion
    let Combinacion = document.createElement('a-image');
    
    Combinacion.setAttribute("position", "0 -0.869 0")
    Combinacion.setAttribute("width", "3")
    Combinacion.setAttribute("height", "1")
    Combinacion.setAttribute("scale", "0 0 0")
    Combinacion.setAttribute("id", "#"  + name + "-Combinacion")
    Combinacion.setAttribute("src", "#"  + name + "-combinacion")

    sceneEl.appendChild(Combinacion);

    // crear Capsulas
    let Capsulas = document.createElement('a-image');
    
    Capsulas.setAttribute("position", "0 -0.869 0")
    Capsulas.setAttribute("width", "3")
    Capsulas.setAttribute("height", "1")
    Capsulas.setAttribute("scale", "0 0 0")
    Capsulas.setAttribute("id", "#"  + name + "-Capsulas")
    Capsulas.setAttribute("src", "#"  + name + "-capsulas")

    sceneEl.appendChild(Capsulas);

    // crear Rutina
    let Rutina = document.createElement('a-image');
    
    Rutina.setAttribute("position", "0 -0.869 0")
    Rutina.setAttribute("width", "3")
    Rutina.setAttribute("height", "1")
    Rutina.setAttribute("scale", "0 0 0")
    Rutina.setAttribute("id", "#"  + name + "-Rutina")
    Rutina.setAttribute("src", "#"  + name + "-rutina")

    sceneEl.appendChild(Rutina);

    // Crear Video
    let Video = document.createElement('a-video');

    Video.setAttribute("position", "0 -1.216 1")
    Video.setAttribute("width", "2")
    Video.setAttribute("scale", "0 0 0")
    Video.setAttribute("id", "#"  + name + "-Video")
    Video.setAttribute("src", "#"  + name + "-video")

    sceneEl.appendChild(Video);



    // Combinacion
    let combinacion = document.createElement('a-entity');

    combinacion.setAttribute("id", "boton-1")
    combinacion.setAttribute("position", "-0.092 -2.873 0")
    combinacion.setAttribute("scale", "5 5 5")
    combinacion.setAttribute("class", "clickable")
    combinacion.setAttribute("gltf-model", "#multivit-combinacion-glb")
    combinacion.setAttribute("tap-model", "boton: 1; video: #"  + name + "-Video; combinacion: #" + name +"-Combinacion; capsulas: #"  + name + "-Capsulas; rutina: #"  + name + "-Rutina")

    sceneEl.appendChild(combinacion);

    // TEXT COMBINACION
    let textCombinacion = document.createElement('a-image');
    
    textCombinacion.setAttribute("position", "-1.099 1.500 0")
    textCombinacion.setAttribute("width", "6")
    textCombinacion.setAttribute("height", "1")
    textCombinacion.setAttribute("scale", ".15 .15 .15")
    textCombinacion.setAttribute("id", "#text-formula")
    textCombinacion.setAttribute("src", "#formula-completa")

    sceneEl.appendChild(textCombinacion);

    // Capsulas
    let capsulas = document.createElement('a-entity');

    capsulas.setAttribute("id", "boton-2")
    capsulas.setAttribute("position", "-0.092 -3.113 0")
    capsulas.setAttribute("scale", "5 5 5")
    capsulas.setAttribute("class", "clickable")
    capsulas.setAttribute("gltf-model", "#multivit-capsulas-glb")
    capsulas.setAttribute("tap-model", "boton: 2; video: #"  + name + "-Video; combinacion: #" + name +"-Combinacion; capsulas: #"  + name + "-Capsulas; rutina: #"  + name + "-Rutina")

    sceneEl.appendChild(capsulas);

    // TEXT CAPSULAS
    let textCapsulas = document.createElement('a-image');
    
    textCapsulas.setAttribute("position", "-1.502 0.889 0")
    textCapsulas.setAttribute("width", "6")
    textCapsulas.setAttribute("height", "1")
    textCapsulas.setAttribute("scale", ".15 .15 .15")
    textCapsulas.setAttribute("id", "#text-tecnologia")
    textCapsulas.setAttribute("src", "#tecnologia")

    sceneEl.appendChild(textCapsulas);

    // Rutina
    let rutina = document.createElement('a-entity');

    rutina.setAttribute("id", "boton-3")
    rutina.setAttribute("position", "-0.070 -3.277 0")
    rutina.setAttribute("scale", "5 5 5")
    rutina.setAttribute("class", "clickable")
    rutina.setAttribute("gltf-model", "#multivit-rutina-glb")
    rutina.setAttribute("tap-model", "boton: 3; video: #"  + name + "-Video; combinacion: #" + name +"-Combinacion; capsulas: #"  + name + "-Capsulas; rutina: #"  + name + "-Rutina")

    sceneEl.appendChild(rutina);

    // TEXT RUTINA
    let textRutina = document.createElement('a-image');

    textRutina.setAttribute("position", "-1.523 0.164 0")
    textRutina.setAttribute("width", "6")
    textRutina.setAttribute("height", "1")
    textRutina.setAttribute("scale", ".15 .15 .15")
    textRutina.setAttribute("id", "#text-beneficios")
    textRutina.setAttribute("src", "#beneficios")

    sceneEl.appendChild(textRutina);

    // Video
    let video = document.createElement('a-entity');

    video.setAttribute("id", "boton-4")
    video.setAttribute("position", "0.023 -3.399 0")
    video.setAttribute("scale", "5 5 5")
    video.setAttribute("class", "clickable")
    video.setAttribute("gltf-model", "#multivit-video-glb")
    video.setAttribute("tap-model", "boton: 4; video: #"  + name + "-Video; combinacion: #" + name +"-Combinacion; capsulas: #"  + name + "-Capsulas; rutina: #"  + name + "-Rutina")

    sceneEl.appendChild(video);
    
    // TEXT Video
    let textVideo = document.createElement('a-image');

    textVideo.setAttribute("position", "-1.044 -0.39 0")
    textVideo.setAttribute("width", "6")
    textVideo.setAttribute("height", "1")
    textVideo.setAttribute("scale", ".15 .15 .15")
    textVideo.setAttribute("id", "#text-conoce-mas")
    textVideo.setAttribute("src", "#conoce-mas")

    sceneEl.appendChild(textVideo);
    // =====================================

});