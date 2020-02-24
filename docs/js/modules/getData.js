import { convertTimestamp } from "./convertTime.js";
import { fetchSummoner } from "./helpers/fetchSummoner.js";
import { fetchMatchHistory } from "./helpers/fetchMatchHistory.js";

//retrieves and cleans the data by league of legends summoner ID
async function getData(name){
//     // incase of 403, it may be that the key has been expired (24 hours)
    const apiKey = "RGAPI-b454aa23-b8b5-4284-80a0-a93007b60d6c";
    const url = `https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`;


    const summonerInformation = await fetchSummoner(url);
    const matchHistory = await fetchMatchHistory(summonerInformation, apiKey);
    const cleanData = cleanUp(matchHistory)
    console.log(cleanData);
    return cleanData;
}


function cleanUp(matchHistory){
    return matchHistory.matches.map(key =>{
        return {
            region: key.platformId,
            championId: key.champion,
            time: convertTimestamp(key.timestamp, key.platformId),
            lane: key.lane,
            premade: key.role,
            queue: key.queue, 
            season: key.season
        }   
    })
}



export {getData} 