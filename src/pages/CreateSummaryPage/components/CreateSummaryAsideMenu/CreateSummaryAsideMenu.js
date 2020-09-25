import React, {Component} from 'react';
import {connect} from 'react-redux';

import AsideMenuStep from './components/AsideMenuStep';
import {asideMenuSteps} from '../../../../features/createSummaryPage/constants';

import createSummaryPage from '../../../../features/createSummaryPage';

export class CreateSummaryAsideMenu extends Component {
  handleStepClick = (e) => {
    const id = Number(e.currentTarget.dataset.count);
    console.log(`e.currentTarget`, id);
    this.props.setActiveStep(id);
  }
  render() {
    const {activeStep} = this.props;
    return (
      <>
        <div className="wizard-nav border-right py-8 px-8 py-lg-20 px-lg-10">
          <div className="wizard-steps">
            {asideMenuSteps.map((step, i) => {
              console.log(i, activeStep);
              return (
                <AsideMenuStep
                  handleStepClick={this.handleStepClick}
                  key={step.title}
                  step={step}
                  count={i}
                  isActive={i === activeStep}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default connect(
    (state) => ({
      activeStep: createSummaryPage.selectors.getActiveStep(state)
    }),
    (dispatch) => ({
      setActiveStep: (id) => dispatch(createSummaryPage.actions.setAcitveMenuStep(id))
    })
)(CreateSummaryAsideMenu);
