const changeTab = function(e : any) {
    const tabs : NodeListOf<Element> = document.querySelectorAll('.tabulation-container > div');
    const tabViews : NodeListOf<Element> = document.querySelectorAll('.builder-container > article')
    tabs.forEach(tab => {
        tab.classList.remove('active');
    })
    e.target.classList.toggle('active');

    tabViews.forEach(tabView => {
        const tab = tabView.classList[0].split('-')[0];
        const selectedTab = e.target.classList[1];
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

export const mountListeners = function() {
    const tabContainer : Element | null = document.querySelector('.tabulation-container');
    tabContainer?.addEventListener('click', changeTab)

    //Mobile Toggles
    window.addEventListener('resize', toggleMobile)
    window.addEventListener('load', toggleMobile)
}