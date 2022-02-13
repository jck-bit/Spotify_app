import styled from "styled-components";

export const Wrapper =  styled.div`
 background-image:linear-gradient(rgb(43, 43, 100), rgb(27, 28, 31));
 height:66.8rem;

`

export const Bar = styled.div`
 position:absolute;
 top:50%;
 left:50%;
 transform:translate(-50%, -50%)
 
`

export const All = styled.div`
  height:400px;
  width:350px;
  border:1px solid black;
  border-radius:5px;
  padding:20px;
`

export const Search = styled.div`
   padding: 20px;

    & label{
        display:inline-block;
        margin: 10px 0px;
    }

  & input[type='text']{
    border-radius: 4px;
    font-size: 16px;
    padding: 10px;
    width: 100%;


  }
`

export const Theo = styled.img`
  height:90px;
  width:90px;
  border-radius:50%;
  object-fit:cover;
`

export const Down = styled.div`
  padding:20px; 
`
export const Button = styled.button`
  padding:10px 30px;
  cursor:pointer;
  font-size:15px;
`