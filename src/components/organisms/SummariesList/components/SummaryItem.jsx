/* eslint-disable no-mixed-spaces-and-tabs */
import React, {Component} from 'react';
import SVG from "react-inlinesvg";


export default class SummaryItem extends Component {
  render() {
    return (
			<>
				<tr>
				  <td className="pl-0 py-4">
				    <div className="symbol symbol-50 symbol-light mr-1">
				      <span className="symbol-label">
				        <SVG
				          src={`/assets/media/svg/misc/006-plurk.svg`}
				          className="h-50 align-self-center"
				        ></SVG>
				      </span>
				    </div>
				  </td>
				  <td className="pl-0">
				    <a
				      href="index.html"
				      className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
				    >
							Melange project
				    </a>
				    <div>
				      <span className="font-weight-bolder">Praha 5</span>{` `}
				      <a
				        className="text-muted font-weight-bold text-hover-primary"
				        href="index.html"
				      >
								Pod Brentovou
				      </a>
				    </div>
				  </td>
				  <td className="text-right">
				    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
							$2,000,000
				    </span>
				    <span className="text-muted font-weight-bold">Total investment</span>
				  </td>
				  <td className="text-right">
				    <span className="text-muted font-weight-500">
							23.06.2020 22:02
				    </span><br/>
				    <span className="text-muted font-weight-500">
							last change
				    </span>
				  </td>
				  <td className="text-right">
				    <span className="label label-lg label-light-primary label-inline">
							Approved
				    </span>
				  </td>
				  <td className="text-right pr-0">
				    <a href="index.html" className="btn btn-icon btn-light btn-sm">
				      <span className="svg-icon svg-icon-md svg-icon-primary">
				        <SVG
				          src='/assets/media/svg/icons/General/Settings-1.svg'
				        ></SVG>
				      </span>
				    </a>
				    <a href="index.html" className="btn btn-icon btn-light btn-sm mx-3">
				      <span className="svg-icon svg-icon-md svg-icon-primary">
				        <SVG
				          src='/assets/media/svg/icons/Communication/Write.svg'
				        ></SVG>
				      </span>
				    </a>
				    <a href="index.html" className="btn btn-icon btn-light btn-sm">
				      <span className="svg-icon svg-icon-md svg-icon-primary">
				        <SVG
				          src='/assets/media/svg/icons/General/Trash.svg'
				        ></SVG>
				      </span>
				    </a>
				  </td>
				</tr>
			</>
    );
  }
}
