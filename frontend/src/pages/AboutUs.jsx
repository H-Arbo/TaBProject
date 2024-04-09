import React from 'react';
import BackButton from "../components/BackButton";
import './css/aboutus.css'

const AboutUs = () => {
    return (
        <div className='p-9'>
            <BackButton />

            <h1 className="text-center text-2xl font-bold mb-8">About us!</h1>
            <div className='team-grid'>
                <div className='team-member'>
                    <h1 className='member-name'>Aylin Akca Sumengen, PhD, MSc, BSN, RN</h1>
                    <img src="/images/aylin.jpg" alt='Aylin Akca Sumengen'></img>
                    <p>Dr. Akca Sumengen is an Assistant Professor at the Capstone College of Nursing (CCN) at the University of Alabama (UA).
                        She has a wealth of experience in pediatric asthma research and has published over 10 peer-reviewed articles on diverse topics, including the quality of life among pediatric asthma patients and the integration of technology into patient care.
                        In fact, she has established a research and development company that focuses on creating a symptom-detection sensor for pediatric asthma patients.</p>
                </div>
                <div className='team-member'>
                    <h1 className='member-name'>Jessica Johnson, MSN, RN, PNP-PC</h1>
                    <img src="/images/jessica.jpg" alt='Jessica Johnson'></img>
                    <p>Jessica Johnson is a full-time instructor for the Capstone College of Nursing.
                        Mrs. Johnson has pediatric clinical experiences in medical-surgical, neurology, cardiac, and endocrine care.
                        Mrs. Johnson currently teaches in pediatrics and health assessment and has previously taught in obstetrics and within the RN-BSN program for CCN.</p>
                </div>
                <div className='team-member'>
                    <h1 className='member-name'>Mark Merrill, DNP, CPNP-AC/PC</h1>
                    <img src="/images/mark.jpg" alt='Mark Merrill'></img>
                    <p>Dr. Richard Merrill entered nursing at Children’s of Alabama working in the pediatric intensive care unit before earning a direct commission and serving a total of 22 years in the U.S. Air Force.</p>
                </div>
                <div className='team-member'>
                    <h1 className='member-name'>Sarah Phillips, MD</h1>
                    <br></br>
                    <img src="/images/sara.jpg" alt='Sara Phillips'></img>
                    <p>Dr. Sara Phillips is an assistant professor of Pediatrics at the College of Community Health Sciences.
                        Phillips is from Boaz, Alabama, and she received her bachelor’s degree from The University of Alabama in biology.
                        As a Rural Medical Scholar, she earned her master’s degree at UA in human and environmental sciences and her medical degree from the University of Alabama School of Medicine, which is headquartered in Birmingham.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
