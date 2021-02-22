import './card-section.style.scss'
import Card  from '../Card/card.component'

const CardSection= ()=>(
    <div className="card-section">
        <h2>RELEASED THIS WEEK</h2>
        <div className="section">
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
)

export default CardSection