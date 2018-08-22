// main application file

require("dotenv").config();
// var keys = require("./keys");
// var request = require("request");
// var fs = require("fs");
var omdb = require("./omdb");
var spotify = require("./spotify");
var dowhat = require("./dowhat");

// spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
// var spotify = keys.spotify;
// console.log(keys.spotify);

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
        results = doBands(arg1, arg2);
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