// import  Routie   from "./modules/helpers/routie.js";
import { getData } from "./modules/getData.js";
import { removeDom } from "./modules/cleanDom.js";
import { nodeElement } from "./modules/createComponent.js";
// import { fakeData } from "./modules/dummyData.js";


init();
// console.log(Route)

function init(){
    document.getElementById('searchSummoner').addEventListener('submit', (e) => {
        e.preventDefault(); 
        getData(document.getElementById('searchText').value)
            .then(function(data){
                removeDom(document.getElementsByTagName('main')[0]);
                data.forEach(match => {
                    nodeElement.Overview(match)
                    // createMatchNode(match.time, "p", document.getElementsByTagName('main')[0]);
                    // createMatchNode(match, "div", document.getElementsByTagName('main')[0]);
                })
            })
    });

    // Routie.Route({
    //     'lol' : function() {
    //         console.log("lol ik ben op de home")
    //     }
    // })
}




