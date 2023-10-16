const fs=require('fs');
const path=require('path');
const dir_path=path.join(__dirname,'Files')

const file_path=`${dir_path}/xyz.txt`;
fs.writeFileSync(file_path,"Demo Operation fr File System.")

fs.readFile(file_path,'utf8',(error,item)=>{
    console.log(item) //! Will Print the buffer in absence of utf8.
})

fs.appendFile(file_path,'Hello This is append function.',(error)=>{
    if(!error){
        console.log("File is Appended.")
    }
})
//! Buffer is the temporary memory used by Nodejs.
