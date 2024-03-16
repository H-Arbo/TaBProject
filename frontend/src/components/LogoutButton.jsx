import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import { MdLogout } from 'react-icons/md';

const LogoutButton = () => {
    const { logout } = useContext(UserContext);

    const handleLogout = () => {
        document.cookie = "token=; path=/;"
        
        window.location.href = '/login';
    }

    return (
        <div className='flex'>
            <MdLogout className='text-4xl text-sky-800 cursor-pointer' onClick={handleLogout}>
                Logout
            </MdLogout>
        </div>
    );
}

export default LogoutButton;
