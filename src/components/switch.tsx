import React, { useEffect, Dispatch } from "react";
import "../styles/switch.scss";
import { isEqual } from "lodash";

import { IoMdPartlySunny } from "react-icons/io";
import { IoMdCloudyNight } from "react-icons/io";

interface Props {
  isMobile: boolean;
  theme: ThemeState;
  setTheme: SetTheme;
}

const Switch: React.FC<Props> = ({ isMobile, theme, setTheme }) => {
  const BRIGHT = { bright: false, night: true };
  const NIGHT = { bright: false, night: true };

  function set(mode: ThemeState) {
    setTheme(mode);
    localStorage.setItem("theme-settings", JSON.stringify(mode));
  }

  const paintTheme = (arr) => {
    arr.forEach((a) => {
      document.documentElement.style.setProperty(a[0], a[1]);
    });
  };

  function brightMode() {
    paintTheme([
      ["--app-background", "#1f2023"],
      ["--app-alt-bg", "#161616"],
      ["--app-text", "#bcb28d"],
      ["--star-color", "rgba(255, 255, 255, 0.8)"],
    ]);
  }
  function nightMode() {
    paintTheme([
      ["--app-background", "#1f2023"],
      ["--app-alt-bg", "#161616"],
      ["--app-text", "#bcb28d"],
      ["--star-color", "rgba(255, 255, 255, 0.8)"],
    ]);
  }

  useEffect(() => {
    const TS = localStorage.getItem("theme-settings");
    if (TS) {
      isEqual(theme, JSON.parse(TS))
        ? theme.bright
          ? brightMode()
          : nightMode()
        : setTheme(JSON.parse(TS));
    }
  }, [theme]);

  return (
    <>
      {!isMobile && (
        <div className="switch">
          {theme.bright && (
            <p onClick={() => set(NIGHT)}>
              <IoMdPartlySunny />
            </p>
          )}
          {theme.night && (
            <p onClick={() => set(BRIGHT)}>
              <IoMdCloudyNight />
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Switch;
