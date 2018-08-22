var Spotify = require("node-spotify-api");
require("dotenv").config();
var keys = require("./keys");

// console.log(keys);
console.log("Before spotify call 7");
// console.log(keys.spotify.id, keys.spotify.secret);

// Spotify call
var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret,

  });

// console.log(keys.spotify.id);
console.log("Made it through Spotify declaration");

exports.doSpotify = function(song) {
  console.log("This is the song: " + song);
  spotify.search({ type: 'track', query: song, limit: '1' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

 
  // console.log(JSON.stringify(data.tracks.items)); 

  console.log(data.tracks.items[0].album.artists[0].name);
  console.log(data.tracks.items[0].album.artists[0].external_urls);
  console.log(data.tracks.items[0].album.name);

  });
}