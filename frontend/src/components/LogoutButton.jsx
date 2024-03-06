import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Front from '../pages/Front';

const LogoutButton = () => {
    const handleLogout = () => {
        document.cookie = "token=; path=/;"

        window.location.href = '/login';
    }
    return (
        <div className='flex'>
            <button className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit' onClick={handleLogout}><BsArrowLeft className='text-2x1' />Logout</button>
        </div>
    )
}

export default LogoutButton