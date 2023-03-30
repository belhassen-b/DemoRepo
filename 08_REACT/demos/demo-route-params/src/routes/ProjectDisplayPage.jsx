import { Navigate, useParams, useSearchParams } from "react-router-dom"

const ProjectDisplayPage = () => {
  // const objParams = useParams()
  // const { blabla } = objParams

  /*
    Il est possible au niveau de nos routes de pouvoir avoir un paramètre de route 
    obligatoire mais dynamique. Pour ce faire, et le récupérer au sein du composant, il faut utiliser le 
    hook useParams() qui va nous renvoyer un objet géant contenant toutes les variables de route fixée au niveau du composant router
  */
  const { blabla } = useParams()
  const [searchParams] = useSearchParams()

  /*
    A côté de ça, il est possible d'utiliser des paramètres de requête optionnels,
    qui seront ajouté de façon falcultative à la route. 

    LA route, si celle-ci est définie dans le routing comme étant '/contacts/:contactId'
    sera valide qu'elle soit '/contacts/125' ou qu'elle soit '/contacts/125?mode='edit'

    Il sera cependant possible de traiter et de récupérer le mode via la syntaxe suivante :
  */
  const mode = searchParams.get('mode')
  const toto = searchParams.get('toto')

  if (blabla === "125") {
    return (
      <>
        <h3>Project avec id {blabla}</h3>
        <hr />
        <h5>Mode = {mode}</h5>
        <h5>toto = {toto}</h5>
      </>
    )
  } else {
    return <Navigate to={"/"} />
  }
}

export default ProjectDisplayPage