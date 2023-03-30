import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, decrementByAmount, increment, incrementByAmount } from "./counterSlice"

const Counter = () => {
  const byAmountRef = useRef()

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counterValue)

  const decrementHandler = () => {
    const action = decrement()

    dispatch(action)
  }

  const changeCounterByHandler = (mode) => {
    const byAmount = +byAmountRef.current.value

    if (mode === 'increment') {
      dispatch(incrementByAmount(byAmount))
    } else {
      dispatch(decrementByAmount(byAmount))
    }
  } 


  return (
    <>
    <h3>Counter</h3>
    <hr />
      <div className="d-flex justify-content-center align-items-center mx-auto border border-info rounded-circle" style={{height:"250px", width: "250px", position: "relative"}}>
        <span style={{position: "absolute", fontSize: `${5 - counter.toString().length / 2}rem`}}>{counter}</span>
        <br />
        <div className="w-100 d-flex justify-content-between align-self-end">
          <button className="btn btn-primary rounded-circle d-flex justify-content-center align-items-center" style={{height: "80px", width: "80px", fontSize: "2.5rem"}} onClick={decrementHandler} disabled={counter === 0}>-</button>
          <button className="btn btn-primary rounded-circle d-flex justify-content-center align-items-center" style={{height: "80px", width: "80px", fontSize: "2.5rem"}} onClick={() => dispatch(increment())}>+</button>
        </div>
        <hr />
      </div>
      <hr />
      <h5 className="text-center">Change by</h5>
      <div className="w-50 mx-auto  d-flex justify-content-center">
          <button className="px-2 py-2 btn btn-info rounded-circle" onClick={() => changeCounterByHandler("decrement")}>{"<<"}</button>
          <input type="text" className="text-center form-control text-light bg-dark border-info mx-3" ref={byAmountRef} />
          <button className="px-2 py-2 btn btn-info rounded-circle" onClick={() => changeCounterByHandler("increment")}>{">>"}</button>
      </div>
    </>
  )
}

export default Counter