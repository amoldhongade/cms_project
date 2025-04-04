import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@cmsgov/design-system/dist/css/index.css';
import './InstructionPage.css';

const InstructionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="instruction-container ds-u-fill--background ds-u-padding--3">
      <div className="content-wrapper ds-u-margin-x--auto">
        <h1 className="page-title ds-u-font-size--3xl ds-u-margin-bottom--2">
          Administrative Simplification Enforcement and Testing Tool (ASETT)
        </h1>

        <div className="disclaimer-box ds-u-margin-bottom--3 ds-u-padding-bottom--3">
          <p className="disclaimer-text ds-u-font-size--sm ds-u-line-height--lead ds-u-color--error">
            Disclaimer: If you file a complaint without registration, you will not be able to view your
            complaints, upload supporting documents, correspond electronically, or test transactions.
          </p>
        </div>

        <p className="instruction-text ds-u-font-size--base ds-u-line-height--lead ds-u-margin-bottom--3">
          The following is the list of steps you will take in order to file a complaint regarding HIPAA Transactions
          and Code Sets, Unique Identifiers, and/or Operating Rules. If you wish to file a Health Insurance
          Privacy complaint, please visit the{' '}
          <a href="https://www.hhs.gov/ocr" target="_blank" rel="noopener noreferrer" className="ocr-link ds-u-color--primary">
            Office for Civil Rights (OCR)
          </a>{' '}
          website.
        </p>

        <div className="steps-list ds-u-margin-y--3">
          <p className="step-item ds-u-margin-bottom--1">Step 1: Identify the type of HIPAA/ACA complaint</p>
          <p className="step-item ds-u-margin-bottom--1">Step 2: Provide your contact information</p>
          <p className="step-item ds-u-margin-bottom--1">Step 3: Identify the Filed Against Entity</p>
          <p className="step-item ds-u-margin-bottom--1">Step 4: Describe the HIPAA/ACA violation</p>
          <p className="step-item ds-u-margin-bottom--1">Step 5: Review and Submit</p>
        </div>

        <p className="final-text ds-u-margin-y--3 ds-u-line-height--lead">
          You can review all information entered before submitting your complaint to CMS. Once the complaint
          is submitted, CMS will review all information and respond to your complaint.
        </p>

        <p className="click-instruction ds-u-margin-bottom--3 ds-u-line-height--lead">
          Click the Complaint Type button below to begin filing your complaint.
        </p>

        <div className="button-container ds-u-margin-top--3 ds-u-padding--3 ds-u-display--flex ds-u-justify-content--start">
          <button 
            className="action-button cancel-button ds-u-margin-right--2" 
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button 
            className="action-button next-button ds-u-background-color--primary" 
            onClick={() => navigate('/complaint-type')}
          >
            Complaint Type{'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionPage; 