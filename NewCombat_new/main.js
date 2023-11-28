const btnStart = document.querySelector('.btnStart')
const selecChamp = document.querySelector('.selecChamp')
// const body = document.querySelector('body')
// const champG = document.querySelector('.champG')
const btnL = document.querySelector('.btnL')
const container =document.querySelector('.container')
// const Garche 
const PageAcceuil = document.querySelector('.PageAcceuil')
const combat = document.querySelector('.combat')
// const imgC2 = document.querySelector('.imgC2')
const tt = document.querySelector('.tt')

// let grandir = document.querySelector(".Garche");
// grandir.addEventListener("mouseenter",function(){
//     grandir.style.width = '400px';
//     grandir.style.height = '600px';
    // grandir.style.position = 'relative';
    // grandir.style.right = '300%';


// });
// grandir = document.querySelector(".Garche");
// grandir.addEventListener("mouseout",function(){
//     grandir.style.width = '200px';
//     grandir.style.height = 'auto';
    // grandir.style.position = 'relative';
    // grandir.style.left = '30%';
    // grandir.style.display='flex'


// })

btnStart.addEventListener ('click', () => {
    btnStart.style.display = 'none'
    PageAcceuil.style.display ='none'
    selecChamp.style.display = 'flex'
    // champG.style.display = 'block'
    btnL.style.display = 'flex'
    // body.style.display = 'none',
    // container.style.display='none'

})

btnL.addEventListener ('click',() =>{
    btnL.style.display = 'none'
    selecChamp.style.display = 'none'
    combat.style.display='flex'
    // imgC2.style.display='flex'
    tt.style.display='flex'
    container.style.display='block'


})



