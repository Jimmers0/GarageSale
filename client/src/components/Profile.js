import React, { useEffect } from 'react'
import { grabProfileDetails } from '../actions/profile.actions'
import { useSelector } from 'react-redux'

export default props => {
    const profileDetails = useSelector(appState => appState.profile)

    useEffect(() => {
        grabProfileDetails(props.match.params.id)
    }, [])
    console.log(profileDetails)

    return (
        <div id="profileWrapper">
            <h1>Profile Page</h1>
            {profileDetails.map(item => {
                return (
                    <div id="profile">
                    <img src={item.picture} alt=""/>
                    <h1>{item.first_name} {item.last_name}</h1>
                    </div>
                )
            })}
        </div>
    )
}