import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const API_URL = "http://localhost:5000/api/system-status";

const SystemStatus = () => {
  const [status, setStatus] = useState({
    cpuLoad: "Loading...",
    memoryUsage: "Loading...",
    uptime: "Loading...",
    firewallStatus: "Loading...",
    lastSecurityUpdate: "Loading...",
  });

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setStatus(data);
      } catch (error) {
        console.error("Error fetching system status:", error);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ background: "#f5f5f5", padding: 3, borderRadius: "8px", height: "300px" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>🖥️ System Status</Typography>
      <Typography>🔥 CPU Load: {status.cpuLoad}</Typography>
      <Typography>💾 Memory Usage: {status.memoryUsage}</Typography>
      <Typography>⏳ Uptime: {status.uptime}</Typography>
      <Typography>🛡️ Firewall Status: {status.firewallStatus}</Typography>
      <Typography>🛠️ Last Security Update: {status.lastSecurityUpdate}</Typography>
    </Box>
  );
};

export default SystemStatus;