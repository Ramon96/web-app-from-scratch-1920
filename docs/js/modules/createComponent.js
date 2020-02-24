import {createMatchNode} from "./createNode.js";

function overview(matchDetails){
    const container = createMatchNode("", "div", document.querySelector("main"));
    const content  = createMatchNode(matchDetails.time, "p", container);

    return container;
}

function detail(matchId){

}

const nodeElement = {
    Overview: overview,
    Detail: detail
}

export {nodeElement};