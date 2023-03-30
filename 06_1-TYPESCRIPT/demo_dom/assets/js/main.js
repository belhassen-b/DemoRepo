/*
  Pour travailler avec le DOM en Typescript,
  il va falloir que l'on récupère notre élément de la
  même façon que lorsque l'on utilise le JS,
  à ceci près qu'il va falloir que l'on indique de quel
  type d'élément il s'agit afin de ne pas avoir de problèmes
  futurs via le typage de notre élément.
*/
const monInputTexteA = document.querySelector('#textInputA');
/*
  Si l'on veut par la suite manipuler l'évènement de notre input,
  il va falloir encore une fois spécifier le type de l'évènement
  pour bénéficier d'une auto-complétion et d'une compilation optimale.
*/
monInputTexteA.addEventListener('input', (e) => {
    /*
      Pour pouvoir avoir accès à la valeur de l'élément input depuis l'évènement, il va nous
      falloir informer le Typescript que le 'target' de notre évènement est de type Input.
      
      Pour réaliser cela, on passera par un casting de 'e.target', qui se fera de la sorte :
  
      const monElement = e.target as HTMLInputElement;
  
      Une fois casté, on pourrait avoir désormais accès à la valeur de l'Input :
  
      console.log(monElement.value);
  
      Bien sur, une syntaxe plus courte pour éviter la création d'une variable inutile sera préférée :
    */
    console.log(e.target.value);
});
/*
  Pour réaliser un import en Typescript, il n'y a pas besoin d'utiliser l'extension '.ts'
  à la fin du chemin menant au fichier à importer.

  Cependant, lorsque l'on veut travailler en temps réel avec Live Server ainsi que le mode --watch
  de notre compilateur de Typescript, il peut être intéressant de réaliser un import de la sorte :
*/
import Dog from "./classes/Dog.js";
import { DogSpecie } from "./enums/DogBreeds.js";
/*
  L'ajout de l'extension .js ne pose pas de soucis
  pour le développement et permet au mode 'watch' de s'exécuter normalement
*/
/*
  Imaginons désormais que l"on veuille créer une liste non ordonnée de Chiens dans notre page.

  Pour ce faire, il va d'abord nous falloir avoir accès à un Array de Dog, que l'on va réaliser de la sorte :
*/
const mesChiens = [];
/*
  Le type de notre variable étant un Array de Dog, le compilateur va nous obliger désormais à manipuler des chiens si
  l'on souhaite manipuler les données de l'Array :
*/
const newDog = new Dog("Bernie", DogSpecie.GERMAN_SHEPARD, 4);
mesChiens.push(newDog);
mesChiens.push(new Dog("Caramel", DogSpecie.LABRADOR, 7));
/*
  Pour pouvoir créer des élément dans notre liste non ordonnée, il va maintenant falloir
  récupérer la référence vers l'élément de liste non ordonnée et créer un nouvel élément de liste pour chaque chien.

  Il ne nous restera plus ensuite qu'à ajouter dans l'HTML de la liste non ordonnée les éléments de liste :
*/
const monULEl = document.querySelector("#ulA");
mesChiens.forEach(dog => {
    // Pour chaque chien, on créé un nouvel élément html de type <li></li>
    const nouvelLIEl = document.createElement('li');
    // Puis on défini le texte entre les balises
    nouvelLIEl.textContent = `${dog.name}`;
    // Et on ajoute un évènement de type 'click' que l'élément HTML
    nouvelLIEl.addEventListener('click', () => {
        console.log(`Woof! I'm ${dog.name}, a ${dog.age}yo ${DogSpecie[dog.breed]}!`);
    });
    // Il ne nous reste plus qu'à l'ajouter à la fin des éléments HTML contenu dans l'élément <ul></ul>,
    // soit juste avant sa balise fermante
    monULEl.appendChild(nouvelLIEl);
});
