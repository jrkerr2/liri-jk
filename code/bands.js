var bandsintown = require("bandsintown")(APP_ID);

bandsintown
    .getArtistEventList("Van Halen")
    .then(function(events) {

        // returns array of events

    });