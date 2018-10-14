// var titre = document.querySelector('.titre');
// var description = document.querySelector('.description');
// var resultTitre = document.querySelector('.resultTitre');
// var resultDescription = document.querySelector('.resultDescription');
// var envoi = document.querySelector('.envoi');
var newTitre = document.querySelector("#newTitre");
var newDescription = document.querySelector("#newDescription");


// je teste la copie d'écriture en direct
// newTitre.addEventListener('keyup', () => {
// 	resultTitre.innerHTML = newTitre.value;
// });
// NewDescription.addEventListener('keyup', () => {
// 	resultDescription.innerHTML = newDescription.value;
// });







// je fais une fonction de création de post
var listePosts = [];

function creerUnPost(titre, description) {
  var post = {
    "titre": titre,
    "description": description
  };
  listePosts.push(post);
}

// je fais une fonction pour créer une structure qui va contenir les titres et contenus
function creerPostHtml(post){
	
	// li
	var postHtml = document.createElement('li');

	// structure de titre
	var postTitreHtml = document.createElement('h3');
	// titre
	var postTitreText = document.createTextNode(post.titre);
	
	// titre dans h3
	postTitreHtml.appendChild(postTitreText);
	// titre dans structure (li/h3)
	postHtml.appendChild(postTitreHtml);
	// p
	var postDescriptionHtml = document.createElement('p');
	// structure de description
	var postDescriptionText = document.createTextNode(post.description);
	// description dans structure
	postDescriptionHtml.appendChild(postDescriptionText);
	// <li><h3>titre du post</h3><p>contenu du post</p></li>
	postHtml.appendChild(postDescriptionHtml);
	// on ajoute un bouton
	var comment = document.createElement('button');
	var commentText =document.createTextNode("Commenter");
	comment.appendChild(commentText);
	postHtml.appendChild(comment).className = "buttonRight";


	return postHtml;
}

// Déclarer une fonction qui vide un élément HTML de ses enfants
function viderElementHTML(elementHTML) {
  while (elementHTML.firstChild) {
    elementHTML.removeChild(elementHTML.firstChild);
  }
}

// Déclarer une fonction qui affiche une liste de posts dans le document HTML
function afficherMesPosts() {
  var mesPostsHtml = document.querySelector('#mesPosts');
  viderElementHTML(mesPostsHtml); 

  listePosts.forEach(function(post) {
    var postHtml = creerPostHtml(post);
    mesPostsHtml.appendChild(postHtml);

    var btn = document.querySelector('.buttonRight');
	btn.addEventListener('click', () => {
		console.log("pwet");
	var comment = document.createElement('input');
	var commentText = document.createTextNode("ceci est un truc");
	comment.appendChild(commentText);

	})
	
  });
}
// Déclarer une fonction de callback qui ajoute un nouveau post contenant les informations saisies par l'utilisateur
function actionCreerUnPost() {
  creerUnPost(newTitre.value, newDescription.value);
  afficherMesPosts();
  newTitre.value = '';
  newDescription.value = '';
 

}
afficherMesPosts();




