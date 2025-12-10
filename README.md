# InsightIQ - Interview Prep App

**Live Demo:** [https://insightiq-frontend.onrender.com](https://insightiq-frontend.onrender.com)

## Overview
**InsightIQ** is a full-stack AI-powered Interview Preparation App designed to help users prepare intelligently and efficiently for technical interviews.

Built with the **MERN stack** and integrated with **Gemini AI API**, InsightIQ dynamically generates personalized interview questions and concept explanations tailored to a user's selected role, experience level, and key topics.

---

## Tech Stack

- **Frontend:** React.js, TailwindCSS, Framer Motion  
- **Backend:** Node.js, Express.js, MongoDB  
- **AI Integration:** Gemini AI API (Google)  
- **Auth:** JWT-based Authentication  
- **Hosting:** Render (Frontend + Backend)

---

## Features

-  **User Authentication:** Secure JWT-based login and registration.
-  **AI-Generated Q&A:** Generates interview questions using Gemini AI based on:
  - Role (e.g., Frontend Developer)
  - Experience (e.g., 2 years)
  - Selected focus topics
-  **Pin Questions:** Mark and review important questions for focused revision.
-  **Concept Explanations:** Instantly fetch AI-powered explanations for selected questions.
-  **Sessions Management:** Each user can create and store multiple prep sessions.
-  **Load More:** Dynamically generate more questions on demand within each session.
-  **Responsive UI:** Clean and responsive design with accordion-style Q&A display.
-  **Animations:** Smooth UI transitions using Framer Motion.

---

## Folder Structure

```bash
InsightIQ/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── middlewares/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
│   └── public/
│
└── .env (Not pushed to GitHub)
