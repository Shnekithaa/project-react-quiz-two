import React, { Component } from 'react';
import "./Quiz.css";
import quizQuestion from '../resources/quizQuestion.json';
import Result from './Result';

export default class Quiz extends Component {

  constructor(props){
    super(props);

    this.state = {
      currQuestionIndex: 0,
      questions: quizQuestion,
      hasQuit: false
    };
  }

  handlePrevious = () => {
    this.setState((prevState) => ({
      currQuestionIndex: Math.max(prevState.currQuestionIndex - 1, 0)
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currQuestionIndex: Math.min(prevState.currQuestionIndex + 1, this.state.questions.length - 1)
    }));
  };

  handleQuit = () => {
    const quitConfirmation = window.confirm("Are you sure you want to quit?");
    if(quitConfirmation){
      this.setState({hasQuit: true});
    }
  };

  render() {

    const {currQuestionIndex, questions, hasQuit} = this.state;
    const currentQuestion = questions[currQuestionIndex];

    if(hasQuit){
      return <Result />
    }

    return (
      <div className='container'>
        <div className='card'>
            <h1>Question</h1>
            <h3><span>{currQuestionIndex + 1}</span> of {questions.length}</h3>
            <h2>{currentQuestion.question}</h2>
            <div className='buttons'>
              <button>{currentQuestion.optionA}</button>
              <button>{currentQuestion.optionB}</button>
            </div>
            <div className='buttons'>
              <button>{currentQuestion.optionC}</button>
              <button>{currentQuestion.optionD}</button>
            </div>
            <div className='bottom-buttons'>
                <button style={{backgroundColor: '#3E7EAA'}} onClick={this.handlePrevious}>Previous</button>
                <button style={{backgroundColor: '#008001'}} onClick={this.handleNext}>Next</button>
                <button style={{backgroundColor: '#FF0000'}} onClick={this.handleQuit}>Quit</button>
            </div>
        </div>
      </div>
    );
  }
}
