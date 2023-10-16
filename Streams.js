//* These are used when we have to handle the streaming data.
// Read a file:
const{createReadStream}=require('fs')
const stream= new createReadStream('Fruits.txt',{
    encoding: 'utf8',
    highWaterMark: 90000,
})
stream.on('data',(dataT)=>{
    console.log(dataT);
})
stream.emit('data')
