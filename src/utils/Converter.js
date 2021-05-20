// Permet de gérer l'affichage des différentes données
export default class Converter{
    static timeFormat(time){ 
        /* time est en secondes
        return au format hh:mm:ss*/
        let h = Math.floor(time/3600).toLocaleString();
        let m = Math.floor((time%3600)/60).toLocaleString('en-US', {minimumIntegerDigits: 2});
        let s = Math.floor(time%60).toLocaleString('en-US', {minimumIntegerDigits: 2});
        return h+' h '+m+' m '+s+' s';
    }
    static distanceFormat(dist){ 
        if (dist<10){return (1000*dist).toLocaleString()+" m";}
        return dist.toFixed(2).toLocaleString()+" km";
    }
    static weightFormat(weight){ 
        return weight.toFixed(1).toLocaleString()+" kg";
    }
    static heightFormat(height){ 
        return Math.floor(height/100).toLocaleString()+"m"+Math.floor(height%100).toLocaleString();
    }
    static kcalFormat(kcal){
        return Math.floor(kcal)+" kcal";
    }
    static BPMformat(bpm){
        return Math.floor(bpm)+" BPM";
    }
    static dateFormat(date){
        var datetime = new Date(date);
        return datetime.toLocaleString('fr-Fr',{minimumIntegerDigits:2});
    }
    static format(label,value){
        // Redirige vers le bon formatage en fonction du label en argument.
        if (['totalLength','distance'].indexOf(label)!==-1){return Converter.distanceFormat(value);}
        if (['totalTime','duration'].indexOf(label)!==-1){return Converter.timeFormat(value);}
        if (['totalKcal','kcal'].indexOf(label)!==-1){return Converter.kcalFormat(value);}
        if (['averageBPM','maxBPM'].indexOf(label)!==-1){return Converter.BPMformat(value);}
        if (['height'].indexOf(label)!==-1){return Converter.heightFormat(value);}
        if (['currentWeight','targetWeight',"weight"].indexOf(label)!==-1){return Converter.weightFormat(value);}
        if (['date'].indexOf(label)!==-1){return Converter.dateFormat(value);}
        return value;
    }
}