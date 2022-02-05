import React from 'react';
import { School, Main , DailyImg, DownList } from './Mixes.styled'

export default function Mixes({item:{image, body}}) {
  return(
     <School>
         <Main>
             <DailyImg img src={`./assets/person/${image}`}/>
             <DownList>{body}</DownList>
         </Main>
     </School>
  );
}
