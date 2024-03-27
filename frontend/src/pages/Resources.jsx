import React from 'react';
import BackButton from "../components/BackButton";
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <div className='p-9'>
            <BackButton />

            <h1 className="justify-center text-center text-2xl font-semibold mb-8 flex flex-wrap">Explore these resources!</h1>
            <div className='flex grid grid-cols-1 sm:grid-cols-4 gap-6'>
                <Link to="https://www.aaaai.org/"
                    className='flex flex-wrap border border-gray-300 rounded-lg items-center justify-center px-4 py-6 hover:bg-gray-50' style={{ height: '100%' }}>
                    <div className="logo-container text-center text-2xl p-2">
                        <img className='pb-4' src='/images/AAAAI_logo.png' alt="/images/AAAAI_logo.png" style={{
                            maxWidth: '100%',
                            maxHeight: '100%'
                        }} />

                        <div className="text-center text-2xl p-2 border-t border-gray-300">American Academy of Allergy Asthma and Immunology</div>
                    </div>
                </Link>
                <Link to="https://nursing.ua.edu/"
                    className='flex flex-wrap border border-gray-300 rounded-lg items-center justify-center px-4 py-6 hover:bg-gray-50' style={{ height: '100%' }}>
                    <div className="logo-container text-center text-2xl p-2">
                        <img className='pb-4' src='/images/nursing_logo.png' alt="/images/nursing_logo.png" style={{
                            maxWidth: '100%',
                            maxHeight: '100%'
                        }} />

                        <div className="text-center text-2xl p-2 border-t border-gray-300">The University of Alabama College of Nursing</div>

                    </div>
                </Link>
                <Link to="https://aafa.org/"
                    className='flex flex-wrap border border-gray-300 rounded-lg items-center justify-center px-4 py-6 hover:bg-gray-50' style={{ height: '100%' }}>
                    <div className="logo-container text-center text-2xl p-2">
                        <img className='pb-4' src='/images/AAFA_logo.png' alt="/images/AAFA_logo.png" style={{
                            maxWidth: '100%',
                            maxHeight: '100%'
                        }} />

                        <div className="text-center text-2xl p-2 border-t border-gray-300">Asthma and Allergy Foundation of America</div>

                    </div>
                </Link>
                <Link to="https://www.mayoclinic.org/"
                    className='flex flex-wrap border border-gray-300 rounded-lg items-center justify-center px-4 py-6 hover:bg-gray-50' style={{ height: '100%' }}>
                    <div className="logo-container text-center text-2xl p-2">
                        <img className='pb-4' src='/images/mayo_logo.png' alt="/images/mayo_logo.png" style={{
                            maxHeight: '70%',
                            maxWidth: 'auto'
                            
                        }} />

                        <div className="text-center text-2xl p-2 border-t border-gray-300">The Mayo Clinic</div>
                    </div>
                </Link>
                <Link to="https://acaai.org/asthma/asthma-101/who-gets-asthma/children/"
                    className='flex flex-wrap border border-gray-300 rounded-lg items-center justify-center px-4 py-6 hover:bg-gray-50' style={{ height: '100%' }}>
                    <div className="logo-container text-center text-2xl p-2">
                        <img className='pb-4' src='/images/ACAAI_logo.png' alt="/images/ACAAI_logo.png" style={{
                            maxWidth: '100%',
                            maxHeight: '100%'
                        }} />

                        <div className="text-center text-2xl p-2 border-t border-gray-300">American College of Allergy, Asthma, and Immunology</div>
                    </div>
                </Link>
                
                <Link to="https://ginasthma.org/gina-patient-guide-you-can-control-your-asthma/"
                    className='flex flex-wrap border border-gray-300 rounded-lg items-center justify-center px-4 py-6 hover:bg-gray-50' style={{ height: '100%' }}>
                    <div className="logo-container text-center text-2xl p-2">
                        <img className='pb-4' src='/images/GIA_Logo.png' alt="/images/GIA_Logo.png" style={{
                            maxWidth: '100%',
                            maxHeight: '100%'
                        }} />

                        <div className="text-center text-2xl p-2 border-t border-gray-300">Helpful Patient Guide</div>
                    </div>
                </Link>
                <Link to="https://www.aaaai.org/tools-for-the-public/conditions-library/asthma/childhood-asthma"
                    className='flex flex-wrap border border-gray-300 rounded-lg items-center justify-center px-4 py-6 hover:bg-gray-50' style={{ height: '100%' }}>
                    <div className="logo-container text-center text-2xl p-2">
                        <img className='pb-4' src='/images/AAAAI_logo.png' alt="/images/AAAAI_logo.png" style={{
                            maxWidth: '100%',
                            maxHeight: '100%'
                        }} />

                        <div className="text-center text-2xl p-2 border-t border-gray-300">Does my child have asthma?</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Resources;
