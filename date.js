var dateFormat = require('dateformat');
var now = new Date()
var datetime = dateFormat(now, "dd mmmm yyyy, HH:MM:ss");
console.log(now);
console.log(datetime);