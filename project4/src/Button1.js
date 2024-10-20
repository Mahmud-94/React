import React, {useState} from 'react'

export default function Button1() {
    const [count, setcount] =useState(0);

    function Handleclick(){
        setcount(count+1);
    }


  return (
    <>
    <button onClick={Handleclick}>Click here</button> <br/>
    You have clicked {count} times.
    <br/><br/><br/><br/>
    
    </>
  )
}
