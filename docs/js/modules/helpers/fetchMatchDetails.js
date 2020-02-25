export async function fetchMatchDetails(gameKey, cors, api, apiKey){
    const endpoint = `match/v4/matches/${gameKey}`;
    const url= `${cors}${api}${endpoint}?api_key=${apiKey}`;

    let match = fetch(url);
    let response = await match;
    let handleResponse = await response.json();


    return handleResponse;
}