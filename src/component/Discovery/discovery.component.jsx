import './discovery.style.scss'
import {Route, Switch} from 'react-router-dom'
import Header from '../Header/header.component'
import CardCollection from '../Card Collections/card-collections.component'
import Player from '../Player/player.component'
import Explore from '../Explore/explore.component'
import Search from '../Search/search.component'
const Discovery =()=>(
    <div className="discovery">
        <Header/>
            <Switch>
                <Route exact path="/" component={CardCollection}/>
                <Route  path="/search" component={Search}/>
                <Route  path="/:id" component={Explore}/>
            </Switch>
       <Player/>
    </div>
)

export default Discovery