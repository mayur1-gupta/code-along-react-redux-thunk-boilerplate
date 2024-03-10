import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { userThunk } from './Redux/Reducer'
import { useSelectors } from './Redux/Reducer'
import './App.css'
const Data = () => {
    const dispatch = useDispatch()
    const useData = useSelector(useSelectors)

    useEffect(()=>{
        dispatch(userThunk())
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