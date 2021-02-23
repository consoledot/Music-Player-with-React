import './navigation.style.scss'
import {ReactComponent as ProfilePic} from '../../assets/profile-pic.svg'

const Navigation = ()=>(
    <div className="navigation">
       <div className="user-image">
           <ProfilePic className="image"/>
           <p>Abimbola</p>
       </div>
       <nav>
           <ul>
               <li><i className="fa fa-headphones" aria-hidden="true"></i>  Discover</li>
               <li><i className="fa fa-search" aria-hidden="true"></i>  Search</li>
               <li><i className="fa fa-heart" aria-hidden="true"></i>  Favourite</li>
               <li> <i className="fa fa-play-circle" aria-hidden="true"></i>  PlayList</li>
               <li><i className="fa fa-align-left" aria-hidden="true"></i>  Charts</li>
           </ul>
       </nav>
    </div>
)

export default Navigation