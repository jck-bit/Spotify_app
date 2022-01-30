import React from 'react';
import './songs.css'
import { Favorite } from '@material-ui/icons';
import Footer from '../footer/Footer'



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
                <ul className='myList'>
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
                </ul>
            </div>
        </div>
        </div>
        <div className="anotherBottom">
         <div className="header">
                <h1>Your Daily mixes</h1>
            </div>
            <div className="downer">
             <ul className='another_one'>
               <li className="school_bus">
                   <div className="main">
                      <img src="/assets/person/lazer.jpeg" alt="" className="DailyImg" />
                   </div>
                    <span className='DownList'>Major Lazer</span>
                </li>
                <li className="school_bus">
                   <div className="main">
                      <img src="/assets/person/Bandit.jpeg" alt="" className="DailyImg" />
                   </div>
                    <span className='DownList'>Clean Bandit Radio </span>
                </li>
                <li className="school_bus">
                   <div className="main">
                      <img src="/assets/person/julia.jpeg" alt="" className="DailyImg" />
                   </div>
                    <span className='DownList'>julia Michaels</span>
                </li>
                <li className="school_bus">
                   <div className="main">
                      <img src="/assets/person/nf.jpg" alt="" className="DailyImg" />
                   </div>
                    <span className='DownList'>NF Real Music Radio</span>
                </li>
                <li className="school_bus">
                   <div className="main">
                      <img src="/assets/person/edm.jpeg" alt="" className="DailyImg" />
                   </div>
                    <span className='DownList'>EDM Radio</span>
                </li>
                <li className="school_bus">
                   <div className="main">
                      <img src="/assets/person/selena.jpeg" alt="" className="DailyImg" />
                   </div>
                    <span className='DownList'>This is Selena Gomez</span>
                </li>
                <li className="school_bus">
                   <div className="main">
                      <img src="/assets/person/drake.jpeg" alt="" className="DailyImg" />
                   </div>
                    <span className='DownList'>Trap Music</span>
                </li>
                <li className="school_bus">
                   <div className="main">
                      <img src="/assets/person/weekend.jpeg" alt="" className="DailyImg" />
                   </div>
                    <span className='DownList'>Hit Rewind</span>
                </li>
                </ul>
            </div>  
            <div className="header">
                <h1>Discover </h1>
            </div>
            <div className="downer">
             <ul className='another_one'>
                <li className="Discover">
                    <img src="/assets/person/shin.jpeg" alt=""  className='DiscoverImg'/>
                    <span className='sidebarListItemText'>Nyashinski</span>
                </li>
                <li className="Discover">
                    <img src="/assets/person/charlie.jpeg" alt=""  className='DiscoverImg'/>
                    <span className='sidebarListItemText'>Charli Puth</span>
                </li>
                <li className="Discover">
                    <img src="/assets/person/tion.jpeg" alt=""  className='DiscoverImg'/>
                    <span className='sidebarListItemText'>Tion Wayne</span>
                </li>
                <li className="Discover">
                    <img src="/assets/person/sigrid.jpeg" alt=""  className='DiscoverImg'/>
                    <span className='sidebarListItemText'>Sigrid</span>
                </li>
                <li className="Discover">
                    <img src="/assets/person/shawn.jpeg" alt=""  className='DiscoverImg'/>
                    <span className='sidebarListItemText'>Shawn Mendes</span>
                </li>
                </ul>
            </div>  
        </div>
        {/* <hr/> */}
       {/* <Footer /> */}
  </div>;
}
