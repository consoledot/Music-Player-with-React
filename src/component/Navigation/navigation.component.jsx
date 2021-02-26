import './navigation.style.scss'
import {ReactComponent as ProfilePic} from '../../assets/profile-pic.svg'
import {Link} from 'react-router-dom'

const Navigation = ()=>(
    <div className="navigation">
       <div className="user-image">
           <ProfilePic className="image"/>
           <p>Abimbola</p>
       </div>
       <nav>
           <ul>
               <li><Link to="/"><i className="fa fa-headphones" aria-hidden="true"></i>  Discover</Link></li>
               <li><Link to="/search"><i className="fa fa-search" aria-hidden="true"></i>  Search</Link></li>
               <li><Link><i className="fa fa-heart" aria-hidden="true"></i>  Favourite</Link></li>
               <li> <Link><i className="fa fa-play-circle" aria-hidden="true"></i>  PlayList</Link></li>
               <li><Link><i className="fa fa-align-left" aria-hidden="true"></i>  Charts</Link></li>
           </ul>
       </nav>
    </div>
)

export default Navigation