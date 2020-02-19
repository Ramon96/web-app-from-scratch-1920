import { getData } from "./modules/getData.js";
import { removeDom } from "./modules/cleanDom.js";
import { createMatchNode } from "./modules/createNode.js";

init();


function init(){
    document.getElementById('searchSummoner').addEventListener('submit', (e) => {
        e.preventDefault(); 
        getData(document.getElementById('searchText').value)
            .then(function(data){
                removeDom(document.getElementsByTagName('main')[0]);
                data.forEach(match => {
                createMatchNode(match.time, "p", document.getElementsByTagName('main')[0]);
                })
            })
    });

}




