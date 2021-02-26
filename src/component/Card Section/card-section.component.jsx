import './card-section.style.scss'
import Card  from '../Card/card.component'
import {connect} from 'react-redux'
import {setAlbumArt} from '../../redux/action'

const CardSection= ({albums,title, setAlbumArt})=>{
    
    return(
    <div className="card-section">
        <h2>{title}</h2>
        <div className="section">
         {albums && (
             albums.map(album => <Card key={album.id} image={album.cover_medium} title={album.title} id={album.id} album/>)
         )}
        </div>
    </div>
)
    }
const mapDispatchToProps = dispatch=>({
    setAlbumArt: image => dispatch(setAlbumArt(image))
})

export default connect(null, mapDispatchToProps)(CardSection)