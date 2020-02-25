import Router from "./modules/helpers/routie.js";
import { preloader } from "./modules/helpers/preloader.js";


init();

// moet deze init functie misschien in de route?
function init(){
    const searchbar = document.getElementById('searchText');

    Router.init();
    document.getElementById('searchSummoner').addEventListener('submit', (e) => {
        e.preventDefault(); 
        preloader.Show("preloader");
        routie(`search/${searchbar.value}`);
    });


}




