import React, {useState} from 'react'

export default function App1() {
    const [search_term, setSearchTerm] = useState();
    
    function searchFunc(){
        alert (search_term);
    }


  return (
    <>
    <form>
        <input type="text" value={search_term} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Enter something' />

        <button type='button' onClick={searchFunc}>Search</button>
    </form>
        </>
  )
}
