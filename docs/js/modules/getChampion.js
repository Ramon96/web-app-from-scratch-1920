function  getChampion(championId){
    const champion = fetch("./js/modules/champion.json")
        .then(res => res.json())
        .then(data => {
            const chosenChampion = findInArray(data.data, championId)
            console.log(chosenChampion[0])
            return chosenChampion[0];
        })
    return champion;
}

function findInArray(data, id){
    return Object.values(data).filter(obj => obj.key == id);
}

export default getChampion