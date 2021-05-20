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
        },
        '5':{
            "memberId":'4',
            "date":'August 16, 2009 18:00:00',
            "duration":9.58,
            "distance":0.1,
            "averageBPM":160,
            "maxBPM":180,
            "kcal":1000
        }
    }
    static getMemberSessions(memberId){
        // Toutes les sessions d'un membre
        let answer = {};
        let memberInData;
        for (let x in Running.data){
            try {
                memberInData =  Running.data[x]["memberId"];
            } catch (e) {
                throw new Error(`Can't get the member in session "${x}`);
            }
            if(memberInData===memberId){
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
        let totalHeartbeat=0;
        let memberInData;
        let distance;
        let duration;
        let kcal;
        let BPM;
        for (let x in Running.data){
            try {
                memberInData =  Running.data[x]["memberId"];
                distance = Running.data[x]["distance"];
                duration = Running.data[x]["duration"];
                kcal = Running.data[x]["kcal"];
                BPM = Running.data[x]['averageBPM'];
            } catch (e) {
                throw new Error(`Can't get the session "${x}`);
            }
            if(memberInData===memberId){ /* Vérifier si memberId est bien présent */
                stats["nbSessions"] += 1;
                stats["totalLength"] += distance;
                stats["totalTime"] += duration;
                stats["totalKcal"] += kcal;
                totalHeartbeat += Math.floor(BPM*duration/60);
            }
        }
        stats['averageBPM']=Math.floor(60*totalHeartbeat/stats["totalTime"]);
        return stats;
    }
    static getLastSession(memberId){
        let mostRecent = 'January 1, 1970 00:00:00';
        let session={};
        let memberInData;
        let dateInData;
        for (let x in Running.data){
            try {
                memberInData = Running.data[x]["memberId"];
                dateInData = Running.data[x]["date"]
            } catch (e) {
                throw new Error(`Can't get the session "${x}`);
            }
            if(memberInData===memberId && Date.parse(dateInData) > Date.parse(mostRecent)){ /* Vérifier si memberId est bien présent */
                mostRecent=dateInData;
                session=Running.data[x];
            }
        }
        return session;
    }
}