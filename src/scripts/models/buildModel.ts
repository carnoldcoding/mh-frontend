import { IWeapon } from "./weaponModel";

export interface IBuild {
    id: number;
    name?: string;
    weapon?: IWeapon;
}

export class Build implements IBuild{
    id: number;
    name: string;
    weapon?: IWeapon;

    constructor(){
        this.id = 1;
        this.name = "test build";
    }

    setWeapon(weapon: IWeapon){
        this.weapon = weapon;
    }
}

export const build = new Build();