import { IWeapon } from "../models/weaponModel";
import { renderSharpness } from "../helperFunctions";

export const createResultHTML = function(weapon: IWeapon) : string{
    const renderDecorations = (decorations : Array<number>) => {
      return decorations.filter(decoration => decoration > 0).map(decoration => {
        return (`<img src="./src/assets/icons/decorations/color_00_rank_${decoration}.svg" alt="">`)
      }).join('');
    }

    const renderStats = (stats : Object) => {
      return Object.entries(stats).filter(([value]) => value!=null).map(([key, value]) => {
        return `
          <div class="stat">
            <div class="stat-icon">
              <img src="./src/assets/icons/menu/${key}_icon.png" alt="">
            </div>
            <div class="stat-value">
              <span class="number">${value}</span>
            </div>
          </div>
        `
      }).join('');
    }

    interface WeaponStats {
      attack: number;
      affinity: number;
      defense: number;
      [key: string]: number | string | boolean;
    }
    
    const stats: WeaponStats = {
      attack: weapon.attack_true,
      affinity: weapon.affinity,
      defense: weapon.defense,
    };

    if(weapon.element1 && weapon.element1_attack){
      if(!weapon.element_hidden){
        stats[weapon.element1.toLowerCase()] = weapon.element1_attack / 10;
      }else{
        stats[weapon.element1.toLowerCase()] = `(${weapon.element1_attack / 10})`;
      }
    }
    
    if(weapon.elderseal){
      if(weapon.elderseal == "average"){
        stats["elderseal"] = "avg";
      }else{
        stats["elderseal"] = weapon.elderseal;
      }
    }

    return `
    <div class="result" data-name="${weapon.name}">
        <div class="basic-info">
          <div class="icon">
           <img src="./src/assets/icons/weapons/${weapon.weapon_type}/${weapon.weapon_type}-rank-${weapon.rarity > 9 ? '' : 0}${weapon.rarity}.svg">
            <div class="rarity">
              <p>Rarity <span class="number">${weapon.rarity}</span></p>
            </div>
          </div>
          
          <div class="column">
            <p class="name">${weapon.name}</p>
            ${weapon.sharpness ? renderSharpness(weapon.sharpness) : ''}
            <div class="decorations">
            ${renderDecorations([weapon.slot_1, weapon.slot_2, weapon.slot_3])}
            </div>
          </div>
        </div>
        <div class="stats">
          ${renderStats(stats)}
        </div>
      </div>
    `
}