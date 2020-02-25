import { removeDom } from "../cleanDom.js";
import { getData } from "../getData.js";
import { preloader } from "./preloader.js";
import { nodeElement } from "../createComponent.js";
import { createFilter} from "../createFilter.js"


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
                data.forEach(match => {
                    nodeElement.Overview(match, username)
                })
            })
            .catch((err) =>{
                removeDom(main);
                preloader.Hide("preloader");
                feedbackbar.textContent = "Summoner could not be found";
                console.log(err)
            })
    },
    'match/:id/:username' : function(id, username){
        const main = document.getElementsByTagName('main')[0];

        removeDom(main);
        getData.MatchDetail(id, username)
            .then(function(data){
                console.log(data)
            })
        // console.log(id, username);
    }

}

export default Routes;