function convertTimestamp(timestamp, region){
    let timeDifference;
    switch(region){
        case "OC1":
            timeDifference = -46800
        break; 
        case "JP1": 
            timeDifference = -43200
            break;
        case "KR":
            timeDifference = -39600
            break;
        case "RU": 
            timeDifference = -28800
            break;
        case "EUN1": 
            timeDifference =- 21600
            break;
        case "TR1":
            timeDifference = -18000
            break;
        case "EUW1":
            timeDifference = -10800
            break;
        case "BR1":
            timeDifference = -3600
            break;
        case "LA2": 
            timeDifference = 0
            break;
        case "LA1": 
            timeDifference = 7200
            break;
        case "NA1": 
            timeDifference = 10800
            break;
        case "PH": 
            timeDifference = 43200
            break;
        case "ID1": 
            timeDifference = 43200
            break;
        case "VN": 
            timeDifference = 46800
            break;
        case "SG": 
            timeDifference = 50400
            break;
        case "TH": 
            timeDifference = 54000
            break;
        case "TW": 
            timeDifference =  57600
            break;
    }
        var humanReadable  = new Date(timestamp - timeDifference * 1000).toLocaleString();
        return humanReadable;
}