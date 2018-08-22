// OMDB portion of LIRI.JS

// required to run omdb function
var request = require("request");

// wrap OMDB request in exported function (for later use by liri.js)
exports.doOmdb = function(movie) {
  request(`http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=trilogy`, function(error, response, body) {

    // If the request is successful (no error AND response status code = 200)
    if (!error && response.statusCode === 200) {

      // Parse the body of the response in JSON      
      for (var key in JSON.parse(body)) {

        // find keys we care about
        if (key == "Title" || key == "Year" || key == "imdbRating"
            || key == "Country" || key == "Language" || key == "Plot" || key == "Actors") {
          console.log(key,": " + JSON.parse(body)[key]);
          // console.log(JSON.parse(body)[key]);
            }
        else if (key == "Ratings") {
          console.log(JSON.parse(body).Ratings[1]);
          // console.log(key,": " + JSON.parse(body)[key][1]); // this is not yet working as expected
        }        
                
      };       
          
    }
  });
}
