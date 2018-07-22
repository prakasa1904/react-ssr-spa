import get from 'lodash/get';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import withRouter from 'react-router/withRouter';

import loadData from './index_page_data_fetch';

import Header from './../../../components/Header';
import Content from './../../../components/Content';
import Sidebar from './../../../components/Sidebar';

class Homepage extends Component {
  componentDidMount() {
    if (!get(this.props, 'state.config.initialPageLoad')) {
      loadData(this.props.match, this.props.dispatch, this.props.state);
    } else {
      // TODO: warm cache for PWA, don't trigger render
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Content>
          <Sidebar withTab={false} />
        </Content>
      </Fragment>
    );
  }
}

Homepage.propTypes = {
  match: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.shape({}).isRequired
};

Homepage.defaultProps = {};

function mapStateToProps(state = {}) {
  return {
    state
  };
}

export default withRouter(connect(mapStateToProps)(Homepage));
