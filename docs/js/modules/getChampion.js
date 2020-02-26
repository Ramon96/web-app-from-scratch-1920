function getChampion(championId){
    fetch("./js/modules/champion.json")
        .then(res => res.json())
        .then(data => {
            const chosenChampion = data.data.find(key => {
                if (championId == key.key){
                    return key;
                }
            })
            // console.log(typeof data)
            // const chosenChampion = data.filter((data) => {return data.key == championId})
            console.log(chosenChampion)
        })

}

export default getChampion