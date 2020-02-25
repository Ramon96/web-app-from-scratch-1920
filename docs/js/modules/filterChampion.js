import { removeDom } from "./cleanDom.js";
import { nodeElement } from "./createComponent.js";

function showSelected(selected, matchHistory, username){
    const filtered = matchHistory.filter(obj => {
        if(obj.championId == selected){
            return true;
        }
    })
    removeDom( document.querySelector("main"));
    filtered.forEach(match => { 
        nodeElement.Overview(match, username);
    })
}

export { showSelected };