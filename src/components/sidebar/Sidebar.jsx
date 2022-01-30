import './sidebar.css'


import { Favorite, Home, LocalHospitalOutlined, Menu, Search } from '@material-ui/icons';

export default function Sidebar() {
  return <div className='sidebar'>
      <div className="sidebarWrapper">
          <ul className="sidebarList">
              {/* <li className="sidebarListItem">
                  <div className="home">
                  <img src="assets/person/spotify.jpeg" alt="" className="spotify" />
                  <span className='next'>Spotify</span>
                  </div>
              </li> */}
              <li className="sidebarListItem">
                  <Home className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Home</span>
              </li>
              <li className="sidebarListItem">
                  <Search className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Search</span>
              </li>
              <li className="sidebarListItem">
                  <LocalHospitalOutlined className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Create Playlist</span>
              </li>
              <li className="sidebarListItem">
                  <Favorite htmlColor='blue' className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Liked songs</span>
              </li>
              <li className="sidebarListItem">
                  <Menu className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Your Library</span>
              </li>
          </ul>
         <div className="main">
          {/* <hr className='sidebarHr'/> */}
          <ul className='sidebarSongList'>
              <li className="sidebarSong">
                  <img src="/assets/person/download.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">2010's mix</span>
              </li>
              <li className="sidebarSong">
                  <img src="/assets/person/selected.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">selected</span>
              </li>
              <li className="sidebarSong">
                  <img src="/assets/person/future.png" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Future House</span>
              </li>
              <li className="sidebarSong">
                  <img src="/assets/person/2015.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Top Hits 2015</span>
              </li>
              <li className="sidebarSong">
                  <img src="/assets/person/me.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Uk drill</span>
              </li>
              <li className="sidebarSong">
                  <img src="/assets/person/life_sucks.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Life sucks</span>
              </li>
              <li className="sidebarSong">
                  <img src="/assets/person/jb.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Hit Rewind</span>
              </li>
              <li className="sidebarSong">
                  <img src="/assets/person/nf.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">NF Real Music</span>
              </li>
              <li className="sidebarSong">
                  <img src="/assets/person/rihanna.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">2000's mix</span>
              </li>
              <li className="sidebarSong">
                  <img src="/assets/person/nf.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">NF Real Music</span>
              </li>
              
          </ul>
       </div>
      </div>
  </div>;
}
