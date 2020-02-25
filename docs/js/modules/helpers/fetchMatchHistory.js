export async function fetchMatchHistory(summonerData, cors, api, apiKey){
    const endpoint = `/match/v4/matchlists/by-account/${summonerData.accountId}`;
    const url = `${cors}${api}${endpoint}?api_key=${apiKey}`

    let matchHistory = fetch(url);
    let response = await matchHistory;
    let handleResponse = await response.json();


    return handleResponse;
}

