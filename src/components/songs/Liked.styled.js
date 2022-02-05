import styled from "styled-components";

export const MyList = styled.div`
 padding:10px;
 list-style: none;
 display:grid;
 grid-gap: 20px;
 grid-template-columns: repeat(4, 13.5rem);
`

export const Order = styled.div`
width: 13.5rem;
height: 5rem;
border-radius: 5px; 
display: flex;
box-shadow: 0px 4px 15px rgba(1, 1, 1, 10);
margin-bottom: 10px;

`

export const Icon = styled.div`
display:flex;
place-items:center;
border-radius:5px;
height: 5rem;
padding-right: 5px;
border-right: 1px solid transparent;

&:hover{
    cursor:pointer;
    opacity:0.9;
    transform:scale(0.99)
}

`

export const Img = styled.img`
 height:5rem;

 
`

export const Text = styled.div`
padding-left:10px;
`