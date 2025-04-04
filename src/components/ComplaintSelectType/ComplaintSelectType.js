import React, { useState } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Container,
  Typography,
  // eslint-disable-next-line no-unused-vars
  Paper,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from '@cmsgov/design-system';
import './ComplaintSelectType.css';

const ComplaintSelectType = () => {
  const [selectedType, setSelectedType] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const complaintTypes = [
    {
      value: 'transactions',
      label: 'Transactions',
      description: 'Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of benefits and premium payment.',
    },
    {
      value: 'codeSets',
      label: 'Code Sets',
      description: 'Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes with which providers and health plan are familiar, are the adopted code sets for procedures, diagnoses, and drugs.',
    },
    {
      value: 'uniqueIdentifiers',
      label: 'Unique Identifiers',
      description: 'Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).',
    },
    {
      value: 'operatingRules',
      label: 'Operating Rules',
      description: 'Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.',
    },
  ];

  const handleSubmit = () => {
    if (!selectedType) {
      setError(true);
      return;
    }
    setError(false);
    navigate('/complaint-details');
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setError(false);
  };

  return (
    <div className="page-container ds-u-fill--white ds-u-padding--3">
      <div className="form-fields ds-u-margin-x--auto">
        <h2 className="section-header ds-u-margin-bottom--2">Complaint Type</h2>
        <Typography variant="h6" gutterBottom className="ds-u-margin-bottom--2">
          Make a selection below
        </Typography>

        <FormControl component="fieldset" error={error} required className="ds-u-margin-y--2">
          <RadioGroup
            value={selectedType}
            onChange={handleTypeChange}
          >
            {complaintTypes.map((type) => (
              <Box key={type.value} className="complaint-type-option ds-u-margin-bottom--2 ds-u-padding--2">
                <FormControlLabel
                  value={type.value}
                  control={<Radio />}
                  label={type.label}
                  className="ds-u-margin-bottom--1"
                />
                <Typography className="complaint-type-description ds-u-margin-left--3">
                  {type.description}
                </Typography>
              </Box>
            ))}
          </RadioGroup>
          {error && (
            <FormHelperText error className="ds-u-margin-top--1">
              Please select a complaint type to proceed
            </FormHelperText>
          )}
        </FormControl>

        <div className="button-container ds-u-display--flex ds-u-justify-content--start ds-u-margin-top--3 ds-u-padding--3">
          <Button 
            className="ds-c-button ds-c-button--primary ds-u-margin-right--2"
            variation="solid"
            onClick={() => navigate('/')}
          >
            Welcome
          </Button>
          <Button 
            className="ds-c-button ds-c-button--primary ds-u-margin-right--2"
            variation="solid"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Button 
            className="ds-c-button ds-c-button--primary"
            variation="solid"
            onClick={handleSubmit}
            disabled={!selectedType}
          >
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintSelectType; 