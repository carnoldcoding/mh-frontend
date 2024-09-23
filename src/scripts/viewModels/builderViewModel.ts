import { toggleModal } from "./searchModalViewModel";

const changeTab = function(e : any) {
    const tabs : NodeListOf<Element> = document.querySelectorAll('.tabulation-container > div');
    const tabViews : NodeListOf<Element> = document.querySelectorAll('.builder-container > article')
    tabs.forEach(tab => {
        tab.classList.remove('active');
    })
    e.target.classList.toggle('active');

    tabViews.forEach((tabView : Element) => {
        const tab = tabView.classList[0].split('-')[0];
        const selectedTab = e.target.textContent.trim();
        tabView.classList.add('hidden');
        if(selectedTab === tab){
            tabView.classList.remove('hidden');
        }
    })
}

const toggleMobile = function(){
    const builderContainer : Element | null = document.querySelector('.builder-container');
    if(window.innerWidth < 1300){
        builderContainer?.classList.add('mobile');
    }else{
        builderContainer?.classList.remove('mobile');
    }
}

const handleClick = (e : any) => {
    if(e.target.id === "current-weapon"){
        toggleModal();
    }
}

export const mountListeners = function() {
    const tabContainer : Element | null = document.querySelector('.tabulation-container');
    const weaponContainer : HTMLElement | null = document.querySelector('.weapon-container');
    tabContainer?.addEventListener('click', changeTab);
    weaponContainer?.addEventListener('click', handleClick);

    //Mobile Toggles
    window.addEventListener('resize', toggleMobile)
    window.addEventListener('load', toggleMobile)
}