import './browse.style.scss'
import Card  from '../Card/card.component'
import {connect} from 'react-redux'


const Browse= ({albums,title})=>{
    
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

export default Browse