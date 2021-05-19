export default class Members{
    static member = {
        '1' : {
            "firstName":"Jean",
            "lastName":"Dupond",
            "age":25,
            "gender":"M",
            "targetWeight":80,
            "height":175
        },
        '2' :{
            "firstName":"Marie",
            "lastName":"Martin",
            "age":23,
            "gender":"F",
            "targetWeight":57,
            "height":168
        },
        '3':{
            "firstName":"Forrest",
            "lastName":"Gump",
            "age":36,
            "gender":"M",
            "targetWeight":75,
            "height":183
        },
        '4':{
            "firstName":"Usain",
            "lastName":"Bolt",
            "age":35,
            "gender":"M",
            "targetWeight":90,
            "height":196
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