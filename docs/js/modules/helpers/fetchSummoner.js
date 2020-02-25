export async function fetchSummoner(cors, api, apiKey, name){
    const endpoint = `summoner/v4/summoners/by-name/${name}`;
    const url = `${cors}${api}${endpoint}?api_key=${apiKey}`


    let summonerData = fetch(url);
    let response = await summonerData;
    let handleResponse = await response.json();

    return handleResponse;
}