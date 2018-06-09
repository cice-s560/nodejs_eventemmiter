// Referencio la clase de EventEmmiter, que es el paquete 'events'
const EventEmmiter = require('events');
// Creo una instancia de obj EventEmmiter
const eventEmmiter = new EventEmmiter();


// Declaro mis callbacks
function callback1(param) {
    console.log('Evento 1 escuchado', param);
}

function callback2(param) {
    console.log('Evento 2 escuchado', param);
}

function callbackNeutro(param) {
    console.log('Evento Neutro escuchado', param);
}

function disparaEventos() {
    eventEmmiter.emit('evento1', 'OK');
    eventEmmiter.emit('evento2', 'OK 2');
}


// Me suscribo a eventos
eventEmmiter.on('evento1', callback1);
eventEmmiter.on('evento1', callbackNeutro);
eventEmmiter.on('evento2', callback2);

// Emito los eventos para disparar los callbacks
console.log('-----Primera llamada a eventos ------------->');
disparaEventos();

// Elimino el escuchador de un solo evento
eventEmmiter.off('evento1', callback1);

// Emito los eventos para disparar los callbacks (de nuevo)
console.log('----Segunda llamada llamada a eventos ------------->');
disparaEventos();