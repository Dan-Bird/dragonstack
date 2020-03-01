import React, { Component } from 'react';
import {
  patchy,
  plain,
  skinny,
  slender,
  sporty,
  spotted,
  stocky,
  striped,
} from '../assets';

const propertyMap = {
  backgroundColor: {
    black: '#263238',
    white: '#cfd8dc',
    green: '#a5d6a7',
    blue: '#0277bd',
  },
  build: { slender, stocky, sporty, skinny },
  pattern: { plain, striped, spotted, patchy },
  size: { small: 100, medium: 140, large: 180, enormous: 220 },
};

class DragonAvatar extends Component {
  get DragonImage() {
    const dragonProptertyMap = {};

    this.props.dragon.traits.forEach(trait => {
      const { traitType, traitValue } = trait;

      dragonProptertyMap[traitType] = propertyMap[traitType][traitValue];
    });

    const { backgroundColor, build, pattern, size } = dragonProptertyMap;
    const sizing = { width: size, height: size };

    return (
      <div className="dragon-avatar-image-wrapper">
        <div
          className="dragon-avatar-image-background"
          style={{
            backgroundColor,
            ...sizing,
          }}
        ></div>
        <img
          src={pattern}
          className="dragon-avatar-image-pattern"
          style={{ ...sizing }}
        />
        <img
          src={build}
          className="dragon-avatar-image"
          style={{ ...sizing }}
        />
      </div>
    );
  }

  render() {
    const { generationId, dragonId, traits } = this.props.dragon;
    return (
      <div>
        <span>G{generationId}.</span>
        <span>I{dragonId}. </span>

        {traits.map(trait => trait.traitValue).join(', ')}
        {this.DragonImage}
      </div>
    );
  }
}

export default DragonAvatar;
