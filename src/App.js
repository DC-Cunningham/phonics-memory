import React, { Component } from "react";
import Confetti from 'react-confetti'
import GameBoard from "./components/GameBoard";
import NewGame from "./components/NewGame";
import PlayAgain from './components/PlayAgain';
import {stampedeWords} from "./WordLists/StampedeWords"
class App extends Component {
  static initState = () => {
    return {
      newGame: false,
      won: false,
      cards: [],
      clicks : 0
    };
  }

  state = App.initState();

  countClicks = () => {
    this.setState((prevState) => ({
        clicks : prevState.clicks + 1
    }));
  }

  generateDeck = () => {
    let cards = [];
    for (let i = 0; i < stampedeWords.length  ; i++) {
      let id = createId();
      const card = {
        id: id,
        wordType: stampedeWords[i].wordType,
        word: stampedeWords[i].word,
        flipped: false,
        found: false,
      }
      cards.push(card);
    }
    this.shuffleCards(cards);
    this.setState({cards});
  }

  shuffleCards = (a) => {
    var m = a.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = a[m];
      a[m] = a[i];
      a[i] = t;
    }
  
    return a;
  }

  resetGame = () => {
    this.setState(App.initState(), () => {
      this.initGame()
    });
  }

  hasWon = () => {
    this.setState({
      won: true
    });
  };

  initGame = () => {
    this.generateDeck();
    this.setState({
      newGame: true
    });
  };
  render() {
    const { cards, newGame, won, clicks } = this.state;
    return (
      <div>
        {won && <Confetti/>}
        <div className="board-container">
          {newGame ?
            (<GameBoard cards={cards} won={this.hasWon} click={this.countClicks} />)
            : null}
            {newGame && (<p className="message center">Try Count: {clicks}</p>)}
        </div>

        <div className="menu">
        <div className="message">
            {won && (<h2>You win!</h2>)}
          </div>
          <NewGame play={this.initGame} />
          {won && (<PlayAgain again={this.resetGame} />)}
        </div>
      </div>
    );
  }
}

export default App;

const createId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}