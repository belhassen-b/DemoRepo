/**
 * Les Fonctions en Javascript
 */
// Ressources
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String

let chaine = "Bonjour, comment allez-vous?",
  str1 = "Bonjour, ",
  str2 = "comment ",
  str3 = "allez-vous?";


/**
 * charAt(index)
 * charCodeAt(index) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt 
 */

console.log(chaine.charAt(2)); // n
console.log(chaine.charCodeAt(8));
console.log(chaine[4]);

/**
 * concat()
 */

console.log(String.prototype.concat(str1, str2, str3));

/**
 * includes()
 */

console.log(chaine.includes('y'));

/**
 * endsWith()
 */

console.log(chaine.endsWith('e'));

/**
* indexOf()
*/

console.log(chaine.indexOf('o'));
/**
* lastIndexOf()
*/

console.log(chaine.lastIndexOf('o'));

/**
 * Match() https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match 
 */
 const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur commodo ullamcorper. Donec scelerisque quis risus et commodo. Mauris feugiat fringilla risus, efficitur sodales metus lacinia quis.' ;
 const regex = /[A-Z]/g;
 const found = paragraph.match(regex);
 
 console.table(found); // [ 'L','I', 'D','M']


/**
  * split()
  */

console.log(chaine.split(''));
console.log(chaine.split(' '));
console.log(chaine.split(','));


/**
 * array.reverse()
 */
var arrayChaine = chaine.split(',').reverse();
console.log(arrayChaine);


/**
 * join()
 */

// newChaine=arrayChaine.join('-');
console.log(arrayChaine.join('-'));
console.log(arrayChaine.join(' '));
console.log(arrayChaine.join(''));