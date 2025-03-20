const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const threatDetection = [
    { type: "Content Injection", severity: "🔴 High", timestamp: new Date().toISOString() },
    { type: "Reconnaissance Scan Detected", severity: "🟡 Medium", timestamp: new Date().toISOString() },
    { type: "Remote Access Attempt", severity: "🔴 High", timestamp: new Date().toISOString() },
    { type: "Adversary-in-the-Middle Attack", severity: "🟠 Moderate", timestamp: new Date().toISOString() },
  ];

  res.json(threatDetection);
});

module.exports = router;