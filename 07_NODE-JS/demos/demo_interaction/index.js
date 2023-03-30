import { Ihm } from "./classe/ihm.js";

/*
###################################################################
##         Utilisation de l'import au lieu de require       #######
###################################################################
Necessite de rajouter :
    "type": "module",   
au fichier package.json
*/

const ihm = new Ihm()
ihm.menu()