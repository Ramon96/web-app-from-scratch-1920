<!-- Add a link to your live demo in Github Pages 🌐-->
## Live Demo 
https://ramon96.github.io/web-app-from-scratch-1920/
<!-- ☝️ replace this description with a description of your own work -->
## Description
This wafs project makes use the api from the Video game league of legends. You can search a player from the EUW server and finds this persons match history
<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->
![Search Screen](https://github.com/Ramon96/web-app-from-scratch-1920/blob/master/docs/img/ui/preview.png)
<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->
## Table of content
<!-- How about a section that describes how to install this project? 🤓 -->
## Installation 
Use the command \
`https://github.com/Ramon96/web-app-from-scratch-1920.git`\
To clone the project locally.
<!-- ...but how does one use this project? What are its features 🤔 -->
## Concept

## Actor Diagram

## Interaction Diagram

## The API
Im made use of the league of legends api.
The api is great, I can get alot of information with it. Way more than I anticipated. 
The problem I had was that my key was only active for 24 hours. After those 24 hours I had to request a new one. 
A work around for that is to get manually aproved wich takes alot of time. 

In order to Fetch any information about a player you are in need of a Encrypted user id wich you can retrieve from one of the endpoints. 
I used this key to get the Match history of the chosen player and get the data per match. 

Player endpoint
`summoner/v4/summoners/by-name/${name}`

Match history endpoint
`/match/v4/matchlists/by-account/${summonerData.accountId}`

Match end point
`match/v4/matches/${gameKey}`

<!-- What external data source is featured in your project and what are its properties 🌠 -->
## Data Dragon
League of legends also provides a Data dragon.
What is this? 
Its a resource pack that has all of its assets free to use. It also includes a json file that has more specifiek information about the champions which [I used](https://github.com/Ramon96/web-app-from-scratch-1920/blob/master/docs/js/modules/champion.json) to replace the ID's with actual champion names.

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->
## Features
[x] Search a summoner in EUW
[x] View the match Details
[x] Filter the data

## Wish list
[ ] providing character images
[ ] Giving more detailed Match details (with assets) 
[ ] Storing the Fetches in the local storage
[ ] Refactoring the code to make the code more functional
[ ] Pagination
[ ] Using the other possible end points to create even more features (the possibilities really are endless with the right mindset)

My wish list should be called "Upcoming features". I realy had alot of fun And I defenitly plan on working on this project after the grading. This excercise has opened a comepletly new world for me and im just too passionated to keep on working on it. Im just a little bit sad that I got sick during this subject because there was alot more that I wanted to get done in its time frame. That being said Im really proud what I managed to accomplish and im defenitly not dissapointed. 

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
## Acknowledgements
Tomas stolp for helping me out with the [createElement()](https://github.com/Ramon96/web-app-from-scratch-1920/blob/master/docs/js/modules/createNode.js) function. 

## License
[License MIT Ramon Meijers 2020](https://github.com/Ramon96/web-app-from-scratch-1920/blob/master/LICENSE)
