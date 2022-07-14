import React from 'react'
import { useState } from 'react'

const FilterSort = () => {
  const [category, setCategory] = useState([])
  const handleCheckbox=(e)=>{
    const option = e.target.value
    
  }
  return (
    <>
      <div>Filter</div>
      <div>
        <input type="checkbox"  onChange={handleCheckbox} value="Novel" checked={category.includes("Novel")}></input>
        <label>novel</label>

      </div>
      <div>
        <input type="checkbox"
        onChange={handleCheckbox} value="Science" checked={category.includes("Science")}></input>
        <label>science</label>

      </div>
      <div>
        <input type="checkbox"  onChange={handleCheckbox} value="Math" checked={category.includes("Math")}></input>
        <label>Math</label>

      </div>
      <h3>Sort</h3>
    </>
  )
}

export default FilterSort