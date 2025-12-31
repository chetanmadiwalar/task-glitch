# TaskGlitch

TaskGlitch is a **React + TypeScript** task management web application designed to help users track tasks, measure performance metrics, and optimize productivity. It includes features like task creation, editing, deletion, priority management, and ROI tracking.  

The project uses **Material-UI (MUI)** for the interface and **Vite** for fast development and build tooling.

---

## 🌐 Live Demo

Check out the live version of TaskGlitch:  
[https://chetan-taskglitch.netlify.app/](https://chetan-taskglitch.netlify.app/)

---

## 🛠 Features

- Add, edit, and delete tasks  
- Track task revenue, time spent, ROI, priority, and status  
- Undo last deletion  
- View metrics: total revenue, revenue per hour, average ROI, performance grade, and time efficiency  
- Responsive design using MUI  
- Lightweight and fast with Vite  

---

## 📁 Folder Structure

task-glitch-main/
├─ public/ # Public assets
├─ src/
│ ├─ components/ # React components (TaskTable, TaskForm, MetricsBar, etc.)
│ ├─ context/ # React context for task state
│ ├─ hooks/ # Custom hooks (useTasks)
│ ├─ types.ts # TypeScript types
│ ├─ utils/ # Utility functions (logic, seed data)
│ ├─ App.tsx
│ └─ main.tsx
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md


---

## ⚡ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/chetanmadiwalar/task-glitch.git
cd task-glitch
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:5173 to view the app.

Build for production:

bash
Copy code
npm run build
Preview production build:

bash
Copy code
npm run preview
🧰 Technologies Used
React 18 + TypeScript

Material-UI (MUI) v5

Vite

Node.js & npm

Netlify (for hosting)

✅ Bug Fixes
Bug 1: Fixed Task sorting stability by adding tie-breakers

Bug 2: Fixed XSS risk in Task notes display

Bug 3: Fixed metrics calculations and edge cases (ROI, revenue per hour)

Bug 4: Fixed TaskForm duplicate title detection and invalid values

Bug 5: Fixed task loading and persistent state issues

📌 Usage
Click Add Task to create a new task

Click on a task row to view and edit details

Use Edit and Delete buttons to modify tasks

Undo a deletion using the Undo button in the metrics bar

