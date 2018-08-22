// main application file

require("dotenv").config();

// includes
var omdb = require("./omdb");
var spotify = require("./spotify");
var dowhat = require("./dowhat");
var bands = require("./bands");  // no API key

// define cli Inputs
var comm = process.argv[2];
var arg1 = process.argv[3];
var arg2 = process.argv[4];
var results;


switch(comm) {

    case "spotify-this-song":
        results = spotify.doSpotify(arg1);
        console.log("got here");
        break;


    case "movie-this":
        results = omdb.doOmdb(arg1); 
        console.log(results);
        break;

    case "concert-this":
        results = bands.doBands(arg1);
        console.log(results);
        break;

    case "do-what-it-says":
        results = dowhat.doStuff();
        console.log("Liri DoWhat.JS Return: " + results);
        array = results.split(",");
        console.log(array);
        spotify.doSpotify(array[1]);
        break;
    
    default:
        console.log("command not recognized");
        break;

}