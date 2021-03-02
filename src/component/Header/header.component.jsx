import './header.style.scss'
import {ReactComponent as HeaderImage} from '../../assets/header-image.svg'
import {connect} from 'react-redux'
import {setMode} from '../../redux/action'
const Header = ({setMode, mode})=>(
    <div className="header" style={{
        backgroundColor:`${mode? '#ffb5a7':'#2b3945'}`
    }}>
        <div className="header-image">
            <HeaderImage className="image"/>
        </div>
        <div className="header-text">
            <h1> Your favourite tunes</h1>
            <h3>All <span onClick={()=> setMode(true)}>🌞</span> and <span onClick={()=> setMode(false)}>🌙</span></h3>
        </div>
    </div>
)
const mapDispatchToProps = dispatch=>({
    setMode: mode=> dispatch(setMode(mode))
})
const mapStateToProps = state=>({
    mode: state.mode
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)