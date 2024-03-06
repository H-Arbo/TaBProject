import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import LogoutButton from '../components/LogoutButton';


const PHome = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    //const handleClick = () => { null};
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/patients')
            .then((response) => {
                setPatients(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    return (
        <div className='p-4'>
            <BackButton />

            <LogoutButton />

            <div className='flex justify-between items-center'>
                <h1 className='text-3x1 my-8'> Patient Home </h1>
            </div>

            {loading ? (
                <Loading />
            ) : (
                <Link to={`/patients/profile`}>
                    <button className='text-2x1 text-green-800'>Patient Profile</button>
                </Link>
                // <table className='w-full border-separate border-spacing-2'>
                //     <thead>
                //     </thead>
                //     <tbody>
                //         {patients.map((patient, index) => (
                //             <tr key={patient._id} className='h-8'>
                //                 <td className='border border-slate-700 roundd-md text-center'>
                //                     <div className='flex justify-center gap-x-4'>
                //                         <Link to={'/patients/profile/${patients._id}'}>
                //                             <button className='text-2x1 text-green-800'>Patient Profile</button>
                //                         </Link>

                //                     </div>
                //                 </td>
                //             </tr>
                //         ))}
                //     </tbody>
                // </table>
            )}


            <div className='flex justify-between items-center'>

                <Link to='/patients/green/${patient._id}'>
                    <Button color="green">
                        {/* {onClick={handleClick}} */}
                        Green Zone - Doing Well
                        No coughing, wheezing, chest tightness, or difficulty breathing.
                        Can work, play, exercise, perform usual activities without symptoms.
                        OR
                        Peak flow x to y (80% to 100% of personal best).
                    </Button>
                </Link>
                <Link to='/patients/yellow/${patient._id}'>
                    <Button color="yellow">
                        {/* onClick={handleClick} */}
                        Yellow Zone - Caution/Getting Worse
                        Coughing, wheezing, chest tightness, or difficulty breathing.
                        Symptoms with daily activities, work, play, and exercise.
                        Nighttime awakenings with sympotoms.
                        OR
                        Peak flow x to y (50% to 80% of personal best).
                    </Button>
                </Link>
                <Link to='/patients/red/${patient._id}'>
                    <Button color="red">
                        {/* onClick={handleClick} */}
                        Red Zone - Alert
                        Difficulty with breathing, coughing, wheezing, not helping with medications.
                        Trouble waling or talking due to asthma symptoms.
                        Not responding to quick relief medications
                        OR
                        Peak flow is less than x (50% of personal best).
                    </Button>
                </Link>
            </div>
            <div className='flex justify-between items-center p-4'>
                <Link to='/patients/animations/${patient._id}'>
                    <Button color="blue">Animations</Button>
                    {/* onClick={handleClick} */}
                </Link>
                <Link to='/patients/games/${patient._id}'>
                    <Button color="blue">Games</Button>
                    {/* onClick={handleClick} */}
                </Link>
                <Link to='/patients/surveys/${patient._id}'>
                    <Button color="blue">Surveys</Button>
                    {/* onClick={handleClick} */}
                </Link>
                <Link to='/patients/medsheet/${patient._id}'>
                    <Button color="blue">Action Sheet</Button>
                    {/* onClick={handleClick} */}
                </Link>
            </div>
        </div>
    );

};

export default PHome