import '../Card Collections/card-collections.style.scss'
import Card  from '../Card/card.component'

const NewRelease = ({releases,title})=>{
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

export default NewRelease