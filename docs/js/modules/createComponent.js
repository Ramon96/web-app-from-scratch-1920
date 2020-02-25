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

}

const nodeElement = {
    Overview: overview,
    Detail: detail
}

export {nodeElement};