 import './songs.css'
 import {Another, Discover, DiscoverImg, ItemText }from './Card.styled'

export default function Card({item:{Image, body}}) {
  return(
 <div>
    <Another>
    <Discover>
      <DiscoverImg img src={`./assets/person/${Image}`}/>
     <ItemText>{body}</ItemText>
      </Discover>
    </Another>

 </div>)}
