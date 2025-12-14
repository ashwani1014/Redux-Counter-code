import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from './Feature/counter/counterslice'

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
        <br />

        <span>count : {count}</span>
        <br /><br />        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br />
        <br />
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </>
  )
}

export default App;
