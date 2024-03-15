import { Link } from 'react-router-dom';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

const LoginQ = () => {
    const handleClick = () => { };
    return (
        <div className='p-8'>
            <BackButton />
            <h1 className='text-3xl font-bold text-center mb-6'>Are you logging in as a Doctor or a Patient?</h1>

            <div className='flex justify-center items-center border-4 rounded-xl w-[600px] p-4 mx-auto'
                style={{border: '4px solid #D2EBDE'}}>
                    <Link to="/patients/login" className="mr-4">
                        <Button color='blue'>
                            Patient
                        </Button>
                    </Link>
                    <Link to='/doctor/login'>
                        <Button color = 'blue'>
                            Doctor
                        </Button>
                    </Link>
            </div>
        </div>

    )
}

export default LoginQ