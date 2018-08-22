## Welcome to LIRI: Language Interpretation and Recognition Interface ##
Description: LIRI is a server-side Node.js application used via a command line interface; LIRI will accept commands and arguments and return data

## Installation 
 - git clone this branch to your local machine
 - `vagrant up` to bring up virtual server (see vm doc for further info)
 - `vagrant ssh` to login to virtual server
 - `cd /var/code`
 - verify package.json exists
 - `npm install`
 - verify node_modules exists
 - verify node_modules contains package.json ingredients

## Using LIRI
 - basic syntax (from VM command line): `node liri.js` `<command>` `<arg>`
 - example1: `node liri.js movie-this "Die Hard"`
 - example2: `node liri.js spotify-this-song jump`
 - example3: `node liri.js concert-this "van halen"`
 - NOTE: search strings using more than one word require quotes encapsulating the argument
 - available commands: `movie-this`, `spotify-this-song`, `concert-this`*, `do-what-it-says`

## VM NOTE
If using the virtual machines(VMs), please see vagrantREADME.md

## TA Notes & Technical Debt
 - *no reply to request for API Key from "Bandsintown" -- `concert-this` will (for now) return a disclaimer
 - dummy doBands export function set up with skeleton of api use in comments
 - spotify.js URL return significance is unknown (will update if needed)
 - dowhat.js can and should be extended, but meets MVP
 - omdb.js should be improved; current functionality returns only 1 result
 - liri.js arguments now require quotes to capture multiple words in a string; this can be improved
 - omdb.js 'Rotten Tomatoes' requirement is partially met; result yet to be fully parsed / parsed properly for presentation
 - still missing "The Sign" Spotify default case