const Counter = (props) => {
  const maxValue = props.maxValue
  const minValue = props.minValue
  const statName = props.statName
  const counterValue = props.counterValue

  const changeCounterValueHandler = (mode) => {
    if (mode === 'increment' && counterValue < maxValue) {
      props.onValueChange(counterValue + 1)
    } else if (mode === 'decrement' && counterValue > minValue ) {
      props.onValueChange(counterValue - 1)
    }
  }

  return (
    <div className="border border-light rounded py-1 p-3">
                <h5 className="text-center">{statName}</h5>
                <hr className="my-2"/>
                <div className="rounded-circle mx-auto d-flex align-items-center justify-content-center my-3" style={{backgroundColor: props.bgColor, width: "120px", height: "120px", position: "relative"}}>
                  <span style={{position: "absolute", fontSize: `${3 - counterValue.toString().length / 2}rem`, color: props.spanColor}}>{counterValue}</span>
                  <div className="d-flex w-100 justify-content-between align-self-end">
                    <button type="button" onClick={() => changeCounterValueHandler('decrement')} disabled={counterValue === minValue} style={{height: "30px", width: "30px", backgroundColor: props.buttonBgColor, color: props.buttonTextColor, fontSize: "0.8rem"}} className="d-flex justify-content-center align-items-center btn rounded-circle">-</button>
                    <button type="button" onClick={() => changeCounterValueHandler('increment')} disabled={counterValue === maxValue} style={{height: "30px", width: "30px", backgroundColor: props.buttonBgColor, color: props.buttonTextColor, fontSize: "0.8rem"}} className="d-flex justify-content-center align-items-center btn rounded-circle">+</button>
                  </div>
                </div>
              </div>
    
  )
}

export default Counter