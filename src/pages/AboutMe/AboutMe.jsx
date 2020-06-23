import React, {Component} from 'react';
import {LeftMenu, Header, PageWraper, ContentWraper} from 'components';
import Content from './components/Content';

export default class AboutMe extends Component {
  render() {
    return (
      <PageWraper>
        <LeftMenu />
        <ContentWraper>
          <Header />
          <Content />
        </ContentWraper>
      </PageWraper>
    );
  }
}
