import { Question } from "./question.js";
import { Exam } from "./exam.js";

let exam = new Exam();
exam.AddQuestion(new Question(1, "Is JavaScript fun?(true/false)", "true", 5));
exam.AddQuestion(new Question(2, "2 + 2?", "4", 10));
exam.AddQuestion(new Question(3, "What is ES6?", "ecmascript 2015", 10));
exam.AddQuestion(new Question(4, "Classes are sugar?(true/false)", "true", 5));
exam.AddQuestion(new Question(5, "Modules keyword?(import/export)", "import", 15));

function renderQuestion() {
    const q = exam.Questions[exam.currntQuestionIndex];
    document.getElementById("header").innerHTML = `<h2>Question ${exam.currntQuestionIndex + 1} of ${exam.Questions.length}</h2>`;
    const answerInput = document.getElementById('user-answer');

    const savedAnswer = exam.StudentAnswers[exam.currntQuestionIndex];
    answerInput.value = savedAnswer || "";
    
    document.getElementById("txt").innerHTML = q.ShowQuestion();
}

function handleNext() {
    const answerInput = document.getElementById('user-answer'); 
    const currentAnswer = answerInput.value.trim();


    if (currentAnswer === "") {
        alert("Input is required! Please enter an answer to continue.");
        answerInput.focus(); 
        return; 
    }
    answerInput.focus(); 
    exam.Next(currentAnswer);
    
    if (exam.currntQuestionIndex < exam.Questions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function handlePrev() {
    const answerInput = document.getElementById('user-answer');
    const currentAnswer = answerInput.value.trim();
    exam.StudentAnswers[exam.currntQuestionIndex] = currentAnswer;
    exam.Previous(currentAnswer);
    renderQuestion();
    const savedAnswer = exam.StudentAnswers[exam.currntQuestionIndex];
    answerInput.value = savedAnswer || ""; 
    
    answerInput.focus();
}

function showResults() {
    document.getElementById('input-section').style.display = 'none';
    document.getElementById('Reset').style.display = 'block';
    document.getElementById('result-section').style.display = 'block';
    const results = exam.CalculateGrade();
    
    const htmlResult = results.details.map((detail, index) => {
        const statusClass = detail.isCorrect ? "correct-answer" : "wrong-answer";
        return `
            <div class="${statusClass}">
                <p>
                    <strong>Question ${index + 1}:</strong> ${detail.QuestionText}: 
                    <strong>${detail.isCorrect ? "Correct" : "Wrong"}</strong>
                    (You:"${detail.userAnswer}")  
                    <strong>Grade:</strong> ${detail.grade} 
                    <strong style="color: black;">(${detail.maxGrade} pts)</strong>
                </p>
            </div>`;
    }).join("");

    const res = `<h2>Results:</h2>`;
    const summary = `<h2 style="color: #2A7B9B;">Final Score: ${results.totalGrade}</h2>`;
    document.getElementById('result-section').innerHTML = res + htmlResult + summary;
}

document.getElementById('Reset').addEventListener('click', () => {
    exam.Reset();
    document.getElementById('input-section').style.display = 'block';
    document.getElementById('Reset').style.display = 'none';
    document.getElementById('result-section').style.display = 'none';
    renderQuestion();
});
addEventListener("load",renderQuestion);
document.getElementById('NextBtn').addEventListener('click', handleNext);
document.getElementById('PrevBtn').addEventListener('click', handlePrev);
