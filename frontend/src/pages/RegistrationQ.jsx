import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Button from '../components/Button';

const RegistrationQ = () => {
    return (
        <div className='p-8'>
            <BackButton />
            <h1 className='text-3xl font-bold text-center mb-6'>Are you registering as a Doctor or a Patient?</h1>

            <div className='flex justify-center items-center border-4 rounded-xl w-[600px] p-4 mx-auto'
                style={{ border: '4px solid #D2EBDE' }}>
                <Link to="/patients/register" className="mr-4">
                    <Button color='blue'>
                        Patient
                    </Button>
                </Link>
                <Link to="/doctor/register" className="mr-4">
                    <Button color='blue'>
                        Doctor
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default RegistrationQ