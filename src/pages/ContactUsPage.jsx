import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/slices/counterSlice'

const ContactUsPage = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch() // to send data to reduxer function
    // we made two reducer functions, increment and w=other one was decrement

    console.log(count)
    return (
        <>
            <h1 className='text-secondary'>This is Contact Us Page</h1>
            <p>State Management with redux toolkit</p>

            {/* increment btn */}
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>


            {count}

            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </>
    )
}

export default ContactUsPage