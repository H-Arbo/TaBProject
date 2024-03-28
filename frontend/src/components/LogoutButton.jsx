import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import { MdLogout } from 'react-icons/md';

const LogoutButton = () => {
    const { logout } = useContext(UserContext);

    const handleLogout = () => {
        document.cookie = "token=; path=/;"
        
        window.location.href = '/';
    }

    return (
        <div className='flex'>
            <MdLogout className='text-3xl text-sky-800 cursor-pointer' onClick={handleLogout}>
                Logout
            </MdLogout>
        </div>
    );
}

export default LogoutButton;
