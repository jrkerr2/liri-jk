// requirements to run omdb.js
var request = require("request");
// var movie = "Die Hard";
// var movieKey = "trilogy"

// wrap OMDB request in exported function (for later use by liri.js)
exports.doOmdb = function(movie) {
  request(`http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=trilogy`, function(error, response, body) {

    // If the request is successful (response status code = 200)
    if (!error && response.statusCode === 200) {

      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      for (var key in JSON.parse(body)) {
        if (key == "Title" || key == "Year" || key == "imdbRating"
            || key == "Country" || key == "Language" || key == "Plot" || key == "Actors") {
          console.log(key,": " + JSON.parse(body)[key]);
          // console.log(JSON.parse(body)[key]);
            }
        else if (key == "Ratings") {
          console.log(JSON.parse(body).Ratings[1]);
          // console.log(key,": " + JSON.parse(body)[key][1]);
        }
        
          
      
      };
      // console.log(JSON.parse(body).Title);
      // console.log(JSON.parse(body).Year);
      // console.log(JSON.parse(body).imdbRating);
      
      // console.log(JSON.parse(body).Title);
      
      
    }
  });
}
