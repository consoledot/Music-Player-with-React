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
               <li><i class="fa fa-headphones" aria-hidden="true"></i>  Discover</li>
               <li><i class="fa fa-search" aria-hidden="true"></i>  Search</li>
               <li><i class="fa fa-heart" aria-hidden="true"></i>  Favourite</li>
               <li> <i class="fa fa-play-circle" aria-hidden="true"></i>  PlayList</li>
               <li><i class="fa fa-align-left" aria-hidden="true"></i>  Charts</li>
           </ul>
       </nav>
    </div>
)

export default Navigation