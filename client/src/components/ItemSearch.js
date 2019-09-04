import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { getItemResults } from '../actions/landing.actions'
import '../styles/itemSearch.css'

export default props => {
    const results = useSelector(appState => appState.resultItems)

    useEffect(()=> {
        getItemResults(props.match.params.item)
    }, [])

    return (
        <div id="itemSearchWrapper">
            <h1>Search Results</h1>
            {results.map(item => {
                return (
                <div id="searchResults">
                    <img id="searchImage" src={item.picture} alt=""/>
                    <p>{item.item_name}</p>
                    <p>{item.item_condition}</p>
                    <p>${item.price}</p>
                </div>
                )
            })}
        </div>
    )
}