// Les events en javascript
console.log("coucou")


function myButtonClick(){
    alert("Vous avez cliqué sur le bouton");
   
}


function myMouseOver(){
    alert("Vous avez survolé le bouton");
}


function myDblClick(){
    alert("Vous avez double cliqué sur le bouton");
}

function myFunctionAlert(arg){
    switch(arg){
        case 1 : alert("Vous avez cliqué sur le bouton 1");
        break;
        case 2 : alert("Vous avez survolé le bouton 2");
        break;
        case 3 : alert("Vous avez double cliqué sur le bouton 3");
        break;
        case 4 : alert("Vous n'avez plus le focus sur le bouton 4");
        break;
        case 5 : alert("Vous n'avez plus le focus sur le bouton 5");
        break;
    }
}

function radioButton () {
  //  console.log("clique sur le bouton");
     //1ere solution avec document.querySelector('input[name=choix]:checked').value
     console.log(document.querySelectorAll('input[name=choix]'));
     let affichage= "<ul><li> 1ere solution : "+document.querySelector('input[name=choix]:checked').value + "</li>";
     console.log(document.querySelector('input[name=choix]:checked').value);

     // 2eme solution avec getElementByName
     const boutons = document.getElementsByName('choix');
     console.log(boutons);

     for(let i = 0;i<boutons.length;i++){
        if(boutons[i].checked) {
            affichage += "<li> 2eme solution (boucle for) "+boutons[i].value + "</li>"
        }
     }

     for(const button of boutons){
            console.log(button);
            if(button.checked){
                affichage += "<li> 3eme solution (for .... of ) "+button.value + "</li>"
            }
            
     }

     // 4eme solution avec l'id
     if(document.getElementById('choix1').checked){
        affichage += "<li> 4eme solution : "+document.getElementById('choix1').value + "</li></ul>"
     }else if(document.getElementById('choix2').checked){
        affichage += "<li> 4eme solution : "+document.getElementById('choix2').value + "</li></ul>"
     }else if(document.getElementById('choix3').checked){
        affichage += "<li> 4eme solution : "+document.getElementById('choix3').value + "</li></ul>"
     }



 
 
     result.innerHTML = affichage;

}


const touches = [...document.querySelectorAll('.bouton')];
console.log(touches);
const listKeyCode = touches.map(touche => touche.dataset.name);
console.log(listKeyCode);


const btnvalider = document.querySelector('#btnValider');
const result = document.querySelector('#result');


console.log(document.getElementById("choix1").checked);

const monInput = document.getElementById("moninput");
const monForm = document.getElementById("monform");
// btnvalider.onclick = (e) => {
//     e.preventDefault();
//     radioButton();
//    // monInput.value ="";
//    monForm.reset();
// }


monForm.addEventListener('submit', (e) => {
    radioButton();
    e.preventDefault();
})