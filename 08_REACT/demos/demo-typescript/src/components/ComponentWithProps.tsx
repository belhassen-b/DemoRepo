/*
  Lorsque l'on travaille avec des composants React en Typescript, il va nous falloir dire quelles seront les props envoyées par le / les parents vers ce composant. 

  L'utilisation du type 'any' est possible, mais est à éviter au maximum. Il vaut mieux utiliser une interface ou un type, de sorte à pouvoir sécuriser le nom et le type des props envoyées par le parent à ce composant.
*/

interface Props {
  leTexte: string;
  leNombre?: number;
  lesNoms?: string[];
  onButtonClick?: () => void
  onSayHi?: (nom: string) => void
}

const ComponentWithProps = (props: Props) => {
  return (
    <>
      <h1>ComponentWithProps</h1>
      <hr />
      <p>{props.leTexte}</p>
      {props.leNombre && <p>{props.leNombre}</p>}
      {props.lesNoms && (
      <ul>
        {props.lesNoms.map((valeur, index) => <li key={index}>{valeur}</li>)}
      </ul>
        )}
      {props.onButtonClick && <button onClick={props.onButtonClick}>Click me!</button>}
      {props.onSayHi && <button onClick={() => props.onSayHi && props.onSayHi("Bernard")}>Say hi!</button>}
    </>
  )
}

export default ComponentWithProps