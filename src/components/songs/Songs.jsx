import React from 'react';
import './songs.css'
import content from '../content';
import Card from './Card';
import { Another } from './Card.styled';
import Daily from './Daily';
import Mixes from './Mixes';
import Good from './Good';
import Liked from './Liked';
import { MyList } from './Liked.styled';


export default function Songs() {
  return (
   <>
      <div className="whole">
           <div className="H1"> 
               <h1>
                   Good Evening
               </h1>
           </div>
       
  
            <MyList>
               {Good.map((item, index) =>{
               return(
                 <Liked key={index} item={item}/>
               )
               })}
            </MyList>
       

       </div>
        <div className="anotherBottom">
         <div className="header">
                <h1>Your Daily mixes</h1>
            </div>
            
            <Another>
            {Daily.map((item, index) =>{
                  return(
                     <Mixes key={index} item={item}/>
                  )
              })}
            </Another>
              
            

            <div className="header">
                <h1>Discover </h1>
            </div>
        </div>

       <Another>
       {content.map((item, index) =>{
                return (
                   <Card key={index} item={item}/>
                )
            })}
       </Another>
  </>
  );
}
