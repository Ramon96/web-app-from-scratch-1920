import { convertTimestamp } from "./convertTime.js";
import { fetchSummoner } from "./helpers/fetchSummoner.js";

//retrieves and cleans the data by league of legends summoner ID
async function getData(name){
//     // incase of 403, it may be that the key has been expired (24 hours)
    const apiKey = "RGAPI-15f7de9a-03b3-4b8f-b641-a09bd8e8b0a4";
    const url = `https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`;
//     // cors "https://cors-anywhere.herokuapp.com/"
//      fetch(`https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`)
//              .then((res) => {
//             return res.json();
//         })
//         .then((json) => {
//             return json;
//         })
//         .then(function(data){
//             fetch(`https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/${data.accountId}?api_key=${apiKey}`)
//                 .then(function(res){
//                     return res.json();
//                 })
//                 .then(function(json){
//                     return json.matches.map(key => {
//                         return {
//                             region: key.platformId,
//                             championId: key.champion,
//                             time: convertTimestamp(key.timestamp, key.platformId),
//                             lane: key.lane,
//                             premade: key.role,
//                             queue: key.queue,
//                             season: key.season
//                         }
//                     })
//                 })
//                 .then((results) => {
//                     return results;
//                 })
//         })
//         .catch(err => console.log(err))

    const summonerInformation = await fetchSummoner(url, apiKey);
    const results = matchHistory(summonerInformation);
}


function matchHistory(summonerData){
    console.log(summonerData);
}

export {getData} 