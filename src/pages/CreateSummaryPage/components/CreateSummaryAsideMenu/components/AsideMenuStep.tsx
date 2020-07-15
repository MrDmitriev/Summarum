import React from 'react';

type Props = {
	count: string,
	isActive: boolean,
  step: {
		title: string,
		icon: string,
		description: string
	},
	handleStepClick: () => void
}

export const AsideMenuStep = (props: Props) => {
  const {step, handleStepClick, count, isActive} = props;
  return (
		<div
			className="wizard-step"
			onClick={handleStepClick}
			data-count={count}
			data-wizard-type="step"
			data-wizard-state={isActive ? "current" : "pending"}>
      <div className="wizard-wrapper">
        <div className="wizard-icon">
          <span className="svg-icon svg-icon-2x">
            <i className={`menu-icon ${step.icon}`} style={{fontSize: `20px`}}></i>
          </span>
        </div>
        <div className="wizard-label">
          <h3 className="wizard-title">{step.title}</h3>
          <div className="wizard-desc">{step.description}</div>
        </div>
      </div>
    </div>
  );
};

export default AsideMenuStep;
