import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { userOfThunk } from './Redux/Reducer'
import { Selectors } from './Redux/Reducer'
import './App.css'
const Data = () => {
    const dispatch = useDispatch()
    const useData = useSelector(Selectors)

    useEffect(()=>{
        dispatch(userOfThunk())
    },[])

console.log(useData)
  return (
    
    <div>
      {useData.map((item,index)=>{
        return (
        <div key={index}>
            <div>{item.name}</div>
            <div>{item.email}</div>
            <hr />
        </div>
        )
      })}
    </div>
  )
}

export default Data