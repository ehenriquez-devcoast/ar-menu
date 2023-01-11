// const tapModelComponent = () => ({
AFRAME.registerComponent('tap-frasco', {
    schema: {
        frasco: {default: '#multivit'},
        target: {default: '0'},
    },
    init() {
        
        this.el.addEventListener('click', (event) => {
            let sceneEl = document.querySelector('a-scene');
            let CalcioFrasco = document.getElementById('calcio-frasco-0')
            let MultivitFrasco = document.getElementById('multivit-frasco-0')
            let ComplejobFrasco = document.getElementById('complejob-frasco-0')
            let Frasco = document.getElementById(this.data.frasco)
            let Close = document.getElementById('close-btn')
           
            
            console.log(Frasco)
            // MOSTRAR DATOS
            if (this.data.frasco === ('multivit-frasco-' + this.data.target)) {

                Frasco.setAttribute("class","notClickable")
                Frasco.setAttribute("position","0 0 0")
                Frasco.setAttribute('animation', {
                    property: 'position',
                    to: '0 0 0',
                    easing: 'easeOutQuad',
                    dur: 500,
                });

                CalcioFrasco.setAttribute('animation', {
                    property: 'scale',
                    to: '0 0 0',
                    easing: 'easeOutQuad',
                    dur: 500,
                });
                ComplejobFrasco.setAttribute('animation', {
                    property: 'scale',
                    to: '0 0 0',
                    easing: 'easeOutQuad',
                    dur: 500,
                });
                
                setTimeout(() => {
                    CalcioFrasco.remove();
                    ComplejobFrasco.remove();

                    Close.setAttribute('animation', {
                        property: 'scale',
                        to: '.5 .5 .5',
                        easing: 'easeInQuad',
                        dur: 500,
                    });
                    let closePos = new THREE.Vector3(0.9, 0.9, -1);
                    closePos.unproject(this.el.sceneEl.camera)
                    Close.setAttribute("position",closePos)

                    // Marco
                    let marco = document.createElement('a-image');
    
                    marco.setAttribute("position", "0 2.5 0")
                    marco.setAttribute("height", "1")
                    marco.setAttribute("width", "3")
                    marco.setAttribute("src", "#marco-multivit")

                    sceneEl.appendChild(marco);

                    // crear Combinacion
                    let Combinacion = document.createElement('a-image');
                    
                    Combinacion.setAttribute("position", "0 -0.869 0")
                    Combinacion.setAttribute("width", "3")
                    Combinacion.setAttribute("height", "1")
                    Combinacion.setAttribute("scale", "0 0 0")
                    Combinacion.setAttribute("id", "#multivit-Combinacion")
                    Combinacion.setAttribute("src", "#multivit-combinacion")

                    sceneEl.appendChild(Combinacion);

                    // crear Capsulas
                    let Capsulas = document.createElement('a-image');
                    
                    Capsulas.setAttribute("position", "0 -0.869 0")
                    Capsulas.setAttribute("width", "3")
                    Capsulas.setAttribute("height", "1")
                    Capsulas.setAttribute("scale", "0 0 0")
                    Capsulas.setAttribute("id", "#multivit-Capsulas")
                    Capsulas.setAttribute("src", "#multivit-capsulas")

                    sceneEl.appendChild(Capsulas);

                    // crear Rutina
                    let Rutina = document.createElement('a-image');
                    
                    Rutina.setAttribute("position", "0 -0.869 0")
                    Rutina.setAttribute("width", "3")
                    Rutina.setAttribute("height", "1")
                    Rutina.setAttribute("scale", "0 0 0")
                    Rutina.setAttribute("id", "#multivit-Rutina")
                    Rutina.setAttribute("src", "#multivit-rutina")

                    sceneEl.appendChild(Rutina);

                    // Crear Video
                    let Video = document.createElement('a-video');
    
                    Video.setAttribute("position", "0 -1.216 1")
                    Video.setAttribute("width", "2")
                    Video.setAttribute("scale", "0 0 0")
                    Video.setAttribute("id", "#multivit-Video")
                    Video.setAttribute("src", "#multivit-video")

                    sceneEl.appendChild(Video);



                    // Combinacion
                    let combinacion = document.createElement('a-entity');
    
                    combinacion.setAttribute("id", "boton-1")
                    combinacion.setAttribute("position", "-0.092 -2.873 0")
                    combinacion.setAttribute("scale", "5 5 5")
                    combinacion.setAttribute("class", "clickable")
                    combinacion.setAttribute("gltf-model", "#multivit-combinacion-glb")
                    combinacion.setAttribute("tap-model", "boton: 1; video: #multivit-Video; combinacion: #multivit-Combinacion; capsulas: #multivit-Capsulas; rutina: #multivit-Rutina")

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
                    capsulas.setAttribute("tap-model", "boton: 2; video: #multivit-Video; combinacion: #multivit-Combinacion; capsulas: #multivit-Capsulas; rutina: #multivit-Rutina")

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
                    rutina.setAttribute("tap-model", "boton: 3; video: #multivit-Video; combinacion: #multivit-Combinacion; capsulas: #multivit-Capsulas; rutina: #multivit-Rutina")

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
                    video.setAttribute("tap-model", "boton: 4; video: #multivit-Video; combinacion: #multivit-Combinacion; capsulas: #multivit-Capsulas; rutina: #multivit-Rutina")

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

                }, 500)
            }
            else if(this.data.frasco === ('calcio-frasco-' + this.data.target)){
                // console.log('clicked calcio')

                Frasco.setAttribute("class","notClickable")
                Frasco.setAttribute("position","0 0 0")
                Frasco.setAttribute('animation', {
                    property: 'position',
                    to: '0 0 0',
                    easing: 'easeOutQuad',
                    dur: 500,
                });

                MultivitFrasco.setAttribute('animation', {
                    property: 'scale',
                    to: '0 0 0',
                    easing: 'easeOutQuad',
                    dur: 500,
                });
                ComplejobFrasco.setAttribute('animation', {
                    property: 'scale',
                    to: '0 0 0',
                    easing: 'easeOutQuad',
                    dur: 500,
                });
                
                setTimeout(() => {
                    MultivitFrasco.remove();
                    ComplejobFrasco.remove();

                    Close.setAttribute('animation', {
                        property: 'scale',
                        to: '.5 .5 .5',
                        easing: 'easeInQuad',
                        dur: 500,
                    });
                    let closePos = new THREE.Vector3(0.9, 0.9, -1);
                    closePos.unproject(this.el.sceneEl.camera)
                    Close.setAttribute("position",closePos)

                        // Marco
                    let marco = document.createElement('a-image');
    
                    marco.setAttribute("position", "0 2.5 0")
                    marco.setAttribute("height", "1")
                    marco.setAttribute("width", "3")
                    marco.setAttribute("src", "#marco-calcio")

                    sceneEl.appendChild(marco);

                    // crear Combinacion
                    let Combinacion = document.createElement('a-image');
                    
                    Combinacion.setAttribute("position", "0 -0.869 0")
                    Combinacion.setAttribute("width", "3")
                    Combinacion.setAttribute("height", "1")
                    Combinacion.setAttribute("scale", "0 0 0")
                    Combinacion.setAttribute("id", "#calcio-Combinacion")
                    Combinacion.setAttribute("src", "#calcio-combinacion")

                    sceneEl.appendChild(Combinacion);

                    // crear Capsulas
                    let Capsulas = document.createElement('a-image');
                    
                    Capsulas.setAttribute("position", "0 -0.869 0")
                    Capsulas.setAttribute("width", "3")
                    Capsulas.setAttribute("height", "1")
                    Capsulas.setAttribute("scale", "0 0 0")
                    Capsulas.setAttribute("id", "#calcio-Capsulas")
                    Capsulas.setAttribute("src", "#calcio-capsulas")

                    sceneEl.appendChild(Capsulas);

                    // crear Rutina
                    let Rutina = document.createElement('a-image');
                    
                    Rutina.setAttribute("position", "0 -0.869 0")
                    Rutina.setAttribute("width", "3")
                    Rutina.setAttribute("height", "1")
                    Rutina.setAttribute("scale", "0 0 0")
                    Rutina.setAttribute("id", "#calcio-Rutina")
                    Rutina.setAttribute("src", "#calcio-rutina")

                    sceneEl.appendChild(Rutina);

                    // Crear Video
                    let Video = document.createElement('a-video');
    
                    Video.setAttribute("position", "0 -1.216 1")
                    Video.setAttribute("width", "2")
                    Video.setAttribute("scale", "0 0 0")
                    Video.setAttribute("id", "#calcio-Video")
                    Video.setAttribute("src", "#calcio-video")

                    sceneEl.appendChild(Video);



                    // Combinacion
                    let combinacion = document.createElement('a-entity');
    
                    combinacion.setAttribute("id", "boton-1")
                    combinacion.setAttribute("position", "0.340 -2.5 0")
                    combinacion.setAttribute("scale", "5 5 5")
                    combinacion.setAttribute("class", "clickable")
                    combinacion.setAttribute("gltf-model", "#calcio-combinacion-glb")
                    combinacion.setAttribute("tap-model", "boton: 1; video: #calcio-Video; combinacion: #calcio-Combinacion; capsulas: #calcio-Capsulas; rutina: #calcio-Rutina")

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
                    capsulas.setAttribute("position", "-0.465 -3.565 0")
                    capsulas.setAttribute("scale", "5 5 5")
                    capsulas.setAttribute("class", "clickable")
                    capsulas.setAttribute("gltf-model", "#calcio-capsulas-glb")
                    capsulas.setAttribute("tap-model", "boton: 2; video: #calcio-Video; combinacion: #calcio-Combinacion; capsulas: #calcio-Capsulas; rutina: #calcio-Rutina")

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
                    rutina.setAttribute("gltf-model", "#calcio-rutina-glb")
                    rutina.setAttribute("tap-model", "boton: 3; video: #calcio-Video; combinacion: #calcio-Combinacion; capsulas: #calcio-Capsulas; rutina: #calcio-Rutina")

                    sceneEl.appendChild(rutina);
                
                    // TEXT RUTINA
                    let textRutina = document.createElement('a-image');
                
                    textRutina.setAttribute("position", "-1.523 0.164 0")
                    textRutina.setAttribute("width", "6")
                    textRutina.setAttribute("height", "1")
                    textRutina.setAttribute("scale", ".15 .15 .15")
                    textRutina.setAttribute("id", "#text-rutina")
                    textRutina.setAttribute("src", "#rutina")

                    sceneEl.appendChild(textRutina);

                    // Video
                    let video = document.createElement('a-entity');
    
                    video.setAttribute("id", "boton-4")
                    video.setAttribute("position", "0.023 -3.399 0")
                    video.setAttribute("scale", "5 5 5")
                    video.setAttribute("class", "clickable")
                    video.setAttribute("gltf-model", "#calcio-video-glb")
                    video.setAttribute("tap-model", "boton: 4; video: #calcio-Video; combinacion: #calcio-Combinacion; capsulas: #calcio-Capsulas; rutina: #calcio-Rutina")

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

                }, 500)

                
            }
            else if (this.data.frasco === ('complejob-frasco-' + this.data.target)) {

                Frasco.setAttribute("class","notClickable")
                Frasco.setAttribute("position","0 0 0")
                Frasco.setAttribute('animation', {
                    property: 'position',
                    to: '0 0 0',
                    easing: 'easeOutQuad',
                    dur: 500,
                });

                CalcioFrasco.setAttribute('animation', {
                    property: 'scale',
                    to: '0 0 0',
                    easing: 'easeOutQuad',
                    dur: 500,
                });
                MultivitFrasco.setAttribute('animation', {
                    property: 'scale',
                    to: '0 0 0',
                    easing: 'easeOutQuad',
                    dur: 500,
                });
                
                setTimeout(() => {
                    CalcioFrasco.remove();
                    MultivitFrasco.remove();

                    Close.setAttribute('animation', {
                        property: 'scale',
                        to: '.5 .5 .5',
                        easing: 'easeInQuad',
                        dur: 500,
                    });
                    let closePos = new THREE.Vector3(0.9, 0.9, -1);
                    closePos.unproject(this.el.sceneEl.camera)
                    Close.setAttribute("position",closePos)

                    // Marco
                    let marco = document.createElement('a-image');
    
                    marco.setAttribute("position", "0 2.5 0")
                    marco.setAttribute("height", "1")
                    marco.setAttribute("width", "3")
                    marco.setAttribute("src", "#marco-complejob")

                    sceneEl.appendChild(marco);

                    // crear Combinacion
                    let Combinacion = document.createElement('a-image');
                    
                    Combinacion.setAttribute("position", "0 -0.869 0")
                    Combinacion.setAttribute("width", "3")
                    Combinacion.setAttribute("height", "1")
                    Combinacion.setAttribute("scale", "0 0 0")
                    Combinacion.setAttribute("id", "#complejo-Combinacion")
                    Combinacion.setAttribute("src", "#complejo-combinacion")

                    sceneEl.appendChild(Combinacion);

                    // crear Capsulas
                    let Capsulas = document.createElement('a-image');
                    
                    Capsulas.setAttribute("position", "0 -0.869 0")
                    Capsulas.setAttribute("width", "3")
                    Capsulas.setAttribute("height", "1")
                    Capsulas.setAttribute("scale", "0 0 0")
                    Capsulas.setAttribute("id", "#complejo-Capsulas")
                    Capsulas.setAttribute("src", "#complejo-capsulas")

                    sceneEl.appendChild(Capsulas);

                    // crear Rutina
                    let Rutina = document.createElement('a-image');
                    
                    Rutina.setAttribute("position", "0 -0.869 0")
                    Rutina.setAttribute("width", "3")
                    Rutina.setAttribute("height", "1")
                    Rutina.setAttribute("scale", "0 0 0")
                    Rutina.setAttribute("id", "#complejo-Rutina")
                    Rutina.setAttribute("src", "#complejo-rutina")

                    sceneEl.appendChild(Rutina);

                    // Crear Video
                    let Video = document.createElement('a-video');
    
                    Video.setAttribute("position", "0 -1.216 1")
                    Video.setAttribute("width", "2")
                    Video.setAttribute("scale", "0 0 0")
                    Video.setAttribute("id", "#complejo-Video")
                    Video.setAttribute("src", "#complejob-video")

                    sceneEl.appendChild(Video);



                    // Combinacion
                    let combinacion = document.createElement('a-entity');
    
                    combinacion.setAttribute("id", "boton-1")
                    combinacion.setAttribute("position", "-0.092 -2.873 0")
                    combinacion.setAttribute("scale", "5 5 5")
                    combinacion.setAttribute("class", "clickable")
                    combinacion.setAttribute("gltf-model", "#complejo-combinacion-glb")
                    combinacion.setAttribute("tap-model", "boton: 1; video: #complejo-Video; combinacion: #complejo-Combinacion; capsulas: #complejo-Capsulas; rutina: #complejo-Rutina")

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
                    capsulas.setAttribute("gltf-model", "#complejo-capsulas-glb")
                    capsulas.setAttribute("tap-model", "boton: 2; video: #complejo-Video; combinacion: #complejo-Combinacion; capsulas: #complejo-Capsulas; rutina: #complejo-Rutina")

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
                    rutina.setAttribute("gltf-model", "#complejo-rutina-glb")
                    rutina.setAttribute("tap-model", "boton: 3; video: #complejo-Video; combinacion: #complejo-Combinacion; capsulas: #complejo-Capsulas; rutina: #complejo-Rutina")

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
                    video.setAttribute("gltf-model", "#complejo-video-glb")
                    video.setAttribute("tap-model", "boton: 4; video: #complejo-Video; combinacion: #complejo-Combinacion; capsulas: #complejo-Capsulas; rutina: #complejo-Rutina")

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

                }, 500)
            }
    
        })
    },
        
});