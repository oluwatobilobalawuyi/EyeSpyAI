import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Container, CardContent, IconButton, Avatar, Menu, MenuItem, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SecurityIcon from "@mui/icons-material/Security";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AITeleprompter from "./components/AITeleprompter";
import DashboardCard from "./components/DashboardCard";
import ThreatLogs from "./components/ThreatLogs";
import SystemStatus from "./components/SystemStatus";
import ThreatDetection from "./components/ThreatDetection";
import logo from "./assets/EYESPY AI LOGO.png";
import { useState, useEffect } from "react";

// Define API URL
const API_URL = "https://api.example.com/alerts"; // Replace with actual API endpoint

// Main App Component
function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [alerts, setAlerts] = useState<{ message: string; timestamp: string }[]>([]); // Display alerts on icon

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    const fetchAlerts = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setAlerts(data);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      }
    };

    fetchAlerts(); // Call fetchAlerts on component mount

    return () => clearInterval(interval);
  }, []); // Add empty dependency array to ensure proper behavior

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Header with Profile, Settings, and Date */}
      <AppBar position="fixed" sx={{ background: "#ffffff", boxShadow: "none", borderBottom: "1px solid #ddd", padding: "0 20px" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Dashboard Name */}
          <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold" }}>
            EyeSpy AI
          </Typography>

          {/* Right Side: Notifications, Date, and Profile Dropdown */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1" sx={{ color: "#555", fontWeight: "bold" }}>
              {currentDate.toDateString()}
            </Typography>

            <IconButton>
              <Badge badgeContent={alerts.length} color="error">
                <NotificationsIcon sx={{ color: "#555" }} />
              </Badge>
            </IconButton>

            {/* Profile Dropdown */}
            <IconButton onClick={handleMenuOpen} sx={{ display: "flex", alignItems: "center" }}>
              <Avatar sx={{ width: 32, height: 32, bgcolor: "#6AB0B8" }}>SD</Avatar>
              <ArrowDropDownIcon sx={{ color: "#555" }} />
            </IconButton>

            {/* Dropdown Menu */}
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 3, mt: 10, minWidth: "75vw", minHeight: "100vh" }}>
        <Container>
          {/* KPI Metrics Section */}
          <Box sx={{ gridColumn: "2", display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center" }}>
            <DashboardCard title="Active Threats" value="🚨 12" />
            <DashboardCard title="Resolved Incidents" value="✅ 45" />
            <DashboardCard title="System Status">
              <SystemStatus />
            </DashboardCard>
            <DashboardCard title="Threat Detection" value="🔴 3 Detected" />
          </Box>

          {/* Analytics & Performance Charts */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mt: 4 }}>
            <Box sx={{ gridColumn: "2", background: "#f5f5f5", padding: 2, borderRadius: "8px", height: "100%", width: "100%" }}>
              <Typography variant="h6" sx={{ color: "#222", fontWeight: "bold" }}>Threat Trends Over Time</Typography>
              <Typography sx={{ color: "#222" }}>📊 Bar Chart Placeholder </Typography>
            </Box>

            {/* Monitoring & Logging */}
            <Box sx={{ gridColumn: "2", background: "#f5f5f5", padding: 2, borderRadius: "8px", height: "100%", width: "100%" }}>
              <Box className="dashboard-container">
                <ThreatLogs />
              </Box>
            </Box>

            {/* Threat Detection & AI Teleprompter Side by Side */}
            <div className="side-by-side-container">
              {/* Threat Detection */}
              <div>
                <Box className="dashboard-container">
                  <ThreatDetection />
                </Box>
                <Typography variant="h6" sx={{ color: "#222", fontWeight: "bold", textAlign: "center" }}>
                  Threat Detection (Live Alerts)
                </Typography>
              </div>

              {/* AI Teleprompter */}
              <div>
                <Box className="dashboard-container">
                  <AITeleprompter />
                </Box>
                <Typography variant="h6" sx={{ color: "#222", fontWeight: "bold", textAlign: "center" }}>
                  AI Teleprompter (Live Attack Alerts)
                </Typography>
              </div>
            </div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;