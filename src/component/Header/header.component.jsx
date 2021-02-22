import './header.style.scss'
import {ReactComponent as HeaderImage} from '../../assets/header-image.svg'

const Header = ()=>(
    <div className="header">
        <div className="header-image">
            <HeaderImage className="image"/>
        </div>
        <div className="header-text">
            <h1> Your favourite tunes</h1>
            <h3>All 🌞 and 🌙</h3>
        </div>
    </div>
)

export default Header