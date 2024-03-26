import React from 'react';
import BackButton from "../components/BackButton";
import { Link } from 'react-router-dom';
import AAAAI_logo from '/images/AAAAI_logo.png';
import nursing_logo from '/images/nursing_logo.png';
import GIA_logo from '/images/GIA_Logo.png';
import AAFA_logo from '/images/AAFA_logo.png';
import ACAAI_logo from '/images/ACAAI_logo.png';
import mayo_logo from '/images/mayo_logo.png';

const Resources = () => {
    return (
        <div className='p-9'>
            <BackButton />

            <h1 className="text-center text-2xl font-bold mb-8 flex flex-wrap">Explore these resources!</h1>
            <div className='flex grid grid-cols-1 sm:grid-cols-3 gap-6'>
                <Link to="https://www.aaaai.org/"
                    className='flex flex-wrap border border-gray-300 rounded-lg flex items-center justify-center px-4 py-6 hover:bg-gray-50'>
                    <div className="flex flex-wrap logo-container text-center text-2xl p-2" style={{
                        width: '100%',
                        height: '100%',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <img src='/images/AAAAI_logo.png' alt="/images/AAAAI_logo.png" />

                        <div>American Academy of Allergy Asthma and Immunology</div>
                    </div>
                </Link>
                <Link to="https://nursing.ua.edu/"
                    className='border border-gray-300 rounded-lg flex items-center justify-center px-4 py-6 hover:bg-gray-50'>
                    <div className="logo-container text-center text-2xl p-2" style={{
                        width: '100%',
                        height: '100%',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <img src='/images/nursing_logo.png' alt="/images/nursing_logo.png" />

                    <div>The University of Alabama College of Nursing</div>
                </div>

                </Link>

                <Link to="https://aafa.org/"
                    className='border border-gray-300 rounded-lg flex items-center justify-center px-4 py-6 hover:bg-gray-50'>
                    <div className="logo-container text-center text-2xl p-2" style={{
                        width: '100%',
                        height: '100%',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <img src='/images/AAFA_logo.png' alt="/images/AAFA_logo.png" />

                    <div>Asthma and Allergy Foundation of America</div>
                </div>
                </Link>
                <Link to="https://acaai.org/asthma/asthma-101/who-gets-asthma/children/"
                    className='border border-gray-300 rounded-lg flex items-center justify-center px-4 py-6 hover:bg-gray-50'>
                    <div className="logo-container text-center text-2xl p-2" style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${ACAAI_logo})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}></div>
                    <div className='p-3'>American College of Allergy, Asthma, and Immunology</div>
                </Link>
                <Link to="https://www.mayoclinic.org/"
                    className='border border-gray-300 rounded-lg flex items-center justify-center px-4 py-6 hover:bg-gray-50'>
                    <div className="logo-container" style={{
                        width: '100px',
                        height: '100%',
                        backgroundImage: `url(${mayo_logo})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}></div>
                    <span className="mr-auto pl-2 ">The Mayo Clinic</span>
                </Link>
                <Link to="https://ginasthma.org/gina-patient-guide-you-can-control-your-asthma/"
                    className='border border-gray-300 rounded-lg flex items-center justify-center px-4 py-6 hover:bg-gray-50'>

                    <div className="logo-container text-center text-2xl p-2" style={{
                        width: '500px',
                        height: '100px',
                        backgroundImage: `url(${GIA_logo})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}></div>
                    <div className='p-3'>Helpful Patient Guide</div>
                </Link>
                <Link to="https://www.aaaai.org/tools-for-the-public/conditions-library/asthma/childhood-asthma"
                    className='border border-gray-300 rounded-lg flex items-center justify-center px-4 py-6 hover:bg-gray-50'>

                    <div className="logo-container text-center text-2xl p-2" style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${GIA_logo})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}></div>
                    <div className='p-3'>Does my child have asthma?</div>
                </Link>
            </div>
        </div>
    )
}

export default Resources;
