import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import BackButton from '../components/BackButton';
import Pat_Navbar from '../components/Pat_Navbar';
import Loading from '../components/Loading';
import asthma_logo from '/images/asthma_logo.png';

const ActionSheet = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/profile', { withCredentials: true })
      .then((response) => {
        setPatient(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching patient profile:', error);
        setLoading(false);
      });
  }, []);

  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', 'true');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const scaledWidth = imgWidth * ratio;
      const scaledHeight = imgHeight * ratio;
      const imgX = (pdfWidth - scaledWidth) / 2;
      const imgY = (pdfHeight - scaledHeight) / 2;
      pdf.addImage(imgData, 'PNG', imgX, imgY, scaledWidth, scaledHeight);
      pdf.save('ActionSheet.pdf');
    });
  };

  return (
    <>
      <Pat_Navbar />
      <div className='p-8' ref={pdfRef}>
        <BackButton />
        <div className='flex items-center justify-center mx-auto'>
          {loading ? (
            <Loading />
          ) : patient ? (
            <div className="flex items-center">
              <div className="mr-8">
                <img src={asthma_logo} alt="Asthma Logo" style={{ width: '500px', height: 'auto' }} />
              </div>
              <div>
                <div className='pb-4' style={{ minWidth: '300px' }}>
                  <div className='border border-gray-400 rounded-xl p-4'>
                    <div className='space-y-2'>
                      <div className="flex">
                        <p className="mr-4"><span className='font-semibold'>Patient Name: </span> <u>{patient.name}</u></p>
                        <p className="mr-4"><span className='font-semibold'>Age: </span> <u>{patient.age}</u></p>
                        <p><span className='font-semibold'>Personal Best Peak Flow: </span> <u>{patient.pr_peak_flow}</u></p>
                      </div>
                      <div className="flex">
                        <p className="mr-4"><span className='font-semibold'>Primary Emergency Contact: </span> <u>{patient.prim_emergency_contact}</u></p>
                        <p><span className='font-semibold'>Relationship: </span> <u>{patient.prim_ec_relationship}</u></p>
                      </div>
                      <div className="flex">
                        <p className="mr-4"><span className='font-semibold'>Cell Phone: </span> <u>{patient.prim_ec_cell}</u></p>
                        <p><span className='font-semibold'>Work Phone: </span> <u>{patient.prim_ec_work}</u></p>
                      </div>
                      <div className="flex">
                        <p className="mr-4"><span className='font-semibold'>Health Care Provider: </span> <u>{patient.provider}</u></p>
                        <p><span className='font-semibold'>Phone: </span> <u>{patient.provider_phone}</u></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600">No patient profile found</p>
          )}
        </div>
      </div>
      <div>
        <button onClick={downloadPDF}>Download Action Sheet</button>
      </div>
    </>
  );
};

export default ActionSheet;
