const fs =require('fs');
//reading files
// fs.readFile('./doc/note.txt' , (err, data) => {
//         if (err) { console.log(err); }
//         console.log(data.toString());
//     });

// fs.readFile('./doc/noteNew.txt' , (err, data) => {
//     if (err) { console.log(err); }
//     console.log(data.toString());
// });


//writing files
// fs.writeFile('./doc/note.txt' , 'I love Jordan' ,() => {
//     console.log('file was written');
// });
// fs.writeFile('./doc/noteNew.txt' , 'Raghad Sami' ,() => {
//     console.log('file was written');
// });


// directories create and delet
if (!fs.existsSync('./assets')){
fs.mkdir('./assets',(err)=>{
    if (err){console.log(err)}
    console.log('create folder');
});
}
else {
    fs.rmdir('./assets' , (err)=>{
        if (err) {console.log(err);} 
    console.log('folder deleted');

})
}


//deleting file

if (fs.existsSync('./doc/delete.txt')){
 fs.unlink('./doc/delete.txt', (err)=>{
    if (err) {console.log(err)} 
    console.log('file deleted')
})
}