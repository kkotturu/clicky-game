//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import baby from "./baby.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    baby,
    clickedImage: [],
    score: 0,
    // message: ""
  };

  //when you click on a image, the clicked image is taken out of the array
  imageClick = event => {
    const currentImage = event.target.alt;
    const ImageAlreadyClicked = this.state.clickedImage.indexOf(currentImage) > -1;

    //if you click on an image that has already been selected, the game resets and cards are reordered
    if (ImageAlreadyClicked) {
      this.setState({
        baby: this.state.baby.sort(function (elem, i) {
          return 0.5 - Math.random();
        }),
        clickedImage: [],
        score: 0
        // message: "You Lose :("
      });
      alert("You lose. Want to play again?");

      //if you click on a different images, your score is increased and cards are reordered
    } else {
      this.setState(
        {
          baby: this.state.baby.sort(function (elem, i) {
            return 0.5 - Math.random();
          }),
          clickedImage: this.state.clickedImage.concat(
            currentImage
          ),
          score: this.state.score + 1
        },
        //if you get all 12 images correct you get a message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              baby: this.state.baby.sort(function (elem, i) {
                return 0.5 - Math.random();
              }),
              clickedImage: [],
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
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.baby.map(baby => (
            <FriendCard
              imageClick={this.imageClick}
              id={baby.id}
              key={baby.id}
              image={baby.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;