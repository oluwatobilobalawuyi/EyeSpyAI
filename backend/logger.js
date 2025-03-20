const fs = require("fs");
const logFile = "logs.json";

// ✅ Function to log attacks to a file
const logAttack = (attack) => {
  let logs = [];

  // Check if log file exists and read it
  if (fs.existsSync(logFile)) {
    logs = JSON.parse(fs.readFileSync(logFile));
  }

  logs.unshift(attack); // Add new attack at the top
  if (logs.length > 10) logs.pop(); // Keep only the latest 10 logs

  fs.writeFileSync(logFile, JSON.stringify(logs, null, 2)); // Save back to file
};

module.exports = { logAttack };