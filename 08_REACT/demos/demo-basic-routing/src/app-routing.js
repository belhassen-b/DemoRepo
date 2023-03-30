import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./routes/AboutPage";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";

/*
  Pour créer la fonctionnalité de routing de notre application, 
  il va nous falloir créer un élément resultant du passage par la fonction
  'createBrowserRouter()'. Cette fonction va demander en paramètres des routes, 
  qui seront simplement des objets contenant divers attributs: 
    - path: Le chemin de la route amenant à l'élément React
    - element: L'élément JSX à rendre en cas de chemin concluant
    - children: Ici se trouveront les autres routes enfant de la route actuelle. 
      Ces routes seront affichées grâce à l'utilisation dans le composant parent de l'élement '<Outlet />'
    - errorElement: Si la route entrée par l'utilisateur n'est pas parmi les routes disponibles, alors ce sera l'élément errorElement qui sera affiché
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      }
    ]
  }  
])

export default router