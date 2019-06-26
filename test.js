/*
Run this with `node test.js` at terminal.
*/
var momentContext = {
    start: 20,
    end: 25,
    tags: [{
        key: 'Player',
        value: 'John Smith'
    }]
};
 
// Clone git@github.com:mozilla/mozjexl.git and update this path.  `node test.js` will work then.
var jexl = require('./lib/Jexl.js');

var hudlJexl = new jexl.Jexl();

//hudlJexl.addBinaryOp('is within 5 of', 20, (left, right) => Math.abs(left - right) <= 5 );

hudlJexl.addUnaryOp('count the ', (tags) => tags.length);

// Outputs true
var result = hudlJexl.evalSync("count the tags", momentContext);

console.log(result);