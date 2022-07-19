import React from 'react'

const Bookcard = ({bookData}) => {
  return (
    <div>
        <div>
        <img src={bookData.cover_photo}  style={{width:"100%"}} alt=""/>
        <div>{bookData.book_name}</div>
        <div>{bookData.release_year}</div>
        <div>{bookData.category}</div>
        <div></div>
        </div>

    </div>
  )
}

export default Bookcard

