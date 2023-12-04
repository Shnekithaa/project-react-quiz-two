import React, { Component } from 'react';
import "./Result.css";

export default class Result extends Component {
  render() {
    return (
      <div className='result-card'>
        <h1 style={{color: "green", textAlign: 'center'}}>Result</h1>
        <div className='score-card'>
            <h2 style={{marginBottom: 0, fontSize: '18px'}}>You need more practice</h2>
            <h1 style={{color: 'blue'}}>Your score is <span>20%</span></h1>
            <div>
                <div className='score-analysis'>
                    <p>Total number of questions</p>
                    <p>15</p>
                </div>
                <div className='score-analysis'>
                    <p>Number of attempted questions</p>
                    <p>9</p>
                </div>
                <div className='score-analysis'>
                    <p>Number of correct answers</p>
                    <p>3</p>
                </div>
                <div className='score-analysis'>
                    <p>Number of wrong answers</p>
                    <p>6</p>
                </div>
            </div>
        </div>
        <div className='bottom-buttons'>
            <button style={{backgroundColor: 'white', border: '3px solid #7676D6', color: '#7676D6'}}>Play Again</button>
            <button style={{backgroundColor: 'white', border: '3px solid #008001', color: '#008001'}}>Back to home</button>
        </div>
      </div>
    );
  }
}
