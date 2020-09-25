import React, {Component} from 'react';
import CreateSummaryAsideMenu from './components/CreateSummaryAsideMenu/CreateSummaryAsideMenu';
import CreateSummaryBody from './components/CreateSummaryBody/CreateSummaryBody';

export class CreateSummaryPage extends Component {
  render() {
    return (
      <>
        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
          <div className="d-flex flex-column-fluid">
            <div className="container">
              <div className="card card-custom">
                <div className="card-body p-0">
                  <div className="wizard wizard-2" id="kt_wizard_v2" data-wizard-state="step-first" data-wizard-clickable="false">
                    <CreateSummaryAsideMenu />
                    <CreateSummaryBody />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateSummaryPage;
