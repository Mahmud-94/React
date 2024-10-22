import React, {useState} from 'react'

export default function App2() {
    const [car, setCar] = useState({
            model: "Toyota",
            color: "red",
            year: "1945",
            price: "5000000 Tk"

    });

    const handleChange = () =>{
        setCar(oldinfo => {
            return {
                ...oldinfo, color:"blue", engine : "2500hp"
            }
        })
    }
    console.log(car)
  return (
    <>
    <h1>Car information</h1>
    <p>
        Model: {car.model} <br /> Color: {car.color} <br /> Year : {car.year} <br /> Price : {car.price}
    </p>

    <button onClick={handleChange}>Click here</button>
    
    </>
  )
}
