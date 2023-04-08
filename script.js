// Obtener el botón y añadir un event listener al hacer clic
document.getElementById('activate-camera-btn').addEventListener('click', function() {
    // Verificar si el navegador soporta la API de mediaDevices
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Solicitar acceso a la cámara con un zoom de 1x y autoenfoque
        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment', // Cámara trasera
                zoom: 1, // Zoom de 1x
                focusMode: 'continuous' // Autoenfoque
            }
        })
        .then(function(stream) {
            // Obtener el elemento de video y reproducir la transmisión
            var video = document.createElement('video');
            video.srcObject = stream;
            video.autoplay = true;
            // Añadir el video al contenedor de la cámara
            document.getElementById('camera-container').appendChild(video);
        })
        .catch(function(error) {
            console.error('Error al acceder a la cámara:', error);
        });
    } else {
        console.error('La API de mediaDevices no es soportada en este navegador.');
    }
});
