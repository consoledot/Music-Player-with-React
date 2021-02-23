import './player.style.scss'

const Player = ()=>(
    <div className="player-panel">
        <div className="image">
        <img src="https://www.udiscovermusic.com/wp-content/uploads/2015/10/Janelle-Mona%CC%81e-Dirty-Computer-.jpg" alt="music"/>
        </div>
        <div className="title">All i need is love</div>
        <div className="controls">
            <i className="fa fa-step-backward" aria-hidden="true"></i>
            <i className="fa fa-play-circle" aria-hidden="true"></i>
            <i className="fa fa-step-forward" aria-hidden="true"></i>
        </div>
        <div className="bar">
            <div className="progress"></div>
        </div>
        <div className="options">
            <i className="fa fa-heart" aria-hidden="true"></i>
            <i className="fa fa-random" aria-hidden="true"></i>
            <i className="fa fa-retweet" aria-hidden="true"></i>
            <i className="fa fa-volume-up" aria-hidden="true"></i>
        </div>
    </div>
)

export default Player