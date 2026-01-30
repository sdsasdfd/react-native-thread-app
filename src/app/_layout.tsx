import "../../global.css";
import { Slot } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
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
        style={scheme === "dark" ? "light" : "dark"}
        backgroundColor={scheme === "dark" ? "#101010" : "#ffffff"}
      />
      <Slot />
    </ThemeProvider>
  );
};

export default RootLayout;
