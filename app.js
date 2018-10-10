const titre = document.querySelector('.titre');
const description = document.querySelector('.description');
const resultTitre = document.querySelector('.resultTitre');
const resultDescription = document.querySelector('.resultDescription');
const envoi = document.querySelector('.envoi');

// je teste la copie d'écriture en direct
titre.addEventListener('keyup', () => {
	resultTitre.innerHTML = titre.value;
});
description.addEventListener('keyup', () => {
	resultDescription.innerHTML = description.value;
});

// je fais une fonction de création de post!
const listePosts = [];
function creerUnPost(titre, description) {
  var post = {
    "titre": titre,
    "description": description
  };
  listePosts.push(post);
}

