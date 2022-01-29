import React from 'react';
import './Topbar.css'
// import { Search, Person,Chat, Notifications} from '@material-ui/icons'

export default function Topbar() {
  return <div className='topbarcontainer'>
      <div className="topbarLeft">
        <span className='logo'>Spotify</span>
      </div>
      {/* <div className="topbarCenter">
        <div className="searchbar">
         <Search  className='searchIcon'/>
         <input placeholder="search fro music" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLinks">HomePage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Person />
          <div className="topbarIconBadge">1</div>
        </div>
        <div className="topbarIconItem">
          <Chat />
          <div className="topbarIconBadge">2</div>
        </div>
        <div className="topbarIconItem">
          <Notifications />
          <div className="topbarIconBadge">3</div>
        </div>
      </div> */}
      <img src="/assets/person/me.jpeg" alt="" className="topbarImg" />
  </div>
}
