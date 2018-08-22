// SPOTIFY portion of LIRI.JS

var Spotify = require("node-spotify-api");
require("dotenv").config();
var keys = require("./keys");

// create spotify variable for use with node-spotify-api package
// .env file should contain *private* keys; should be ignored by Git and not stored publicly
var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret,

  });

// query Spotify, wrap in a function for export to liri.js
exports.doSpotify = function(song) {
  console.log("This is the song you entered: " + song);
  spotify.search({ type: 'track', query: song, limit: '3' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
 
  console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name);
  console.log(data.tracks.items[0].album.artists[0].external_urls);
  console.log("Album: " + data.tracks.items[0].album.name);

  });
}