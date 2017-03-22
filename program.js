
var fs = require('fs');

var a = fs.readFileSync(process.argv[2]).toString();
var result = 0;

for(var i =0; i < a.length; i++){
    if(a[i] == "\n"){
        result++ ;
    }
}
console.log(result);