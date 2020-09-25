import React from 'react';

export const Completed = (props) => {
  return (
    <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current">
      <h4 className="mb-10 font-weight-bold text-dark">Setup Your Delivery Location</h4>
      <div className="row">
        <div className="col-xl-6">
          <div className="form-group">
            <label>Address Line 1</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="locaddress1" placeholder="Address Line 1" defaultValue="Address Line 1" />
            <span className="form-text text-muted">Please enter your Address.</span>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group">
            <label>Address Line 2</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="locaddress2" placeholder="Address Line 2" defaultValue="Address Line 2" />
            <span className="form-text text-muted">Please enter your Address.</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="form-group">
            <label>Postcode</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="locpostcode" placeholder="Postcode" defaultValue="3072" />
            <span className="form-text text-muted">Please enter your Postcode.</span>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group">
            <label>City</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="loccity" placeholder="City" defaultValue="Preston" />
            <span className="form-text text-muted">Please enter your City.</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="form-group">
            <label>State</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="locstate" placeholder="State" defaultValue="VIC" />
            <span className="form-text text-muted">Please enter your state.</span>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group">
            <label>Country</label>
            <select name="loccountry" className="form-control form-control-solid form-control-lg">
              <option defaultValue="">Select</option>
              <option defaultValue="AF">Afghanistan</option>
              <option defaultValue="AX">Åland Islands</option>
              <option defaultValue="ZW">Zimbabwe</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
