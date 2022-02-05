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
  return <div className='sing'>
      <div className="whole">
        <div className="singTop">
           <div className="H1">
               <h1>
                   Good Evening
               </h1>
           </div>
        </div>
        <div className="singBottom">
            <div className="List">
            <MyList>
               {Good.map((item, index) =>{
               return(
                 <Liked key={index} item={item}/>
               )
               })}
            </MyList>
            
                {/* <ul className='myList'>
                    <li className="order">
                        <div className="Icon">
                          <img src="/assets/person/like.jpeg" alt="" className="iconImg" />
                        </div>
                    <span className='sidebarListItemText'>Liked songs</span>
                    </li>
                    <li className="order">
                        <div className="Icon">
                          <img src="/assets/person/nf.jpg" alt="" className="iconImg" />
                        </div>
                    <span className='sidebarListItemText'>NF Real Music</span>
                    </li>
                    <li className="order">
                        <div className="Icon">
                          <img src="/assets/person/selected.jpg" alt="" className="iconImg" />
                        </div>
                    <span className='sidebarListItemText'>Selected</span>
                    </li>
                    <li className="order">
                        <div className="Icon">
                          <img src="/assets/person/jb.jpg" alt="" className="iconImg" />
                        </div>
                    <span className='sidebarListItemText'>This is Justin Bieber</span>
                    </li>
                    <li className="order">
                        <div className="Icon">
                          <img src="/assets/person/2015.jpg" alt="" className="iconImg" />
                        </div>
                    <span className='sidebarListItemText'>2015 Playlist</span>
                    </li>
                    <li className="order">
                        <div className="Icon">
                          <img src="/assets/person/life_sucks.jpeg" alt="" className="iconImg" />
                        </div>
                    <span className='sidebarListItemText'>Life Sucks</span>
                    </li>
                    <li className="order">
                        <div className="Icon">
                          <img src="/assets/person/download.jpeg" alt="" className="iconImg" />
                        </div>
                    <span className='sidebarListItemText'>2010 Playlist</span>
                    </li>
                </ul> */}
            </div>
        </div>
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
  </div>;
}