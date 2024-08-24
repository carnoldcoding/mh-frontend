import { IWeapon } from "./weaponModel";

export interface IBuild {
    id: number;
    weapon: IWeapon;
}

export class Build implements IBuild{
    id: number;
    weapon: IWeapon;

    constructor(build : Build){
        this.id = build.id;
        this.weapon = build.weapon;
    }
}