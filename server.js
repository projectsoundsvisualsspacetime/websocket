const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Configurar CSP
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'none'; font-src 'self' https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com"
  );
  next();
});

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
});

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.post('/send-data', (req, res) => {
  const { data } = req.body;

  // Envía los datos recibidos a todos los clientes suscritos al canal "mi-canal"
  pusher.trigger('mi-canal', 'nuevo-dato', { dato: data });

  res.sendStatus(200);
});

const port = process.env.PORT || 8088;
app.listen(port, () => {
  console.log('Servidor escuchando en el puerto  http://localhost:8088/');
});
