var spotify = require('spotify-web-api-node');

var fs = require('fs');

var spotKey = require('./spotify_keys.js');

if (process.argv[2] == 'spotify-this-song') {
    var spot = new spotifyApi(spotKey)({
        id: '3fc8e5bdbf2648b29915ce623d165209',
        secret: 'e77709445f0b4610b2607d319c7c76c4'
    });
};
  

        spotifyApi.clientCredentialsGrant()

            .then(function (data) {

                spotifyApi.setAccessToken(data.body['access_token']);
            }),
            function (err) {

            };

        var song = process.argv[3];

        function spotifyIt(input) {

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
        