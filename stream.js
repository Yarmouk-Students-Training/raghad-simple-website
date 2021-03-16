const fs =require('fs');

const readStream =fs.createReadStream('./doc/noteNew.txt');
const writeStream =fs.createWriteStream('./doc/noteNew.txt');


// readStream.on('data',(chunk) => {
//     console.log("--- new chunk");
//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK \n')
//     writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);