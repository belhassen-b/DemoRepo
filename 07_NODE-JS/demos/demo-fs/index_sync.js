const fs = require('fs')

// Démo Node js fs (Sync Read)

// let in_data = fs.readFileSync('./fn_input.txt');

// console.log('Sync input file content : ' + in_data);

// console.log("Program Ended")

// Demo Node.js – fs (Sync Write)

let out_data = 'Output line 1.\r\nOutput line 2.\r\nOutput line 3.\r\n';

fs.writeFileSync('./sync_output.txt', out_data); // écriture d'un fichier txt avec le contenu de ma variable out_data
console.log ('Sync output file content : ' + out_data); // affichage console d'un message et de ma variable out_data
console.log ('Sync output file content : ' + fs.readFileSync('./sync_output.txt')); // résultat identique mais avec lecture 
// du fichier sync_output.txt pour verifier la bonne création du fichier avec son contenu (ligne 15)


console.log("Program Ended")