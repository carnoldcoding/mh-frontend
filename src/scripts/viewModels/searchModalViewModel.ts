import { IWeapon } from "../models/weaponModel";
import { fetchWeaponData } from "./weaponViewModel";

const resultsContainer : Element | null = document.querySelector('.results-container');
const searchbar : Element | null = document.querySelector('.searchbar-container > input');

const createResultHTML = function(weapon: IWeapon) : string{
    //TODO
    return `${weapon.name}<br>`
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
    //TODO
}

const mountModalListeners = function(){
    searchbar?.addEventListener('keyup', handleKeyPress);
}

mountModalListeners()