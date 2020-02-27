import {showSelected} from "./filterChampion.js"


function createFilter(data, username) {
    console.log(data)
    // const champions = [...new Set(data.map(key => {
    //     return key.championId
    // }))].sort(function(a, b){return a - b}) ;

    const champions = [new Set(data)].sort() ;


    const dropdown = document.createElement("select");

    for(let i= 0; i < champions.length; i++){
        let option = new Option(champions[i], champions[i])
        dropdown.appendChild(option);
    }

    dropdown.addEventListener("change", (e)=>{
        showSelected(e.target.value, data, username)
    })

    document.querySelector("h2").appendChild(dropdown);
}



export {createFilter}