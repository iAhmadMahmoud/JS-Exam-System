class Question {
    #Id;
    #Text;
    #CorrectAnswer;
    #Grade;
    constructor(Id, Text, CorrectAnswer, Grade) {
        this.#Id = Id;
        this.#Text = Text;
        this.#CorrectAnswer = CorrectAnswer;
        this.#Grade = Grade;
    }
    get id() { return this.#Id; }
    get text() { return this.#Text; }
    get MaxGrade() { return this.#Grade; }
    ShowQuestion() {
        return `<p>${this.#Text} (${this.#Grade} points)</p>`;
    }
    CheckAnswer(userAnswer) {
        if (String(userAnswer.trim().toLowerCase()) === String(this.#CorrectAnswer.trim().toLowerCase())) {
            return this.#Grade;
        }
        return 0;
    }
}
export { Question };