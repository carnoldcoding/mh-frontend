export interface IWeapon {
    id: number;
    name: string;
    description: string;
    affinity: number;
    attack: number;
    attack_true: number;
    rarity: number;

    element1: string | null;
    element1_attack: number | null;
    element2: string | null;
    element2_attack: number | null;

    weapon_type: string;
}

export class Weapon implements IWeapon{
    id: number;
    name: string;
    description: string;
    affinity: number;
    attack: number;
    attack_true: number;
    rarity: number;

    element1: string | null;
    element1_attack: number | null;
    element2: string | null;
    element2_attack: number | null;

    weapon_type: string;


    constructor(weapon : Weapon){
        this.name = weapon.name;
        this.id = weapon.id;
        this.description = weapon.description;
        this.affinity = weapon.affinity;
        this.attack = weapon.attack;
        this.attack_true = weapon.attack_true;
        this.element1 = weapon.element1;
        this.element1_attack = weapon.element1_attack;
        this.element2 = weapon.element2;
        this.element2_attack = weapon.element2_attack;
        this.weapon_type = weapon.weapon_type;
        this.rarity = weapon.rarity;
    }
}