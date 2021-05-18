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
        },
        '4':{
            "memberId":'3',
            /*Date*/
            "duration":15994080,
            "distance":24539,
            "averageBPM":125,
            "maxBPM":172,
            "kcal":1000000
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
    static getTotalStats(memberId){
        var stats={
            "nbSessions":0,
            "totalLength":0,
            "totalTime":0,
            "totalKcal":0,
            "averageBPM":0
        }
        var totalHeartbeat=0;
        for (var x in Bike.bike){
            if(Bike.bike[x]["memberId"]===memberId){ /* Vérifier si memberId est bien présent */
                stats["nbSessions"] += 1;
                stats["totalLength"] += Bike.bike[x]["distance"];
                stats["totalTime"] += Bike.bike[x]["duration"];
                stats["totalKcal"] += Bike.bike[x]["kcal"];
                totalHeartbeat += Math.floor(Bike.bike[x]['averageBPM']*Bike.bike[x]['duration']/60);
            }
        }
        stats['averageBPM']=Math.floor(60*totalHeartbeat/stats["totalTime"]);
        return stats;
    }
}