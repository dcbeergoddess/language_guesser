const franc = require('franc');
const langs = require('langs')
const colors = require('colors');
// console.dir(franc);
// console.dir(langs);

// langs.where("3", "kor");

const msg = process.argv[2] 
// console.log(msg)
const langCode = franc(msg)
console.log(langCode);

if (langCode === 'und'){
  console.log("SORRY, CAN NOT COMPUTE! MORE SAMPLE TEXT PLEASE".yellow)
} else {
  const detectLang = langs.where("3", langCode);
  console.log(`WE DETECT THIS IS: ${detectLang.name}`.red)
}


