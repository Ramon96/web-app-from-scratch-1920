export async function fetchMatchHistory(summonerData, apiKey){
    const matchApi = `https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/${summonerData.accountId}?api_key=${apiKey}`;

    let matchHistory = fetch(matchApi);
    let response = await matchHistory;
    let handleResponse = await response.json();


    return handleResponse;
}

