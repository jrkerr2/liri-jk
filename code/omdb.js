// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    for (var key in JSON.parse(body)) {
      if (key == "Title" || key == "Year" || key == "imdbRating" || key == "Ratings[1]" 
          || key == "Country" || key == "Language" || key == "Plot" || key == "Actors") {
        console.log(key,": " + JSON.parse(body)[key]);
        // console.log(JSON.parse(body)[key]);
      }
        
    
    };
    // console.log(JSON.parse(body).Title);
    // console.log(JSON.parse(body).Year);
    // console.log(JSON.parse(body).imdbRating);
    console.log(JSON.parse(body).Ratings[1]);
    // console.log(JSON.parse(body).Title);
    
    
  }
});
