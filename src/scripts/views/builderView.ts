import { renderSharpness } from "../helperFunctions";
import { IWeapon } from "../models/weaponModel";

export const renderWeaponBlock = (weapon: IWeapon) => {
    const container = document.querySelector('.weapon-container > .weapon');
    if(container){
        container.innerHTML = 
        ` 
            <h3>weapon</h3>
            <div class="weapon-icon">
            <div class="icon" id="current-weapon">
                <img src="./src/assets/icons/weapons/${weapon.weapon_type}/${weapon.weapon_type}-rank-${weapon.rarity > 9 ? '' : 0}${weapon.rarity}.svg">
            </div>
            <div class="attack">
                <div class="icon">
                <img src="./src/assets/icons/menu/attack_icon.png" alt="">
                </div>
                <p class="value"><span class="number">${weapon.attack_true}</span></p>
            </div>
            </div>
            <div class="weapon-info">
            <p class="name">${weapon.name}</p>
            ${weapon.sharpness ? renderSharpness(weapon.sharpness) : ''}
            </div>
            <div class="decorations">
            <div class="decoration"></div>
            <div class="decoration"></div>
            <div class="decoration"></div>
            </div>
        `
    }
}