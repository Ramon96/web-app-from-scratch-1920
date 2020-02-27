import { removeDom } from "./cleanDom.js";
import { nodeElement } from "./createComponent.js";

function showSelected(selected, champions, username){
    const filtered = champions.filter(obj => {
        if(obj == selected){
            return true;
        }
    })
    removeDom( document.querySelector("main"));
    filtered.forEach(match => { 
        nodeElement.Overview(match, username);
    })
}

export { showSelected };