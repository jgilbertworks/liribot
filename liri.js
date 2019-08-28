//global variables

require("dotenv").config();

let keys = require('./keys');
let Spotify = require('node-spotify-api');
let Twitter = require('twitter');
let request = require('request');
let fs = require('fs')

// credentials
let spotify = new Spotify(keys.spotify);
let client = new Twitter(keys.twitter);

//terminal
let userInput = process.argv[2];
let userInfo = process.argv.slice(3).join(" ")

// spotify function()
function spotifyAPI(song) {

    spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
                if (err) {
                    return console.log('Error: ' + err);
                }

                let songInfo = data.tracks.items
                for (let i = 0; i < songInfo.length; i++) {

                    console.log(`Artist Inf: ${songInfo[i].artists[0].name}`)
                    console.log(`Song Info: ${songInfo[i].name}`)
                    console.log(`Preview Link: ${songInfo[i].external_urls.spotify}`)
                    console.log(`Album Info: ${songInfo[i].album.name}`)

                    // storing variables for cleaner appendFile syntax
                    let artist = songInfo[i].artists[0].name
                    let songName = songInfo[i].name
                    let link = songInfo[i].external_urls.spotify
                    let album = songInfo[i].album.name

                    fs.appendFile("log.txt", `${`\r`}Artist : ${artist}${`\r`}Song : ${songName}${`\r`}Link : ${link}${`\r`}Album : ${album}${`\r`}`, function (err) {
          if (err) console.log(err)

        })


      }
    });
  }

// Twitter function()
function twitterAPI() {
    var params = { screen_name: 'Billtoe' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
      let j = 0;
      if (!error) {

        console.log(`bill toe is in the house!Try again`)
        for (let i = 0; i < 20; i++) {

          j++
          console.log(`The tweet below was posted on ${tweets[i].created_at}`)
          console.log(`${j} ${tweets[i].text}`);


          let date = tweets[i].created_at

          let tweet = tweets[i].text
          fs.appendFile("log.txt", `${`\r`}The tweet below was posted on ${date}${'\r'}${tweet}${'\r'}`, function (err) {

          })
        }

      }
    });


  }
    // OMBD function()
    function omdb() {
    console.log(userInfo)
    userInfo = process.argv.slice(3).join("+")

    if (userInfo == "") {
      userInfo = "Mr.Nobody"
    }

    console.log(userInfo)
    request(`http://www.omdbapi.com/?t=${userInfo}&y=&plot=short&apikey=trilogy`, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }

      let parsedData = JSON.parse(data.body)
      //   console.log(parsedData)
      console.log(`Movie Title : ${(parsedData.Title)} `)
      console.log(`Year Released : ${parsedData.Released}`)
      console.log(`IMDB Rating : ${parsedData.imdbRating} `)
      console.log(`Rotten Tomatoes Rating : ${parsedData.Ratings[1].Value} `)
      console.log(`The movie was produced in ${parsedData.Country}`)
      console.log(`The language of the movie is in ${parsedData.Language} `)
      console.log(`Plot : ${parsedData.Plot}`)
      console.log(`Actors : ${parsedData.Actors}`)

      let movieTitle = parsedData.Title
      let yearReleased = parsedData.Released
      let imdbRating = parsedData.imdbRating
      let tomatoesRating = parsedData.Ratings[1].Value
      let region = parsedData.Country
      let language = parsedData.Language
      let moviePlot = parsedData.Plot
      let actors = parsedData.Actors

      fs.appendFile("log.txt", `${`\r`}Movie Title : ${movieTitle}${`\r`}Year Released : ${yearReleased}${`\r`}IMDB Rating : ${imdbRating}${`\r`}Rotten Tomatoes Rating : ${tomatoesRating}${`\r`}Country Produced : ${region}${`\r`}Language : ${language}${`\r`}Plot : ${moviePlot}${`\r`}Actors : ${actors}${`\r`}`, function (err) {
        if (err) console.log(err)

      })


    });

  }

  function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
      let datasplit = data.split(",")
      callSpotify(datasplit[1])
    })
  }


  // Commands to call liri & corresponding functions
  if (userInput === "spotify-this-song") {
    if (userInfo) {
        spotifyAPI(userInfo);
    } else {
        spotifyAPI("The Sign Ace of Base");
    }
  } else if (userInput === "movie-this") {
    omdb()
  } else if (userInput === "do-what-it-says") {
    doWhatItSays()
  } else if (userInput === "my-tweets") {
    twitterAPI()
  }