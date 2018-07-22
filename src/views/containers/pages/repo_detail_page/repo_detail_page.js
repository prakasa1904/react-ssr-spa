import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withRouter from 'react-router/withRouter';
import get from 'lodash/get';

import loadData from './repo_detail_page_data_fetch';

import Footer from './../../../components/footer/footer';

class RepoDetail extends Component {
  componentWillMount() {
    if (!get(this.props, 'state.config.initialPageLoad')) {
      loadData(this.props.match, this.props.dispatch, this.props.state);
    } else {
      // TODO: warm cache for PWA, don't trigger render
    }
  }

  render() {
    if (this.props.error) {
      const errorMessage = "We're sorry, please try again later.";

      return (
        <section className="repo-detail-page">
          <article className="repo-detail-page__main">
            <h1>{errorMessage}</h1>
            <p>{this.props.errorMessage}</p>
          </article>
          <Footer />
        </section>
      );
    }

    if (this.props.isLoading) {
      return (
        <section className="repo-detail-page">
          <article className="repo-detail-page__main">
            <h1>Loading...</h1>
          </article>
          <Footer />
        </section>
      );
    }

    const { repo } = this.props;

    return (
      <section className="repo-detail-page">
        <article className="repo-detail-page__main">
          <h1>{repo.name}</h1>
          <p>{repo.description}</p>
          <img src={repo.owner.avatar_url} alt="owner" />
        </article>
        <section className="repo-detail-page__sidebar">
          <cite>{`Owner: ${repo.owner.login}`}</cite>
          <p>{`Stars: ${repo.stargazers_count}`}</p>
          <p>{`Watchers: ${repo.watchers_count}`}</p>
        </section>
        <Footer />
      </section>
    );
  }
}

RepoDetail.propTypes = {
  match: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.shape({}).isRequired,
  repo: PropTypes.shape({}), // eslint-disable-line react/require-default-props
  isLoading: PropTypes.bool, // eslint-disable-line react/require-default-props
  error: PropTypes.bool, // eslint-disable-line react/require-default-props
  errorMessage: PropTypes.string // eslint-disable-line react/require-default-props
};

// More info here: https://github.com/reactjs/react-redux/issues/210
RepoDetail.defaultProps = {
  isLoading: true,
  error: false
};

function mapStateToProps(state = {}) {
  return {
    error: get(state, 'repoDetail.error'),
    errorMessage: get(state, 'repoDetail.errorMessage'),
    isLoading: get(state, 'repoDetail.isLoading'),
    repo: get(state, 'repoDetail.repo'),
    state
  };
}

export default withRouter(connect(mapStateToProps)(RepoDetail));
