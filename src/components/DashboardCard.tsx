import { Box, CardContent, Typography } from "@mui/material";
import { ReactNode, useState } from "react";

// Define the types for props
interface DashboardCardProps {
  title: string;
  value?: string; // Optional: Some cards may not have a value
  children?: ReactNode; // Allows passing components inside the card
}

const DashboardCard = ({ title, value, children }: DashboardCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        flex: 1,
        minWidth: "250px",
        background: isHovered ? "#212144" : "#f5f5f5", // Change background on hover
        padding: 2,
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
        transform: isHovered ? "translateX(-5px)" : "none", // Move slightly on hover
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent>
        {/* Title changes to white when hovered */}
        <Typography
          variant="h6"
          sx={{
            color: isHovered ? "#ffffff" : "#333", // Change title color on hover
            fontWeight: "bold",
            transition: "color 0.3s ease-in-out",
          }}
        >
          {title}
        </Typography>

        {/* Value text (if provided) */}
        {value && (
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#6AB0B8" }}>
            {value}
          </Typography>
        )}

        {/* Additional Content (for components like SystemStatus) */}
        {children}
      </CardContent>
    </Box>
  );
};

export default DashboardCard;