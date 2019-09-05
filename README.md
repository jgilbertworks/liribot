# Liribot

## Table of Contents 

## Objective 

In this assignment, you will make LIRI. LIRI is like iPhone’s SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

Make it so liri.js can take in one of the following commands:

my-tweets

spotify-this-song

movie-this

do-what-it-says

What Each Command Should Do

Twitter

will list the 5 most recent tweets from 'Bill toe96" user account. 

Artist(s)

The song’s name

A preview link of the song from Spotify

The album that the song is from

If no song is provided then your program will default to “The Sign” by Ace of Base.

You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

Step One: Visit https://developer.spotify.com/my-applications/#!/

Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you’d like for these fields. When finished, click the “complete” button.

Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you’ll need them to use the Spotify API and the node-spotify-api package.

node liri.js movie-this '<movie name here>'

This will output the following information to your terminal/bash window:
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
   
   ![movie-this](https://raw.github.com/jgilbertworks/liribot/tree/master/images/Screen Shot 2019-09-04 at 4.26.40 PM.png?raw=true "liribot")
   
If the user doesn’t type a movie in, the program will output data for the movie ‘Ghostbusters.’

If you haven’t watched “Ghostbusters,” then you should: http://www.imdb.com/title/tt0485947/

It’s on Netflix!

You’ll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.

node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI’s commands.

It should run spotify-this-song for “I Want it That Way,” as follows the text in random.txt.

Edit the text in random.txt to test out the feature for movie-this and concert-this.

BONUS
In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.

Make sure you append each command you run to the log.txt file.

Do not overwrite your file each time you run a command.

### Technologies
Back-End
- [ ] JavaScript
- [ ] Node.js
- [ ] NPM Packages
- [ ] Spotify API
- [ ] Twitter API


### Setup 
```
1. git clone https://github.com/jgilbertworks/liribot.git
2. cd liribot
3. npm install 
4. node liri.js spotify-this-song '<song name here>'
5. node liri.js movie-this '<movie name here>'
6. node liri.js my-tweets
7. node liri.js do-what-it-says
8. Review results in the log.txt file or console

```
### Requirements

- Must sign up for developer accouts for Twitter and Spotify to recieve API Keys.
