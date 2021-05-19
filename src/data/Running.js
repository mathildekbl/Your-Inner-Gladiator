export default class Running{
    static data = {
        '1':{
            "memberId":'2',
            "date":'May 14, 2021 15:15:00',
            "duration":4500,
            "distance":20.2,
            "averageBPM":128,
            "maxBPM":182,
            "kcal":1875
        },
        '2':{
            "memberId":'1',
            "date":'May 15, 2021 17:16:02',
            "duration":3600,
            "distance":16.4,
            "averageBPM":146,
            "maxBPM":195,
            "kcal":2450
        },
        '3':{
            "memberId":'2',
            "date":'May 17, 2021 08:08:29',
            "duration":4230,
            "distance":22.1,
            "averageBPM":152,
            "maxBPM":194,
            "kcal":2561
        },
        '4':{
            "memberId":'3',
            "date":'January 1, 1979 12:00:00',
            "duration":15994080,
            "distance":24539,
            "averageBPM":125,
            "maxBPM":172,
            "kcal":1000000
        }
    }
    static getMemberSessions(memberId){
        var answer = {};
        for (var x in Running.data){
            if(Running.data[x]["memberId"]===memberId){ /* Vérifier si memberId est bien présent */
                answer[x]=Running.data[x];
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
        for (var x in Running.data){
            if(Running.data[x]["memberId"]===memberId){ /* Vérifier si memberId est bien présent */
                stats["nbSessions"] += 1;
                stats["totalLength"] += Running.data[x]["distance"];
                stats["totalTime"] += Running.data[x]["duration"];
                stats["totalKcal"] += Running.data[x]["kcal"];
                totalHeartbeat += Math.floor(Running.data[x]['averageBPM']*Running.data[x]['duration']/60);
            }
        }
        stats['averageBPM']=Math.floor(60*totalHeartbeat/stats["totalTime"]);
        return stats;
    }
    static getLastSession(memberId){
        var mostRecent = 'January 1, 1970 00:00:00';
        var session={};
        for (var x in Running.data){
            if(Running.data[x]["memberId"]===memberId && Date.parse(Running.data[x]["date"]) > Date.parse(mostRecent)){ /* Vérifier si memberId est bien présent */
                mostRecent=Running.data[x]["date"];
                session=Running.data[x];
                
            }
        }
        return session;
    }
}