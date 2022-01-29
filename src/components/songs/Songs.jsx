import React from 'react';
import './songs.css'
import { Favorite } from '@material-ui/icons';


export default function Songs() {
  return <div className='sing'>
        <div className="singTop">
            <h1>
                Good Evening
            </h1>
        </div>
        <div className="singBottom">
            <div className="myList">
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
            <h1>Your daily mixes</h1>
        </div>
  </div>;
}
