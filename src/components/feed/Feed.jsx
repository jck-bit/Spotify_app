import Songs from '../songs/Songs';
import './feed.css'

export default function Feed() {
  return <div className='feed'>
      <div className="feedWrapper">
      <Songs/>
      </div>
  </div>;
}
