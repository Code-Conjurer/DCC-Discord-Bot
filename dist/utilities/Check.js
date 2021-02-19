"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function instanceOfSimpleObject(obj) {
    let types;
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === 'object')
            throw new Error("object is too complex");
        if (typeof types !== prop) {
            return false;
        }
    });
    return true;
}
function instanceOfOccupation(obj) {
    return "name" in obj
        && "name" in obj
        && "trained_weapon" in obj
        && "name" in obj["trained_weapon"]
        && "type" in obj["trained_weapon"]
        && "trade_goods" in obj;
}
function instanceOfCharacter(obj) {
    let charTypes;
    let attributeTypes;
    let rollsTypes;
    Object.keys(obj).forEach(prop => {
        if (typeof charTypes !== prop)
            return false;
    });
    Object.keys(obj["attributes"]).forEach(prop => {
        if (typeof attributeTypes !== prop)
            return false;
    });
    Object.keys(obj["rolls"]).forEach(prop => {
        if (typeof rollsTypes !== prop)
            return false;
    });
    return true;
}
exports.default = { instanceOfSimpleObject, instanceOfCharacter, instanceOfOccupation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlsaXRpZXMvQ2hlY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxTQUFTLHNCQUFzQixDQUFJLEdBQVE7SUFDdkMsSUFBSSxLQUFjLENBQUM7SUFFbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDNUIsSUFBRyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNFLElBQUcsT0FBTyxLQUFLLEtBQUssSUFBSSxFQUFDO1lBQ3BCLE9BQU8sS0FBSyxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBVUQsU0FBUyxvQkFBb0IsQ0FBQyxHQUFRO0lBQ2xDLE9BQU8sTUFBTSxJQUFJLEdBQUc7V0FDakIsTUFBTSxJQUFJLEdBQUc7V0FDYixnQkFBZ0IsSUFBSSxHQUFHO1dBQ3ZCLE1BQU0sSUFBSSxHQUFHLENBQUMsZ0JBQWdCLENBQUM7V0FDL0IsTUFBTSxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztXQUMvQixhQUFhLElBQUksR0FBRyxDQUFDO0FBQzVCLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLEdBQVE7SUFFakMsSUFBSSxTQUEyQixDQUFDO0lBQ2hDLElBQUksY0FBOEMsQ0FBQztJQUNuRCxJQUFJLFVBQXFDLENBQUM7SUFFMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDNUIsSUFBRyxPQUFPLFNBQVMsS0FBSyxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMxQyxJQUFHLE9BQU8sY0FBYyxLQUFLLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JDLElBQUcsT0FBTyxVQUFVLEtBQUssSUFBSTtZQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELGtCQUFlLEVBQUMsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQyJ9