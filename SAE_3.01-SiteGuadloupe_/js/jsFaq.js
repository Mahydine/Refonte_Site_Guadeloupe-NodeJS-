
window.onload = function(){
    init();
}

init = ()=>{
    const r1 = document.querySelector('.r1');
    const r2 = document.querySelector('.r2');
    const r3 = document.querySelector('.r3');
    const r4 = document.querySelector('.r4');
    verif();

    window.addEventListener('resize', verif)
    r1.addEventListener('click', ()=>{
        document.querySelector('.b1').classList.toggle('cache');
        document.querySelector('.b2').classList.toggle('cache');
    })
    r2.addEventListener('click', ()=>{
        document.querySelector('.b3').classList.toggle('cache');
        document.querySelector('.b4').classList.toggle('cache');
    })
    r3.addEventListener('click', ()=>{
        document.querySelector('.b5').classList.toggle('cache');
        document.querySelector('.b6').classList.toggle('cache');
    })
    r4.addEventListener('click', ()=>{
        document.querySelector('.b7').classList.toggle('cache');
        document.querySelector('.b8').classList.toggle('cache');
    })
}

verif = ()=>{
    if(window.innerWidth < 1000){
        document.querySelector('.b1').classList.add('cache');
        document.querySelector('.b3').classList.add('cache');
        document.querySelector('.b6').classList.add('cache');
        document.querySelector('.b8').classList.add('cache');
        document.querySelector('.b2').classList.remove('cache');
        document.querySelector('.b4').classList.remove('cache');
        document.querySelector('.b5').classList.remove('cache');
        document.querySelector('.b7').classList.remove('cache');
    }
    else{
        const boxs = document.querySelectorAll('.box');
        boxs.forEach(element => {
            element.classList.remove('cache')
        });
    }
}








