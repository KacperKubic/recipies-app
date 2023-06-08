import React from "react";
import { useState } from "react";

const Quiz = () => {
    const questions = [
        {
            question: 'What are your dietary preferences?',
            anwsers: [
                {anwser: 'Vegetarian', value: 'vegetarian'},
                {anwser: 'Vegan', value: 'vegan'},
                {anwser: 'I dont have any', value: ''},
            ]
        },
        {
            question: 'Is your diet gluten free?',
            anwsers: [
                {anwser: 'Yes', value: 'glutenfree'},
                {anwser: 'No', value: ''},
            ]
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);


    const handleAnwserClick = (anwser) => {
        console.log(anwser)
        const nextQuestion = currentQuestion +1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        }else{
            console.log('Quiz ended')
        }
    }

    return ( 
        <div className="quiz">
            <div className="questions">
                <div className="question-number">
                    <p>Question number {currentQuestion + 1}</p>
                </div>
                <div className="question-text">
                    {questions[currentQuestion].question}
                </div>
            </div>
            <div className="questions">
                {questions[currentQuestion].anwsers.map((option) => (
                    <button key={option.value} onClick={() => handleAnwserClick(option.value)}>{option.anwser}</button>
                ))}
            </div>
        </div>
     );
}
 
export default Quiz;