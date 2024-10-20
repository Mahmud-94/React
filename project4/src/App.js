import React from 'react'
import { fruits } from './fruits'
import Button1 from './Button1';

const item =fruits.map(fruit =>
    <li key={fruit.id} style={{
        color:fruit.local? 'Green':'Red'
    }}>{fruit.name}({fruit.id})={fruit.price}</li>
   

)
function MyButton(){
    function HandleClick(){
        alert ("You have clicked");
    }
    return(
        <button className='blue' onClick={HandleClick}>Click here</button>
    )
}



    const user = {
        name: "Hasan",
        imgurl: "images/img3.png",
        imgsize: 100
    }


export default function App() {
  return (
    <>
    <div>Welcome to my app</div>
    <MyButton/>

    <h1>{user.name}</h1>
    <img src={user.imgurl} alt={user.name} style={{width:'200px'}}></img>
    <hr/>
    <ul>{item}</ul>
    <Button1/>
    <Button1/>
   
    </>
  )
}
