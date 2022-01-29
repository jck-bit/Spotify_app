import React from 'react';
import './songs.css'
import { Favorite } from '@material-ui/icons';
import Footer from '../footer/Footer'



export default function Songs() {
  return <div className='sing'>
        <div className="singTop">
            <h1>
                Good Evening
            </h1>
        </div>
        <div className="singBottom">
            <div className="List">
                <ul className='myList'>
                    <li className="order">
                    <Favorite className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Liked songs</span>
                    </li>
                    <li className="order">
                    <Favorite className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Liked songs</span>
                    </li>
                    <li className="order">
                    <Favorite className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Liked songs</span>
                    </li>
                    <li className="order">
                    <Favorite className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Liked songs</span>
                    </li>
                    <li className="order">
                    <Favorite className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Liked songs</span>    
                    </li>                            
                    <li className="order">
                    <Favorite className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Liked songs</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="anotherBottom">
         <div className="header">
                <h1>Your Daily mixes</h1>
            </div>
            <div className="downer">
             <ul className='another_one'>
                <li className="school_bus">
                    <Favorite className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Liked songs</span>
                </li>
                <li className="school_bus">
                    <Favorite className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Liked songs</span>
                </li>
                <li className="school_bus">
                    <Favorite className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Liked songs</span>
                </li>
                </ul>
            </div>  
        </div>
        <hr/>
       <Footer />
  </div>;
}
