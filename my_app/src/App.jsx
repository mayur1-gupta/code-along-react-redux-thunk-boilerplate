import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listSel, listAction } from './Redux/Reducer'

function App() {
  const Dispatch = useDispatch();
  const NumCount = useSelector(listSel)
    return (
      <>
        <h1>{NumCount}</h1>
        <button onClick={() => Dispatch(listAction.inc())}>Like</button>
        <button onClick={() => Dispatch(listAction.dec())}>Unlike</button>
      </>
    )
  }
  
  export default App