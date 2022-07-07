
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getBooks } from '../redux/action';
import BookLists from '../Components/BookLists';
import FilterSort from '../Components/FilterSort';
import styled from 'styled-components';
const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(state=>state.books)
  useEffect(() => {
    if(books.length===0){
      dispatch(getBooks())
    }
    
  },[]);
  console.log(books);
  
  return (
    <div>
      <h2>books</h2>
      <BookPageWrapper>
        <FilterSortWrapper>
      <FilterSort/>
      </FilterSortWrapper>
      <BookListWrapper>
      <BookLists books={books}/>
      </BookListWrapper>
      </BookPageWrapper>
    </div>
  )
}

export default Books
const BookPageWrapper=styled.div`
display:flex;`;

const FilterSortWrapper=styled.div`
width:300px;
border:1px solid red;
`;
const BookListWrapper=styled.div`
border:1px solid black;
display:grid;
grid-template-coloumns:repeat(auto-fit, minmax(310px,max-content));
grid-gap:16px;
padding:initial;
justify-content:center;

width:100%;`