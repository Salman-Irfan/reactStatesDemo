import React from 'react'
import AboutUsComponentOne from '../components/AboutUsComponentOne'
import AboutUsComponentTwo from '../components/AboutUsComponentTwo'

const AboutUsPage = () => {
    return (
        <>
            <h1 className='text-secondary'>This is About Us Page</h1>
            <AboutUsComponentOne />
            {/* counter start */}
            {/* counterComponent -- todo */}
            <div className='text-center my-4'>
                <AboutUsComponentTwo />
            </div>
            {/* counter end */}
        </>
    )
}

export default AboutUsPage