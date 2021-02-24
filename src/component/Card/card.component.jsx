import './card.style.scss'
import {connect} from 'react-redux'
import {setIndex,setStatus} from '../../redux/action'

const Card = ({image,title, index, setIndex,setStatus})=>{
    function changeTrack() {
        setIndex(index)
        setStatus(false)
    }
    return(
    <div className="music-card" onClick={()=> index ? changeTrack(): null}>
        <div className="image-card">
             {image && <img src={`${image}`} alt="music"/>}
        </div>
        <div className="text">
        {title && <p>{title}</p>}
        </div>
     </div>
)
    }
    const mapDispatchToProps = dispatch=>({
        setIndex: index => dispatch(setIndex(index)),
        setStatus: status => dispatch(setStatus(status))
    })

export default connect(null,mapDispatchToProps)(Card)