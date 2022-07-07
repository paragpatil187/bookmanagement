import React from 'react'
import Bookcard from './Bookcard'
import styled from 'styled-components'

const BookLists = ({books}) => {
  return (
    <div>
        <div>{books.length>0 && books.map((singleBook)=>{
            return <BookCardWrapper key={singleBook.id}><Bookcard bookData={singleBook}/></BookCardWrapper>
        })}

        </div>
    </div>
  )
}

export default BookLists
const BookCardWrapper = styled.div`
border:1px solid blue;
padding:5px;
width:310px;`;