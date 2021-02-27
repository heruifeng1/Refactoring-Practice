
class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }
}
const organization = new Organization({name: "Acme Gooseberries", country: "GB"});

let result = '1'
result += `<h1>${organization.name}</h1>`;
organization.name = 'newName';

export const organization1 = organization;
export const result1 =  result;
