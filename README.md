# EyeSpyAI
By 2025, it is expected that $10 trillion a year could be stolen by cybercriminals. Nowadays, advanced automated security solutions are essential because they allow us to detect and respond to incidents faster, reduce security workload, etc. 

Our solution is to automate the detection of threats and defend against various cyber attacks with our system EyeSypy AI using the MITRE ATT&CK wireframes. 

MITRE ATT&CK is a collection of information about tactics and techniques that hackers use based on real-life cases. What MITRE ATT&CK does is help companies and the government build strategies to protect against attacks and create tools to defend against those attacks. MITRE ATT&CK gives details on different attacks and techniques to combat those techniques. 

Some attacks listed are Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration, and Impact. 

Each tactic has a range of 8 to 43 techniques to combat it. 
For example, Reconnaissance is a tactic that the attacker is trying to get information they can use to plan future operations. 
Some techniques to combat reconnaissance are vulnerability scanning, scanning IP blocks, and scanning hardware and software. 

As the Blue Team, we want to evolve this agent by simulating Red Team tactics on our system and understand how they can be countered using various defensive strategies.


## 🧠 Features

- 📷 **Real-Time Object Detection**
- 🧭 **Autonomous Agent Integration**
- 📊 **Interactive Web Dashboard** (TypeScript, HTML, CSS)
- 🐍 **Python-Based AI Backend**
- 🧩 Modular Design (Frontend & Backend separation)

## 🌐 Dashboard

The dashboard is a responsive, browser-based interface built using:
- [TypeScript](https://www.typescriptlang.org/)
- HTML/CSS
- Vite for development and build tooling

eyespy-dashboard/

├── src/

│   ├── components/

│   │   └── Dashboard.jsx

│   ├── App.js

│   └── index.css  ← (already contains Tailwind setup)

backend/

├── main.py              # Entry point for the backend service


├── detector.py          # Object detection logic (e.g., using OpenCV, PyTorch, or YOLO)


├── utils/               # Helper functions (e.g., logging, preprocessing)


├── config/              # Configuration files (thresholds, camera URLs, etc.)


├── API/                 # Flask or FastAPI routes (optional for frontend integration)


└── requirements.txt     # Python dependencies

Ensure the dependencies are installed:
    cd backend
    pip install -r requirements.txt

👥 Authors
Oluwatobiloba Lawuyi (@oluwatobilobalawuyi)

Nia McNeal

Kiara Nichols

Medinat Lawal

Christian Earle
