import './discovery.style.scss'
import {Route} from 'react-router-dom'
import Header from '../Header/header.component'
import CardCollection from '../Card Collections/card-collections.component'
import Player from '../Player/player.component'
import Explore from '../Explore/explore.component'
const Discovery =()=>(
    <div className="discovery">
        <Header/>
        <Route exact path="/" component={CardCollection}/>
        <Route path="/:id" component={Explore}/>
       <Player/>
    </div>
)

export default Discovery