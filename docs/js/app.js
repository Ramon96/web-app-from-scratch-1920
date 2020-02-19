import { getData } from "./modules/getData.js";
import { removeDom } from "./modules/cleanDom.js";


// dit moet hier weg

// const form = document.getElementById('searchSummoner');
// const seachText = document.getElementById('searchText');
// incase of 403, it may be that the key has been expired (24 hours)
// const apiKey = "RGAPI-15f7de9a-03b3-4b8f-b641-a09bd8e8b0a4";
// const cors = "https://cors-anywhere.herokuapp.com/"


init();




// function getMatchesByName(name) {
//     fetch(`https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`)
//         .then((res) => {
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
//                     console.log(results);
//                     init(results);
//                 })
//         })
//         .catch(err => console.log(err))
// }

function init(data){
    const mainElement = document.getElementsByTagName('main')[0];

    document.getElementById('searchSummoner').addEventListener('submit', (e) => {
        event.preventDefault(); 
        // getData(document.getElementById('searchText').value);
        console.log(getData(document.getElementById('searchText').value));
    });


    // while(mainElement.firstChild){
    //     mainElement.removeChild(mainElement.firstChild);
    // }

    // data.forEach(match => {
    //     createMatchNode(match.time, "p", mainElement);
    // })
}

function createMatchNode(content, elementType, targetElement){
    const element = document.createElement(elementType);
    element.textContent = content;
    targetElement.append(element)
}

function convertTimestamp(timestamp, region){
    let timeDifference;
    switch(region){
        case "OC1":
            timeDifference = -46800
        break; 
        case "JP1": 
            timeDifference = -43200
            break;
        case "KR":
            timeDifference = -39600
            break;
        case "RU": 
            timeDifference = -28800
            break;
        case "EUN1": 
            timeDifference =- 21600
            break;
        case "TR1":
            timeDifference = -18000
            break;
        case "EUW1":
            timeDifference = -10800
            break;
        case "BR1":
            timeDifference = -3600
            break;
        case "LA2": 
            timeDifference = 0
            break;
        case "LA1": 
            timeDifference = 7200
            break;
        case "NA1": 
            timeDifference = 10800
            break;
        case "PH": 
            timeDifference = 43200
            break;
        case "ID1": 
            timeDifference = 43200
            break;
        case "VN": 
            timeDifference = 46800
            break;
        case "SG": 
            timeDifference = 50400
            break;
        case "TH": 
            timeDifference = 54000
            break;
        case "TW": 
            timeDifference =  57600
            break;
    }
        var humanReadable  = new Date(timestamp - timeDifference * 1000).toLocaleString();
        return humanReadable;
}


