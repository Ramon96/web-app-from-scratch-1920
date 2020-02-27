import {
    convertTimestamp
} from "./convertTime.js";
import {
    fetchSummoner
} from "./helpers/fetchSummoner.js";
import {
    fetchMatchHistory
} from "./helpers/fetchMatchHistory.js";
import {
    fetchMatchDetails
} from "./helpers/fetchMatchDetails.js";


//retrieves and cleans the data by league of legends summoner ID
async function getDataMH(name) {
    // incase of 403, it may be that the key has been expired (24 hours)
    const apiKey = "RGAPI-45100875-d616-4769-b33e-4c6ac48ab89b";
    const cors = "https://cors-anywhere.herokuapp.com/";
    const api = "https://euw1.api.riotgames.com/lol/";

    const summonerInformation = await fetchSummoner(cors, api, apiKey, name);
    const matchHistory = await fetchMatchHistory(summonerInformation, cors, api, apiKey);
    const cleanData = cleanUp(matchHistory)

    return cleanData;
}


function cleanUp(matchHistory) {
    return matchHistory.matches.map(key => {
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

async function getDataMD(gameKey, username) {
    const apiKey = "RGAPI-45100875-d616-4769-b33e-4c6ac48ab89b";
    const cors = "https://cors-anywhere.herokuapp.com/";
    const api = "https://euw1.api.riotgames.com/lol/";

    const matchDetail = await fetchMatchDetails(gameKey, cors, api, apiKey);
    const personalDetail = personalMatchInfo(matchDetail, username)
    return personalDetail;
}

function personalMatchInfo(MatchDetail, username) {
    const participantID = MatchDetail.participantIdentities
        .find(user => {
            if (user.player.summonerName.toLowerCase() == username.toLowerCase()) {
                return user;
            }
        }).participantId

    const participantStats = MatchDetail.participants.find(key => {
        if(key.participantId == participantID){
            return key;
        }
    })

    const mode = MatchDetail.gameMode;
    return transformStats(participantStats.stats, mode, participantStats.championId);    
}

function transformStats(stats, mode, championId){
   return {
        win: stats.win ? 'Victory' : 'Defeat',
        kills: stats.kills,
        deaths: stats.deaths,
        dmg: stats.totalDamageDealtToChampions,
        vision: stats.visionScore,
        farm: stats.totalMinionsKilled,
        gamemode: mode,
        champion: championId
    }
}

const getData = {
    MatchHistory: getDataMH,
    MatchDetail: getDataMD
}

export {
    getData
}