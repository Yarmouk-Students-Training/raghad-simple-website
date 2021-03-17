 console.log(global);

<<<<<<< HEAD
  global.setTimeout(() => {
      console.log('in the timeout');
      clearInterval(int);
  }, 3000);

  const int = setInterval(() => {
     console.log('in interval');
  }, 1000 );
console.log(__dirname);
console.log(__filename);
 
=======
 global.setTimeout(() => {
     console.log('in the timeout');
     clearInterval(int);
 }, 3000);

 const int = setInterval(() => {
    console.log('in interval');
 }, 1000 );
 
>>>>>>> 4e3dd5792eb5f455a1b849bab9ce4e5a977bf611
