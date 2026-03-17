# 📝 Interactive Quiz Engine

A robust, Object-Oriented JavaScript application designed to manage dynamic exams. This engine handles question encapsulation, state-managed navigation, and automated grading with a modern UI.

---

## 🚀 Key Features

- 🔒 **Data Encapsulation** — Leverages ES2022 private class fields (`#field`) to secure correct answers and grades from external tampering.
- 🔄 **Bidirectional Navigation** — Seamlessly move between questions using `Next` and `Previous` buttons while preserving user input state.
- ⚠️ **Strict Validation** — Implements a "Required Input" policy, preventing users from advancing without providing an answer.
- 📊 **Dynamic Grading** — Features an automated scoring engine that normalizes user input (case-insensitive/trimmed) for fair evaluation.
- 🎨 **Responsive Results** — A dedicated results view that toggles display states, highlighting performance with color-coded feedback.

---
## 🌐 Live Demo
 
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge&logo=github)](https://iahmadmahmoud.github.io/JS-Exam-System/)
 
---
## 📺 Project Walkthrough

Check out the interactive quiz engine in action, showcasing state persistence and automated grading:

https://github.com/iAhmadMahmoud/JS-Exam-System/raw/main/assets/lab2-part2.mp4

> **Note:** If the video doesn't play automatically, you can find it in the `assets/` folder.

---
## 🛠️ Project Structure

The architecture follows a modular separation of concerns:

```
├── assets/          # Project demonstration video
├── index.html       # The main UI structure
├── style.css        # Custom styles for exam and results
├── src/
│   ├── app.js       # Main controller & DOM events
│   ├── question.js  # Question Class definition
│   └── exam.js      # Exam Class definition
└── README.md
```

---

## 📋 Installation & Usage

### 1. Clone the Repository

```bash
git clone git@github.com:iAhmadMahmoud/JS-Exam-System.git
```

### 2. Run Locally

Because this project uses ES6 Modules, it must be run via a local server.

- **VS Code:** Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
- **Terminal:** Run `npx serve` or `python -m http.server`.

---

## 🕹️ Technical Implementation

### The Grading Algorithm

The system uses a `.map()` implementation to compare stored student answers against private question data, generating a detailed performance report.

```javascript
CalculateGrade() {
    let totalGrade = 0;
    const details = this.Questions.map((q, i) => {
        const userAnswer = this.StudentAnswers[i] || "";
        const grade = q.CheckAnswer(userAnswer);
        totalGrade += grade;

        return {
            QuestionText: q.text,
            userAnswer: userAnswer,
            isCorrect: grade > 0,
            grade: grade
        };
    });
    return { totalGrade, details };
}
```

---

## 🎨 UI Behavior

- **Input Enforcement** — Shows a focus-alert if the input is empty on `Next`.
- **State Persistence** — When clicking `Previous`, the engine "hydrates" the input field with the user's saved data from that index.
- **Result Toggle** — Automatically hides the quiz container and reveals the results dashboard upon completion.

---

## 👨‍💻 Author

**Your Name**

- LinkedIn: [Ahmed Mahmoud](https://www.linkedin.com/in/ahmedmahmoudabdallah/)
- GitHub: [Ahmed Mahmoud](https://github.com/iAhmadMahmoud)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
