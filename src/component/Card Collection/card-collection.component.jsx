import './card-collection.style.scss'
import CardSection from '../Card Section/card-section.component'
import {useEffect} from 'react'
const CardCollection =()=>{

    useEffect(()=>{
        Promise.all([
            fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0"),
            fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"),
        ]).then(responses => {
            responses.map(response => response.json())
        }).then(data=> console.log(data)).catch(error => console.log(error))
    },[])
    return(
        <div className="card-collection">
            <CardSection/>
            <CardSection/>
        </div>
    )
}
export default CardCollection