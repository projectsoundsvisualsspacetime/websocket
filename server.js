const WebSocket = require('ws');

// Crear un servidor WebSocket
const wss = new WebSocket.Server({ port: 8080 });

// Manejar la conexión de clientes
wss.on('connection', function connection(ws) {
  console.log('Cliente conectado');

  // Manejar los mensajes entrantes desde el cliente
  ws.on('message', function incoming(message) {
    console.log('Mensaje recibido del cliente:', message);

    // Enviar un mensaje de respuesta al cliente
    ws.send('Mensaje recibido por el servidor: ' + message);
  });

  // Manejar errores de conexión
  ws.on('error', function(error) {
    console.error('Error de conexión:', error);
  });

  // Manejar la desconexión de clientes
  ws.on('close', function close() {
    console.log('Cliente desconectado');
  });
});

console.log('Servidor WebSocket iniciado en el puerto ws://localhost:8080 🪐');
