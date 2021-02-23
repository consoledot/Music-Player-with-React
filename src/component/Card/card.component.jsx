import './card.style.scss'

const Card = ({image,title})=>{
    return(
    <div className="music-card">
        <div className="image-card">
             {image && <img src={`${image}`} alt="music"/>}
        </div>
        <div className="text">
        {title && <p>{title}</p>}
        </div>
     </div>
)
    }

export default Card