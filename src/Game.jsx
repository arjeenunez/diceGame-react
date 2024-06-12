import React, { Component } from "react"
import Dice from "./Dice"
import "./Game.css"

function Rando() {
    return Math.floor(Math.random() * 6);
}

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            die1: Rando(),
            die2: Rando(),
            rolled: false
        }
        this.rollDie = this.rollDie.bind(this);
    }
    rollDie(evt) {
        this.setState({
            die1: Rando(),
            die2: Rando(),
            rolled: true
        });
        setTimeout(() => {
            this.setState({rolled: false})
        }, 1000)
    }
    render() {
        const { die1, die2, rolled } = this.state;
        let isJiggle = rolled ? "Game-dice-container-jiggle" : "Game-dice-container"
        
        return (
            <div>
                <div className={ isJiggle }>
                    <Dice num={ die1 } />
                    <Dice num={ die2 } />
                </div>
                <div className="Game-button-container">
                    <button className="Game-button" onClick={this.rollDie} disabled={ rolled }>{ rolled ? "Rolling..." : "Roll dice" }</button>
                </div>
            </div>
        )
    }
}

export default Game;