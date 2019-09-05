import React, {useState} from 'react'

export default props => {
    const [hider, setHider] = useState(false)

    return (
        <div id="marker" onClick={e => setHider(!hider)}>
        <img id="markerPin" src="https://i.imgur.com/Sdtl2YI.png" alt=""/>
        <div className={`info ${hider ? "" : "hide"}`}>
            <p>{props.item.name}</p>
            <p>Roughly {props.item.distance} / {props.item.duration}</p>
            <p>{props.item.address}</p>
            <p>{props.item.date}</p>
        </div>
        </div>
        )
}