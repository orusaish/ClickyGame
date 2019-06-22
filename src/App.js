//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar/navbar";
import Jumbotron from "./components/Jumbotron/jumbotron";
import CartoonCard from "./components/CartoonCard/CartoonCard";
import cards from "./cards.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    cards,
    clickedCard: [],
    score: 0
  };

  //when you click on a card ... the fish is taken out of the array
  imageClick = event => {
    const currentCard = event.target.alt;
    const CardAlreadyClicked = this.state.clickedCard.indexOf(currentCard) > -1;

    //if you click on a fish that has already been selected, the game is reset and cards reordered
    if (CardAlreadyClicked) {
      this.setState({
        cards: this.state.cards.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCard: [],
        score: 0
      });
      alert("You lose. Play again?");

      //if you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState(
        {
          cards: this.state.cards.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCard: this.state.clickedCard.concat(currentCard),
          score: this.state.score + 1
        },
        //if you get all 12 fish corrent you get a congrats message and the game resets
        () => {
          if (this.state.score === 10) {
            alert("Yay! You Win!");
            this.setState({
              cards: this.state.cards.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCard: [],
              score: 0
            });
          }
        }
      );
    }
  };

  //the order of components to be rendered: navbar, jumbotron, friendcard, footer
  render() {
    return (
      <div>
        <Navbar score={this.state.score} />
        <Jumbotron />
        <div className="wrapper">
          {this.state.cards.map(cards => (
            <CartoonCard
              imageClick={this.imageClick}
              id={cards.id}
              key={cards.id}
              image={cards.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
