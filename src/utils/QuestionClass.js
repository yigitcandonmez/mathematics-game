export default class Question {
    constructor(questionNumber) {
        this.questionNumber = questionNumber;
        this.numberOne = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        this.numberTwo = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        this.pickedNumbers = [];
        this.changeTime = 0;
        this.correctAnswer = this.numberOne * this.numberTwo;
        this.answers = [];
        this.score = this.correctAnswer % 1 !== 0 ? Math.sqrt(this.correctAnswer) : Math.ceil(Math.sqrt(this.correctAnswer));
    }

    calculateAnswers() {
        const calculatedAnswers = [];

        for (let i = 0; i < 2; i++) {
            const numberPicker = Math.round(Math.random());
            if (this.pickedNumbers.length < 2) {
                this.pickedNumbers.push(numberPicker);
            }

            if (numberPicker === 0) {
                const answerOne = i === 0 ? (this.numberOne - 1) * this.numberTwo : (this.numberTwo - 1) * this.numberOne;
                calculatedAnswers.push(answerOne);
            } else {
                const answerTwo = i === 0 ? (this.numberOne + 1) * this.numberTwo : (this.numberTwo + 1) * this.numberOne;
                calculatedAnswers.push(answerTwo);
            }
        }
        calculatedAnswers.push(this.correctAnswer)

        return calculatedAnswers
    }

    set changeNumber(number) {
        if (number === "numberOne") {
            this.numberOne = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        } else {
            this.numberTwo = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        }
        this.correctAnswer = this.numberOne * this.numberTwo;
    }
}