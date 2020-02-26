import {createMatchNode} from "./createNode.js";

function overview(matchDetails, username){
    const container = createMatchNode("", "div", document.querySelector("main"));
    const title  = createMatchNode("Champion ID: " + matchDetails.championId, "h3", container);
    const date = createMatchNode("Played: " + matchDetails.time, "p", container);
    const lane = createMatchNode("Lane: " + matchDetails.lane, "p", container);
    const gameId = createMatchNode("Match details", "a" ,container, matchDetails.gameKey + "/" + username);

    return container;
}

function detail(matchData){
    const container = createMatchNode("", "span", document.querySelector("main"));
    const champion = createMatchNode("Champion: " + matchData.champion, "h2", container);
    const kills = createMatchNode("Kills: " + matchData.kills, "p", container);
    const death = createMatchNode("Deaths: " + matchData.deaths, "p", container);
    const dmg = createMatchNode("Dammage dealt: " + matchData.dmg, "p", container);
    const vision = createMatchNode("Vision score: " + matchData.vision, "p", container);
    const farm = createMatchNode("Creep score: " + matchData.farm, "p", container);
}

const nodeElement = {
    Overview: overview,
    Detail: detail
}

export {nodeElement};