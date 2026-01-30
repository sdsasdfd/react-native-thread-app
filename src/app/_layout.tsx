import React from "react";
import { Slot } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { StatusBar, useColorScheme } from "react-native";
const RootLayout = () => {
  const scheme = useColorScheme();

  const myTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      card: "#101010",
      primary: "white",
      background: "#101010",
    },
  };
  return (
    <ThemeProvider value={myTheme}>
      <StatusBar
        barStyle={scheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={scheme === "dark" ? "#101010" : "#ffffff"}
      />
      <Slot />
    </ThemeProvider>
  );
};

export default RootLayout;
