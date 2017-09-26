//requiring all my packages
var spotifyWebApi = require('node-spotify-api');
var request = require('request');
var fs = require('fs');

//pulling the keys in from a separate and requiring them
var spotKey = require('./spotify_keys.js');
var spot = new spotifyWebApi(spotKey);
//setting argument 2 in the terminal to "spotify this song "
if (process.argv[2] == 'spotify-this-song' || 's') {

  


// for loop to concatinate arguments
var myInput = '';

if (process.argv.length > 2) {
    for (var j = 3; j < process.argv.length; j++) {
        myInput += (process.argv[j] + "+")
    }
}
//creating a variable for the user so they can input a song
        // var song = myInput;

//part of the access token and authorization pulled from docs


spot.search({ type: 'track', query: myInput }, function(err, data) {
 if (err) {
   return console.log('Error occurred: ' + err);
 }

console.log(data.tracks.items[0].name); 
console.log(data.tracks.items[0].artists[0].external_urls.spotify);
console.log(data.tracks.items[0].artists[0].name);
console.log(data.tracks.items[0].album.name);
});
// function cases (argument, myInput) {
// switch (argument) {
//     case 'spotify-this-song':
//         spotifyIt(song)
//         break;
// }
// }
};

//switch statement calling the argument
// function cases (argument, myInput) {
//     switch (argument) {
//         //replaces if
//         case "spotify-this-song":
//         case 's':
//             break;
//         //replaces else
//             console.log("Input Failed")
    
//     }
// }
// cases(process.argv[2]);
        
        