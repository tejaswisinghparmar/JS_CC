console.log("tsp" === 'tsp')

let score =100
let nane= "Sirius"
console.log(`The name of the player is ${nane} and the score is ${score}`)


let gameName = new String('SiriusBlack');

console.log(gameName[0]);              // S
console.log(gameName[-1]);             // undefined
console.log(gameName.at(-1));
console.log(gameName.toUpperCase());   // SIRIUSBLACK
console.log(gameName);                 // SiriusBlack

// Length
console.log(gameName.length);          // 11

// Character access
console.log(gameName.charAt(0));       // S
console.log(gameName.charAt(5));       // s
console.log(gameName.charAt(gameName.length - 1)); // k

// Finding characters
console.log(gameName.indexOf('S'));     // 0
console.log(gameName.indexOf('Black')); // 6
console.log(gameName.lastIndexOf('i')); // 3

// Checking contents
console.log(gameName.includes('Sirius')); // true
console.log(gameName.includes('Harry'));  // false
console.log(gameName.startsWith('Sirius')); // true
console.log(gameName.endsWith('Black'));    // true

// Changing case
console.log(gameName.toUpperCase()); // SIRIUSBLACK
console.log(gameName.toLowerCase()); // siriusblack

// Extracting parts
console.log(gameName.slice(0, 6));    // Sirius
console.log(gameName.slice(6));       // Black
console.log(gameName.slice(-5));      // Black
console.log(gameName.substring(0, 6)); // Sirius

// Replacing
console.log(gameName.replace('Black', 'Potter'));
console.log(gameName.replaceAll('i', 'I'));

// Splitting
console.log(gameName.split(''));      // each character
console.log(gameName.split('Black')); // ["Sirius", ""]

// Removing whitespace
let name = new String('   SiriusBlack   ');
console.log(name.trim());
console.log(name.trimStart());
console.log(name.trimEnd());

// Repeating
console.log(gameName.repeat(2));

// Concatenation
console.log(gameName.concat(' Potter'));

// Checking position
console.log(gameName.charCodeAt(0));

// Comparing
console.log(gameName === 'SiriusBlack'); // false
console.log(gameName == 'SiriusBlack');  // true