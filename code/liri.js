// central application file

require("dotenv").config();

// includes
var omdb = require("./omdb");
var spotify = require("./spotify");
var dowhat = require("./dowhat");
var bands = require("./bands");  // no API key

// define cli Inputs
var comm = process.argv[2];
var arg1 = process.argv[3];
// var arg2 = process.argv[4]; // future use for extended functionality
var results;


switch(comm) {

    case "spotify-this-song":
        results = spotify.doSpotify(arg1);
        break;

    case "movie-this":
        results = omdb.doOmdb(arg1); 
        break;

    case "concert-this":
        results = bands.doBands(arg1);
        break;

    case "do-what-it-says":
        results = dowhat.doStuff();

        // find the song
        array = results.split(",");

        // pass the song to Spotify
        spotify.doSpotify(array[1]);
        break;
    
    default:
        console.log("command not recognized");
        break;

}