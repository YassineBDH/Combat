// Selectionner les personnages
let data = {
    "monArche" :{ "nom":"Arche","hp":100,"atk":10},
    "monGuerrier" :{ "nom":"Guerrier","hp":90,"atk":15},
    "monMage" :{ "nom":"Mage","hp":80,"atk":18},
    "monPretre" :{ "nom":"Pretre","hp":110,"atk":9},
}
let selectP1
let selectP2



// lancement du combat
const btnL = document.querySelector('.btnL')
const battle = document.querySelector('.battle')
const container = document.querySelector('.container')
const imgPlayer1 = document.querySelector('.imgPlayer1')
// battle J1
const nomJ1 = document.querySelector('.nomJ1')
const j1Hp = document.querySelector('.j1Hp')
const j1Atk = document.querySelector('.j1Atk')
// battle J2
const nomJ2 = document.querySelector('.nomJ2')
const j2Hp = document.querySelector('.j2Hp')
const j2Atk = document.querySelector('.j2Atk')

btnL.addEventListener('click',()=>{
    // PageAcceuil.style.display ='none';
    btnStart.style.display = 'none'
    PageAcceuil.style.display ='none';
    selecChamp.style.display = 'none';
    battle.style.display = 'flex'
    container.style.display = 'grid'
    
    if( Joueur1 === 'archer1'){
        imgPlayer1.style.backgroundImage = "url('images/archeD.png')"
        selectP1 = data.monArche
        console.log(selectP1);
        nomJ1.textContent = `Nom du personnage ${selectP1.nom}`
        j1Hp.textContent = selectP1.hp
        j1Atk.textContent = selectP1.atk

    }
    if( Joueur1 === 'guerrier1'){
        imgPlayer1.style.backgroundImage = "url('images/guerrierD.png')"
        selectP1 = data.monGuerrier
        console.log(selectP1);
        nomJ1.textContent = `Nom du personnage ${selectP1.nom}`
        j1Hp.textContent = selectP1.hp
        j1Atk.textContent = selectP1.atk

    }
    if( Joueur1 === 'mage1'){
        imgPlayer1.style.backgroundImage = "url('images/mageD.png')"
        selectP1 = data.monMage
        nomJ1.textContent = `Nom du personnage ${selectP1.nom}`
        j1Hp.textContent = selectP1.hp
        j1Atk.textContent = selectP1.atk

    }
    if( Joueur1 === 'pretre1'){
        imgPlayer1.style.backgroundImage = "url('images/prêtreD.png')"
        selectP1 = data.monPretre
        nomJ1.textContent = `Nom du personnage ${selectP1.nom}`
        j1Hp.textContent = selectP1.hp
        j1Atk.textContent = selectP1.atk
    }
    if( Joueur2 === 'archer2'){
        imgPlayer2.style.backgroundImage = "url('images/archeG.png')"
        selectP2 = data.monArche
        nomJ2.textContent = `Nom du personnage ${selectP2.nom}`

        j2Hp.textContent = selectP2.hp
        j2Atk.textContent = selectP2.atk
    }
    if( Joueur2 === 'guerrier2'){i
        mgPlayer2.style.backgroundImage = "url('images/guerrierG.png')"
        selectP2 = data.monGuerrier
        nomJ2.textContent = `Nom du personnage ${selectP2.nom}`

        j2Hp.textContent = selectP2.hp
        j2Atk.textContent = selectP2.atk
    }
    if( Joueur2 === 'mage2'){
        imgPlayer2.style.backgroundImage = "url('images/mageG.png')"
        selectP2 = data.monMage
        nomJ2.textContent = `Nom du personnage ${selectP2.nom}`

        j2Hp.textContent = selectP2.hp
        j2Atk.textContent = selectP2.atk
    }
    if( Joueur2 === 'pretre2'){
        imgPlayer2.style.backgroundImage = "url('images/prêtreG.png')"
        selectP2 = data.monPretre
        nomJ2.textContent = `Nom du personnage ${selectP2.nom}`

        j2Hp.textContent = selectP2.hp
        j2Atk.textContent = selectP2.atk
        console.log(selectP2);
    }

})
// debut du jeux
const btnStart = document.querySelector('.btnStart')
const PageAcceuil = document.querySelector('.PageAcceuil')
const selecChamp = document.querySelector('.selecChamp')

btnStart.addEventListener ('click', () => {
    btnStart.style.display = 'none'
    PageAcceuil.style.display ='none';
    selecChamp.style.display = 'flex';
})


//select Joueur 1 
const archej1 = document.querySelector('.archej1')
const guerrierj1 = document.querySelector('.guerrierj1')
const pretrej1 = document.querySelector('.pretrej1')
const magej1 = document.querySelector('.magej1')
let Joueur1 = ""


// archej1.addEventListener('mouseover',() => {

//     archej1.style.width = '400px';
//     archej1.style.height = '600px';
//     // archej1.style.justify-content = 'auto'

// })
archej1.addEventListener('click',() => {

    archej1.style.width = '400px';
    archej1.style.height = '600px';
    // archej1.style.justify-content = 'auto'
    Joueur1 = 'archer1'
})
archej1.addEventListener('mouseover',() => {

    archej1.style.width = '400px';
    archej1.style.height = '600px';
    // archej1.style.justify-content = 'auto'
    Joueur1 = 'archer1'
})
archej1.addEventListener('mouseout',() => {

    archej1.style.width = 'auto';
    archej1.style.height = '200px';

})
guerrierj1.addEventListener('click',() => {

    guerrierj1.style.width = '400px';
    guerrierj1.style.height = '600px';
    Joueur1 = 'guerrier1'

})
guerrierj1.addEventListener('mouseout',() => {

    guerrierj1.style.width = 'auto';
    guerrierj1.style.height = '200px';

})
magej1.addEventListener('mouseover',() => {

    magej1.style.width = '400px';
    magej1.style.height = '600px';
})
magej1.addEventListener('click',() => {

    magej1.style.width = '400px';
    magej1.style.height = '600px';
    Joueur1 = 'mage1'
})
magej1.addEventListener('mouseout',() => {

    magej1.style.width = 'auto';
    magej1.style.height = '200px';

})
pretrej1.addEventListener('mouseover',() => {

    pretrej1.style.width = '400px';
    pretrej1.style.height = '600px';

})
pretrej1.addEventListener('click',() => {

    pretrej1.style.width = '400px';
    pretrej1.style.height = '600px';
    Joueur1 = 'pretre1'
})
pretrej1.addEventListener('mouseout',() => {

    pretrej1.style.width = 'auto';
    pretrej1.style.height = '200px';

})

// select Joueur 2

const archej2 = document.querySelector('.archej2')
const guerrierj2 = document.querySelector('.guerrierj2')
const magej2 = document.querySelector('.magej2')
const pretrej2 = document.querySelector('.pretrej2')
const imgPlayer2 = document.querySelector('.imgPlayer2')

let Joueur2 =""

archej2.addEventListener('click',() => {

    archej2.style.width = '400px';
    archej2.style.height = '600px';
    // archej2.style.justify-content = 'auto'
    Joueur2 = 'archer2'
})
archej2.addEventListener('mouseover',() => {

    archej2.style.width = '400px';
    archej2.style.height = '600px';
    // archej2.style.justify-content = 'auto'
    Joueur2 = 'archer2'
})
archej2.addEventListener('mouseout',() => {

    archej2.style.width = 'auto';
    archej2.style.height = '200px';

})
guerrierj2.addEventListener('click',() => {

    guerrierj2.style.width = '400px';
    guerrierj2.style.height = '600px';
    Joueur2 = 'guerrier2'

})
guerrierj2.addEventListener('mouseout',() => {

    guerrierj2.style.width = 'auto';
    guerrierj2.style.height = '200px';

})
magej2.addEventListener('mouseover',() => {

    magej2.style.width = '400px';
    magej2.style.height = '600px';
})
magej2.addEventListener('click',() => {

    magej2.style.width = '400px';
    magej2.style.height = '600px';
    Joueur2 = 'mage2'
})
magej2.addEventListener('mouseout',() => {

    magej2.style.width = 'auto';
    magej2.style.height = '200px';

})
pretrej2.addEventListener('mouseover',() => {

    pretrej2.style.width = '400px';
    pretrej2.style.height = '600px';

})
pretrej2.addEventListener('click',() => {

    pretrej2.style.width = '400px';
    pretrej2.style.height = '600px';
    Joueur2 = 'pretre2'
})
pretrej2.addEventListener('mouseout',() => {

    pretrej2.style.width = 'auto';
    pretrej2.style.height = '200px';

})