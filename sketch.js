/* eslint-disable no-undef, no-unused-vars */

//DECLARACIONES

// Variable donde se almacena el lienzo de p5
let canvas;
// Variable que almacena el alto del lienzo
let canvasHeight = 120;
// Variable que almacena el ancho del lienzo
let canvasWidth;

// Constante donde se almacena la URL desde donde se carga el audio
const URL_AUDIO = "";
// Variable donde se almacena la velocidad a la cual se escucha el audio
let velocidad;
// Variable donde se almacena el volumen a la cual se escucha el audio
let volumen;
// Variable donde se almacena el archivo de audio
let soundFile;

// FUNCIÓN DE PRECARGA DE LOS RECURSOS
function preload() {
  // Se los formatos de audio válidos dentro de la aplicación
  soundFormats("ogg");
  // Carga el audio desde la URL y lo almacena en la variable
  soundFile = loadSound(URL_AUDIO);
}

// FUNCIÓN DE CONFIGURACIÓN
function setup() {
  // Asigna el ancho del lienzo
  canvasWidth = windowWidth;
  // Crear un lienzo (área de dibujo) del tamaño de la ventana del navegador Web
  canvas = createCanvas(canvasWidth, canvasHeight);
  // Adiciona el lienzo al div con el atributo id igual a canvas-container
  canvas.parent("canvas-container");
  // Se establece la velocidad y el volumen iniciales del audio
  velocidad = 1.0;
  volumen = 0.5;
  // Inicialmente el audio comienza parado
  soundFile.pause();
}

// FUNCIÓN DONDE SE PROGRAMA LA FUNCIONALIDAD
function draw() {

}

// CAMBIA EL TAMAÑO DEL LIENZO SI LA VENTANA DEL NAVEGADOR WEB CAMBIA DE TAMAÑO
windowResized = function () {
  // Asigna el ancho del lienzo
  canvasWidth = windowWidth;
  // Redimenciona el tamaño del lienzo al tamaño del canvas
  resizeCanvas(canvasWidth, canvasHeight);
};

// FUNCIÓN QUE SE LLAMA AL PRESIONAR UNA TECLA
function keyTyped() {
  // Al presionar la tecla p se inicia o se para la reproducción
  if (key === "p") {
    if (soundFile.isPlaying()) {
      soundFile.pause();
    } else {
      soundFile.play();
    }
    // Con la tecla > se reproduce más rápido el audio
  } else if (key === ">" && soundFile.isPlaying()) {
    velocidad += 0.1;
    soundFile.rate(velocidad);
    // Con la tecla < se reproduce más lento el audio
  } else if (key === "<" && soundFile.isPlaying()) {
    velocidad -= 0.1;
    soundFile.rate(velocidad);
    // Con la tecla + se aumenta el volumen del audio
  } else if (key === "+" && soundFile.isPlaying()) {
    volumen += 0.1;
    soundFile.setVolume(volumen);
    // Con la tecla - se disminuye el volumen del audio
  } else if (key === "-" && soundFile.isPlaying()) {
    volumen -= 0.1;
    soundFile.setVolume(volumen);
  }
}
