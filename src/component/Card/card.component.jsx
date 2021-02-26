import './card.style.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setIndex,setStatus,setAlbumArt, setIsPlaylist} from '../../redux/action'

const Card = ({image,title, index,id, setIndex,setStatus, match, history,setAlbumArt, isPlaylist,setIsPlaylist, album, click})=>{
    function changeTrack() {
        setIndex(index)
        setStatus(false)
    }
    
    function explorePage(){
        if(isPlaylist){
            setIsPlaylist(true)
        }else{
            setIsPlaylist(false)
        }
        if(album){
            setAlbumArt(image)
        }
        history.push(`${match.url}${id}`)
    }
    return(
    <div className="music-card" onClick={()=> {
        if(!isNaN(index)){
            changeTrack()
        }else{
            explorePage()
        }
    }}>
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
        setAlbumArt: image => dispatch(setAlbumArt(image)),
        setIsPlaylist: status => dispatch(setIsPlaylist(status))
    })

export default withRouter(connect(null,mapDispatchToProps)(Card))