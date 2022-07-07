import axios from "axios";
import * as types from "./actionTypes"
const getBooks=()=>(dispatch)=>{
    dispatch({type:types.GET_BOOK_REQUEST})
    axios
    .get("/books")
    .then((r)=>
        dispatch({type:types.GET_BOOK_SUCCESS,payload:r.data})
    ).catch((e)=>{
        dispatch({type:types.GET_BOOK_FAILURE})
    })
    

}
export {getBooks}