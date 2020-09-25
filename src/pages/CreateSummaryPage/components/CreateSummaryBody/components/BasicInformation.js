import React from 'react';

export const BasicInformation = (props) => {
  return (
    <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current">
      <h4 className="mb-10 font-weight-bold text-dark">Select your Services</h4>
      <div className="form-group">
        <label>Delivery Type:</label>
        <select name="delivery" className="form-control form-control-solid form-control-lg">
          <option defaultValue="">Select a Service Type Option</option>
          <option defaultValue="overnight" value="selected">Overnight Delivery (within 48 hours)</option>
          <option defaultValue="express">Express Delivery (within 5 working days)</option>
          <option defaultValue="basic">Basic Delivery (within 5 - 10 working days)</option>
        </select>
      </div>
      <div className="form-group">
        <label>Packaging Type:</label>
        <select name="packaging" className="form-control form-control-solid form-control-lg">
          <option defaultValue="">Select a Packaging Type Option</option>
          <option defaultValue="regular" value="selected">Regular Packaging</option>
          <option defaultValue="oversized">Oversized Packaging</option>
          <option defaultValue="fragile">Fragile Packaging</option>
          <option defaultValue="frozen">Frozen Packaging</option>
        </select>
      </div>
      <div className="form-group">
        <label>Preferred Delivery Window:</label>
        <select name="preferreddelivery" className="form-control form-control-solid form-control-lg">
          <option defaultValue="">Select a Preferred Delivery Option</option>
          <option defaultValue="morning" value="selected">Morning Delivery (8:00AM - 11:00AM)</option>
          <option defaultValue="afternoon">Afternoon Delivery (11:00AM - 3:00PM)</option>
          <option defaultValue="evening">Evening Delivery (3:00PM - 7:00PM)</option>
        </select>
      </div>
    </div>
  );
};

export default BasicInformation;
