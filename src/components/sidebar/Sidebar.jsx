import './sidebar.css'
import { Favorite, Home, LocalHospitalOutlined, Menu, PlaylistAdd, Search } from '@material-ui/icons';

export default function Sidebar() {
  return <div className='sidebar'>
      <div className="sidebarWrapper">
          <ul className="sidebarList">
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
                  <Favorite className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Liked songs</span>
              </li>
              <li className="sidebarListItem">
                  <Menu className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Your Library</span>
              </li>
          </ul>
      </div>
  </div>;
}
