import React, { useEffect, useState } from 'react'
import AboutUsComponentThree from './AboutUsComponentThree'

const AboutUsComponentTwo = () => {
    // let count = 0
    // state variables
    const [count, setCount] = useState(0) // this is array destructuring
    const [isHide, setIsHide] = useState(false)
    // 1st index is count variable
    // 2nd index is a function to set the value at index 0
    // console.log(count)
    // console.log(useState(0))
    // func to inc counter
    const handleIncrement = () => {
        // console.log(`increment btn triggered`)
        setCount(count + 1)
        // console.log(count)
    }
    // func to dec counter
    const handleDecrement = () => {
        // console.log(`Decrement btn triggered`)
        setCount(count - 1)
        // console.log(count)
    }
    // 1. when component mount
    // 2. only on inital load
    // 3. when ever any state changes
    // 3. when a specific state changes
    const handleShowToggle = () => {
        setIsHide(!isHide)
        // console.log(isHide)
    }
    useEffect(() => {
        // console.log(`use effect called on state change`)
    },[isHide])

    return (
        <>
            <div>
                {/* increment btn start */}
                <button
                    type="button"
                    className='btn btn-primary mx-2'
                    onClick={handleIncrement}
                >
                    Increment
                </button>
                {/* increment btn end */}
                {/* decrement btn start */}
                <button
                    type="button"
                    className='btn btn-danger mx-2'
                    onClick={handleDecrement}
                >
                    Decrement
                </button>
                {/* decrement btn end */}
            </div>
            {/* count start */}
            <div>
                {count}
            </div>
            {/* count end */}

            {/* component three to pass the value of current count */}
            <AboutUsComponentThree title="something" description="some random desc" count={count} />
            {/* state manegement 
            context api
            redux / redux toolkit*/}
            {/* redux toolkit 
                1. reducer function => to update the state value
                2. useSelector hook. to read the particular state value
                3. useDispatch hook. to send data to reducer function
            */}
            {/* show hide btn start */}
            <button
                type="button"
                className='my-4 btn btn-success'
                onClick={handleShowToggle}
            >
                {isHide ? "hide" : "show"}
            </button>
            {/* show hide btn end */}
        </>
    )
}

export default AboutUsComponentTwo