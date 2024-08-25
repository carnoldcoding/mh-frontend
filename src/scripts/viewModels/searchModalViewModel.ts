import { IWeapon } from "../models/weaponModel";
import { fetchWeaponData } from "./weaponViewModel";

const modalContainer : HTMLElement | null = document.querySelector('.search-modal-container');
const resultsContainer : Element | null = document.querySelector('.results-container');
const searchbar : Element | null = document.querySelector('.searchbar-container > div > input');

const createResultHTML = function(weapon: IWeapon) : string{
    

    return `
    <div class="result">
      <div class="icon">
        <img src="./src/assets/icons/weapons/${weapon.weapon_type}/${weapon.weapon_type}-rank-${weapon.rarity > 9 ? '' : 0}${weapon.rarity}.svg">
      </div>
      <div class="name">
        <p>${weapon.name}</p>
      </div>
    </div>
    `
}

const handleKeyPress = async function(e : any){
    if(e.key === "Enter"){
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

const handleClick = function(e : any){
    if(e.target.name == "close-outline" || Array.from(e.target.classList).includes('result')){
      toggleModal();
    }
}

export const toggleModal = function() {
  if(modalContainer){
    modalContainer.style.display = modalContainer.style.display === "none" ? "flex" : "none";
  }
}

const mountModalListeners = function(){
    modalContainer?.addEventListener('click', handleClick);
    searchbar?.addEventListener('keyup', handleKeyPress);
}

mountModalListeners()