import { IWeapon } from "../models/weaponModel";
import { fetchWeaponData } from "./weaponViewModel";

const resultsContainer : Element | null = document.querySelector('.results-container');
const searchbar : Element | null = document.querySelector('.searchbar-container > input');

const handleKeyPress = async function(e : any){
    if(e.key === "Enter"){
        console.log(`Searching for ${e.target.value}`);
        const results : IWeapon[] | undefined = await fetchWeaponData(e.target.value);
        if (results && resultsContainer) {
            resultsContainer.innerHTML = results.map(result => {
              return `${result.name}<br>`;
            }).join('');
          } else {
            console.log('No results found');
          }
    }
}

const mountModal = function(){
    searchbar?.addEventListener('keyup', handleKeyPress);
}

mountModal()