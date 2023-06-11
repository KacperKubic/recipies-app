import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import '../styles/Quiz.css'

const Quiz = () => {
    const questions = [
        {
            question: 'Would you like to take a quiz to make recepies you see more personalised?',
            anwsers: [
                {anwser: 'Yes'},
                {anwser: 'No, show me all recipies', value: 'basic', questionType: 'basic'}
            ]
        },
        {
            question: 'What are your dietary preferences?',
            anwsers: [
                {anwser: 'Vegetarian', value: 'vegetarian', questionType: 'diet'},
                {anwser: 'Vegan', value: 'vegan', questionType: 'diet'},
                {anwser: 'I dont have any', value: ''},
            ]
        },
        {
            question: 'Is your diet gluten free?',
            anwsers: [
                {anwser: 'Yes', value: 'glutenfree', questionType: 'gluten'},
                {anwser: 'No', value: ''},
            ]
        },
        {
            question: 'Congrats on finishing the quiz',
            anwsers: [
                {anwser: 'Go to page', value: 'yes', questionType: 'done'},
            ]
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);


    const handleAnwserClick = (anwser, questionType) => {
        const nextQuestion = currentQuestion +1;
        
        if(questionType === 'diet'){
            Cookies.set(questionType, anwser, {expires: 7})
        }else if(questionType === 'gluten'){
            Cookies.set(questionType, anwser)
        }else if(questionType === 'basic'){
            Cookies.set(questionType, anwser, {expires: 7})
            Cookies.set('done', 'yes', {expires: 7})
            window.location.reload();
        }

        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        }else{
            Cookies.set(questionType, anwser, {expires: 7})
            window.location.reload();
        }
    }

    return ( 
        <div className="quiz-page">
            <div className="quiz">
                <div className="questions">
                    <h3>Question number {currentQuestion + 1}</h3>
                    <p>{questions[currentQuestion].question}</p>
                </div>
                <div className="answers">
                    {questions[currentQuestion].anwsers.map((option) => (
                        <button key={option.anwser} onClick={() => handleAnwserClick(option.value, option.questionType)}>{option.anwser}</button>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Quiz;