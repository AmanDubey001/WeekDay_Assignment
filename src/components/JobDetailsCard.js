import { Box, Button, Paper, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import React, { useState } from "react";
import { DisplaySalary } from "../pages/Data";

const JobDetailsCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Paper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        minWidth: 250,
        padding: 2,
        borderRadius:6,
        transition: "transform 0.3s ease-in-out",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <Box sx={{ width: "40px" }}>
          <img src={logo} width="100%" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body"
            sx={{
              color: "grey",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            WeekDay
          </Typography>
          <Typography
            mt={0.5}
            variant="body"
            sx={{ fontSize: 14, textTransform: "capitalize" }}
          >
            {item?.jobRole}
          </Typography>
          <Typography
            mt={0.5}
            variant="body"
            sx={{ fontSize: 12, textTransform: "capitalize" }}
          >
            {item?.location}
          </Typography>
        </Box>
      </Box>
      <Typography mt={1} variant="body" sx={{ color: "grey", fontSize: 16 }}>
        Estimated Salary: &#x20B9; {DisplaySalary(item)} &#x2705;
      </Typography>

      <Typography mt={1} variant="body2" sx={{ fontSize: 16, fontWeight: 500 }}>
        About Company:
      </Typography>

      <Typography
        mt={0.2}
        variant="body2"
        sx={{ fontSize: 14, fontWeight: 700 }}
      >
        About us
      </Typography>

      <Box
        sx={{
          maskImage: showMore
            ? ""
            : "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
        }}
      >
        <Typography
          mt={0.5}
          variant="body"
          sx={{ fontSize: 16, fontWeight: 400 }}
        >
          {item?.jobDetailsFromCompany
            ? showMore
              ? item?.jobDetailsFromCompany
              : item?.jobDetailsFromCompany?.slice(0, 400)
            : " "}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          bottom: 20,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="body"
          sx={{ color: "blue", cursor: "pointer", fontSize: 14 }}
          onClick={() => setShowMore((prev) => !prev)}
        >
          {" "}
          {showMore ? "Show Less" : "Show More"}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="body"
          sx={{
            color: "grey",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          Minimum Experience
        </Typography>

        <Typography mt={0.5} variant="body2" sx={{ fontSize: 14 }}>
          {item?.minExp ? `${item?.minExp} Years` : "NA"}
        </Typography>
      </Box>
      <Box mt={4} sx={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => window.open(item?.jdLink)}
          style={{
            padding: "1rem 2rem",
            border: "0px",
            borderRadius: 4,
            background: "rgb(85, 239, 196)",
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: 1,
            cursor: "pointer",
          }}
        >
          ⚡ Easy Apply
        </button>
      </Box>
    </Paper>
  );
};

export default JobDetailsCard;
