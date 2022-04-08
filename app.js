/* app.js */

const { circleArea, squareArea } = require('./shape-area.js');

var funcoes = { 
    circleArea, squareArea
};

const circleAreaInput = process.argv[2];
const squareAreaInput = process.argv[3];
console.log(funcoes.circleArea(circleAreaInput).toFixed(2));
console.log(funcoes.squareArea(squareAreaInput));

