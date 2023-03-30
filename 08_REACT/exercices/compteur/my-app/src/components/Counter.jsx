import { useEffect, useState } from "react"

const Counter = (props) => {
  const [currentValue, setCurrentValue] = useState(props.startValue)

  useEffect(() => {
    let myInterval = setInterval(() => {
      setCurrentValue(currentValue + 1)
      console.log(`startValue: ${props.startValue}`)
    }, 1000)

    return () => {
      if (myInterval) {
        clearInterval(myInterval)
        myInterval = undefined
      }
    }
  }, [currentValue, props.startValue])

  return (
    <div className="my-2 d-flex justify-content-between align-items-center border border-info rounded p-2 px-4">
      <p className="w-100 text-center display-6">{currentValue}</p>
      <button className="btn btn-danger" onClick={props.deleteCounter}>Delete</button>
    </div>
  )
}

export default Counter