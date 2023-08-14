"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const themehandler = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });
  return (
    <div
      onClick={themehandler}
      className="text-xl cursor-pointer hover:text-amber-500"
    >
      {mounted &&
        (currentTheme === "dark" ? <MdLightMode /> : <BsFillMoonFill />)}
    </div>
  );
};

export default DarkModeSwitch;
