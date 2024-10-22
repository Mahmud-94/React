import React, {useState} from 'react'

export default function App3() {
    const [profile, setProfile] = useState({
            name: "",
            email: "",
            address: "",
            contact: ""

    });

    const handleChange = (event) =>{
        setProfile(previousinfo => {
            return {
                ...previousinfo, [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit=(e) =>{
        e.preventDefault();
        let output = profile.name + '\n';
        output += profile.email + '\n' ;
        output += profile.address + '\n' ;
        output += profile.contact + '\n' ;

        alert (output);
    }
    // console.log(profile);
    
  return (
    <>
    <h1>profile information</h1>
    <p>
       <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name" id="" value={profile.name} onChange={handleChange} placeholder='Enter name'/> <br />

        <input type="text" name="email" id="" value={profile.email} onChange={handleChange} placeholder='Enter email'/><br />
        <textarea name="address" id="" value={profile.address} onChange={handleChange} placeholder='Enter address'></textarea><br />
        
        <input type="text" name="contact" id="" value={profile.contact} onChange={handleChange} placeholder='Enter contact'/><br />

        <button>Submit</button>
       </form>
    </p>

    

    
    
    </>
  )
}
