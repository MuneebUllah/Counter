import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import {  useEffect, useReducer, useState } from 'react';
import Reducer from './Reducer';
const App=()=>{
  const initalState = 0;
  const [state,dispatch] = useReducer(Reducer,initalState)
  return (
    <div className="App">
    <p>{state}</p>
    <button onClick={()=>dispatch({type:"decre"})}>decre</button>
     <button onClick={()=>dispatch({type:"incre"})}>incre</button>
     <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  );
}

export default App;
