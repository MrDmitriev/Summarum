import React from 'react';

export const Location = (props) => {
  return (
    <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current">
      <h4 className="mb-10 font-weight-bold text-dark">Setup Your Current Location</h4>
      <div className="row">
        <div className="col-xl-6">
          <div className="form-group">
            <label>Address Line 1</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="address1" placeholder="Address Line 1" defaultValue="Address Line 1" />
            <span className="form-text text-muted">Please enter your Address.</span>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group">
            <label>Address Line 2</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="address2" placeholder="Address Line 2" defaultValue="Address Line 2" />
            <span className="form-text text-muted">Please enter your Address.</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="form-group">
            <label>Postcode</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="postcode" placeholder="Postcode" defaultValue="3000" />
            <span className="form-text text-muted">Please enter your Postcode.</span>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group">
            <label>City</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="city" placeholder="City" defaultValue="Melbourne" />
            <span className="form-text text-muted">Please enter your City.</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="form-group">
            <label>State</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="state" placeholder="State" defaultValue="VIC" />
            <span className="form-text text-muted">Please enter your State.</span>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group">
            <label>Country</label>
            <select name="country" className="form-control form-control-solid form-control-lg">
              <option defaultValue="">Select</option>
              <option defaultValue="AF">Afghanistan</option>
              <option defaultValue="YE">Yemen</option>
              <option defaultValue="ZM">Zambia</option>
              <option defaultValue="ZW">Zimbabwe</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
