import './search.style.scss'
import {useEffect,useRef, useState} from 'react'
import Loading from '../Loading/loading.component'
import Card from '../Card/card.component'
import axios from 'axios'
import {addPlaylist} from '../../redux/action'
import {connect} from 'react-redux'

const Search = ({addPlaylist})=>{
    const input = useRef()
    const corsUrl = "https://cors.bridged.cc/"
    const Text = <p className="display-text"> Search field is empty</p>
    const loading =<Loading/>
    const loaded = <p>Loaded</p>
    const [text,setText] = useState("")
    const [data, setData] = useState("")
    const [display, setDisplay] = useState(Text)
    useEffect(()=>{
        input.current.focus()
    })
    function Search(e){
        e.preventDefault()
       getData()
        clearText()
    }
    function updateText(e){
        const {value} = e.target
        setText(value)
    }
    function clearText(){
        setText("")
        input.current.value = ""
    }
    async function getData(){
        setDisplay(loading)
        const response = await axios.get(corsUrl+`https://api.deezer.com/search?q=${text}`)
        setData(response.data)
        addPlaylist(response.data.data)
       setDisplay("")
    }
    return(
        <div className="search-section">
            <form onSubmit={Search}>
                <input ref={input}type="text" placeholder="Enter your Search keyword" onChange={updateText}/>
            </form>
            {display}
            <div className="section">
            {
                data && (
                    data.data.map((track, index)=><Card key={track.id} image={track.album.cover_medium} title={track.title} index={index}/>)
                )
            }
            </div>
        </div>
    )
}
const mapDispatchToProps =  dispatch=>({
    addPlaylist: playlist=>(dispatch(addPlaylist(playlist)))
})
export default connect(null, mapDispatchToProps)(Search)