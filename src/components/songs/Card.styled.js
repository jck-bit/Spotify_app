import styled from "styled-components";

export const Another = styled.div`
align-item:center;
padding:10px;
list-style: none;
display:grid;
grid-gap: 20px;
grid-template-columns: repeat(5, 10rem);
`
export const Discover = styled.div`
  margin-right:20px;
  
  &:hover{
    opacity:0.9;
    transform:scale(0.99)
}

`


export const DiscoverImg = styled.img`

height: 9rem;
width: 9rem;
border-radius: 50%;
object-fit: cover;
margin-bottom:10px;

&:hover{
  cursor:pointer

`

export const ItemText = styled.span`
margin-left:30px;
`

