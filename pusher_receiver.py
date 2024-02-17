import pusher

# Configura las credenciales de Pusher
pusher_client = pusher.Pusher(
    app_id='TU_APP_ID',
    key='TU_APP_KEY',
    secret='TU_APP_SECRET',
    cluster='TU_CLUSTER',
    ssl=True
)

# Función para manejar los datos recibidos de Pusher
def on_message(data):
    print('Datos recibidos:', data)

# Conecta el cliente de Pusher y suscríbete al canal
channel = pusher_client.subscribe('mi-canal')
channel.bind('nuevo-dato', on_message)

# Mantén el script en ejecución para seguir recibiendo datos
while True:
    pass
