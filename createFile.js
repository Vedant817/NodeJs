// const fs=require('fs');
// const input=process.argv;
// fs.writeFileSync(input[2],input[3])
//* Use unlinkSync to remove the file.

const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'Files')
for(i=0;i<=4;i++){
    fs.writeFileSync(dirPath+'/apple'+i+'.txt','This is a simple file.')
}

// Code for printing the list of files.
fs.readdir(dirPath,(error,files)=>{ // Files will print an array of the same and to print them individually use forEach function.
    files.forEach((item)=>{
        console.log(item)
    })
})
