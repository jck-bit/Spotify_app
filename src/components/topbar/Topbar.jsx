import React from 'react';
import './Topbar.css'

export default function Topbar() {
  return <div className='topbarcontainer'>
      <div className="topbarLeft">
        <span className='logo'>Spotify</span>
      </div>
      <div className="topbarCenter"></div>
      <div className="topbarRight"></div>
  </div>;
}
