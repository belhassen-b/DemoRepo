const FirstComponent = () => {
  const maVariable = "Je suis du texte !"

  const maVariableBooleene = true

  return (
    <>
      <h1>FirstComponent</h1>
      <hr />
      <p>{maVariable}</p>
      {maVariableBooleene && <p>Ma variable booléenne est vraie</p>}
      {maVariableBooleene ? <p>Le booléen est vrai</p> : <p>Le booléen est faux</p>}
    </>
  )
}

export default FirstComponent