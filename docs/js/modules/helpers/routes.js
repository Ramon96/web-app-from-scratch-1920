import { removeDom } from "../cleanDom.js";
import { getData } from "../getData.js";
import { preloader } from "./preloader.js";
import { nodeElement } from "../createComponent.js";
import { createFilter} from "../createFilter.js"
import  getChampion  from "../getChampion.js";


const Routes = {
    '': function(){
        // this is the home route
        document.getElementsByTagName('h2')[0].textContent = `If you don't play league of legends you can use my username: Yabby`;
    },
    'search/:username' : function(username){
        const main = document.getElementsByTagName('main')[0];
        const feedbackbar = document.getElementsByTagName('h2')[0];
        feedbackbar.textContent = `You searched for "${username}"`

        getData.MatchHistory(username)
            .then(function(data){
                createFilter(data, username);
                removeDom(main);
                preloader.Hide("preloader");
                let championArray = [];
                data.forEach(match => {
                    getChampion(match.championId).then(champion => { 
                        nodeElement.Overview(match, username, champion);
                        championArray.push(champion.name)
                    })
                    // Deze the moet eigenlijk een array van alle champions door geven.
                    // nodeElement.Overview(match, username)
                })
                return championArray
            })
            .then(champion => createFilter(champion, username)) 
            .catch((err) =>{
                removeDom(main);
                preloader.Hide("preloader");
                feedbackbar.textContent = "Summoner could not be found";
                console.log(err)
            })
    },
    'match/:id/:username' : function(id, username){
        const main = document.getElementsByTagName('main')[0];
        const feedbackbar = document.getElementsByTagName('h2')[0];

        preloader.Show("preloader");
        removeDom(main);
        main.style.display = "block";
        getData.MatchDetail(id, username)
            .then(function(data){
                preloader.Hide("preloader");
                feedbackbar.textContent = `${data.gamemode}: ${data.win}`;
                getChampion(data.champion).then(champion => { 
                    nodeElement.Detail(data, champion);
                })  
            })
    }

}

export default Routes;