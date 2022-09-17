import React from 'react'

function SearchCity() {
  return (
    <form action="">
      <label htmlFor="city">City: </label>
      <input type="text" id="city" placeholder="City Name" required />
      <button type="submit" >search weather</button>
    </form> 
  )
}

export default SearchCity