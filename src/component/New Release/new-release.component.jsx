import '../Card Collections/card-collections.style.scss'
import Card  from '../Card/card.component'
import {connect} from 'react-redux'
import {addPlaylist, updateIndex} from '../../redux/action'


const NewRelease = ({releases,title,addPlaylist,updateIndex})=>{
    if(!releases) addPlaylist(releases)
    updateIndex(0)
    return(
        <div className="card-section">
            <h2>{title}</h2>
            <div className="section">
            {releases && (
                releases.map((release,index) => <Card key={release.id} image={release.album.cover_medium} title={release.title} index={index}/>)
            )}
            </div>
        </div>
     )
 }
const mapDispatchToProps = dispatch=>({
    addPlaylist: playlists=> dispatch(addPlaylist(playlists)),
    updateIndex: index=> dispatch(updateIndex(index))
})
export default connect(null, mapDispatchToProps)(NewRelease)