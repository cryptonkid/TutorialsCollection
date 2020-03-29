const fs = require('fs')
const utils = require('./utils.js')
const notes = require('./notes.js')
const validator = require('validator')

//fs.writeFileSync('notes.txt','Data to be written in the file.')
fs.appendFileSync('notes.txt','append connent');
console.log('2 + 3 =',utils.add(2,3))

fs.appendFileSync('notes.txt',utils.getContent())

console.log(notes.getNotes())

console.log("is foo@bar.com a valid emailId", validator.isEmail("foo@bar.com"))
console.log("is foo.com is a valid emailId", validator.isEmail("foo.com"))

console.log(notes.getHelloWorld())
console.log(validator.default.isEmail('hello@gmail.com') ) //note how without default it is not working 
//console.log(validator.//autocomplete should come.//https://www.npmjs.com/package/validator)