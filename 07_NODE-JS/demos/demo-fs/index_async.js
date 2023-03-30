const fs = require('fs')

// Démo Node js fs (Async Read)

// let in_data;

// fs.readFile('./fn_input.txt', function(err,data){
//     if (err) return console.error(err);
//     in_data = data;
//     console.log('Async input file content : '+ in_data);
// })

// console.log("Program Ended")


// Démo Node js fs (Async Write)

let out_data = 'Output line 1.\r\nOutput line 2.\r\nOutput line 3.\r\n';

fs.writeFile('./async_output.txt', out_data, function (err) {
    if (err) return console.error(err);
    console.log('Async output file content : '+ out_data);
})

console.log("Program Ended")


