import React from 'react';
import { useLocation } from 'react-router-dom';
import '@cmsgov/design-system/dist/css/index.css';
import './ProgressBar.css';

const ProgressBar = () => {
  const location = useLocation();
  
  const steps = [
    { path: '/complaint-type', label: 'Complaint Type' },
    { path: '/complaint-details', label: 'Complainant Details' },
    { path: '/fae-details', label: 'FAE Details' },
    { path: '/complaint-details', label: 'Complaint Details' },
    { path: '/review-complaint', label: 'Review Complaint' },
    { path: '/submitted', label: 'Submitted' }
  ];

  const getCurrentStep = () => {
    const currentIndex = steps.findIndex(step => step.path === location.pathname);
    return currentIndex === -1 ? 0 : currentIndex;
  };

  return (
    <div className="progress-container">
      <div className="progress-bar ds-u-padding-x--2">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`progress-step ${index <= getCurrentStep() ? 'active' : ''} ds-u-display--flex ds-u-flex-direction--column ds-u-align-items--center`}
          >
            <div className="step-bubble">
              <div className="step-number">{index + 1}</div>
            </div>
            <div className="step-label ds-u-margin-top--1">{step.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;