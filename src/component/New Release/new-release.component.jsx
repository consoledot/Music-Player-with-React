import '../Card Collections/card-collections.style.scss'
import {useEffect} from 'react'
import Card  from '../Card/card.component'
import {connect} from 'react-redux'
import {addPlaylist} from '../../redux/action'


const NewRelease = ({releases,title,addPlaylist})=>{
    addPlaylist(releases)
    return(
        <div className="card-section">
            <h2>{title}</h2>
            <div className="section">
            {releases && (
                releases.map(release => <Card key={release.id} image={release.album.cover_medium} title={release.title}/>)
            )}
            </div>
        </div>
     )
 }
const mapDispatchToProps = dispatch=>({
    addPlaylist: playlists=> dispatch(addPlaylist(playlists))
})
export default connect(null, mapDispatchToProps)(NewRelease)