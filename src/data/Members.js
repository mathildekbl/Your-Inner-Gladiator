export default class Members{
    static member = {
        '1' : {
            "firstName":"Jean",
            "lastName":"Dupond",
            "age":25,
            "gender":"M",
            "currentWeight":95,
            "targetWeight":80,
            "height":175
        },
        '2' :{
            "firstName":"Marie",
            "lastName":"Martin",
            "age":23,
            "gender":"F",
            "currentWeight":60,
            "targetWeight":57,
            "height":168
        },
        '3':{
            "firstName":"Forrest",
            "lastName":"Gump",
            "age":36,
            "gender":"M",
            "currentWeight":78,
            "targetWeight":75,
            "height":183
        }
    }
    static getMemberData(id,key){
        try {
            return Members.member[id][key];
        } catch (e) {
            throw new Error(`Can't get the element : "${key}" from member "${id}`);
        }
    }
    static getMember(id){
        try {
            return Members.member[id];
        } catch (e) {
            throw new Error(`Can't get the member "${id}`);
        }
    }
}