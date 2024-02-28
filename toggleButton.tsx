import React, { useContext } from "react";
import { ThemeContext } from "./utils/theme-context";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
type Props = {};

const ToggleButton = (props: Props) => {
  const theme = useContext(ThemeContext);
    const toggleTheme = () => {
        theme.setMode(theme.mode === "dark"? "light" : "dark");
    }
  return (
    <>
      {theme.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={()=>toggleTheme()}
        color="inherit"
      >
        {theme.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
};

export default ToggleButton;
