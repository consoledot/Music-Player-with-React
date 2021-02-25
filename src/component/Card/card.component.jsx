import './card.style.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setIndex,setStatus,setAlbumArt} from '../../redux/action'

const Card = ({image,title, index,id, setIndex,setStatus, match, history,setAlbumArt})=>{
    setAlbumArt(image)
    function changeTrack() {
        setIndex(index)
        setStatus(false)
    }
    return(
    <div className="music-card" onClick={()=> !isNaN(index) ? changeTrack(): history.push(`${match.url}${id}`)}>
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
        setStatus: status => dispatch(setStatus(status)),
        setAlbumArt: image => dispatch(setAlbumArt(image))
    })

export default withRouter(connect(null,mapDispatchToProps)(Card))