const franc = require('franc');
const langs = require('langs')
const colors = require('colors');
// console.dir(franc);
// console.dir(langs);

// langs.where("3", "kor");
// RETURNS OBJECT // {"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}
// und = undefined

const msg = process.argv[2] 
// console.log(msg)
const langCode = franc(msg)
console.log(langCode);



if (langCode === 'und'){
  console.log("SORRY, CAN NOT COMPUTE! MORE SAMPLE TEXT PLEASE".yellow)
} else {
  const detectLang = langs.where("3", langCode);
  console.log(`WE DETECT THIS IS: ${detectLang.name}`.red)
};

