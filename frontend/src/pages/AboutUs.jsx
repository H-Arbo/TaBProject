import React from 'react';
import BackButton from "../components/BackButton";

const AboutUs = () => {
    return (
        <div className='p-9'>
            <BackButton />

            <h1 className="text-center text-2xl font-bold mb-8">About us!</h1>
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-6'>
                <h1>Person 1</h1>
                <h1>Person 2</h1>
                <h1>Person 3</h1>
                <h1>Person 4</h1>
            </div>
        </div>
    )
}

export default AboutUs;
