import './card-section.style.scss'
import Card  from '../Card/card.component'

const CardSection= ({albums,title})=>{
    return(
    <div className="card-section">
        <h2>{title}</h2>
        <div className="section">
         {albums && (
             albums.map(album => <Card key={album.id} image={album.cover_medium} title={album.title}/>)
         )}
        </div>
    </div>
)
    }

export default CardSection