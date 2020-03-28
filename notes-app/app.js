const fs = require('fs')
const utils = require('./utils.js')
const notes = require('./notes.js')


//fs.writeFileSync('notes.txt','Data to be written in the file.')
fs.appendFileSync('notes.txt','append connent');
console.log('2 + 3 =',utils.add(2,3))

fs.appendFileSync('notes.txt',utils.getContent())

console.log(notes.getNotes())