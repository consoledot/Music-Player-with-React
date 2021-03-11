import '../Card Collections/card-collections.style.scss'
import Card  from '../Card/card.component'

const Playlists = ({playlists,title})=>{
    return(
    <div className="card-section">
        <h2>{title}</h2>
        <div className="section">
         {playlists && (
             playlists.map((playlist) => <Card key={playlist.id} image={playlist.picture_medium} title={playlist.title} id={playlist.id} type={playlist.type}/>)
         )}
        </div>
    </div>
)
    }



export default Playlists