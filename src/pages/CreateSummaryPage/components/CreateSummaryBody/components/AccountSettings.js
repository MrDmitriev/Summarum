import React from 'react';

export const AccountSettings = (props) => {
  return (
    <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current">

      <h5 className="mb-10 font-weight-bold text-info">Enter your project&apos;s information</h5>
      <div className="row">
        <div className="col-xl-6">
          <div className="form-group">
            <label>Project name</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="projectName" placeholder="Melange" defaultValue="" />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group">
            <label>City</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="projectCityLocation" placeholder="Prague" defaultValue="" />
            <span className="form-text text-muted">Please enter your project&apos;s city</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <div className="form-group">
            <label>Disrict</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="projectDistrict" placeholder="Prague 5 / Smichov" defaultValue="" />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="form-group">
            <label>Street</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="projectStreet" placeholder="pod brentovou" defaultValue="" />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="form-group">
            <label>ZipCode</label>
            <input type="number" className="form-control form-control-solid form-control-lg" name="projectZipCode" placeholder="105 00" defaultValue="" />
          </div>
        </div>
      </div>

      <h5 className="mb-10 font-weight-bold text-info">Enter your contact information</h5>
      <div className="row">
        <div className="col-xl-6">
          <div className="form-group">
            <label>Company name</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="companyName" placeholder="Unicorn LLC, INC" defaultValue="" />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="form-group">
            <label>Company address</label>
            <input type="text" className="form-control form-control-solid form-control-lg" name="companyAddress" placeholder="Soviet Union, red square, rasputin str., 69" defaultValue="" />
            <span className="form-text text-muted">Please enter your company address.</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" className="form-control form-control-solid form-control-lg" name="phone" placeholder="+420 123 123 123" defaultValue="" />
            <span className="form-text text-muted">Acceptable format: +420 123 123 123</span>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control form-control-solid form-control-lg" name="email" placeholder="john.wick@reeves.com" defaultValue="" />
            <span className="form-text text-muted">Please enter your email address.</span>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="form-group">
            <label>Website</label>
            <input type="url" className="form-control form-control-solid form-control-lg" name="website" placeholder="www.website.com" defaultValue="" />
            <span className="form-text text-muted">Please enter your website</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;

