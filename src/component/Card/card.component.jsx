import './card.style.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setIndex,setStatus,setAlbumArt} from '../../redux/action'
import {playerRef} from '../Player/player.component'

const Card = ({image,title, index,id, setIndex,setStatus, match, history,setAlbumArt,status, type})=>{
   async function changeTrack() {
        await setIndex(index)
        if(!status){
            setStatus(true)
         } 
          playerRef.current.play()
    }
    
    function explorePage(){
        if(type === 'album'){
            setAlbumArt(image)
        }
        history.push(`${match.url}${type}/${id}`)
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
    })
    
const mapStateToProps = state=>({
    status:state.status
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Card))