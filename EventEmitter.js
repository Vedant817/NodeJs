const EventEmitter = require('events')
const CustomEmitter = new EventEmitter()
CustomEmitter.on('response',()=>{
    console.log(`Data Received`)
})
CustomEmitter.emit('response')
//! Here the order of event matters and number of times we create on state it will execute.
