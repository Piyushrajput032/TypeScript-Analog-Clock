import React,{useEffect, useState,useLayoutEffect} from 'react'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import './clock.css'

const Timer = () => {
const [value, setValue] = useState(new Date());

useEffect(() => {
  const interval = setInterval(() => setValue(new Date()), 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
    return (
    <div >
        <h1>this is the time:</h1>
        <div className='container'>
        <Clock value={value} />
        </div>
    </div>
  )
}

const digital=()=>{
    //   const time=new Date();
//   const [clock,setClock] = useState(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
  
//   useEffect(()=>{
//     const digital=setInterval(()=>{
//         setClock(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
//       },1000);
//       return ()=>{
//         clearInterval(digital)
//       }
//   },[clock])
}

export default Timer