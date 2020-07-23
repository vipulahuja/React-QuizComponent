import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {
    handleClick(button_text){
        if(this.props.quiz_question.answer === button_text)
             this.props.showNextQuestionHandler();
    }
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {
                            this.props.quiz_question.answer_options.map((option,index) => {
                                return <QuizQuestionButton clickHandler={this.handleClick.bind(this)} button_text = {option} key = {index}/>
                            })
                        }
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion
