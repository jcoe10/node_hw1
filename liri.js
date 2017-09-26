//require all of our packages and files
var request = require('request');

var spotify = require('node-spotify-api');

var Twitter = require('twitter')


var keys = require('./keys.js');


var apis = process.argv;

var client = new Twitter(keys);

var params = {
    screen_name: 'jacobecoe',
    count: 20
};

if (process.argv[2] == 'my-tweets') {
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (error) {
            console.log(error);
        }

        if (!error) {
            for (var i = 0; i < 20; i++) {
                console.log(tweets[i].text);
            }
        }

        switch (keys) {
            case 'my-tweets':
            case 'spotify-this-song':
                // case 'movie-this':
                break;
        }

    });
}
var Spotify = require('spotify-web-api-node');

var spotify = new SpotifyWebApi({
    id: '3fc8e5bdbf2648b29915ce623d165209',
    secret: 'e77709445f0b4610b2607d319c7c76c4'
});

var song = process.argv[3];

function spotifyIt (song){



}
spotify.search({
    type: 'track',
    query: 'All the Small Things'
}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});