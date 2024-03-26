import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import Pat_Navbar from '../components/Pat_Navbar';


const PHome = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);

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
        <>
            <Pat_Navbar />
            <div className='p-8'>

                <div className='p-4'>
                    <h1 className='text-3xl font-bold my-4 text-center'>Patient Home</h1>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <Link to='/patients/green'>
                            <Button color="green">
                                Green Zone - Doing Well
                                No coughing, wheezing, chest tightness, or difficulty breathing.
                                Can work, play, exercise, perform usual activities without symptoms.
                                OR
                                Peak flow x to y (80% to 100% of personal best).
                            </Button>
                        </Link>
                        <Link to='/patients/yellow'>
                            <Button color="yellow">
                                Yellow Zone - Caution/Getting Worse
                                Coughing, wheezing, chest tightness, or difficulty breathing.
                                Symptoms with daily activities, work, play, and exercise.
                                Nighttime awakenings with sympotoms.
                                OR
                                Peak flow x to y (50% to 80% of personal best).
                            </Button>
                        </Link>
                        <Link to='/patients/red'>
                            <Button color="red">
                                Red Zone - Alert
                                Difficulty with breathing, coughing, wheezing, not helping with medications.
                                Trouble waling or talking due to asthma symptoms.
                                Not responding to quick relief medications
                                OR
                                Peak flow is less than x (50% of personal best).
                            </Button>
                        </Link>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-8'>
                        <Link to='/patients/animations'>
                            <Button color="blue">Animations</Button>
                        </Link>
                        <Link to='/patients/surveys'>
                            <Button color="blue">Surveys</Button>
                        </Link>
                        <Link to='/patients/ActionSheet'>
                            <Button color="blue">Action Sheet</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );


};

export default PHome