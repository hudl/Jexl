
const jexl = require("./lib/Jexl.js")

var hudlJexl = new jexl.Jexl();

var moment = {
  start: 20,
  end: 25
};

jexl.addBinaryOp('~=', 20,
                       (left, right) => Math.abs(left - right) <= 5 );

// Outputs true
var result = jexl.evalSync("start ~= end", moment);

console.log(result);
