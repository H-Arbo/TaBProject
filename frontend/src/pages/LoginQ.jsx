import { Link } from 'react-router-dom';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import './css/characters.css'

const LoginQ = () => {
    const handleClick = () => { };
    return (
        <div className='p-8'>
            <BackButton />
            <div className='p-8 flex justify-center'>
                <img src='/images/Laila-ActionPlanGreen.png' alt="/images/Laila-ActionPlanGreen.png" style={{
                    maxWidth: '10%',
                    height: 'auto',
                    paddingRight: '25px',
                }} className='loginQ' />
                <div className='pr-4' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className='text-3xl font-bold text-center mb-6'>Are you logging in as a Doctor or a Patient?</h1>

                    <div className='border-4 rounded-xl max-w-[600px] w-full p-4 mx-auto' style={{ border: '4px solid #D2EBDE' }}>
                        <div className='flex flex-wrap justify-center items-center'>
                            <Link to='/patients/login' className="p-2">
                                <Button color='blue'>
                                    Patient
                                </Button>
                            </Link>
                            <Link to='/doctor/login' className="p-2">
                                <Button color='blue'>
                                    Doctor
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default LoginQ