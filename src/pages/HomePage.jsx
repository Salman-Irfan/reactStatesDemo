import React from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
    const count = useSelector((state) => state.counter.value)
    // state, console was changing on the console
    // but for rendering it on the UI, we've to use state hook,
    // then we passed this state data to another child component,
    // then we called some functions on component mount, on state changes, on initial load, and for change in the specific state.
    // then we did not pass our data from child to parent, neither we didn't passed our data from one compoentn to another component without parent / child relation ship
    // for this we used redux toolkit to provide state data through out the app.
    return (
        <>
            <h1 className='text-secondary'>This is Home Page</h1>
            <p>Value of count from redux toolkit</p>
            {count}
        </>
    )
}

export default HomePage