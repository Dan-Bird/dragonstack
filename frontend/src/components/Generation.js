import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGeneration } from '../actions/generation';
import fetchStates from '../reducers/fetchStates';

const MINUMM_DELAY = 3000;

class Generation extends Component {
  timer = null;

  componentDidMount() {
    this.props.fetchGeneration();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  fetchNextGeneration() {
    this.props.fetchGeneration();

    let delay =
      new Date(this.props.generation.expiration).getTime() -
      new Date().getTime();

    if (delay < MINUMM_DELAY) delay = MINUMM_DELAY;

    this.timer = setTimeout(() => {
      this.props.fetchGeneration();
    }, delay);
  }

  render() {
    const { generation } = this.props;

    if (generation.status === fetchStates.error) {
      return <div>{generation.message}</div>;
    }

    return (
      <div>
        <h3>Generation {generation.generationId}. Expires on:</h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const generation = state.generation;
  return { generation };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchGeneration: () => fetchNextGeneration(dispatch),
//   };
// };

const componentConnector = connect(mapStateToProps, { fetchGeneration });

export default componentConnector(Generation);
