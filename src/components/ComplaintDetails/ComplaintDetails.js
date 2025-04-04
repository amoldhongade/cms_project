import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@cmsgov/design-system/dist/css/index.css';
import './ComplaintDetails.css';

const ComplaintDetails = () => {
  const navigate = useNavigate();
  const [anonymous, setAnonymous] = useState('no');
  const [formData, setFormData] = useState({
    organizationType: '--None--',
    state: '--None--',
    organizationPhone: '',
    phone: '',
    cellPhone: '',
    zipCode: '',
    ext: ''
  });
  const [, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'organizationPhone':
      case 'phone':
      case 'cellPhone':
        return /^\(\d{3}\) \d{3}-\d{4}$/.test(value) ? '' : 'Invalid phone format';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format';
      case 'zipCode':
        return /^\d{5}(-\d{4})?$/.test(value) ? '' : 'Invalid ZIP code';
      default:
        return '';
    }
  };

  const formatPhoneNumber = (value) => {
    if (!value) return '';
    const numbers = value.replace(/\D/g, '');
    if (numbers.length === 0) return '';
    if (numbers.length <= 3) return `(${numbers}`;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let formattedValue = value;

    if (['organizationPhone', 'phone', 'cellPhone'].includes(name)) {
      formattedValue = formatPhoneNumber(value);
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    const error = validateField(name, formattedValue);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (formData[key] === '' && key !== 'ext' && key !== 'cellPhone') {
        newErrors[key] = 'This field is required';
      } else {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      navigate('/filed-against-entity');
    }
  };

  return (
    <div className="complaint-container ds-u-fill--white">
      <div className="complaint-paper ds-u-padding--3">
        <h2 className="complaint-title ds-u-margin-y--0">Complainant Details</h2>

        <div className="anonymous-section ds-u-padding--2">
          <div className="radio-group-label ds-u-font-weight--bold">
            Do you want to remain anonymous during this process?*
          </div>
          <div className="radio-group ds-u-margin-y--2">
            <label className="ds-c-choice">
              <input
                type="radio"
                className="ds-c-choice__input"
                value="yes"
                checked={anonymous === 'yes'}
                onChange={(e) => setAnonymous(e.target.value)}
              />
              <span className="ds-c-choice__label">Yes</span>
            </label>
            <label className="ds-c-choice">
              <input
                type="radio"
                className="ds-c-choice__input"
                value="no"
                checked={anonymous === 'no'}
                onChange={(e) => setAnonymous(e.target.value)}
              />
              <span className="ds-c-choice__label">No</span>
            </label>
          </div>
          <div className="disclaimer-text ds-u-color--gray">
            Disclaimer: If you select yes, CMS will not share your information with the Filed Against
            Entity (FAE) during the investigation process. However, information provided
            in this complaint is subject to rules and policies under the Freedom of
            Information Act (FOIA).
          </div>
        </div>

        <form onSubmit={handleSubmit} className="complaint-form ds-u-padding--2">
          <div className="form-grid ds-u-margin-y--2">
            <div className="form-field required ds-u-padding--2">
              <label className="ds-c-label">Complainant Organization Name</label>
              <div className="input-container">
                <input
                  type="text"
                  className="ds-c-field"
                  name="organizationName"
                  value={formData.organizationName || ''}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field ds-u-padding--2">
              <label className="ds-c-label">Complainant Organization Type</label>
              <div className="input-container">
                <select
                  className="ds-c-field"
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                >
                  <option value="--None--">--None--</option>
                  <option value="provider">Healthcare Provider</option>
                  <option value="payer">Healthcare Payer</option>
                  <option value="clearinghouse">Clearinghouse</option>
                  <option value="vendor">Software Vendor</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {formData.organizationType === 'other' && (
              <div className="form-field ds-u-padding--2">
                <label className="ds-c-label">Complainant Organization Type (Other)</label>
                <div className="input-container">
                  <input
                    type="text"
                    className="ds-c-field"
                    name="organizationTypeOther"
                    value={formData.organizationTypeOther || ''}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            <div className="form-field ds-u-padding--2">
              <label className="ds-c-label">Complainant Organization Role</label>
              <div className="input-container">
                <input
                  type="text"
                  className="ds-c-field"
                  name="organizationRole"
                  value={formData.organizationRole || ''}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-field required ds-u-padding--2">
              <label className="ds-c-label">Complainant Organization Phone Number</label>
              <div className="input-container">
                <input
                  type="text"
                  className="ds-c-field"
                  name="organizationPhone"
                  value={formData.organizationPhone}
                  onChange={handleChange}
                  placeholder="(XXX) XXX-XXXX"
                  required
                />
              </div>
            </div>

            <div className="form-field required ds-u-padding--2">
              <label className="ds-c-label">Complainant Title</label>
              <div className="input-container">
                <select
                  className="ds-c-field"
                  name="title"
                  value={formData.title || '--None--'}
                  onChange={handleChange}
                  required
                >
                  <option value="--None--">--None--</option>
                  <option value="mr">Mr.</option>
                  <option value="mrs">Mrs.</option>
                  <option value="ms">Ms.</option>
                  <option value="dr">Dr.</option>
                </select>
              </div>
            </div>

            <div className="form-field required ds-u-padding--2">
              <label className="ds-c-label">Complainant First Name</label>
              <div className="input-container">
                <input
                  type="text"
                  className="ds-c-field"
                  name="firstName"
                  value={formData.firstName || ''}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field ds-u-padding--2">
              <label className="ds-c-label">Complainant MI</label>
              <div className="input-container">
                <input
                  type="text"
                  className="ds-c-field"
                  name="middleInitial"
                  value={formData.middleInitial || ''}
                  onChange={handleChange}
                  maxLength="1"
                />
              </div>
            </div>

            <div className="form-field required ds-u-padding--2">
              <label className="ds-c-label">Complainant Last Name</label>
              <div className="input-container">
                <input
                  type="text"
                  className="ds-c-field"
                  name="lastName"
                  value={formData.lastName || ''}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field required ds-u-padding--2">
              <label className="ds-c-label">Complainant Address Line 1</label>
              <div className="input-container">
                <input
                  type="text"
                  className="ds-c-field"
                  name="addressLine1"
                  value={formData.addressLine1 || ''}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field ds-u-padding--2">
              <label className="ds-c-label">Complainant Address Line 2</label>
              <div className="input-container">
                <input
                  type="text"
                  className="ds-c-field"
                  name="addressLine2"
                  value={formData.addressLine2 || ''}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-field required ds-u-padding--2">
              <label className="ds-c-label">Complainant City/Town</label>
              <div className="input-container">
                <input
                  type="text"
                  className="ds-c-field"
                  name="city"
                  value={formData.city || ''}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field required ds-u-padding--2">
              <label className="ds-c-label">Complainant State/Territory</label>
              <div className="input-container">
                <select
                  className="ds-c-field"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="--None--">--None--</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  {/* Add all states here */}
                </select>
              </div>
            </div>

            <div className="form-field required ds-u-padding--2">
              <label className="ds-c-label">Complainant Zip Code</label>
              <div className="input-container">
                <input
                  type="text"
                  className="ds-c-field"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="55555"
                  required
                />
              </div>
            </div>

            <div className="form-field required ds-u-padding--2">
              <label className="ds-c-label">Complainant Email Address</label>
              <div className="input-container">
                <input
                  type="email"
                  className="ds-c-field"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                  placeholder="example@demo.com"
                  required
                />
              </div>
            </div>

            <div className="form-field required ds-u-padding--2">
              <label className="ds-c-label">Complainant Contact Phone Number</label>
              <div className="input-container">
                <div className="phone-input">
                  <input
                    type="text"
                    className="ds-c-field"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(XXX) XXX-XXXX"
                    required
                  />
                  <input
                    type="text"
                    className="extension ds-c-field"
                    name="ext"
                    value={formData.ext}
                    onChange={handleChange}
                    placeholder="Ext."
                  />
                </div>
              </div>
            </div>

            <div className="form-field ds-u-padding--2">
              <label className="ds-c-label">Complainant Cell Phone Number</label>
              <div className="input-container">
                <input
                  type="text"
                  className="ds-c-field"
                  name="cellPhone"
                  value={formData.cellPhone}
                  onChange={handleChange}
                  placeholder="(XXX) XXX-XXXX"
                />
              </div>
            </div>
          </div>

          <div className="button-group ds-u-margin-top--3 ds-u-padding--2">
            <button
              type="button"
              className="action-button ds-c-button ds-c-button--primary"
              onClick={() => navigate('/complaint-type')}
            >
              &lt;Specify Complaint Type
            </button>
            <button
              type="button"
              className="action-button ds-c-button ds-c-button--primary"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button type="submit" className="action-button ds-c-button ds-c-button--primary">
              Filed Against Entity Information&gt;
            </button>
          </div>
        </form>

        <div className="required-field-note ds-u-color--gray ds-u-margin-top--2">
          * Indicates required field
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;
