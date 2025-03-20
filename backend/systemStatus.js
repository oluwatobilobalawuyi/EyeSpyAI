const express = require("express");
const os = require("os");

const router = express.Router();

router.get("/", (req, res) => {
  const systemStatus = {
    cpuLoad: (os.loadavg()[0] * 100).toFixed(2) + "%", // Load average for last 1 min
    memoryUsage: ((os.freemem() / os.totalmem()) * 100).toFixed(2) + "% Free",
    uptime: (os.uptime() / 3600).toFixed(2) + " Hours",
    firewallStatus: "🟢 Active",
    lastSecurityUpdate: "March 15, 2025",
  };

  res.json(systemStatus);
});

module.exports = router;