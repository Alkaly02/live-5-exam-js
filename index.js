const form = document.getElementById('form');
const nom = document.getElementById('nom');
const confirmerNom = document.getElementById('confirmerNom');
const erreur = document.getElementById('erreur');

// console.log(form, nom, confirmerNom);
// REGEX

form.addEventListener('submit', handleSubmit)
  

function handleSubmit(e){
    e.preventDefault();
    let valeurNom = nom.value;
    let confirmerNomValue = confirmerNom.value;

    if((valeurNom && confirmerNomValue) !== ''){
        if(valeurNom === confirmerNomValue){
            alert(`Votre nom est : ${valeurNom}`)
            nom.value = '';
            confirmerNom.value = '';
        }
        else{
            erreur.innerHTML = 'Les noms ne correspondent pas !'
            setTimeout(() => {
                erreur.innerHTML = '';
                nom.value = '';
                confirmerNom.value = '';
            }, 2000)
        }
    }
    else{
        erreur.innerHTML = 'Champ vide'
        setTimeout(() => {
            erreur.innerHTML = '';
        }, 2000)
    }

}