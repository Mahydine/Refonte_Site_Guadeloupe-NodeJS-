
window.onload = function(){
    init();
}

init = ()=>{
    verif();
    const flecheTirer = document.querySelector('.fleche-tirer')
    flecheTirer.addEventListener('click', toggleActus);
    window.addEventListener('resize', verif);
}


//sort ou rentre la page actus 'Droite'
const toggleActus = ()=>{

    const actus = document.querySelector('.actus');
    const flecheTirer = document.querySelector('.fleche-tirer')
    actus.classList.toggle('cache');
    flecheTirer.classList.toggle('rotate')
}



//fait des verfication a chaque redimensionnement du navigateur
const verif= ()=>{
    const actus = document.querySelector('.actus');
    const flecheTirer = document.querySelector('.fleche-tirer')
    if(window.innerWidth > 630){
        actus.classList.remove('cache');
        flecheTirer.classList.add('cache')
        flecheTirer.classList.remove('rotate')
    }
    else{
        actus.classList.add('cache')
        flecheTirer.classList.remove('rotate')
        flecheTirer.classList.remove('cache')
    }


}