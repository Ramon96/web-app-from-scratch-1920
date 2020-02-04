const mainElement = document.getElementsByTagName('main')[0];
const searchButton = document.getElementById('searchButton');

// mainElement.insertAdjacentHTML('afterend', '<div id="two">two</div>');


searchButton.addEventListener('click', () => {getMatchesByName("juiian")});

function getMatchesByName(name) {
    fetch(`https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=RGAPI-63b0f17a-6b45-4eea-8700-540c8983a88a`)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            // console.log(json);
            return json;
        })
        .then(function(data){
            // console.log(data.accountId)
            fetch(`https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/${data.accountId}?api_key=RGAPI-63b0f17a-6b45-4eea-8700-540c8983a88a`)
                .then(function(res){
                    return res.json();
                })
                .then(function(json){
                    console.log(json)
                })
        })
        .catch(err => console.log(err))
}


// getMatchesByName("yabby");

/*
substract or add to timestamp for the correct timezone
  "shifts": {
    "OC1": -46800,
    "JP1": -43200,
    "KR": -39600,
    "RU": -28800,
    "EUN1": -21600,
    "TR1": -18000,
    "EUW1": -10800,
    "BR1": -3600,
    "LA2": 0,
    "LA1": 7200,
    "NA1": 10800,
    "PH": 43200,
    "ID1": 43200,
    "VN": 46800,
    "SG": 50400,
    "TH": 54000,
    "TW": 57600
  }
*/

// added the euw timezone
var myDate = new Date(1580666276695-10800 *1000);
console.log(myDate.toGMTString()+"<br>"+myDate.toLocaleString());


