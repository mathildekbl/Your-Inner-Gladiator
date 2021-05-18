export default class Converter{
    static timeFormat(time){ // time in second -> return  hh:mm:ss
        var h = Math.floor(time/3600).toLocaleString();
        var m = Math.floor((time%3600)/60).toLocaleString('en-US', {minimumIntegerDigits: 2});
        var s = Math.floor(time%60).toLocaleString('en-US', {minimumIntegerDigits: 2});
        return h+':'+m+':'+s;
    }
    static distanceFormat(dist){ //dist in km -> return dist km
        return dist.toFixed(3).toLocaleString()+" km";
    }
    static weightFormat(weight){ //weight in kg -> return weight kg
        return weight.toFixed(1).toLocaleString()+" kg";
    }
    static heightFormat(height){ // height in cm -> return (weight/100) m weight%100
        return Math.floor(height/100).toLocaleString()+"m"+Math.floor(height%100).toLocaleString();
    }
    static kcalFormat(kcal){
        return Math.floor(kcal)+" kcal";
    }
    static BPMformat(bpm){
        return Math.floor(bpm)+" BPM";
    }
    static format(label,value){
        if (['totalLength','distance'].indexOf(label)!==-1){return Converter.distanceFormat(value);}
        if (['totalTime','duration'].indexOf(label)!==-1){return Converter.timeFormat(value);}
        if (['totalKcal','kcal'].indexOf(label)!==-1){return Converter.kcalFormat(value);}
        if (['averageBPM','maxBPM'].indexOf(label)!==-1){return Converter.BPMformat(value);}
        if (['height'].indexOf(label)!==-1){return Converter.heightFormat(value);}
        if (['currentWeight','targetWeight'].indexOf(label)!==-1){return Converter.weightFormat(value);}
        return value;
    }
}