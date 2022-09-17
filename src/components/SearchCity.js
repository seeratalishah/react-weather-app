import React, { useState } from 'react'

function SearchCity() {
  const [city, setCity] = useState('');
  return (
    <form action="">
      <label htmlFor="city">City: </label>
      <input type="text" id="city" placeholder="City Name" value={city} onChange={(e)=>setCity(e.target.value)} required />
      <button type="submit" >search weather</button>
    </form> 
  )
}

export default SearchCity