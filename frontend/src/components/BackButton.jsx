import {useNavigate} from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';

const BackButton = () => {
    const history = useNavigate();
    return(
        <div className='flex'>
            <button className=' bg-sky-800 text-white px-4 py-1 rounded-lg w-fit' onClick={() => history(-1) }><BsArrowLeft className='text-2x1' /> </button>
        </div>
    )
}

export default BackButton