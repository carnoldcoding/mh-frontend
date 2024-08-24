import './styles/style.scss'
import './scripts/viewModels/builderViewModel'
import { mountListeners } from './scripts/viewModels/builderViewModel'
import { fetchWeaponData } from './scripts/viewModels/weaponViewModel';

//Debug
fetchWeaponData("iron");

//Attach function
mountListeners();