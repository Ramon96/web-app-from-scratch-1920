export async function fetchSummoner(url){
    let summonerData = fetch(url);
    let response = await summonerData;
    let handleResponse = await response.json();

    return handleResponse;
}