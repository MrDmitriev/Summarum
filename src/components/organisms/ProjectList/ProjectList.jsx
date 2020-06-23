import React, { Component } from 'react'
import ProjectItem from 'components/molekules/ProjectItem/ProjectItem'

import PROJECT_INFO from 'features/AboutMe/constants';

export default class ProjectList extends Component {
    render() {
        return (
        <div className="row">
            {PROJECT_INFO.map((item, i) => {
               return <ProjectItem item={item} key={i} />
            })}
        </div>    
        );
    }
}