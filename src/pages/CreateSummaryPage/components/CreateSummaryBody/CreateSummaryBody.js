import React, {Component} from 'react';
import {connect} from 'react-redux';

import createSummaryPage from '../../../../features/createSummaryPage';
import AccountSettings from './components/AccountSettings';
import BasicInformation from './components/BasicInformation';
import Location from './components/Location';
import Completed from './components/Completed';
import FinancialEstimation from './components/FinancialEstimation';
import MarketResearch from './components/MarketResearch';

export class CreateSummaryBody extends Component {
  render() {
    const {activeStep} = this.props;
    return (
      <>
        <div className="wizard-body py-8 px-8 py-lg-20 px-lg-10">
          <div className="row">
            <div className="col-xxl-12">
              <form className="form" id="kt_form">
                {activeStep === 0 && <AccountSettings />}
                {activeStep === 1 && <BasicInformation />}
                {activeStep === 2 && <Location />}
                {activeStep === 3 && <MarketResearch />}
                {activeStep === 4 && <FinancialEstimation />}
                {activeStep === 5 && <Completed />}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(
    (state) => ({
      activeStep: createSummaryPage.selectors.getActiveStep(state)
    })
)(CreateSummaryBody);
