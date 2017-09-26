//require twitter package
var Twitter = require('twitter')

var twitKey = require('./twitter_keys.js');


var apis = process.argv;

var client = new Twitter(twitKey);

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

        switch (twitKey) {
            case 'my-tweets':
                break;
        }

    });
}
