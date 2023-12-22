import { getQuestions, random } from "./db.js"
import { useState, useEffect } from "react";

const questionBase = getQuestions()();

function QuizQuestion() {
    const [questions, setQuestions] = useState([]);

    const qusNumber = questionBase.map((k) => {
        return { ...k, isSelected: true }
    })
    console.log()
    useEffect(() => {
        setQuestions(qusNumber)
    }, [])




    return (
        <div>{questions.map((k) => <div >
            <div>  Question{k.id}</div>
            <div> { } </div>

        </div>)}</div>
    )
}
export default QuizQuestion;