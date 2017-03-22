//var a = process.argv.splice(2);
var a = process.argv;
var result = 0;

for (var i = 0; i < a.length; i++){
    var num = parseInt(a[i], 10);
    if(!isNaN(num)){
        result += num;
    }
}
console.log(result);