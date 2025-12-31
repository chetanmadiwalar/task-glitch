# Task Glitch

🚀 **Live Demo:** [https://chetan-taskglitch.netlify.app/](https://chetan-taskglitch.netlify.app/)

---

## 📁 Project Structure

```
task-glitch-main/
├─ public/                # Public assets
├─ src/
│  ├─ components/         # React components (TaskTable, TaskForm, MetricsBar, etc.)
│  ├─ context/            # React context for task state
│  ├─ hooks/              # Custom hooks (useTasks)
│  ├─ types.ts            # TypeScript types
│  ├─ utils/              # Utility functions (logic, seed data)
│  ├─ App.tsx
│  └─ main.tsx
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md
```

---

## ⚡ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/chetanmadiwalar/task-glitch.git
cd task-glitch
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

4. Build for production:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

---

## 🧰 Technologies Used

- React 18 + TypeScript  
- Material-UI (MUI) v5  
- Vite  
- Node.js & npm  
- Netlify (for hosting)

---

## ✅ Bug Fixes

- **Bug 1:** Fixed Task sorting stability by adding tie-breakers  
- **Bug 2:** Fixed XSS risk in Task notes display  
- **Bug 3:** Fixed metrics calculations and edge cases (ROI, revenue per hour)  
- **Bug 4:** Fixed TaskForm duplicate title detection and invalid values  
- **Bug 5:** Fixed task loading and persistent state issues  

---

## 📌 Usage

- Click **Add Task** to create a new task  
- Click on a task row to view and edit details  
- Use **Edit** and **Delete** buttons to modify tasks  
- Undo a deletion using the **Undo** button in the metrics bar  

---

## 🌐 Live Demo

[https://chetan-taskglitch.netlify.app/](https://chetan-taskglitch.netlify.app/)

