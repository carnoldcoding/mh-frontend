export interface IWeapon {
    id: number;
    name: string;
    description: string;
}

export class Weapon implements IWeapon{
    id: number;
    name: string;
    description: string;

    constructor(weapon : Weapon){
        this.name = weapon.name;
        this.id = weapon.id;
        this.description = weapon.description;
    }
}