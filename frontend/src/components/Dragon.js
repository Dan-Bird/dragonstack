import React, { Component } from 'react';
import DragonAvatar from './DragonAvatar';
import { Button } from 'react-bootstrap';

const DEFAULT_DRAGON = {
  dragonId: '',
  generationId: '',
  nickname: '',
  birthdate: '',
  traits: [],
};

class Dragon extends Component {
  state = { dragon: DEFAULT_DRAGON };

  componentDidMount() {
    this.fetchDragon();
  }

  fetchDragon = () => {
    fetch('http://localhost:3000/dragon/new')
      .then(response => response.json())
      .then(json => this.setState({ dragon: json.dragon }))
      .catch(err => console.error('error', err));
  };

  render() {
    return (
      <div>
        <Button onClick={this.fetchDragon}>New Dragon</Button>
        <DragonAvatar dragon={this.state.dragon} />
      </div>
    );
  }
}

export default Dragon;
