const baseUrl = import.meta.env.VITE_MHW_API_URL;

export const fetchWeaponData = async function(){
    try {
        const response = await fetch(`${baseUrl}/get_weapon`);
        if(!response.ok){
            console.log(`Unable to get weapon data for ${"<Weapon Name Here>"}`)
            return
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(`Unable to get weapon data for ${"<Weapon Name Here>"}`)
    }
}