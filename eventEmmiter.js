// Referencio la clase de EventEmmiter, que es el paquete 'events'
const EventEmmiter = require('events');
// Creo una instancia de obj EventEmmiter
const eventEmmiter = new EventEmmiter();

// Me suscribo a eventos
eventEmmiter.on('evento1', param => {
    console.log('Evento 1 escuchado', param);
});

eventEmmiter.on('evento2', param => {
    console.log('Evento 2 escuchado', param);
});

// Emito los eventos para disparar los callbacks
eventEmmiter.emit('evento1', 'OK');
eventEmmiter.emit('evento2', 'OK 2');