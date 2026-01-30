import "../../global.css";
import { Slot, Stack } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "@/providers/AuthProvider";
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
      <AuthProvider>
        <StatusBar
          style={scheme === "dark" ? "light" : "dark"}
          backgroundColor={scheme === "dark" ? "#101010" : "#ffffff"}
        />
        <Stack />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
