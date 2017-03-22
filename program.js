
var fs = require('fs');


var a = fs.readFile(process.argv[2], function(err, data){
    var answer = data.toString().split('\n').length-1;
    console.log(answer);
})
