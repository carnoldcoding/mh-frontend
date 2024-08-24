const baseUrl = import.meta.env.VITE_MHW_API_URL;

export const fetchWeaponData = async function(name : string){
    try {
        const response = await fetch(`${baseUrl}/get_weapon?name=${name}`);
        if(!response.ok){
            console.log(`Unable to get weapon data for ${name}`)
            return
        }
        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.error(`Unable to get weapon data for ${name}`)
    }
}