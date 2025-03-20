const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { logAttack } = require("./logger");
const systemStatus = require("./systemStatus");
const networkAnomalies = require("./threatDetection");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const logFile = "logs.json";

// ✅ API Endpoints
app.use("/api/system-status", systemStatus);
app.use("/api/threatDetection", threatDetection)

// ✅ API to Get Logged Attacks
app.get("/logs", (req, res) => {
  if (!fs.existsSync(logFile)) return res.json({ logs: [] });
  const logs = JSON.parse(fs.readFileSync(logFile));
  res.json({ logs });
});

// ✅ Simulate Logging a New Attack Every 10s
setInterval(() => {
  const attackTypes = ["Content Injection", "Reconnaissance", "Remote Access", "Adversary-in-the-Middle"];
  const locations = ["Firewall", "Web Server", "Database", "VPN Gateway"];

  const newAttack = {
    type: attackTypes[Math.floor(Math.random() * attackTypes.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    timestamp: new Date().toISOString(),
  };

  logAttack(newAttack); // Save attack to logs
}, 10000);

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Logging server running on http://localhost:${PORT}`);
});