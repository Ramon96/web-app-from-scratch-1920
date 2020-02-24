import { convertTimestamp } from "./convertTime.js";
import { fetchSummoner } from "./helpers/fetchSummoner.js";
import { fetchMatchHistory } from "./helpers/fetchMatchHistory.js";



//retrieves and cleans the data by league of legends summoner ID
async function getData(name){
//     // incase of 403, it may be that the key has been expired (24 hours)
    const apiKey = "RGAPI-45100875-d616-4769-b33e-4c6ac48ab89b";
    const url = `https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`;


    const summonerInformation = await fetchSummoner(url);
    const matchHistory = await fetchMatchHistory(summonerInformation, apiKey);
    const cleanData = cleanUp(matchHistory)
    console.log(matchHistory);
    // console.log(JSON.stringify(cleanData, 4, null))
    return cleanData;
}


function cleanUp(matchHistory){
    return matchHistory.matches.map(key =>{
        return {
            region: key.platformId,
            championId: key.champion,
            time: convertTimestamp(key.timestamp),
            lane: key.lane,
            premade: key.role,
            queue: key.queue, 
            season: key.season,
            gameKey: key.gameId
        }   
    })
}



export {getData} 