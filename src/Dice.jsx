import React, { Component } from "react";
import "./Dice.css";

function Dice({ num }) {
    const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    return (
        <div className="Dice">
            { dice[num] }
        </div>
    )
}

export default Dice;
