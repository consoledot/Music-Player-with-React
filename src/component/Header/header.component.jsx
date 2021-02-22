import './header.style.scss'
import {ReactComponent as HeaderImage} from '../../assets/header-image.svg'

const Header = ()=>(
    <div className="header">
        <div className="header-image">
            <HeaderImage className="image"/>
        </div>
        <div className="header-text">
            <h2>All your favourite tunes</h2>
            <p>All 🌞 and 🌙</p>
        </div>
    </div>
)

export default Header