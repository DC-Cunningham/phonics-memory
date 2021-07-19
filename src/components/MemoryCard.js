import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

export class MemoryCard extends Component {

  flipCard = e => {
    if (this.props.found || this.props.flipped) return;
    this.props.flip(e.target.id);
  };

  render() {
    const { id, flipped, found, number, word } = this.props;
    return (
      <div className="card">
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
          <div id={id}
            className="memoryCard front"
            onClick={this.flipCard}
            style={cardBack}
            key="front"
          >
            {number}
          </div>
          <div
            className="memoryCard"
            onClick={this.flipCard}
            key="back"
            style={{
              backgroundColor: found ? "#06cc10" : "#FFFFFF",
              cursor : found ? "" : "pointer",
            }}
          >
            <p>{word}</p>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

const cardBack = {
  background: "radial-gradient(circle, rgba(241,241,246,0.8757878151260504) 0%, rgba(153,46,217,1) 100%)",
}

export default MemoryCard;
