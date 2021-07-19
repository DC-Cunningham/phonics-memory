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
            <p >{number}</p>
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
  background: "red",
}


export default MemoryCard;
