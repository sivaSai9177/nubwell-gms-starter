'use client'
import { PaletteMode } from "@mui/material";
import { createContext } from "react";

export const ThemeContext = createContext({
  mode: "light" as PaletteMode,
  setMode: (mode: PaletteMode) => {},
});