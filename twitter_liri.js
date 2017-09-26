//require twitter package
var Twitter = require('twitter');
//require twitter keys
var twitKey = require('./twitter_keys.js');

//argument variable
var apis = process.argv;

var client = new Twitter(twitKey);
//user input for username and number of tweets pulled from their profile
var params = {
    screen_name: 'jacobecoe',
    count: 20
};

//setting argument 2 to my tweets or t and what the client gets with parameters
if (process.argv[2] == 'my-tweets' || "t") {
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
//if there is an error show it 
        if (error) {
            console.log(error);
        }
//if no error print the tweets to the terminal
        if (!error) {
            for (var i = 0; i < 20; i++) {
                console.log(tweets[i].text);
            }
        }
//switch statement calling the argument 
        switch (twitKey) {
            case 'my-tweets':
            case 't':
                break;
        }

    });
}
