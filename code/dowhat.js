var fs = require("fs");

exports.doStuff = function() {
    
    data = fs.readFileSync("random.txt", "utf-8")
    console.log("data from DoWhat.JS: " + data);
    return data;

}
