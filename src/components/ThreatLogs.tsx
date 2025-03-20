import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const API_URL = "http://localhost:5000/logs"; // Backend API

const ThreatLogs = () => {
  const [logs, setLogs] = useState<{ type: string; location: string; timestamp: string }[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setLogs(data.logs);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        background: "#f5f5f5",
        padding: 3,
        borderRadius: "8px",
        height: "300px",
        overflowY: "auto",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2, color:"#1e1e1e" }}>
         Monitoring & Logging
      </Typography>
      {logs.length === 0 ? (
        <Typography sx={{ color:"#1e1e1e"}}>No security logs available.</Typography>
      ) : (
        logs.map((log, index) => (
          <Typography key={index} sx={{ marginBottom: 1 }}>
            🛑 {log.type} detected at {log.location} ({new Date(log.timestamp).toLocaleTimeString()})
          </Typography>
        ))
      )}
    </Box>
  );
};

export default ThreatLogs;