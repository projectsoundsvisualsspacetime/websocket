const Pusher = require('pusher-js');



const pusher = new Pusher('PUSHER_KEY', {
  cluster: 'PUSHER_CLUSTER',
  useTLS: true
});


const channel = pusher.subscribe('my-channel');

channel.bind('my-event', function(data) {
  console.log('Mensaje recibido del servidor:', data);
});
