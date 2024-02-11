const WebSocket = require('ws');

// URL del servidor WebSocket
const serverUrl = 'ws://localhost:8080';

// Crear una instancia del cliente WebSocket y conectar al servidor
const ws = new WebSocket(serverUrl);

// Manejar eventos del cliente WebSocket
ws.on('open', function open() {
  console.log('Conexión establecida con el servidor');
  
  // Enviar un mensaje al servidor
  ws.send('¡Hola, servidor!');
});

ws.on('message', function incoming(data) {
  console.log('Mensaje recibido del servidor:', data);
});

ws.on('error', function(error) {
  console.error('Error en la conexión:', error);
});

ws.on('close', function close() {
  console.log('Conexión cerrada');
});
