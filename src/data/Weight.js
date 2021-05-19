export default class Weight{
    static data = {
        '1':{
            "memberId":'2',
            "date":'May 14, 2021 17:12:00',
            "weight":62
        },
        '2':{
            "memberId":'1',
            "date":'May 15, 2021 18:20:02',
            "weight":95
        },
        '3':{
            "memberId":'1',
            "date":'May 16, 2021 14:00:02',
            "weight":93
        },
        '4':{
            "memberId":'3',
            "date":'January 1, 1982 12:00:00',
            "weight":62
        },
        '5':{
            "memberId":'2',
            "date":'May 19, 2021 09:16:29',
            "weight":60
        },
        '6':{
            "memberId":'1',
            "date":'May 19, 2021 11:49:00',
            "weight":90
        },
        '7':{
            "memberId":'2',
            "date":'May 19, 2021 13:50:00',
            "weight":57
        }
    }
    static getWeightHistory(memberId){
        var answers = [];
        for (var x in Weight.data){
            if(Weight.data[x]["memberId"]===memberId){ /* Vérifier si memberId est bien présent */
                answers.push(Weight.data[x]);
            }
        }
        answers.sort(function(a,b){
            return Date.parse(b["date"]) - Date.parse(a["date"]);
        })
        return answers;
    }
    static getCurrentWeight(memberId){
        let weightHistory = Weight.getWeightHistory(memberId);
        if (weightHistory.length===0){return -1}
        return weightHistory.shift()["weight"];
    }
}