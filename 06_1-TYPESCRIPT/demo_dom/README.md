# Utiliser le compilateur Typescript

Pour utiliser le compilateur Typescript, il nous faut d'abord avoir Node.js d'installé sur notre machine. Pour ce faire, il faut aller sur le site de Node et télécharger la version la plus récente 

[Node.js](https://nodejs.org/en/)

Suite à cela, il nous faudra en vérifier l'installation dans un terminal : 

```bash
node -v
```

Ceci fait, il nous faut installer (idéalement de façon globale) le compilateur Typescript via la commande 

```bash
npm install -g typescript
```

Cette commande effectuée, il nous sera désormais possible, dans un projet, de réaliser une initialisation d'un fichier de configuration du compilateur : `tsconfig.json`. Pour l'obtenir, à la racine de notree projet, nous pouvons utiliser la commande du terminal :

```bash
tsc --init
```

Cette commande créera pour nous un fichier de config. Dans ce fichier, il nous faudra idéalement avoir une structure semblable à celle ci: 

```json
{
  "compilerOptions": {
    "target": "ES6",
    "rootDir": "./chemin/entree/du/ts",
    "outDir": "./chemin/de/sortie/du/js",
  }
}
```

Par la suite, il nous faudra donc idéalement avoir nos fichiers Typescript au bon endroit et cibler le bon endroit pour le chemin vers notre fichier `main.js` dans la balise **src** de la page HTML.

Il ne nous restera plus, lors du développement, de remplacer temporairement les imports dans le Typescript par des import fournissant l'extension `.js` à nos fichiers, par exemple : 

```ts
import MyClasse from './chemin/vers/Classe.js'
```

Il va falloir, pour lancer la compilation en temps réel durant le développement, executer la commande du terminal : 

```bash
tsc -w
```

### Erreur : Impossible d'executer des scripts dans le terminal Windows

Pour résoudre ce problème, il convient de lancer une console Powershell en tant qu'administrateur et d'y entrer la ligne de commande suivante : 

```powershell
Set-ExecutionPolicy RemoteSigned
```

Un message va vous demander si vous voulez l'appliquer, choisissez l'option **Pour tous** via l'entrée du caractère **T**.
