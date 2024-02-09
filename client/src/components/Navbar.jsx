import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/profile.webp";
import {
  AppBar,
  Toolbar,
  useTheme,
  InputBase,
  IconButton,
} from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}>
        <FlexBetween>
          <IconButton onClick={() => console.log("Open/close sidebar")}>
            <MenuIcon></MenuIcon>
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius={"9px"}
            gap="3rem"
            p="0.1rem 1.5rem">
            <InputBase placeholder="Search..."></InputBase>
            <IconButton>
              <Search></Search>
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;