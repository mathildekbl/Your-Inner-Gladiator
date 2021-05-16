export default class Bike{
    static bike = {
        '1':{
            "memberId":'2',
            /*Date*/
            "duration":2700,
            "distance":20.2,
            "averageBPM":128,
            "maxBPM":182,
            "kcal":1875
        },
        '2':{
            "memberId":'1',
            /*Date*/
            "duration":3600,
            "distance":26.4,
            "averageBPM":146,
            "maxBPM":195,
            "kcal":2450
        },
        '3':{
            "memberId":'2',
            /*Date*/
            "duration":2815,
            "distance":22.1,
            "averageBPM":152,
            "maxBPM":194,
            "kcal":2561
        }
    }
    static getMemberSessions(memberId){
        var answer = {};
        for (var x in Bike.bike){
            if(Bike.bike[x]["memberId"]===memberId){ /* Vérifier si memberId est bien présent */
                answer[x]=Bike.bike[x];
            }
        }
        return answer;
    }
    static getNumberOfSessions(memberId){
        var n=0;
        for (var x in Bike.bike){
            if(Bike.bike[x]["memberId"]===memberId){ /* Vérifier si memberId est bien présent */
                n+=1;
            }
        }
        return n;
    }
}