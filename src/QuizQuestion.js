import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer : false
        }
    }
    handleClick(button_text){
        if(this.props.quiz_question.answer === button_text)
             this.props.showNextQuestionHandler();
        else
            this.setState({
                incorrectAnswer : true
            })
    }
    render() {
        return (
            <main>
                {this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null}
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
