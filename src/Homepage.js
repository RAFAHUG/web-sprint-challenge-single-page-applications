import React from 'react'
import { useHistory } from 'react-router-dom'

const Homepage = () => {

    const history = useHistory();

    const routeStartOrder = () => {
        console.log('Submitting...')
        history.push('/pizza')
    }
    return(
        <div className='home-wrapper'>
            <img
            className='home-image'
            src='https://images.unsplash.com/photo-1606066889831-35faf6fa6ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
            alt='A table with tree hands eating a cheese pizza'
            />

            <button 
             id='order-pizza'
             onClick={routeStartOrder}
             className='home-shop-button'
             >
            Start Order
            </button>
        </div>
    )
}

export default Homepage;