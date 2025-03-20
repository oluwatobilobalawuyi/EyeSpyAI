import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const API_URL = "http://localhost:5000/attacks"; // Your backend URL

const AITeleprompter = () => {
  const [alerts, setAlerts] = useState<string[]>([]);
  const [attackDetected, setAttackDetected] = useState(false);

  useEffect(() => {
    // ✅ Clear old alerts when the component mounts
    setAlerts([]);

    const fetchAttacks = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.attacks.length > 0) {
          const latestAttack = data.attacks[0]; // Get the most recent attack
          const attackMessage = `🚨 ${latestAttack.type} detected at ${latestAttack.location}!`;

          setAlerts((prevAlerts) => [attackMessage, ...prevAlerts.slice(0, 4)]); // Keep only latest 5
          setAttackDetected(true);
        } else {
          setAttackDetected(false);
        }
      } catch (error) {
        console.error("Error fetching attack data:", error);
      }
    };

    const interval = setInterval(fetchAttacks, 5000);
    return () => clearInterval(interval);
  }, []); // ✅ Ensures state is cleared when component mounts

  return (
    <Box
      sx={{
        background: "#1e1e1e",
        color: "#fff",
        padding: 3,
        borderRadius: "8px",
        overflow: "hidden",
        height: "300px",
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "left",
        justifyContent: "start",
      }}
    >
      {attackDetected ? (
        <Box sx={{ height: "150px", overflowY: "auto" }}>
          {alerts.map((alert, index) => (
            <Typography key={index} sx={{ marginBottom: "8px", animation: "fadeIn 0.5s ease-in-out" }}>
              {alert}
            </Typography>
          ))}
        </Box>
      ) : (
        <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "ffffff", marginBottom: 1 }}>
          AI Teleprompter
        </Typography>
          <Typography sx={{ color: "#aaa" }}>No active threats detected.</Typography>
      </Box>
      )}
    </Box>
  );
  
};

export default AITeleprompter;
    