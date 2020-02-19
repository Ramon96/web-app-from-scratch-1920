export async function fetchSummoner(url, apiKey){
    let summonerData = fetch(url);
    let response = await summonerData;
    let hanldeResponse = await response.json();

    return hanldeResponse;
}