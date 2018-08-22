var fs = require("fs");

exports.doStuff = function() {
    // export: readfile data, return to liri.js
    data = fs.readFileSync("random.txt", "utf-8")
    return data;

}
