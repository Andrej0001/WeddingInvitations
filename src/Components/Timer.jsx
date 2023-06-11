import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

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

const Timer = () => {
  const [date, setDate] = useState(new Date());

  const currentWeddingDay = new Date(2023, 8, 30, 17, 0, 0);
  console.log(currentWeddingDay);

  console.log(date);
  useEffect(() => {
    let timer = setInterval(() => setDate(rozdilCasu(currentWeddingDay)), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "10px" }}>DNU</Typography>
        <Box>{date.day}</Box>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "10px" }}>HODIN</Typography>{" "}
        <Box>{date.hours}</Box>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "10px" }}>MINUT</Typography>{" "}
        <Box>{date.minutes}</Box>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "10px" }}>SEKUND</Typography>{" "}
        <Box>{date.seconds}</Box>
      </Box>
    </Box>
  );
};

export default Timer;
