import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const API_URL = "http://localhost:5000/api/threat-detection";

const ThreatDetection = () => {
  const [threats, setThreats] = useState<{ type: string; severity: string; timestamp: string }[]>([]);

  useEffect(() => {
    const fetchThreats = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setThreats(data);
      } catch (error) {
        console.error("Error fetching threat detection data:", error);
      }
    };

    fetchThreats();
    const interval = setInterval(fetchThreats, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ background: "#1e1e1e", padding: 3, borderRadius: "8px", height: "300px", overflowY: "auto" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>⚠️ Threat Detection</Typography>
      {threats.length === 0 ? (
        <Typography sx= {{ color: "#aaa"}}>No active threats detected.</Typography>
      ) : (
        threats.map((log, index) => (
          <Typography key={index} sx={{ marginBottom: 1 }}>
            {log.severity} {log.type} ({new Date(log.timestamp).toLocaleTimeString()})
          </Typography>
        ))
      )}
    </Box>
  );
};

export default ThreatDetection;