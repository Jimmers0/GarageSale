import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import moment from 'moment'



export default props => {

    const sales = useSelector(appState => appState.savedsales)

    console.log('sales', sales)



    return (
        <div className="favs">
            {sales.length === 0 ? <div className="error">You have no saved garage sales. Save garage sales for quick access! </div> : sales.map((sale, i) => (
                <Link to={`/post/${sale.postID}`}>
                <div key={'sale' + i} className="salepost">
                    <div className="nameanddate">
                    <strong>{sale.name}</strong> {moment(sale.date).format("dddd MM/DD")} 
                    </div>
                    <div>
                    <p>City: {sale.city} State: {sale.state}</p>
                    </div> 
                    <div>
                    <p>{sale.zip === props.match.params.zip ? "In your area" : `Distance: ${sale.distance}` }</p>
                    <p>Address: {sale.address}</p>
                    </div>


                </div>
                </Link>
            ))}



        </div>
    )

}