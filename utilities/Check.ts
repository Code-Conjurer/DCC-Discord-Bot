

import { ICharacter, IEquipment, ILuckyRoll, IOccupation} from "../interfaces/characterSheet";

function instanceOfSimpleObject<T>(obj: any): obj is T{
    let types: keyof T;

    Object.keys(obj).forEach(prop => {
        if(typeof obj[prop] === 'object') throw new Error("object is too complex");
        if(typeof types !== prop){
             return false;
        }
    });

    return true;
}
/*
function instanceOfEquipment(obj: any): obj is IEquipment{
    return "name" in obj && "quantity" in obj && "value" in obj;
}

function instanceOfLuckyRoll(obj: any): obj is ILuckyRoll{
    return "name" in obj && "modifier" in obj;
}*/

function instanceOfOccupation(obj: any): obj is IOccupation{
    return "name" in obj 
    && "name" in obj 
    && "trained_weapon" in obj 
    && "name" in obj["trained_weapon"]
    && "type" in obj["trained_weapon"]
    && "trade_goods" in obj; // this does not check the type of obj["trade_goods"]
}

function instanceOfCharacter(obj: any): obj is ICharacter{

    let charTypes: keyof ICharacter;
    let attributeTypes: keyof ICharacter["attributes"];
    let rollsTypes: keyof ICharacter["rolls"];

    Object.keys(obj).forEach(prop => {
        if(typeof charTypes !== prop) return false;
    });

    Object.keys(obj["attributes"]).forEach(prop => {
        if(typeof attributeTypes !== prop) return false;
    });

    Object.keys(obj["rolls"]).forEach(prop => {
        if(typeof rollsTypes !== prop) return false;
    });

    return true;
}

export default {instanceOfSimpleObject, instanceOfCharacter, instanceOfOccupation};