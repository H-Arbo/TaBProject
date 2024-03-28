import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import './css/characters.css'

const RegistrationQ = () => {
    return (
        <div className='p-8'>
            <BackButton />
            <div className='p-8 flex justify-center'>
                <img src='/images/Laila-ActionPlanGreen.png' alt="/images/Laila-ActionPlanGreen.png" style={{
                    maxWidth: '10%',
                    height: 'auto',
                    paddingRight: '25px',
                }} className='registrationQ' />
                <div className='flex flex-wrap pr-4' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className='text-3xl font-bold text-center mb-6'>Are you registering as a Doctor or a Patient?</h1>

                    <div className='flex flex-wrap justify-center items-center border-4 rounded-xl max-w-[600px] p-4 mx-auto'
                        style={{ border: '4px solid #D2EBDE' }}>
                        <Link to="/patients/register" className="p-2">
                            <Button color='blue'>
                                Patient
                            </Button>
                        </Link>
                        <Link to="/doctor/register" className="p-2">
                            <Button color='blue'>
                                Doctor
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default RegistrationQ