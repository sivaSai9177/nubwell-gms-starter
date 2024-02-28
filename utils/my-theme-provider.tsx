"use client";

import { PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import React, { useMemo, useState } from "react";
import { ThemeContext } from "./theme-context";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

type Props = {
  children: React.ReactNode;
};

const MyThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const contextValue = useMemo(
    () => ({
      mode,
      setMode,
    }),
    [mode, setMode]
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  console.log(theme);
  return (
    <ThemeContext.Provider value={contextValue}>
      <ClerkProvider appearance={{ baseTheme: mode === "dark"? dark : undefined }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ClerkProvider>
    </ThemeContext.Provider>
  );
};

export default MyThemeProvider;
