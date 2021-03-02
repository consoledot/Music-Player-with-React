import './navigation.style.scss'
import {ReactComponent as ProfilePic} from '../../assets/profile-pic.svg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
const Navigation = ({mode})=>(
    <div className="navigation" style={{
        backgroundColor:`${mode? '#6c63ff':'#2b3945'}`
    }}>
       <div className="user-image">
           <ProfilePic className="image"/>
           <p>Abimbola</p>
       </div>
       <nav>
           <ul>
           <Link to="/"> <li><i className="fa fa-headphones" aria-hidden="true"></i>  <span>Discover</span></li></Link>
           <Link to="/search"><li><i className="fa fa-search" aria-hidden="true"></i>  <span>Search</span></li></Link>
           <Link to="/favorites"><li><i className="fa fa-heart" aria-hidden="true"></i>  <span>Favourite</span></li></Link>
           <Link><li> <i className="fa fa-play-circle" aria-hidden="true"></i> <span> PlayList</span></li></Link>
           <Link><li><i className="fa fa-align-left" aria-hidden="true"></i> <span> Charts</span></li></Link>
           </ul>
       </nav>
    </div>
)
const mapStateToProps=state=>({
    mode: state.mode
})

export default connect(mapStateToProps)(Navigation)