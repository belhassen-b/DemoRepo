import { useRef, useState } from "react"
import Counter from "./Counter"

const MainComponent = () => {
  const startValueRef = useRef()

  const [counters, setCounters] = useState([])

  const submitFormHandler = (event) => {
    event.preventDefault()

    setCounters([...counters, +startValueRef.current.value])
  }

  const deleteACounter = (counterId) => {
    setCounters([...counters.slice(0, counterId), ...counters.slice(counterId + 1)])
  }


  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-6 offset-3 bg-dark rounded p-3 text-light">
          <h1>MainComponent</h1>
          <hr />
          <form onSubmit={submitFormHandler}>
            <div className="mb-3">
              <label htmlFor="counterValue" className="form-label">Start value: </label>
              <input type="number" className="form-control" id="counterValue" ref={startValueRef} required/>
            </div>
            <div className="text-end">
              <button className="btn btn-outline-light">Add a Counter</button>
            </div>
          </form>
          <hr />
          <h3>Counters</h3>
          {counters.length === 0 ? (
            <p>Il n'y a pas de compteur !</p>
          ) : (
            <>
              {counters.map((value, index) => <Counter key={index} startValue={value} deleteCounter={() => deleteACounter(index)} />)}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default MainComponent