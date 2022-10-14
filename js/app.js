if(navigator.serviceWorker){
    //identificar si estoy en local o github
    navigator.serviceWorker.register('./sw.js');
}