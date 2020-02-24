import {createMatchNode} from "./createNode.js";

function overview(matchDetails){
    const container = createMatchNode("", "div", document.querySelector("main"));
    const title  = createMatchNode("Champion ID: " + matchDetails.championId, "h2", container);
    const date = createMatchNode("Played: " + matchDetails.time, "p", container);
    const lane = createMatchNode("Lane: " + matchDetails.lane, "p", container);

    return container;
}

function detail(matchId){

}

const nodeElement = {
    Overview: overview,
    Detail: detail
}

export {nodeElement};