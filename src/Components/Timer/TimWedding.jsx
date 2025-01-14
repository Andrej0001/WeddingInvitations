import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import "./timer.css";

function rozdilCasu(zadanyCas) {
  let aktualniCas = new Date();
  let rozdil = Math.abs(aktualniCas - zadanyCas); // Získání absolutní hodnoty rozdílu v milisekundách

  let dny = Math.floor(rozdil / (1000 * 60 * 60 * 24));
  let hodiny = Math.floor((rozdil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minuty = Math.floor((rozdil % (1000 * 60 * 60)) / (1000 * 60));
  let sekundy = Math.floor((rozdil % (1000 * 60)) / 1000);

  return {
    day: dny,
    hours: hodiny,
    minutes: minuty,
    seconds: sekundy,
  };
}

export const TimWedding = forwardRef(({ props }, ref) => {
  const [date, setDate] = useState({
    day: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const currentWeddingDay = new Date(2023, 8, 30, 0, 0, 0);

  useEffect(() => {
    let timer = setInterval(() => setDate(rozdilCasu(currentWeddingDay)), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <div className="counter">0</div>
        <Typography
          sx={{ fontSize: "8px", textAlign: "center", padding: "0px 5px" }}
        >
          {date.day <= 4 ? "ДНЯ" : "ДНІВ"}
        </Typography>
      </Box>
      <Box>
        <div className="counter">0</div>
        <Typography
          sx={{ fontSize: "8px", textAlign: "center", padding: "0px 5px" }}
        >
          {date.hours <= 4 && date.hours !== 0 ? "ГОДИНИ" : "ГОДИН"}
        </Typography>{" "}
      </Box>
      <Box>
        <div className="counter">0</div>
        <Typography
          sx={{ fontSize: "8px", textAlign: "center", padding: "0px 5px" }}
        >
          {date.minutes <= 4 ? "МИНУТИ" : "МИНУТ"}
        </Typography>{" "}
      </Box>
      <Box>
        <div className="counter">0</div>
        <Typography
          sx={{ fontSize: "8px", textAlign: "center", padding: "0px 5px" }}
        >
          {date.seconds <= 4 ? "СЕКУНДИ" : "СЕКУНД"}
        </Typography>{" "}
      </Box>
    </Box>
  );
});

export const MTimWedding = motion(TimWedding);
