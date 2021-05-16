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
        return Math.floor(height/100).toLocaleString()+" m "+Math.floor(height%100).toLocaleString();
    }
}