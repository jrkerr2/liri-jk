// main application file

require("dotenv").config();
var keys = require("./keys");
var request = require("request");
var fs = require("fs");
var omdb = require("omdb");

// spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
// var spotify = keys.spotify;
console.log(keys.spotify);


// define cli Inputs
var comm = process.argv[2];
var arg1 = process.argv[3];
var arg2 = process.argv[4];
var results;


switch(comm) {

    case "spotify-this-song":
        results = doSpotify(arg1,arg2);
        console.log(results);
        break;


    case "movie-this":
        results = doOmdb(arg1,arg2); 
        console.log(results);
        break;

    case "concert-this":
        results = doBands(arg1,arg2);
        console.log(results);
        break;

    case "do-what-it-says":
        results = doStuff();
        console.log(results);
        break;
    
    default:
        console.log("command not recognized");
        break;

}

function doSpotify(arg1,arg2) {
    console.log("made it to Spotify");
    results = arg1+arg2;
    return(results);

}

function doOmdb(arg1,arg2) {
    console.log("made it to OMDB");
    results = arg1+arg2;
    return(results);

}

function doBands(arg1,arg2) {
    console.log("made it to Bands");
    results = arg1+arg2;
    return(results);

}

function doStuff() {
    console.log("what it says");
    results = "stuff";
    return(results);

}

