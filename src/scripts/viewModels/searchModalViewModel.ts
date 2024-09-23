import { IWeapon } from "../models/weaponModel";
import { fetchWeaponData } from "./weaponViewModel";
import { build } from "../models/buildModel";
import { renderWeaponBlock } from "../views/builderView";
import { createResultHTML } from "../views/searchModalView";

const modalContainer : HTMLElement | null = document.querySelector('.search-modal-container');
const resultsContainer : Element | null = document.querySelector('.results-container');
const searchbar : Element | null = document.querySelector('.searchbar-container > div > input');

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

const handleClick = async function(e : any){
  if(e.target.name == "close-outline"){
    toggleModal();
  }else if(Array.from(e.target.classList).includes('result')){
    toggleModal();
    const results : IWeapon[] = await fetchWeaponData(e.target.dataset.name);
    const weapon = results[0];

    build.setWeapon(weapon);
    renderWeaponBlock(weapon);
  }
}
const mountModalListeners = function(){
    modalContainer?.addEventListener('click', handleClick);
    searchbar?.addEventListener('keyup', handleKeyPress);
}

mountModalListeners()