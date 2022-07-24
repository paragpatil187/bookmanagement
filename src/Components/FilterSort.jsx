import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterSort = () => {
  const [category, setCategory] = useState([])
  const[searchParams,setSearchParams]=useSearchParams()
  const[sortBy,setSortBy]=useState("")
  const handleCheckbox=(e)=>{
    const option = e.target.value;
    //add or remove
    let newcat=[...category];
    if(category.includes(option)){
      newcat.splice(newcat.indexOf(option),1);

    }
    else{
      newcat.push(option)

    }
    setCategory(newcat)
    
  };
  useEffect(() => {
    if(category){
      setSearchParams({ctgry:category})

    }
  
   
  }, [category,searchParams])
  
  console.log(category)
  const handleSort=(e)=>{
    setSortBy(e.target.value)

  }
  useEffect(()=>{
    if(sortBy){
      const params = {
      searchParams.getAll("category"),
       sortBy,
      }
      setSearchParams(params)
    }
  },[sortBy,setSearchParams])
  console.log(searchParams)
  return (
    <>
      <div>Filter</div>
      <div>
        <input type="checkbox"  onChange={handleCheckbox} value="Novel" defaultChecked={category.includes("Novel")}></input>
        <label>novel</label>

      </div>
      <div onChange={handleSort}>
        <input type="checkbox"
        onChange={handleCheckbox} value="Science" defaultChecked={category.includes("Science")}></input>
        <label>science</label>

      </div>
      <div>
        <input type="checkbox"  onChange={handleCheckbox} value="Math" defaultChecked={category.includes("Math")}></input>
        <label>Math</label>

      </div>
      <h3>Sort</h3>
      <div>
        <input type="radio" value="asc" name="sortBy" defaultChecked={sortBy === "asc"}/>Ascending
        <input type ="radio" value="desc" name="sortBy" defaultChecked={sortBy ==="desc"}/>Descending

      </div>

    </>
  )
}

export default FilterSort