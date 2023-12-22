import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 35,
        min: 4
    }
});



export function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getQuestions() {
    let questions = [];
    return () => {

        if (questions.length > 0) return questions;
        questions = new Array(8).fill(null).map((k, index) => ({
            id: index + 1,
            question: lorem.generateWords(random(20, 35)) + ' ?',
            options: new Array(5).fill(null).map((k, i) => ({
                id: i + 1,
                text: lorem.generateWords(random(3, 8))
            }),
            ),
            answer: random(1, 5),
            explanation: lorem.generateWords(random(30, 60))
        }));
        return questions;

    }
}