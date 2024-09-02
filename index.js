const version = require('@natalliasrd/node_1');
const calc = require('@natalliasrd/node_1/polishBackNotation');
const fs = require('fs');
const arrayCompare = require('./moduls/arrayCompare');

const pathToStringTasks = './info/stringTasks.txt';
const data = fs.readFileSync(pathToStringTasks, {encoding : 'utf8', flag : 'r'});
let dataToArray = data.split('\n');

let rezArray = [];
dataToArray.map(item => {
    let rez = calc(item);
    rezArray.push(rez);
    return rezArray;
})

const pathToStringResults = './info/stringRezults.txt';
const dataResults = fs.readFileSync(pathToStringResults, {encoding : 'utf8', flag : 'r'});
const dataResultsToArray = dataResults.split('\n').map(item => +item);
console.log(arrayCompare(dataResultsToArray, rezArray));
