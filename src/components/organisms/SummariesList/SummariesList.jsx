import React, {useState} from "react";
import {Nav, Tab} from "react-bootstrap";
import SummaryItem from "./components/SummaryItem";

export default function AdvanceTablesWidget2({className}) {
  const [key, setKey] = useState(`Month`);

  return (
    <div className={`card card-custom ${className}`}>
      {/* Head */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Newly created summaries
          </span>
          <span className="text-muted mt-3 font-weight-bold font-size-sm">
            executive summaries found: 40
          </span>
        </h3>
        <div className="card-toolbar">
          <Tab.Container defaultActiveKey={key}>
            <Nav
              as="ul"
              onSelect={(_key) => setKey(_key)}
              className="nav nav-pills nav-pills-sm nav-dark-75"
            >
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                  eventKey="Month"
                  className={`nav-link py-2 px-4 ${
                    key === `Month` ? `active` : ``
                  }`}
                >
                  Month
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                  eventKey="Week"
                  className={`nav-link py-2 px-4 ${
                    key === `Week` ? `active` : ``
                  }`}
                >
                  Week
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                  eventKey="Day"
                  className={`nav-link py-2 px-4 ${
                    key === `Day` ? `active` : ``
                  }`}
                >
                  Day
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Tab.Container>
        </div>
      </div>
      {/* Body */}
      <div className="card-body pt-3 pb-0">
        <div className="table-responsive">
          <table className="table table-borderless table-vertical-center">
            <thead>
              <tr>
                <th className="p-0" style={{width: `50px`}} />
                <th className="p-0" style={{minWidth: `200px`}} />
                <th className="p-0" style={{minWidth: `100px`}} />
                <th className="p-0" style={{minWidth: `125px`}} />
                <th className="p-0" style={{minWidth: `110px`}} />
                <th className="p-0" style={{minWidth: `150px`}} />
              </tr>
            </thead>
            <tbody>
              <SummaryItem />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
