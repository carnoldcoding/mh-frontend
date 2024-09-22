import { IWeapon } from "../models/weaponModel";
import { fetchWeaponData } from "./weaponViewModel";

const modalContainer : HTMLElement | null = document.querySelector('.search-modal-container');
const resultsContainer : Element | null = document.querySelector('.results-container');
const searchbar : Element | null = document.querySelector('.searchbar-container > div > input');

const createResultHTML = function(weapon: IWeapon) : string{
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

    const renderSharpness = (sharpness : string) => {
      const sharpnessArray = sharpness.split(',');
      const sharpnessObject = {
        red: 0,
        orange: 0,
        yellow: 0,
        green: 0,
        blue: 0,
        white: 0,
        purple: 0 
      }

      sharpnessArray.forEach((value, index) => {
        switch (index){
          case 0:
            sharpnessObject.red = Number(value);
            break;
          case 1:
            sharpnessObject.orange = Number(value);
            break;
          case 2:
            sharpnessObject.yellow = Number(value);
            break;
          case 3:
            sharpnessObject.green = Number(value);
            break;
          case 4:
            sharpnessObject.blue = Number(value);
            break;
          case 5:
            sharpnessObject.white = Number(value);
            break;
          case 6:
            sharpnessObject.purple = Number(value);
            break;
        
        }
      })

      //red, orange, yellow, green, blue, white, purple
      return `
        <div class="sharpness">
        ${Object.entries(sharpnessObject).map(([key, value]) => {
          return `
          <div class="block" style="background: ${key}; width: ${value / 5}px">
          </div>`
        }).join('')}
        </div>
      `
    }

    interface WeaponStats {
      attack: number;
      affinity: number;
      [key: string]: number; 
    }
    
    const stats: WeaponStats = {
      attack: weapon.attack_true,
      affinity: weapon.affinity
    };

    if(weapon.element1 && weapon.element1_attack){
      stats[weapon.element1.toLowerCase()] = weapon.element1_attack / 10;
    }
    return `
    <div class="result">
        <div class="basic-info">
          <div class="icon">
           <img src="./src/assets/icons/weapons/${weapon.weapon_type}/${weapon.weapon_type}-rank-${weapon.rarity > 9 ? '' : 0}${weapon.rarity}.svg">
            <div class="rarity">
              <p>Rarity <span>${weapon.rarity}</span></p>
            </div>
          </div>
          
          <div class="column">
            <p class="name">${weapon.name}</p>
            ${renderSharpness(weapon.sharpness)}
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

const handleKeyPress = async function(e : any){
    if(e.key == "Enter"){
        console.log(e.key);
        console.log(`Searching for ${e.target.value}`);
        const results : IWeapon[] | undefined = await fetchWeaponData(e.target.value);
        if (results && resultsContainer) {
            resultsContainer.innerHTML = results.map(result => {
              return createResultHTML(result);
            }).join('');
          } else {
            console.log('No results found');
          }
    }
}

export const toggleModal = function() {
  if(modalContainer){
    if(modalContainer.style.display === "none"){
      modalContainer.style.display = "flex";
      document.body.style.overflow = "hidden";
    }else{
      modalContainer.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

const handleClick = function(e : any){
  if(e.target.name == "close-outline" || Array.from(e.target.classList).includes('result')){
    toggleModal();
  }
}
const mountModalListeners = function(){
    modalContainer?.addEventListener('click', handleClick);
    searchbar?.addEventListener('keyup', handleKeyPress);
}

mountModalListeners()