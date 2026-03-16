import { Question } from "./question.js";
class Exam{
    constructor(){
        this.Questions = [];
        this.currntQuestionIndex = 0;
        this.StudentAnswers = [];
    }
    
    
    AddQuestion(questionobj){
        if(questionobj instanceof Question)
            this.Questions.push(questionobj);       
    }

    Next(currentAnswer){
        if(this.currntQuestionIndex < this.Questions.length){
            this.StudentAnswers[this.currntQuestionIndex] = currentAnswer;
            this.currntQuestionIndex++;
        }
    }


    Previous(currentAnswer) {
        if (this.currntQuestionIndex > 0) {
            this.StudentAnswers[this.currntQuestionIndex] = currentAnswer;
            this.currntQuestionIndex--;
            return true;
        }
        return false;
    }

    Reset(){
        this.currntQuestionIndex = 0;
        this.StudentAnswers = [];
    }

    CalculateGrade(){
        let totalGrade = 0;
        let details = this.Questions.map((q, i) => {
            const currentAnswer = this.StudentAnswers[i] || "";
            const grade = q.CheckAnswer(currentAnswer);
            totalGrade += grade;
            return {
                QuestionText: q.text,
                userAnswer: currentAnswer,
                isCorrect: grade > 0,
                grade: grade,
                maxGrade: q.MaxGrade
            };
        });
        return { totalGrade, details };
    }
}

export { Exam };