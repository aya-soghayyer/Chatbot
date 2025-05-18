# 📢 Chatbot for IT students in Hebron University (MiLo) <img src="https://cdn3d.iconscout.com/3d/premium/thumb/robot-3d-icon-download-in-png-blend-fbx-gltf-file-formats--bot-machine-robotic-future-things-and-ai-pack-technology-icons-6740636.png" width="70" height="70"> – Frontend Interface (Graduation Project)

A modern, responsive chatbot interface built with **React.js** and **Tailwind CSS**. This project serves as the **frontend** of a conversational AI system, supporting features like **live chat**, **message streaming**, **speech recognition**, and **image upload**.

---

## 🚀 Features

- 💬 Live Chat Interface  
- ⏱ Real-Time Streaming Responses  
- 🎤 Voice Input via React Speech Recognition 
- 📜 Chat History Panel  
- 🌗 Responsive Design (Mobile & Desktop)  
- 🛠️ **Admin Panel:** Manage users, view chat logs, and configure chatbot settings.  
- 🎓 **Student Chat:** Dedicated chat interface for students to generate lecture schedules and tables at the beginning of each semester.  
- 👥 **Guest Chat:** A public chat option for guests to inquire about university information and services.  
- 🔐 **Milo’s Password Management:**  
  - Change Milo’s password securely.  
  - Forgot password flow to reset Milo’s password via verification.  

---

## 🛠️ Tech Stack

| Tech         | Description                          |
|--------------|--------------------------------------|
| **React JS** | JavaScript UI library                |
| **Tailwind CSS** | Utility-first CSS framework     |
| **Vite**     | Lightning-fast frontend build tool   |
| **Fetch**    | HTTP client for API requests         |
| **FastAPI** *(Backend)* | Python web framework (separate repo) |

---

## 📂 Folder Structure

```bash
src/
│
├── assets/             # Static assets like images, sounds, and icons
├── components/         # Reusable and modular UI components (e.g., Navbar, Header)
├── hooks/              # Custom React hooks for logic reuse (e.g., usePhoto, useSpeech)
├── i18n/               # Internationalization (i18n) setup for translating app content
├── icons/              # Font Awesome icons
├── routes/             # file that sets up the app layout
├── services/           # Abstractions for API calls, speech service, and business logic
├── store/              # Global state management (e.g., Context API)
├── utils/              # General utility/helper functions (e.g., formatting, validation)
├── views/              # Page-level components or view containers (e.g., Home, Userchat, Login, Signup)
└── App.jsx             # Root component routing configuration (e.g., React Router definitions, routes, and providers)
```
---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/aya-soghayyer/Chatbot.git
cd Chatbot
```
### Install dependencies

```bash
npm install
```
### Run the app

```bash
npm run dev
```
---

## 🧠 How It Works
![system overview](https://drive.google.com/file/d/1zTl2wAhuq5Pf9xTlcGPXJttm8DTEI9fb/view?usp=sharing)

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to improve or add.

---
## 📬 Contact
Aya Soghayyer
GitHub: @aya-soghayyer

---

## ✅ References

- React Documentation

- Tailwind CSS Docs

---

## 🚀 Deployment on Render

This project was deployed on [MiLo chatbot](https://www.chatbotmilo.online/) — a simple and powerful cloud platform for hosting frontend and backend apps.










