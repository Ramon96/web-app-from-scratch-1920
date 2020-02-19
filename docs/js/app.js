import { getData } from "./modules/getData.js";
import { removeDom } from "./modules/cleanDom.js";
import { createMatchNode } from "./modules/createNode.js";

init();


function init(){
    const mainElement = document.getElementsByTagName('main')[0];

    document.getElementById('searchSummoner').addEventListener('submit', (e) => {
        e.preventDefault(); 
        getData(document.getElementById('searchText').value)
            .then(function(data){
                data.forEach(match => {
                createMatchNode(match.time, "p", mainElement);
                console.log('hallo')
                })
            })



    // data.forEach(match => {
    //     // createMatchNode(match.time, "p", mainElement);
    //     console.log('hallo')
    // })
    });


    // while(mainElement.firstChild){
    //     mainElement.removeChild(mainElement.firstChild);
    // }

    // data.forEach(match => {
    //     createMatchNode(match.time, "p", mainElement);
    // })
}

// function createMatchNode(content, elementType, targetElement){
//     const element = document.createElement(elementType);
//     element.textContent = content;
//     targetElement.append(element)
// }




